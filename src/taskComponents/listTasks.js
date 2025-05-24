import { LitElement, html, css,unsafeCSS } from 'lit';
import styles from "./styles.css?inline"

export class ListTasks extends LitElement {
    static styles =  css`${unsafeCSS(styles)}`

      static get properties() {
        return {
            ltask: { type: Array },
        };
    }

    constructor(){
        super()
        this.ltask=[]
    }
    

    render() {
        return html`
            <div class="main-container">
      <div class="table-title">
        <h3>Data Table</h3>
            ${this.ltask.map(el =>{
            console.log(el)
            html`
             <p class="table-head">${el.name}</p>
            <p class="table-head">${el.task}</p>
            <p class="table-head">${el.id}</p>`
           })}
      </div>
      
    </div>
        `;
    }
}
customElements.define('list-tasks', ListTasks);
