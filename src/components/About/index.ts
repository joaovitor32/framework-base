import styleCss from './style.js';

//Centralize component
class Card extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.styles());
    shadow.appendChild(this.build());
  }

  build(): HTMLDivElement {
    const aboutTitle = this.getAttribute('about-title');
    const aboutSubTitle = this.getAttribute('about-subtitle');

    const componentRoot = document.createElement('div');
    componentRoot.setAttribute('id', 'about-card');

    Array.from(this.children).forEach((child) => {
      componentRoot.appendChild(child.cloneNode(true)); // Use cloneNode to move the nodes
    });

    const title = document.createElement('p');
    title.textContent = aboutTitle;
    title.setAttribute('id', 'about-title');


    const subtitle = document.createElement('p');
    subtitle.textContent = aboutSubTitle;
    subtitle.setAttribute('id', 'about-subtitle');

    componentRoot.appendChild(title);
    componentRoot.appendChild(subtitle)

    return componentRoot;
  }

  styles(): HTMLStyleElement {
    const style = document.createElement('style');
    style.textContent = styleCss;

    return style;
  }
}

export default Card;
3;
