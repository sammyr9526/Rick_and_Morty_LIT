import { LitElement, html, css } from "lit";
import style from "../../styles/ApiTemplateStyle";

export class ApiTemplate extends LitElement {
  static styles = [style];

  render() {
    return html`
      <div class="container">
        <h1>The <strong class="title">Rick and Morty</strong>API</h1>
      </div>
    `;
  }
}
customElements.define("api-template", ApiTemplate);
