import { LitElement, html, css, unsafeCSS } from "lit";
import styles from "./styles.css?inline";
import "./userTask";

export class ListTasks extends LitElement {
  static properties = {
    users: { type: Array },
  };

  render() {
    return html`
      ${this.users.length === 0
        ? html`<p>No hay usuarios aún.</p>`
        : html`
            ${this.users.map(
              (user, i) => html`
                <user-item
                  .user=${user}
                  .index=${i}
                  @user-delete=${this._onDelete}
                  @user-task-toggle=${this._onTaskToggle}
                ></user-item>
              `
            )}
          `}
    `;
  }

  static styles = css`
    p {
      color: gray;
    }
  `;
}

/* static styles = css`
    ${unsafeCSS(styles)}
  `;

  static get properties() {
    return {
      tasks: { type: Array },
    };
  }

  constructor() {
    super();
    this.tasks = [];
  }

  render() {
    return html`
      <div class="main-container">
        <div class="table-title">
          <h3>Data Table</h3>
          <list-row .ltasks=${this.tasks}></list-row>
        </div>
      </div>
    `;
  }
} */
customElements.define("user-list", ListTasks);
