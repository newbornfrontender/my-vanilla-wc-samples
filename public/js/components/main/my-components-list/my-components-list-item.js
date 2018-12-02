'use strict';

const template = document.createElement('template');

class MyComponentsListItem extends HTMLElement {
  constructor() {
    super();

    template.innerHTML = `
      <style>
        :host(:not(:last-of-type)) li {
          margin-bottom: 12px;
        }

        a {
          display: block;
          padding: 12px;
          font-weight: bold;
          text-shadow: 1px 1px 2px #a7a7a7;
          color: cornflowerblue;
          border-radius: 3px;
          background-color: blanchedalmond;
          text-decoration: none;
          transition-duration: 0.3s;
          transition-timing-function: ease-in;
        }

        a:hover {
          color: white;
          text-shadow: 2px 2px 4px #525252;
          background-color: cornflowerblue;
        }

        span {
          color: chocolate;
        }

        a:hover span {
          color: orange;
        }
      </style>

      <li>
        <a href="/${this.page}.html" title="${this.title}">
          Кастомный элемент <span><slot></slot></span>
        </a>
      </li>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  get page() {
    return this.getAttribute('my-page');
  }

  get title() {
    return this.getAttribute('my-title');
  }
}

customElements.define('my-components-list-item', MyComponentsListItem);
