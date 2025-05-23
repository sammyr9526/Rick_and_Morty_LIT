import { LitElement, html } from "lit";
export class Tasks extends LitElement {
  render() {
    return html`<h2>This is just a test</h2>`;
  }
}
customElements.define("view-tasks", Tasks);
