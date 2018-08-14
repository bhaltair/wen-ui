import Upload from './upload.vue'

// 单独引用时调用
Upload.install = function (Vue) {
  Vue.component(Upload.name, Upload)
}

export default Upload
