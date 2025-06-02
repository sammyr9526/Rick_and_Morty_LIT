// padre-component.js
import { LitElement, html } from "lit";
import "./test1";

export class PadreComponent extends LitElement {
  static properties = {
    lista: { type: Array },
  };

  constructor() {
    super();
    this.lista = [];
  }

  agregarElemento() {
    // Cambiamos la referencia para que Lit lo detecte
    this.lista = [...this.lista, "Nuevo elemento " + (this.lista.length + 1)];
  }

  render() {
    return html`
      <h2>Componente Padre</h2>
      <button @click=${this.agregarElemento}>Agregar elemento</button>
      <hijo-component .datos=${this.lista}></hijo-component>
    `;
  }
}

customElements.define("padre-component", PadreComponent);
