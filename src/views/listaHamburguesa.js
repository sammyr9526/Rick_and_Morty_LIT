import { LitElement, html, css } from "lit";
import "../components/logo";
import "../components/footer";

const BURGERS = [
  {
    nombre: "Cheeseburger",
    descripcion: "Wendy's Burger",
    precio: 4.99,
    costo: 3.7,
    favorito: true,
    rating: 4.9,
    imagen:
      "https://img.freepik.com/foto-gratis/vista-frontal-deliciosa-hamburguesa-carne-vaca-lechuga-tomate-queso-pan_140725-79747.jpg?w=600",
  },
  {
    nombre: "Hamburger",
    descripcion: "Veggie Burger",
    precio: 4.25,
    costo: 3.1,
    favorito: false,
    rating: 4.8,
    imagen:
      "https://img.freepik.com/fotos-premium/hamburguesa-queso-lechuga-tomate-cebolla-aislada-fondo-blanco_779468-1082.jpg?w=600",
  },
  {
    nombre: "Hamburger",
    descripcion: "Chicken Burger",
    precio: 4.6,
    costo: 3.4,
    favorito: false,
    rating: 4.6,
    imagen:
      "https://img.freepik.com/foto-gratis/hamburguesa-ensalada-lechuga-tomate_144627-16545.jpg?w=600",
  },
  {
    nombre: "Hamburger",
    descripcion: "Fried Chicken Burger",
    precio: 4.5,
    costo: 3.3,
    favorito: false,
    rating: 4.5,
    imagen:
      "https://img.freepik.com/foto-gratis/hamburguesa-polvo-pan_74190-4538.jpg?t=st=1717188635~exp=1717192235~hmac=935534a4246d0e85d499e0aa6fc3510fb49a3330d6d44513d59a4e1041c0121c&w=600",
  },
];

export class BurguerList extends LitElement {
  static properties = {
    burgers: { type: Array },
    filterText: { type: String },
  };
  constructor() {
    super();
    this.burgers = BURGERS;
    this.filterText = "";
  }
  static styles = css`
    :host {
      --main-radius: 16px;
      display: block;
      width: 100vw;
      min-height: 100vh;
      background: #fafbff;
      font-family: "Inter", "Segoe UI", Arial, sans-serif;
      color: #222;
      position: relative;
    }
    .container {
      max-width: 400px;
      margin: 0 auto;
      background: #fff;
      padding-bottom: 90px;
      border-radius: var(--main-radius);
      min-height: 100vh;
      box-shadow: 0 6px 32px -6px rgba(40, 20, 40, 0.1);
      position: relative;
    }
    .header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 28px 20px 8px 20px;
    }
    .header .avatar {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #ffe1e1;
    }
    .header .brand {
      font-family: "Pacifico", cursive;
      font-size: 2.05rem;
      color: #e94141;
      margin-bottom: 2px;
    }
    logo-component {
      margin-top: -8px;
      margin-bottom: 0;
    }
    .search-bar {
      margin: 22px 18px 12px;
      display: flex;
      gap: 8px;
      align-items: center;
    }
    .search-input {
      flex: 1 1 0;
      background: #fafafc;
      padding: 0.7em 1.2em;
      outline: none;
      border-radius: 999px;
      border: none;
      font-size: 1.1rem;
      box-shadow: 0 1px 4px #eee9;
    }
    .search-btn {
      background: #e94141;
      color: #fff;
      border: none;
      border-radius: 50%;
      min-width: 2.6em;
      min-height: 2.6em;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5em;
      box-shadow: 0 2px 8px -3px #e9414180;
      margin-left: 0;
      cursor: pointer;
      transition: background 0.15s;
    }
    .filters {
      padding: 0 18px;
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 10px;
    }
    .filter-btn {
      background: #f0eaea;
      border: none;
      border-radius: 999px;
      color: #a17;
      font-size: 1.04em;
      padding: 0.6em 1.25em;
      cursor: pointer;
      transition: background 0.16s;
    }
    .filter-btn.selected,
    .filter-btn.active {
      background: #e94141;
      color: #fff;
      font-weight: bold;
    }
    .burger-list {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      padding: 8px 20px 24px 20px;
      justify-content: flex-start;
    }
    .burger-card {
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 2px 10px -2px #e9414120;
      width: calc(50% - 0.5rem);
      margin-bottom: 7px;
      padding: 10px 9px 13px 9px;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 146px;
      position: relative;
    }
    .burger-img {
      width: 84px;
      height: 72px;
      object-fit: contain;
      border-radius: 14px;
      margin-bottom: 8px;
    }
    .b-name {
      font-size: 1.02em;
      font-weight: bold;
      color: #222;
      margin-bottom: 1px;
      text-align: center;
    }
    .b-desc {
      color: #ed6d266a;
      font-size: 0.99em;
      margin-bottom: 7px;
      text-align: center;
      font-weight: 500;
    }
    .b-details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 7px;
      width: 100%;
      margin-top: 0;
    }
    .b-price {
      color: #e94141;
      font-weight: bold;
      font-size: 1.09em;
    }
    .b-fav {
      color: #e94141;
      opacity: 0.76;
      font-size: 1.27em;
      background: none;
      cursor: pointer;
      border: none;
      margin-top: 0;
      transition: color 0.2s;
      padding: 2px;
    }
    .b-fav.favorito {
      color: #e94141;
      opacity: 1;
      font-size: 1.3em;
      text-shadow: 0 1px 6px #ed595922;
    }
    .b-rating {
      color: #fa9805;
      font-size: 1.03em;
      display: flex;
      align-items: center;
      gap: 1.5px;
      font-weight: bold;
    }
    .fab-btn {
      position: fixed;
      bottom: 80px;
      right: 32px;
      width: 55px;
      height: 55px;
      background: #e94141;
      color: #fff;
      border-radius: 50%;
      border: none;
      font-size: 2.5em;
      box-shadow: 0 3px 24px -5px #e941418f;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
    }
    /* Simula tab icons debajo */
    .tab-bar {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      height: 58px;
      background: #fff;
      border-radius: 16px 16px 0 0;
      box-shadow: 0 -2px 16px -8px #e9414150;
      display: flex;
      align-items: center;
      justify-content: space-around;
      z-index: 99;
    }
    .tab-bar .tab {
      color: #e94141;
      font-size: 1.5em;
      opacity: 0.6;
      transition: opacity 0.12s;
    }
    .tab-bar .tab.active {
      opacity: 1;
    }
    @media (max-width: 500px) {
      .container {
        max-width: 100vw;
        border-radius: 0;
      }
      .fab-btn {
        right: 18px;
      }
    }
  `;

