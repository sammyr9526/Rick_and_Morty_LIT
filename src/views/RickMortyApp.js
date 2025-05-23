import { LitElement, html, css } from "lit";
import "../components/GetData";
import "../components/ApiTemplates";
import "../components/SearcBar";

import style from "../../styles/RickMortyStyles";

export class RickMortyApp extends LitElement {
  static styles = [style];

  static get properties() {
    return {
      title: { type: String },
      pages: { type: Number },
      wiki: { type: Array },
      search: { type: String },
    };
  }

  constructor() {
    super();

    this.wiki = [];
    this.search = "";

    this.addEventListener("ApiData", (e) => {
      this._dataFormat(e.detail.data);
    });
  }

  _valorCambiado(e) {
    this.search = e.detail.valor;
    this.requestUpdate(); // para refrescar el render
    console.log(e.detail);
  }

  _dataFormat(data) {
    let characters = [];

    data["results"].forEach((character) => {
      characters.push({
        img: character.image,
        name: character.name,
        species: character.species,
        status: character.status,
      });
    });
    this.wiki = characters;
  }

  render() {
    return html`
      <get-data
        url="https://rickandmortyapi.com/api/character?&name=${this.search}"
        method="GET"
      ></get-data>
      <api-template></api-template>
      <search-bar @valor-cambiado="${this._valorCambiado}"></search-bar>
      ${this.dateTemplate}
    `;
  }
  get dateTemplate() {
    return html`
      ${this.wiki.map(
        (character) => html`
          <div class="card">
            <div class="card-content">
              <h2>${character.name}</h2>
              <img src="${character.img}" />
              <p>${character.species} | ${character.status}</p>
            </div>
          </div>
        `
      )}
    `;
  }
}
customElements.define("rick-morty-app", RickMortyApp);

/* 
  !jacinta cholito pregunta a la beba que va a hacer con los polos de su equipo aparte de usarlos como trapeador 
*/
