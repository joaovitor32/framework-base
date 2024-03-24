import styleCss from './style.js';

class Image extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.styles());
    shadow.appendChild(this.build());
  }

  build(): HTMLDivElement {
    const componentRoot = document.createElement('img');
    componentRoot.setAttribute('id', 'profile-image');
    componentRoot.src = this.getAttribute("img-url");

    return componentRoot;
  }

  styles(): HTMLStyleElement {
    const style = document.createElement('style');
    style.textContent = styleCss;

    return style;
  }
}

export default Image;
