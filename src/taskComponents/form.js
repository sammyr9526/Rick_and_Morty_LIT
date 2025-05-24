import { LitElement, html, css } from 'lit';
import "./styles.css"

export class Form extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            .task-form {
     text-align: center;
     display: block;
     width: 300px;
     background-color: white;
     margin-left: 10%;
     margin-top: 10%;
     border: 5px;
    }
        `
    ];

    render() {
        return html`
      <div class="task-form">
      <form >
        <h3 class="task-title">
          {dataToEdit ? "Edit a worker or a task" : "Add a worker and a task"}{" "}
        </h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={form.name}
          class="input"
        />
        <input
          type="text"
          name="task"
          placeholder="Task"
          onChange={handleChange}
          value={form.task}
          class="input"
        />
        <input type="submit" value="Send" class="button" />
        <input
          type="reset"
          value="Clean"
          
          class="button"
        />
      </form>
    </div>
        `;
    }
}
customElements.define('form-task', Form);
