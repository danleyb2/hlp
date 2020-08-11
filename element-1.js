import {LitElement, html, css} from 'lit-element';


class HelpprElement1 extends LitElement {
    static get is(){
        return 'element-1'
    }

    render() {

        return html`
        <link rel="stylesheet" href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css" media="all">
<style>

:host{
    display:block;
}

*, ::after, ::before { -webkit-box-sizing: border-box; box-sizing: border-box; }


.popuptext {
    width: 300px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 15px;
    background-color: #888888;
    border-radius: 10px;
    color: white;
    font-family:monospace;
    font-size: small;
    text-align: center;
    display: flex;
    flex-direction: column;
}

p {
    text-align: justify;
    order: 2;
}

i {
    font-size: large;
    padding-right: 5px;
}
.icons {
    order: 1;
    display: flex;
    justify-content: flex-end;
}

.popup{
    padding-bottom: 10px;
}

</style>

<div class="popup">
<div class="popuptext">
    <div class="icons">
        <i class="far fa-thumbs-up"></i>
        <i class="far fa-thumbs-down"></i>
        <i class="fas fa-times"></i>
    </div>
    <p>
        Here we will be showing a jargon free 
        paragraph. summarised in not more than 200 
        words. Loader will be required too. Once you click anywhere this closes.
    </p>
</div>
</div>



`
    }

}
customElements.define(HelpprElement1.is, HelpprElement1);


