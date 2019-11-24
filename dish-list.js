import {html, LitElement} from 'lit-element';
import style from './dish-list-styles.js';

import '@catsys/dish-detail';

class DishList extends LitElement {
  static get properties() {
    return {
      dishes: {type: Array}
    };
  }

  static get styles() {
    return style;
  }

  __formDishHtml(dish) {
    const dishHtml = html`<dish-detail energyUnit="cal"
               ratingScale="5"
               dish="${JSON.stringify(dish)}"
               ?isPreview=${true}
               @update-dish="${this.__onUpdateDish}"
               @delete-dish="${this.__onDeleteDish}"></dish-detail>`;

    return dishHtml;
  }

  __getDishesHtml() {
    let dishes = [];

    for (const dish of this.dishes)
      dishes = [...dishes, this.__formDishHtml(dish)];

    return dishes;
  }

  render() {
    return html`
      <div>
          ${this.__getDishesHtml()}
      </div>
      `;
  }

  __onUpdateDish(event) {
    this.dispatchEvent(new CustomEvent('update-dish', {detail: {dish: event.detail.dish}}));
  }

  __onDeleteDish(event) {
    this.dispatchEvent(new CustomEvent('delete-dish', {detail: {dish: event.detail.dish}}));
  }
}

window.customElements.define("dish-list", DishList);
