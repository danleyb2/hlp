import {LitElement, html, css} from 'lit-element';


class HelpprElement extends LitElement {
    static get is(){
        return 'helppr-element'
    }

    render() {

        return html`
<style>

*, ::after, ::before { -webkit-box-sizing: border-box; box-sizing: border-box; }


</style>
<div class="content">Hello World</div>
`
    }

}
customElements.define(HelpprElement.is, HelpprElement);

