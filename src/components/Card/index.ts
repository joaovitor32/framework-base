import styleCss from './style.js';

class Card extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.styles());
    shadow.appendChild(this.build());
  }

  build(): HTMLDivElement {
    //base do component <h1>Felipe</h1>
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute("id", "card");

    const p = document.createElement('p');
    p.innerHTML="bosta"

    componentRoot.appendChild(p)
    return componentRoot;
  }

  styles(): HTMLStyleElement {
    const style = document.createElement("style");
    style.textContent = styleCss

    return style;
  }
}

customElements.define('card-profile', Card);
