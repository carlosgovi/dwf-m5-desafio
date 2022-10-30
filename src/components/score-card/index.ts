import { state } from "../../state";

export function initScoreCardComp() {
  customElements.define(
    "score-card",
    class extends HTMLElement {
      shadow = this.attachShadow({ mode: "open" });
      constructor() {
        super();
        this.render();
      }
      render() {
        const div: any = document.createElement("div");
        const style = document.createElement("style");

        const stados = state.getState();
        console.log(stados);

        div.innerHTML = `
         <div class="card">
           <div class="title" >
            <div>
           Score
           </div>
           </div>
           <div class="subtitle">
            Vos: ${stados.player}
           </div>
           <div class="subtitle">
            Maquina: ${stados.pc}
           </div>
           
         </div>
        `;
        style.innerHTML = `
            .card{
                width: 259px;
                height: 217px;
                background: #FFFFFF;
                border: 10px solid #000000;
                border-radius: 10px;
                
                display: flex;
                flex-direction: column;
                align-items: center;
            }
              .title{
                font-weight: 400;
font-size: 55px;
                
               
              }     
              .subtitle{
                font-weight: 400;
font-size: 45px;
              }
              .
          
           `;
        this.shadow.appendChild(div);
        this.shadow.appendChild(style);
      }
    }
  );
}
