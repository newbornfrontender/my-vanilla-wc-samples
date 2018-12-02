'use strict';

import './my-components-list-item.js';

const template = document.createElement('template');

const components = ['my-greeting'];

const list = [
  {
    page: components.map((item) => item),
    title: components.map((item) => `Страница с кастомным элементом ${item}`),
    text: components.map((item) => `Кастомный элемент ${item}`),
  },
];

class MyComponentsList extends HTMLElement {
  constructor() {
    super();

    /*
     * Конструкция map(() => { return `` }) используется по причине бага
     * prettier. Иначе в результате исправления будет -> map(() => ``,). Запятая
     * в данном случае приведет к ошибке
     */
    template.innerHTML = `
      <style>
        ul {
          margin: 0;
          padding: 0;
          list-style-type: none;
        }
      </style>

      <${this.tag || 'ul'}>
        ${list
          .map(({ page, title, text }) => {
            return `
              <my-components-list-item
                my-page="${page}"
                my-title="${title}">
                ${text}
              </my-components-list-item>
            `;
          })
          .join('')}
      </${this.tag || 'ul'}>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  get tag() {
    return this.getAttribute('my-tag');
  }
}

customElements.define('my-components-list', MyComponentsList);
