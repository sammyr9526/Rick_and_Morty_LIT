import { LitElement, html, css } from 'lit';

export class GEtDAta extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return {
         url:{type:String},
         metho:{type:String}
        };
    }

    constructor(){
        super()

    }

    

    render() {
        return html``;
    }
}
customElements.define('get-data', GEtDAta);
