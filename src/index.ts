import { initButtonComp } from "./components/button";
import { initPapelComp } from "./components/mano-papel";
import { initPiedraComp } from "./components/mano-piedra";
import { initTijeraComp } from "./components/mano-tijera";
import { initScoreCardComp } from "./components/score-card";
import { initStarGanasteComp } from "./components/star-ganaste";
import { initStarPerdisteComp } from "./components/star-perdiste";
import { initTextWelcomComp } from "./components/text-welcome";
import { initRouter } from "./routes";

(function () {
  initTextWelcomComp();
  initButtonComp();
  initTijeraComp();
  initPapelComp();
  initPiedraComp();
  initStarGanasteComp();
  initScoreCardComp();
  initStarPerdisteComp();
  const root = document.querySelector(".root");
  initRouter(root);
})();
