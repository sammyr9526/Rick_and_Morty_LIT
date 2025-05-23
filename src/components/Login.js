import { LitElement, html, css } from "lit";

export class Login extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .container {
        border: solid 3px #11ce76;
        border-radius: 10px;
        width: 350px;
        height: 400px;
        text-align: center;
      }

      input {
        width: 90%;
        height: 30px;
        margin-top: 8vh;
        border: solid 1px #414141;
        border-top: 0px;
        border-radius: 5px;
      }

      button {
        width: 60%;
        height: 40px;
        background: #11ce76;
        color: #414141;
        border: none;
        border-radius: 6px;
        margin-top: 8vh;
      }

      button:hover {
        background: #0da35d;
        cursor: pointer;
      }
    `,
  ];

  render() {
    return html` <div class="container">
      <h2>Login LIT</h2>
      <input id="email" placeholder="write your email" />
      <input id="pass" placeholder="Password" />
      <button @click="${this._Login}">Sign up</button>
    </div>`;
  }

  _Login() {
    const email = this.shadowRoot.querySelector("#email").value;
    const pass = this.shadowRoot.querySelector("#pass").value;

    if (!!email && !!pass) {
      this.dispatchEvent(
        new CustomEvent("sign", {
          detail: { login: true },
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}
customElements.define("login-app", Login);
