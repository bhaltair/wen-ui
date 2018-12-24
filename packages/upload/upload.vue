<template>
  <div class="wen-upload">
    <slot></slot>
    <input v-bind="$attrs" ref="input" class="wen-upload__input" type="file" name="file" @change="onChange"><br>
  </div>
</template>

<script>
export default {
  name: 'wen-upload',
  inheritAttrs: false,
  data () {
    return {
      src: ''
    }
  },
  props: {
    uploadKey: {
      type: String,
      default: 'uploadfile'
    },
    beforeRead: Function,
    afterRead: Function,
    success: Function,
    uploadUrl: String,
    resultType: {
      type: String,
      default: 'dataUrl'
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    }
  },
  methods: {
    onChange (event) {
      let { files } = event.target
      if (this.disabled || !files.length) {
        return
      }
      files = files.length === 1 ? files[0] : [].slice.call(files, 0)
      if (!files || (this.beforeRead && !this.beforeRead(files))) {
        return
      }
      if (Array.isArray(files)) {
        Promise.all(files.map(this.readFile)).then(contents => {
          let oversize = false
          const payload = files.map((file, index) => {
            if (file.size > this.maxSize) {
              oversize = true
            }
            return {
              file: files[index],
              content: contents[index]
            }
          })
          this.onAfterRead(payload, oversize)
          this.$refs.input && (this.$refs.input.value = '')
        })
      } else {
        this.readFile(files).then(content => {
          this.onAfterRead([{
            file: files,
            content
          }], files.size > this.maxSize)
        })
      }
    },
    onAfterRead (files = [], oversize = false) {
      if (oversize) {
        return this.$emit('oversize', true)
      }
      // emit
      this.afterRead && this.afterRead(files)
      // 开始上传
      files.map(file => {
        this.uploadFile(file.file)
      })
    },
    readFile (file) {
      return new Promise(resolve => {
        const reader = new FileReader()
        reader.onload = event => {
          resolve(event.target.result)
        }
        if (this.resultType === 'dataUrl') {
          reader.readAsDataURL(file)
        } else if (this.resultType === 'text') {
          reader.readAsText(file)
        }
      })
    },
    uploadFile (file) {
      var fd = new FormData()
      var request = new XMLHttpRequest()
      fd.append(this.uploadKey, file)
      request.open('POST', this.uploadUrl)
      const progressFn = (oEvent) => {
        if (oEvent.lengthComputable) {
          var percentComplete = Math.floor(oEvent.loaded / oEvent.total * 100)
          this.$emit('changed', percentComplete)
        } else {
          // Unable to compute progress information since the total size is unknown
        }
      }
      const successFn = (event) => {
        this.success(event)
      }
      const errorFn = res => {
        this.$emit('uploadErr')
      }
      request.addEventListener('load', successFn, false)
      request.upload.addEventListener('progress', progressFn, false)
      request.addEventListener('error', errorFn, false)
      request.send(fd)
    }
  }
}
</script>
