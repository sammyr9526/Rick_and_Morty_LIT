import { LitElement, html, css } from "lit";

export class Loader extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html``;
  }
}
customElements.define("loader-comp", Loader);
