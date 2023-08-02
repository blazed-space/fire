import "./header.module.css";

class BlzHeader extends HTMLDivElement{
    constructor(){
        super();
    }
}

addEventListener('DOMContentLoaded', (event) => function(){
    customElements.define('blz-header', BlzHeader, { extends: 'div' });
});