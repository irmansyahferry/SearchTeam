class mealsItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meals(meals) {
        this._meals = meals;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
              * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   display: block;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
               }
              
               .fan-art-meals {
                   width: 100%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: center;
               }
              
               .meals-info {
                   padding: 24px;
               }
              
               .meals-info > h2 {
                   font-weight: lighter;
                   font-size: 34px;
                   font-family: 'Montez', cursive;
               }
              
               .meals-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   font-size: 20px;
                   text-align: justify;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10; /* number of lines to show */
               }
               .meals-info > button {
                   text-align: center;
                   box-sizing: border-box;
                   -webkit-appearance: none;
                      -moz-appearance: none;
                           appearance: none;
                   background-color: transparent;
                   border: 2px solid #f1c40f;
                   border-radius: 0.6em;
                   color: #e74c3c;
                   cursor: pointer;
                   display: flex;
                   align-self: center;
                   font-size: 1rem;
                   font-weight: 400;
                   line-height: 1;
                   margin: 20px;
                   padding: 1.2em 2.8em;
                   text-decoration: none;
                   text-align: center;
                   text-transform: uppercase;
                   font-family: 'Montserrat', sans-serif;
                   font-weight: 700
                }
                 .meals-info > button:hover, .btn:focus {
                    color: #fff;
                    outline: 0;
                  }
                  .color {
                    border-color: #f1c40f;
                    color: #fff;
                    background-image: linear-gradient(45deg, #f1c40f 50%, transparent 50%);
                    background-position: 100%;
                    background-size: 400%;
                    transition: background 300ms ease-in-out;
                   }
                   .color:hover {
                    background-position: 0;
                    }
                    .meals-info > button a {
                        text-decoration:none;
                    }
                 
           </style>
           <img class="fan-art-meals" src="${this._meals.strMealThumb}" alt="Fan Art">
           <div class="meals-info">
               <h2>${this._meals.strMeal}</h2>
               <p>${this._meals.strInstructions}</p>
               <button class="btn color"><a href="${this._meals.strYoutube}">How To Make</a></button>
           </div>`;
    }
}

customElements.define("meals-item", mealsItem);