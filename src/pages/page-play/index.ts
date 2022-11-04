import { state } from "../../state";

export function initPagePlay(params) {
  const div = document.createElement("div");
  div.innerHTML = ` 
      <div class="conteiner">
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
      .conteiner{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .contador{
        margin-top:5px;
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
          padding: 5vh 0 0 0;
             
      }
      .mano{
        margin:0  20px;
        
        
      }
      .selec_player {
        transform: scale(1.5,1.5);
          transition: all 0.5s;
          display:inline-flex;
          border-radius: 43px 42px 43px 43px;
          -moz-border-radius: 43px 42px 43px 43px;
          -webkit-border-radius: 43px 42px 43px 43px;
          border: 5px dashed #8ac1eb;
        }
        .selec_pc {
          transform: scale(1.5,1.5);
            transition: all 0.5s;
            display:inline-flex;
            border-radius: 43px 42px 43px 43px;
            -moz-border-radius: 43px 42px 43px 43px;
            -webkit-border-radius: 43px 42px 43px 43px;
            border: 5px dashed #eb8a97;
        }
        .selec_misma_opcion{
          transform: scale(1.5,1.5);
          transition: all 0.5s;
          display:inline-flex;
          background: rgba(52,185,247,1);
          background: -moz-linear-gradient(left, rgba(52,185,247,1) 0%, rgba(240,47,23,1) 54%, rgba(246,41,12,1) 54%, rgba(231,56,39,1) 100%);
          background: -webkit-gradient(left top, right top, color-stop(0%, rgba(52,185,247,1)), color-stop(54%, rgba(240,47,23,1)), color-stop(54%, rgba(246,41,12,1)), color-stop(100%, rgba(231,56,39,1)));
          background: -webkit-linear-gradient(left, rgba(52,185,247,1) 0%, rgba(240,47,23,1) 54%, rgba(246,41,12,1) 54%, rgba(231,56,39,1) 100%);
          background: -o-linear-gradient(left, rgba(52,185,247,1) 0%, rgba(240,47,23,1) 54%, rgba(246,41,12,1) 54%, rgba(231,56,39,1) 100%);
          background: -ms-linear-gradient(left, rgba(52,185,247,1) 0%, rgba(240,47,23,1) 54%, rgba(246,41,12,1) 54%, rgba(231,56,39,1) 100%);
          background: linear-gradient(to right, rgba(52,185,247,1) 0%, rgba(240,47,23,1) 54%, rgba(246,41,12,1) 54%, rgba(231,56,39,1) 100%);
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#34b9f7', endColorstr='#e73827', GradientType=1 );
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
  const piedraClick = function () {
    player = "piedra";
    selecPiedra.classList.add("selec_player");
    /////prueba para sacar el listener de piedra
    selecPapel.removeEventListener("click", papelClick, false);
    selecTijera.removeEventListener("click", tijeraClick, false);
    ///retirar class para que no se pueda seguir seleccionando
    let Papel: any = div.querySelector(".papel");
    Papel.classList.remove("selec_player");
    let Tijera: any = div.querySelector(".tijera");
    Tijera.classList.remove("selec_player");
    ////
    ///render del selec pc

    if (computadora == player) {
      selecPiedra.classList.add("selec_misma_opcion");
    }
    if (computadora == "papel") {
      selecPapel.classList.add("selec_pc");
      selecPapel.classList.remove("selec_misma_opcion");
    }
    if (computadora == "tijera") {
      selecTijera.classList.add("selec_pc");
      selecTijera.classList.remove("selec_misma_opcion");
    }
  };
  const papelClick = function () {
    player = "papel";
    /////prueba para sacar el listener de piedra
    selecPiedra.removeEventListener("click", piedraClick, false);
    selecTijera.removeEventListener("click", tijeraClick, false);
    selecPapel.classList.add("selec_player");
    ///retirar class para que no se pueda seguir seleccionando
    let Piedra: any = div.querySelector(".piedra");
    Piedra.classList.remove("selec_player");
    let Tijera: any = div.querySelector(".tijera");
    Tijera.classList.remove("selec_player");
    ////
    ///render del selec pc

    if (computadora == "piedra") {
      selecPiedra.classList.add("selec_pc");
      selecPiedra.classList.remove("selec_misma_opcion");
    }
    if (computadora == player) {
      selecPapel.classList.add("selec_misma_opcion");
    }
    if (computadora == "tijera") {
      selecTijera.classList.add("selec_pc");
      selecTijera.classList.remove("selec_misma_opcion");
    }
  };
  const tijeraClick = function () {
    player = "tijera";
    selecTijera.classList.add("selec_player");
    /////prueba para sacar el listener de piedra
    selecPapel.removeEventListener("click", papelClick, false);
    selecPiedra.removeEventListener("click", piedraClick, false);
    ///retirar class para que no se pueda seguir seleccionando
    let Papel: any = div.querySelector(".papel");
    Papel.classList.remove("selec_player");
    let Piedra: any = div.querySelector(".piedra");
    Piedra.classList.remove("selec_player");
    ////
    ///render del selec pc

    if (computadora == "piedra") {
      selecPiedra.classList.add("selec_pc");
      selecPiedra.classList.remove("selec_misma_opcion");
    }
    if (computadora == "papel") {
      selecPapel.classList.add("selec_pc");
      selecPapel.classList.remove("selec_misma_opcion");
    }
    if (computadora == player) {
      selecTijera.classList.add("selec_misma_opcion");
    }
  };

  const selecPiedra: any = div.querySelector(".piedra");
  selecPiedra.addEventListener("click", piedraClick, false);
  //////////
  const selecPapel: any = div.querySelector(".papel");
  selecPapel.addEventListener("click", papelClick, false);
  ///////
  const selecTijera: any = div.querySelector(".tijera");
  selecTijera.addEventListener("click", tijeraClick, false);

  /////////////////////contador con intervalos
  let contador = 6;
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

  ////////
  /*  init() {
    //? Recupera la data almacenada en localStorage.
    const localData = JSON.parse(localStorage.getItem("game-state-cache"));
    //? Si no se encuentran data, frena el proceso.
    if (!localData) {
      return;
    } else {
      //? Si encuentra data, sobreescribe la data del state.
      this.setState(localData);
    }
  }, */
  //////
  /////guardardatos en local
  const saveScore = () => {
    const currentStateData = state.getState();
    localStorage.setItem("scoreData", JSON.stringify(currentStateData));
  };
  ///si los datos existen o no
  const existenciaDeLocalDataPlayer = () => {
    if (!localStorage.getItem("scoreData")) {
      console.log("no hay local");

      let currentState = state.getState().score;

      state.setState({
        ...currentState,
        player: currentState.player + 1,
      });
      saveScore();
    } else {
      let currentState = JSON.parse(localStorage.getItem("scoreData") as any);
      state.setState({
        ...currentState,
        player: currentState.player + 1,
      });
      saveScore();
    }
  };
  const existenciaDeLocalDataPc = () => {
    if (!localStorage.getItem("scoreData")) {
      console.log("no hay local");
      let currentState = state.getState().score;

      state.setState({
        ...currentState,
        pc: currentState.pc + 1,
      });
      saveScore();
    } else {
      let currentState = JSON.parse(localStorage.getItem("scoreData") as any);
      state.setState({
        ...currentState,
        pc: currentState.pc + 1,
      });
      saveScore();
    }
  };
  const existenciaDeLocalDataEmpate = () => {
    if (!localStorage.getItem("scoreData")) {
      console.log("no hay local");
      const currentStateScore = state.getState();
      const currentStateData = state.getState().score;
      state.setState({ ...currentStateScore.score });
      localStorage.setItem("scoreData", JSON.stringify(currentStateData));
    }
  };
  ///////logica de los resultados
  setTimeout(() => {
    console.log("player::", player, "-pc::", computadora);
    ///////piedra
    if (player == "piedra" && computadora == "piedra") {
      console.log("empate");
      existenciaDeLocalDataEmpate();
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
      existenciaDeLocalDataEmpate();
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
      existenciaDeLocalDataEmpate();
      params.goTo("/empate");
    }
    console.log("estado ::::State::::::::::", state.getState());
    const datosLocal: any = localStorage.getItem("scoreData");
    console.log("estado::::local::::::::", JSON.parse(datosLocal));
  }, 6000);

  div.appendChild(style);
  return div;
}
