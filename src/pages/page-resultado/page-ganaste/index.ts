export function initPageResultadoGanaste(params) {
  const div = document.createElement("div");

  div.innerHTML = ` 
      <div class="conteiner">
      
        <div  class="star">
       <star-ganaste>
       <star-ganaste/>
        </div>
        <div>
        <score-card>
        </score-card>
        </div>
        <div class="button">
        <custom-button class="botonEl" value="volver a jugar">
        </custom-button>
        </div>
      </div>
          `;
  const style = document.createElement("style");
  style.textContent = `
      .conteiner{
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .star{
        margin-top:20px
      }
      .button{
        margin-top:20px;
      }
     
      `;

  function botonAction() {
    const botonEl = div.querySelector(".botonEl");
    botonEl?.addEventListener("click", (e) => {
      params.goTo("/reglas");
    });
  }

  div.appendChild(style);
  botonAction();

  return div;
}
