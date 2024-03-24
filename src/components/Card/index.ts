import styleCss from './style.js';

//Centralize component
class Card extends HTMLElement {
  constructor() {
    super();
    console.log(this.children);
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.styles());
    shadow.appendChild(this.build());
  }

  build(): HTMLDivElement {
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute('id', 'card');

    Array.from(this.children).forEach((child) => {
      componentRoot.appendChild(child.cloneNode(true)); // Use cloneNode to move the nodes
    });

    return componentRoot;
  }

  styles(): HTMLStyleElement {
    const style = document.createElement('style');
    style.textContent = styleCss;

    return style;
  }
}

export default Card
