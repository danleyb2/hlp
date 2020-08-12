import {LitElement, html, css} from 'lit-element';


class HelpprElement4 extends LitElement {
    static get is(){
        return 'element-4'
    }

    render() {

        return html`
        
<style>
:host{
    display:block;
}
*, ::after, ::before { -webkit-box-sizing: border-box; box-sizing: border-box; }


.popuptext {
    width: 300px;
    position:relative;
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
.popuptext:before{
    content: '';
    width: 20px;
    height: 20px;
    background: #888888;
    position: absolute;
    top: 0px;
    border-radius: 0px;
    left: 94%;
    transform: translateX(-10%) rotate(0deg);
}

.progress{
    margin: 40px 10px;
    max-width: 18rem;
    max-height: 20px;
    display: flex;
    font-family:monospace;
    border-radius: 5px;
    background-color: #fff;
}

.progress-state > p{
    white-space: normal;
    text-align: right;
    margin-top: 4px;
    padding-right: 17px;
}

.progress-state {
    width: 65%;
    color: #034303;
    text-align: center;
    border-radius: 5px;
    background-color: #2ad245;
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
<div class="popuptext">
    <div class="progress">
        <div class="progress-state" value="65" max="100"> <p>65%</p></div>
    </div>
</div>
</div>


`
    }

}
customElements.define(HelpprElement4.is, HelpprElement4);


