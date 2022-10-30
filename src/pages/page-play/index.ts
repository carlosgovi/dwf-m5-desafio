import { state } from "../../state";

export function initPagePlay(params) {
  const div = document.createElement("div");
  div.innerHTML = ` 
      <div class="continer">
      <div class="contador">
      
      </div>
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
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .contador{
        margin-top:30px;
          display: flex;   
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height:50vh;
          width:50vh ;
        font-size:200px;
        border:20px solid;
        border-radius:100%;
      }
      .manos{
        height:50vh;
          display:flex;
          align-items: flex-end;   
          padding: 12vh 0 0 0;
      }
      .mano{
        margin:0  20px;      
      }
      .selec {
        transform: scale(1.5,1.5);
          transition: all 1.5s;
          display:inline-flex;
        }

      `;
  ////juego random
  const computerSelec = () => {
    const randomMath = Math.floor(Math.random() * 3);
    const opciones = ["piedra", "papel", "tijera"];
    return opciones[randomMath];
  };

  ////////variables de juego
  let computadora = computerSelec();
  let player;
  //////
  const selecPiedra: any = div.querySelector(".piedra");
  selecPiedra.addEventListener("click", () => {
    player = "piedra";
    selecPiedra.classList.add("selec");
  });
  //////////
  const selecPapel: any = div.querySelector(".papel");
  selecPapel.addEventListener("click", () => {
    player = "papel";
    selecPapel.classList.add("selec");
  });
  ///////
  const selecTijera: any = div.querySelector(".tijera");
  selecTijera.addEventListener("click", () => {
    player = "tijera";
    selecTijera.classList.add("selec");
  });

  ///render del selec pc
  setTimeout(() => {
    if (computadora == "piedra") {
      selecPiedra.classList.add("selec");
    }
    if (computadora == "papel") {
      selecPapel.classList.add("selec");
    }
    if (computadora == "tijera") {
      selecTijera.classList.add("selec");
    }
  }, 3000);
  /////////////////////contador con intervalos
  let contador = 3;
  const intervalo: any = setInterval(() => {
    contador--;
    const contadorEl = div.querySelector(".contador") as any;
    contadorEl.textContent = String(contador);

    if (contador == -1) {
      clearInterval(intervalo);
      if (player == undefined) {
        params.goTo("/reglas");
      }
    }
  }, 1000);
  /////guardardatos en local
  const saveScore = () => {
    const currentStateData = state.getState();
    localStorage.setItem("scoreData", JSON.stringify(currentStateData));
  };
  ///si los datos existen o no
  const existenciaDeLocalDataPlayer = () => {
    if (!localStorage.getItem("scoreData")) {
      let currentState = state.getState();
      state.setState({ ...currentState, player: currentState.player + 1 });
      saveScore();
    } else {
      let currentState = JSON.parse(localStorage.getItem("scoreData") as any);
      state.setState({ ...currentState, player: currentState.player + 1 });
      saveScore();
    }
  };
  const existenciaDeLocalDataPc = () => {
    if (!localStorage.getItem("scoreData")) {
      let currentState = state.getState();
      state.setState({ ...currentState, pc: currentState.pc + 1 });
      saveScore();
    } else {
      let currentState = JSON.parse(localStorage.getItem("scoreData") as any);
      state.setState({ ...currentState, pc: currentState.pc + 1 });
      saveScore();
    }
  };
  setTimeout(() => {
    console.log("player::", player, "-pc::", computadora);
    ///////piedra
    if (player == "piedra" && computadora == "piedra") {
      console.log("empate");
      params.goTo("/empate");
    }
    if (player == "piedra" && computadora == "tijera") {
      console.log("ganaste");
      existenciaDeLocalDataPlayer();
      params.goTo("/ganaste");
    }
    if (player == "piedra" && computadora == "papel") {
      console.log("perdiste");
      existenciaDeLocalDataPc();
      params.goTo("/perdiste");
    }
    ///////papel
    if (player == "papel" && computadora == "papel") {
      console.log("empate");
      params.goTo("/empate");
    }
    if (player == "papel" && computadora == "tijera") {
      console.log("perdiste");
      existenciaDeLocalDataPc();
      params.goTo("/perdiste");
    }
    if (player == "papel" && computadora == "piedra") {
      console.log("ganaste");
      existenciaDeLocalDataPlayer();
      params.goTo("/ganaste");
    }
    /////////tijera
    if (player == "tijera" && computadora == "papel") {
      console.log("ganaste");
      existenciaDeLocalDataPlayer();
      params.goTo("/ganaste");
    }
    if (player == "tijera" && computadora == "piedra") {
      console.log("perdiste");
      existenciaDeLocalDataPc();
      params.goTo("/perdiste");
    }
    if (player == "tijera" && computadora == "tijera") {
      console.log("empate");
      params.goTo("/empate");
    }
    console.log("estado ::::State::::::::::", state.getState());
    const datosLocal: any = localStorage.getItem("scoreData");
    console.log("estado::::local::::::::", JSON.parse(datosLocal));
  }, 3500);

  div.appendChild(style);
  return div;
}
