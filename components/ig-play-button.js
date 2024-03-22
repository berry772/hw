export default class IgPlayButton extends HTMLElement {
  constructor() {
    super()
    this.text = ""
  }

  static get observedAttributes() {
    return ["text"]
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return
    this[property] = newValue
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" })

    shadow.innerHTML = `<slot></slot>`
  }
}
