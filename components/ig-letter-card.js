export default class IgLetterCard extends HTMLElement {
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
    this.textContent = this.text
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" })

    shadow.innerHTML = `<style>
    .inner {
      width: calc(var(--card-size) * 0.8);
      aspect-ratio: 1/1;
      border-radius: var(--border-radius);
      display: grid;
      place-content: center;
      font-size: calc(var(--card-size) * 0.5);
      font-weight: 600;
      text-shadow: var(--shadow-text);
      background-color: white;}
    </style><div class="inner"><slot></slot></div>`
  }
}
