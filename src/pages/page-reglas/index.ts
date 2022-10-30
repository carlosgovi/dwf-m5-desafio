export function initPageReglas(params) {
  const div = document.createElement("div");
  div.innerHTML = ` 
    <div class="continer">
    
      <custom-text-welcome>
      Presioná jugar
y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
      </custom-text-welcome>
      <custom-button class="botonEl" value="¡Jugar!" >
      </custom-button>
      <div class="manos">
      <div>
      <mano-piedra class="mano piedra">
      </mano-piedra >
      <mano-papel class="mano papel">
      </mano-papel>
      <mano-tijera class="mano tijera">
      </mano-tijera>
      </div>
    </div>
        `;
  const style = document.createElement("style");
  style.textContent = `
    .continer{
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .manos{
        display:flex;
        justify-content: center;
        padding: 12vh 0 0 0;
    }
    .mano{
        margin:0  20px;
      }
  
    `;

  function botonAction() {
    const botonEl = div.querySelector(".botonEl");
    botonEl?.addEventListener("click", (e) => {
      params.goTo("/play");
    });
  }

  div.appendChild(style);
  botonAction();

  return div;
}
