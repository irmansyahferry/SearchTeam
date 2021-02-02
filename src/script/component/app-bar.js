class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
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
               width: 100%;
               background-color: rgb(160, 58, 17);
               color: white;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           }
           h2 {
               padding: 16px;
               font-size: 34px;
               text-align: right;
               font-family: 'Montez', cursive;
           }
           h3 {
                font-size: 34px;
                padding: 16px;
                font-family: 'Montez', cursive;
                float: left;
           }
           /* --- at me ------------------------- */
            #slideout{
                position:fixed; 
                top:140px; left:0; 
                width:50px; 
                padding:12px 0; 
                text-align:center; 
                background:#662D91; 
                -webkit-transition-duration:0.3s; 
                -moz-transition-duration:0.3s; 
                -o-transition-duration:0.3s; 
                transition-duration:0.3s; 
                -webkit-border-radius:0 5px 5px 0; 
                -moz-border-radius:0 5px 5px 0; 
                border-radius:0 5px 5px 0; 
                z-index:999
            }
            #slideout_inner{
                position: fixed; 
                top:140px; 
                left:-70px; 
                background-color: 
                #fff; width:auto; 
                padding:25px; 
                height:250px; 
                -webkit-transition-duration:0.3s; 
                -moz-transition-duration:0.3s; 
                -o-transition-duration:0.3s; 
                transition-duration:0.3s; text-align:left; 
                -webkit-border-radius:0 0 5px 0; 
                -moz-border-radius:0 0 5px 0; 
                border-radius:0 0 5px 0; 
                z-index:999; 
                font-size:12px
            }
            #slideout:hover #slideout_inner{
                left:0
            }
            /* --- end at me ------------------------- */
            /* --- medsos ------------------------- */
            .container{
                width: 100%;
                margin: 20px auto;
                background-color: #fff;
                position: absolute;
            }

            .facebook{
                width: 50px;
                height: 50px;
                background-image: url(https://imagizer.imageshack.com/v2/50x50q90/921/OsnL1H.png);
                background-repeat: no-repeat;
                display: inline-block;
                text-indent: -9999999px;
                position: absolute;
                top: 10px;
                right: 0 ;
                
            }
            .twitter{
                width: 50px;
                height: 50px;
                background-image: url(https://imagizer.imageshack.com/v2/50x50q90/923/2jnUnl.png);
                background-repeat: no-repeat;
                display: inline-block;
                text-indent: -9999999px;
                position: absolute;
                top: 60px;
                right: 0 ;
                
            }
            .youtube{
                width: 50px;
                height: 50px;
                background-image: url(https://imagizer.imageshack.com/v2/50x50q90/924/5NfSMe.png);
                background-repeat: no-repeat;
                display: inline-block;
                text-indent: -9999999px;
                position: absolute;
                top: 110px;
                right: 0 ;
                
            }
            .instagram{
                width: 50px;
                height: 50px;
                background-image: url(https://imagizer.imageshack.com/v2/50x50q90/922/CYO9oE.png);
                background-repeat: no-repeat;
                display: inline-block;
                text-indent: -9999999px;
                position: absolute;
                top: 160px;
                right: 0;
                
            }

            /* --- end medsos ------------------------- */
            h1 {
               writing-mode:tb-rl;
              -webkit-transform:rotate(-90deg);
              -moz-transform:rotate(-90deg);
              -o-transform: rotate(-90deg);
              -ms-transform:rotate(-90deg);
              transform: rotate(180deg);
              padding: 5px 5px 5px 5px;
              }
             </style>
                <h3>Ŧєггץ เг๓คภรץคђ</h3>     
                <h2>Search a Food</h2>
                <div id="slideout" class="container">
                <h1>Find Me At :</h1>
                <div id="slideout_inner">
                    <table class='slide'>
                <tr><td>:    <a href="https://web.facebook.com/ferryirmansyah.00" class="facebook">@ferry</a></td></tr>
                <tr><td>:    <a href="https://twitter.com/irmansyah_ferry" class="twitter">@ferry</a></td></tr>
                <tr><td>:    <a href="https://www.youtube.com/channel/UCyRiSPNFltnEYMin9dWCFUw?view_as=subscriber" class="youtube">@ferry</a></td></tr>
                <tr><td>:    <a href="https://www.instagram.com/ferry_irmansyah/" class="instagram">@ferry</a></td></tr>
                </table>
                </div>
            </div>
                `;
    }
}

customElements.define("app-bar", AppBar);