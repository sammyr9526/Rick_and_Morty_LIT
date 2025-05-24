import { LitElement, html, css } from 'lit';

export class ListRow extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

  

    render() {
        return html`
              <tr>
      <td class="text-left">{name}</td>
      <td class="text-left">{task}</td>
      <td class="text-left">
        <button onClick={() => setDataToEdit(el)}>Edit</button>
        <button onClick={() => deleteData(id, name)}>Delete</button>
      </td>
    </tr>
        `;
    }
}
customElements.define('list-row', ListRow);
