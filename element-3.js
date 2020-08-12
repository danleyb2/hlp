import {LitElement, html, css} from 'lit-element';


class HelpprElement3 extends LitElement {
    static get is(){
        return 'element-3'
    }

    render() {

        return html`
        
<style>
:host{
    display:block;
}
*, ::after, ::before { -webkit-box-sizing: border-box; box-sizing: border-box; }

.error{
    width: 300px;
    position: relative;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 15px;
    background-color: #f96e71;
    border-radius: 10px;
    color: white;
    font-family:monospace;
    font-size: small;
    text-align: center;
    display: flex;
    flex-direction: column;
}
.error:before{
    content: '';
    width: 20px;
    height: 20px;
    background: #f96e71;
    position: absolute;
    top: 0px;
    border-radius: 0px;
    left: 94%;
    transform: translateX(-10%) rotate(0deg);
}

.error > p {
    white-space: pre-line;
    text-align:center;
}


.button{
    display: flex;
    padding-top: 10px;
    order: 2;
    justify-content: space-around;
}

.action {
   background-color: #fefbff;
   color: #161817;
   border: #fefbff;
   border-radius: 3px;
   font-family:monospace;
   padding: 1px 20px;
}

.popup{
    padding-bottom: 10px;
}

p {
    text-align: justify;
    order: 2;
}


</style>
<div class="popup">
    <div class="error">
        <p>
                Here seems to some error with this
            request. Do you want to send the error
                    report?
        </p>
        <div class="button">
            <button class="action"> Send </button>
            <button class="action"> Cancel </button>
        </div>
    </div>
</div>

`
    }

}
customElements.define(HelpprElement3.is, HelpprElement3);


