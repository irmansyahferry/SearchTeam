import './meals.js';

class mealsList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set mealss(mealss) {
        this._mealss = mealss;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._mealss.forEach(meals => {
            const mealsItemElement = document.createElement("meals-item");
            mealsItemElement.meals = meals;
            this.shadowDOM.appendChild(mealsItemElement);
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
             .placeholder {
                   font-weight: lighter;
                   color: rgba(0,0,0,0.5);
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("meals-list", mealsList);