import { LitElement, html, css } from 'lit';

export class RIckMOrtyAPp extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return { 
               title: { type: String },
            pages:{type:Number}
        };
    }

    render() {
        return html`
        <get-data></get-data>`;
    }
}
customElements.define("rick-morty-app", RIckMOrtyAPp)
