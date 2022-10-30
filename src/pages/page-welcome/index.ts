export function initPageWelcome(params) {
  const div = document.createElement("div");
  div.innerHTML = ` 
  <div class="contenedor">
  
    <custom-text-welcome classname="title">
    
            
            <div classname="title">
            
            Piedra
            Papel ó
            Tijera
            
            </div>
            
    </custom-text-welcome>
    <custom-button class="botonEl" value="Empezar" >
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
  .contenedor{
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
      params.goTo("/reglas");
    });
  }

  div.appendChild(style);
  botonAction();

  return div;
}
