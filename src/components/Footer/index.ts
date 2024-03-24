import styleCss from './style.js';

class Footer extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.styles());
    shadow.appendChild(this.build());
  }

  build(): HTMLDivElement {
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute('id', 'footer');

    Array.from(this.children).forEach((child) => {
      componentRoot.appendChild(child.cloneNode(true));
    });

    const span = document.createElement("span");
    span.textContent="© Copyright 2024 João Vitor Muniz Lopes. Todos os direitos reservados."
    span.setAttribute('id', 'footer-text');

    componentRoot.appendChild(span)

    return componentRoot;
  }

  styles(): HTMLStyleElement {
    const style = document.createElement('style');
    style.textContent = styleCss;

    return style;
  }
}

export default Footer;
