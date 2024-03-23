//import styleCss from './style.js';

class Footer extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.build());
  }

  build(): HTMLDivElement {
    //base do component <h1>Felipe</h1>
    const componentRoot = document.createElement('div');

    const p = document.createElement('p');
    p.innerHTML="bosta"

    componentRoot.appendChild(p)
    return componentRoot;
  }
}

customElements.define('card-profile', Footer);
