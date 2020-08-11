import {LitElement, html, css} from 'lit-element';


class HelpprElement2 extends LitElement {
    static get is(){
        return 'element-2'
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
        This is an overlay popup where we will be 
        showing 100-200 words summary describing
        the page. User can click anywhere to dismiss 
        the same. please assume that there will be a 
        miniscule time delay in loading summary so 
        a loader will be nice to have before poping up 
        the summary from server.support
    </p>
</div>
</div>



`
    }

}
customElements.define(HelpprElement2.is, HelpprElement2);


