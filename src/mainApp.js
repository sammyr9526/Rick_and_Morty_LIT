import { LitElement, html, css } from "lit";
import "./views/tasks.js";
import "./views/home.js";
import "./views/RickMortyApp.js";

export class MainApp extends LitElement {
  static properties = {
    currentView: { type: String },
  };

  static styles = css`
    nav {
      display: flex;
      background: #2196f3;
      padding: 0.5rem 1rem;
      width: 100%;
      top: 0;
      color: white;
      justify-content: flex-start;
    }
    nav button {
      background: transparent;
      border: none;
      color: white;
      font-size: 1rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
      outline: none;
    }
    nav button[selected] {
      border-bottom: 2px solid #fff;
      font-weight: bold;
    }
    section {
      padding: 2rem;
    }
  `;

  constructor() {
    super();
    this.currentView = "home";
  }

  setView(view) {
    this.currentView = view;
  }

  render() {
    return html`
      <nav>
        <button
          @click="${() => this.setView("home")}"
          ?selected=${this.currentView === "home"}
        >
          Inicio
        </button>
        <button
          @click="${() => this.setView("rickmorty")}"
          ?selected=${this.currentView === "rickmorty"}
        >
          All Characters
        </button>
        <button
          @click="${() => this.setView("tasks")}"
          ?selected=${this.currentView === "tasks"}
        >
          tasks
        </button>
      </nav>
      <section>
        ${this.currentView === "home" ? html`<view-home></view-home>` : ""}
        ${this.currentView === "rickmorty"
          ? html`<rick-morty-app></rick-morty-app>`
          : ""}
        ${this.currentView === "tasks" ? html`<view-tasks></view-tasks>` : ""}
      </section>
    `;
  }
}
customElements.define("main-app", MainApp);
