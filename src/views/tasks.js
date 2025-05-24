import { LitElement, html } from "lit";
import "../taskComponents/form"
import "../taskComponents/listTasks"


//initial elements in table
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

export class Tasks extends LitElement {
  static get properties() {
    return {
      tasks: { type: Array },
    };
  }

  constructor(){
    super()
    this.tasks = initialDb
  }

  

  render() {
    return html`<h2>Tasks section
        <form-task></form-task>
        <list-tasks .ltask=${this.tasks}></list-tasks>
        
    </h2>`;
  }
}
customElements.define("view-tasks", Tasks);
