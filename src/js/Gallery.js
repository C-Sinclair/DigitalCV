import Tooltip from 'tooltip.js'

export class Gallery {

  constructor(element) {
    this.element = element
  }

  add = (el) => {
    toolTip(el)
    this.element.appendChild(el)
  }

}

function toolTip(element) {
    return new Tooltip(element, {
      title: element.getAttribute("name"),
      placement: "bottom"
    })
}