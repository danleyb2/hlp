import {LitElement, html, css} from 'lit-element';


class HelpprElement1 extends LitElement {
    static get is(){
        return 'element-1'
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
    width: 30px;
    height: 30px;
    background: #888888;
    position: absolute;
    bottom: -10px;
    border-radius: 2px;
    left: 45%;
    transform: translateX(-10%) rotate(135deg);
}

p {
    text-align: justify;
    order: 2;
}
.icons {
    order: 1;
    display: flex;
    justify-content: flex-end;
}

.popup{
    padding-bottom: 10px;
}

svg {
    width: 2em;
    height: 1.5em;
    fill: #fff;
}


</style>

<div class="popup">
<div class="popuptext">
    <div class="icons">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path 
                d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6c-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95c44.509 1.001 75.06 39.94 177.802 39.94c7.22 0 15.22.01 22.22.01c77.117 0 111.986-39.423 112.94-95.33c13.319-18.425 20.299-43.122 17.34-66.99c9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57c7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46c28.36-28.36 18.91-75.63 37.82-94.54c47.27 0 47.27 32.98 47.27 56.73c0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82c.09 18.9-12.82 37.81-22.27 37.81c13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24z" 
            />
        </svg>
        <svg class"rotate" style="transform: rotateX(360deg) rotateY(180deg)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path 
                d="M466.27 225.31c4.674-22.647.864-44.538-8.99-62.99c2.958-23.868-4.021-48.565-17.34-66.99C438.986 39.423 404.117 0 327 0c-7 0-15 .01-22.22.01C201.195.01 168.997 40 128 40h-10.845c-5.64-4.975-13.042-8-21.155-8H32C14.327 32 0 46.327 0 64v240c0 17.673 14.327 32 32 32h64c11.842 0 22.175-6.438 27.708-16h7.052c19.146 16.953 46.013 60.653 68.76 83.4c13.667 13.667 10.153 108.6 71.76 108.6c57.58 0 95.27-31.936 95.27-104.73c0-18.41-3.93-33.73-8.85-46.54h36.48c48.602 0 85.82-41.565 85.82-85.58c0-19.15-4.96-34.99-13.73-49.84zM64 296c-13.255 0-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24zm330.18 16.73H290.19c0 37.82 28.36 55.37 28.36 94.54c0 23.75 0 56.73-47.27 56.73c-18.91-18.91-9.46-66.18-37.82-94.54C206.9 342.89 167.28 272 138.92 272H128V85.83c53.611 0 100.001-37.82 171.64-37.82h37.82c35.512 0 60.82 17.12 53.12 65.9c15.2 8.16 26.5 36.44 13.94 57.57c21.581 20.384 18.699 51.065 5.21 65.62c9.45 0 22.36 18.91 22.27 37.81c-.09 18.91-16.71 37.82-37.82 37.82z" 
            />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28L75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256L9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" 
            />
        </svg>
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


