export default function isSupportSticky () { // 检测是否支持sticky
  var prefixTestList = ['', '-webkit-', '-ms-', '-moz-', '-o-']
  var stickyText = ''
  for (var i = 0; i < prefixTestList.length; i++) {
    stickyText += 'position:' + prefixTestList[i] + 'sticky;'
  }
  // 创建一个dom来检查
  var div = document.createElement('div')
  div.style.cssText = stickyText
  document.body.appendChild(div)
  var isSupport = /sticky/i.test(window.getComputedStyle(div).position)
  document.body.removeChild(div)
  div = null
  return isSupport
}
