<template>
  <div class="wen-upload">
    <wen-icon name="upload" ></wen-icon>
    <input class="wen-upload__input" type="file" :accept="accept" name="file" @change="onChange"><br>
  </div>
</template>

<script>
export default {
  name: 'wen-upload',
  data() {
    return {
      src: ''
    }
  },
  props: {
    disabled: Boolean,
    beforeRead: Function,
    afterRead: Function,
    accept: {
      type: String,
      default: 'image/*'
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    }
  },
  methods: {
    onChange(event) {
      let { files } = event.target;
      if (this.disabled || !files.length) {
        return;
      }
      files = files.length === 1 ? files[0] : [].slice.call(files, 0);
      if (!files || (this.beforeRead && !this.beforeRead(files))) {
        return;
      }
      this.readFile(files).then(content => {
        this.afterRead({
          file: files,
          content
        })
      })
    },
    readFile(file) {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = event => {
          // resolve(event.target.result);
          resolve(reader.result);
        };
        if (this.resultType === 'dataUrl') {
          reader.readAsDataURL(file);
        } else if (this.resultType === 'text') {
          reader.readAsText(file);
        }
      });
    },
    uploadFile(event) {
      var files = event.target.files;
      var formData = new FormData();
      var request = new XMLHttpRequest();

      for (var i = 0, len = files.length; i < len; i++) {
        formData.append('userUploadFile', files[i]);
      }

      request.open('POST', 'https://jsonplaceholder.typicode.com/posts/');
      request.send(formData);

      request.onload = function(event) {
        console.log(event)
        // var oResponse = JSON.parse(event.target.response);
        // do something
      }
    }
  }
}
</script>
