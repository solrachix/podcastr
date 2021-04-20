/* eslint-disable no-extend-native */

HTMLElement.prototype.index = function (this: HTMLElement) {
  return [].indexOf.call(this.parentElement.children, this)
}

HTMLElement.prototype.remove = function (this: HTMLElement) {
  return this.parentNode.removeChild(this)
}

Array.prototype.remove = function (this: Element[]) {
  console.log(this)
  this.map(elem => {
    console.log(elem, elem.parentNode)
    elem.parentNode.removeChild(elem)
  })
}

// Object.prototype.getPropertyNames = function (this) {
//   return Object.keys(this)
// }

export {}
