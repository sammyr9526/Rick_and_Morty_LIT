import { LitElement, html } from "lit";
import "../taskComponents/form";
import "../taskComponents/listTasks";

export class Tasks extends LitElement {
  static properties = {
    users: { state: true },
  };

  constructor() {
    super();
    this.users = [];
  }

  render() {
    return html`
      <h2>Gestor de Usuarios y Tareas</h2>
      <user-form @user-add=${this._addUser}></user-form>
      <user-list
        .users=${this.users}
        @user-delete=${this._deleteUser}
        @user-task-toggle=${this._toggleTask}
      ></user-list>
    `;
  }

  _addUser(e) {
    const { name, tasks } = e.detail;
    this.users = [...this.users, { name, tasks }];
  }

  _deleteUser(e) {
    this.users = this.users.filter((_, i) => i !== e.detail.index);
  }

  _toggleTask(e) {
    const { userIndex, taskIndex } = e.detail;
    this.users = this.users.map((user, uIdx) => {
      if (uIdx !== userIndex) return user;
      return {
        ...user,
        tasks: user.tasks.map((t, tIdx) =>
          tIdx !== taskIndex ? t : { ...t, completed: !t.completed }
        ),
      };
    });
  }
}

customElements.define("view-tasks", Tasks);

/*     static get properties() {
      return {
        tasks: { type: Array },
      };
    }

    constructor() {
      super();
      this.tasks = [];
    }

    render() {
      return html`<h2>
        Tasks Page
        <list-task .tasks=${this.tasks}></list-task>
      </h2>`;
    } */

/* 
    import { LitElement, html, css } from "lit";
import "../test/test2";

export class Tasks extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html` <padre-component></padre-component> `;
  }
}
customElements.define("view-tasks", Tasks);
*/
