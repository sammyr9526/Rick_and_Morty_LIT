import { LitElement, html, css } from "lit";

export class GetData extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  static get properties() {
    return {
      url: { type: String },
      metho: { type: String },
    };
  }

  firstUpdated() {
    this.getData();
  }

  updated(url) {
    this.getData(this.url);
  }

  _sendData(data) {
    console.log(this.url);
    this.dispatchEvent(
      new CustomEvent("ApiData", {
        detail: { data },
        bubbles: true,
        composed: true,
      })
    );
  }

  constructor() {
    super();
  }

  getData() {
    fetch(this.url, { method: this.method })
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then((data) => {
        this._sendData(data);
      })
      .catch((error) => console.warn("somthing went wrong", error));
  }
}
customElements.define("get-data", GetData);

/* 
  this.dispatchEvent(new CustomEvent('valor-cambiado', {
  detail: { valor },    // Los datos que quieres enviar con el evento
  bubbles: true,        // El evento va a "subir" por el árbol del DOM
  composed: true        // El evento puede atravesar el shadow DOM
}));

*/

/*

!orco el cholo debio llamarte a ti payasita que al menos conoces algo de dota y tanqueas todo

!orco el cholo mañoso la invito porque queria cacharserla ,tu ya sabes que a el le gustan las chibolas
 */
