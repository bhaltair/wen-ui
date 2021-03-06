import Vue from 'vue'

const isServer = Vue.prototype.$isServer

function isDef (value) {
  return value !== undefined && value !== null
}

function isObj (x) {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

function get (object, path) {
  const keys = path.split('.')
  let result = object

  keys.forEach(key => {
    result = isDef(result[key]) ? result[key] : ''
  })

  return result
}

const camelizeRE = /-(\w)/g
function camelize (str) {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase())
}

const isArray = (something)=>{
  return Object.prototype.toString.call(something) === '[object Array]';
}

export {
  get,
  isObj,
  isDef,
  isServer,
  camelize,
  isArray
}
