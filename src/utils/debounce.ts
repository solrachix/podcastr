/* eslint-disable no-extend-native */
/* eslint-disable @typescript-eslint/no-this-alias */

Function.prototype.debounce = function (this, wait, immediate = false) {
  const func = this
  console.log(func)
  let timeout
  return function () {
    const context = this
    const args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export {}
