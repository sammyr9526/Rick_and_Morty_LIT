// hijo-component.js
import { LitElement, html } from "lit";

export class HijoComponent extends LitElement {
  static properties = {
    datos: { type: Array },
  };

  constructor() {
    super();
    this.datos = [];
    console.log(this.datos);
  }

  render() {
    return html`
      <ul>
        ${this.datos.length === 0
          ? html`<li>No hay elementos.</li>`
          : this.datos.map((item) => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}

customElements.define("hijo-component", HijoComponent);
