import { LitElement, html, css } from "lit";

export class TaskCard extends LitElement {
  static properties = {
    task: { type: Object },
    index: { type: Number },
  };

  render() {
    return html`
      <span
        style="text-decoration:${this.task.completed ? "line-through" : "none"}"
        >${this.task.desc}</span
      >
      <button @click=${this._toggle}>
        ${this.task.completed ? "Desmarcar" : "Completar"}
      </button>
    `;
  }

  _toggle() {
    this.dispatchEvent(
      new CustomEvent("task-toggle", {
        detail: { index: this.index },
        bubbles: true,
        composed: true,
      })
    );
  }

  static styles = css`
    button {
      margin-left: 0.5em;
    }
  `;
}
customElements.define("task-item", TaskCard);
