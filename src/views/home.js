import { LitElement, html, css } from "lit";
import "../components/Login";

export class ViewHome extends LitElement {
  static get properties() {
    return {
      success: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      login-app {
        display: flex;
        position: absolute;
        right: 38%;
        top: 15%;
      }
    `;
  }
  render() {
    return html`
      ${this.success
        ? html`<h1>Welcome !!</h1>`
        : html` <login-app @sign="${this._hiddenLogin}"></login-app>`}
    `;
  }

  _hiddenLogin() {
    this.success = true;
  }
}
customElements.define("view-home", ViewHome);
