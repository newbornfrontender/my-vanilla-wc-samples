'use strict';

const template = document.createElement('template');

class MyGreeting extends HTMLElement {
  constructor() {
    super();

    template.innerHTML = `
      <h1>Это мой ${this.msg || 'дефолтный'} веб-компонент</h1>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  get msg() {
    return this.getAttribute('my-msg');
  }
}

customElements.define('my-greeting', MyGreeting);
