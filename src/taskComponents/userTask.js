import { LitElement, html, css, unsafeCSS } from "lit";
import "./card";
import styles from "./styles.css?inline";

const initialDb = [
  {
    name: "Sammyr",
    task: "Code",
    id: 1,
  },
  {
    name: "Alex",
    task: "Debug",
    id: 2,
  },
  {
    name: "Isabel",
    task: "Manage databases",
    id: 3,
  },
  {
    name: "Luiggi",
    task: "Design",
    id: 4,
  },
];

export class ListRow extends LitElement {
  static properties = {
    user: { type: Object },
    index: { type: Number }, // índice del usuario en el array de usuarios
  };

  render() {
    return html`
      <div>
        <b>${this.user.name}</b>
        <button @click=${this._delete}>Eliminar usuario</button>
        <ul>
          ${this.user.tasks.map(
            (task, idx) => html`
              <li>
                <task-item
                  .task=${task}
                  .index=${idx}
                  @task-toggle=${this._toggleTask}
                ></task-item>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }

  _delete() {
    this.dispatchEvent(
      new CustomEvent("user-delete", {
        detail: { index: this.index },
        bubbles: true,
        composed: true,
      })
    );
  }

  _toggleTask(e) {
    this.dispatchEvent(
      new CustomEvent("user-task-toggle", {
        detail: { userIndex: this.index, taskIndex: e.detail.index },
        bubbles: true,
        composed: true,
      })
    );
  }

  static styles = css`
    ul {
      list-style: none;
      padding: 0;
    }
    b {
      font-size: 1.1em;
    }
    button {
      margin-left: 1em;
    }
    div {
      margin-bottom: 1.5em;
    }
  `;
}
customElements.define("user-item", ListRow);
