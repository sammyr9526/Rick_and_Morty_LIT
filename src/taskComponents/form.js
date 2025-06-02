import { LitElement, html, css } from "lit";

export class FormComponent extends LitElement {
  static properties = {
    tasks: { state: true },
  };

  constructor() {
    super();
    this.tasks = [];
  }

  _addTask(e) {
    e.preventDefault();
    const input = this.renderRoot.querySelector("#taskdesc");
    const desc = input.value.trim();
    if (desc) {
      this.tasks = [...this.tasks, { desc, completed: false }];
    }
    input.value = "";
  }

  _toggleTask(index) {
    this.tasks = this.tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
  }

  _removeTask(index) {
    this.tasks = this.tasks.filter((_, i) => i !== index);
  }

  _submitUser(e) {
    e.preventDefault();
    const input = this.renderRoot.querySelector("#username");
    const name = input.value.trim();

    const input2 = this.renderRoot.querySelector("#taskdesc");
    const desc = input2.value.trim();
    if (desc) {
      this.tasks = [...this.tasks, { desc, completed: false }];
    }
    input.value = "";
    input2.value = "";
    if (!name || this.tasks.length === 0) return;

    // Dispara el evento para agregar el usuario
    this.dispatchEvent(
      new CustomEvent("user-add", {
        detail: { name, desc, tasks: this.tasks },
        bubbles: true,
        composed: true,
      })
    );
    input.value = "";
    this.tasks = [];
  }

  render() {
    return html`
      <form @submit=${this._submitUser}>
        <input id="username" placeholder="Nombre de usuario" />
        <div>
          <input id="taskdesc" placeholder="Descripción de tarea" />
          <button @click=${this._addTask} type="button">Agregar tarea</button>
        </div>
        <ul>
          ${this.tasks.map(
            (t, i) => html`
              <li>
                <span
                  style="text-decoration:${t.completed
                    ? "line-through"
                    : "none"}"
                  >${t.desc}</span
                >
                <button @click=${() => this._toggleTask(i)} type="button">
                  ${t.completed ? "Desmarcar" : "Completar"}
                </button>
                <button @click=${() => this._removeTask(i)} type="button">
                  Eliminar
                </button>
              </li>
            `
          )}
        </ul>
        <button type="submit">Agregar Usuario</button>
      </form>
    `;
  }

  static styles = css`
    form {
      margin-bottom: 1em;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin: 0.2em 0;
    }
  `;
}
customElements.define("user-form", FormComponent);

/* !jacinta no llores cholo ratero, todos sabíamos que lau no te quiso besar solo porque te veía como su abuelito */
