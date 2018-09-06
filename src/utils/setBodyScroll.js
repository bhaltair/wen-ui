let bodyEl = document.body
let top = 0

function stopBodyScroll (isFixed) {
  if (isFixed) {
    top = window.scrollY

    bodyEl.style.position = 'fixed'
    bodyEl.style.top = -top + 'px'
    bodyEl.style.left = '0px'
    bodyEl.style.right = '0px'
  } else {
    bodyEl.style.position = ''
    bodyEl.style.top = ''

    window.scrollTo(0, top) // 回到原先的top
  }
}

export default stopBodyScroll
