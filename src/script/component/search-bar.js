class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

      
    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
       .search-container {
           max-width: 800px;
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           padding: 16px;
           border-radius: 5px;
           display: flex;
           position: sticky;
           top: 10px;
           background-color: white;
       }
      
       .search-container > input {
           width: 75%;
           padding: 16px;
           border: 0;
           border-bottom: 1px solid rgb(160, 58, 17);
           font-weight: bold;
           font-family: 'Sofadi One', cursive;
       }
      
       .search-container > input:focus {
           outline: 0;
           border-bottom: 2px solid rgb(160, 58, 17);
       }
      
       .search-container > input:focus::placeholder {
            font-weight: bold;
            font-size: 24px;
            text-shadow:
            0 0 5px white,
            0 0 10px white,
            0 0 15px white,
            0 0 20px white,
            0 0 25px white,
            0 0 30px white,
            0 0 35px white,
            0 0 40px white,
            0 0 50px #ff0000,
            0 0 75px #ff0000,
            0 0 100px #ff0000,
            0 0 125px #ff0000,
            0 0 150px #ff0000;
       }
      
       .search-container >  input::placeholder {
           color: rgb(160, 58, 17);
           font-weight: normal;
           font-family: 'Montez', cursive;
           font-size: 32px;
       }
      
       .search-container > button {
           font-family: 'Sofadi One', cursive;
           width: 23%;
           cursor: pointer;
           margin-left: auto;
           padding: 16px;
           background-color: rgb(160, 58, 17);
           color: white;
           border: 0;
           text-transform: uppercase;
       }
      
       @media screen and (max-width: 550px){
           .search-container {
               flex-direction: column;
               position: static;
           }
      
           .search-container > input {
               width: 100%;
               margin-bottom: 12px;
           }
      
           .search-container > button {
               width: 100%;
           }
       }
       </style>
       <div id="search-container" class="search-container">
           <input placeholder="'ext: pasta,meat,cheese,etc'" id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Search</button>
       </div>
       `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);