  onFavToggle(index) {
    this.burgers = this.burgers.map((b, i) =>
      i === index ? { ...b, favorito: !b.favorito } : b
    );
  }
  onChangeFilter(e) {
    this.filterText = e.target.value;
  }
  get filteredBurgers() {
    const ft = this.filterText.trim().toLowerCase();
    return this.burgers.filter(
      (b) =>
        b.nombre.toLowerCase().includes(ft) ||
        b.descripcion.toLowerCase().includes(ft)
    );
  }

  render() {
    return html`
      <div class="container">
        <div class="header">
          <div>
            <logo-component color="#3C2F2F" size="18px"></logo-component>
            <div class="subtitle">Order your favourite food!</div>
          </div>
          <img
            class="avatar"
            src="https://randomuser.me/api/portraits/women/88.jpg"
            alt="avatar"
          />
        </div>
        <div class="search-bar">
          <input class="search-input" type="search" placeholder="Search" />
          <button class="search-btn">
            <span>☰</span>
          </button>
        </div>
        <div class="filters">
          <button class="filter-btn selected">All</button>
          <button class="filter-btn">Combos</button>
          <button class="filter-btn">Sliders</button>
          <button class="filter-btn">Classic</button>
        </div>
        <div class="burger-list">
          ${this.filteredBurgers.map(
            (b, i) => html`
              <div class="burger-card">
                <img class="burger-img" src=${b.imagen} alt="${b.nombre}" />
                <span class="b-name">${b.nombre}</span>
                <span class="b-desc">${b.descripcion}</span>
                <div class="b-details">
                  <span class="b-price">$${b.precio.toFixed(2)}</span>
                  <span class="b-rating">★${b.rating.toFixed(1)}</span>
                  <button
                    class="b-fav ${b.favorito ? "favorito" : ""}"
                    title=${b.favorito
                      ? "Quitar de favoritos"
                      : "Agregar a favoritos"}
                    @click=${() => this.onFavToggle(i)}
                    type="button"
                  >
                    ♡
                  </button>
                </div>
              </div>
            `
          )}
        </div>
      </div>
      ); }
      <footer-component></footer-component>
    `;
  }
}

customElements.define("burguer-list", BurguerList);
/*
 */
