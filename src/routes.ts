import { initPagePlay } from "./pages/page-play";
import { initPageReglas } from "./pages/page-reglas";
import { initPageResultadoEmpataste } from "./pages/page-resultado/page-empate";
import { initPageResultadoGanaste } from "./pages/page-resultado/page-ganaste";
import { initPageResultadoPerdiste } from "./pages/page-resultado/page-perdiste";
import { initPageWelcome } from "./pages/page-welcome";

const routes = [
  {
    path: /\/welcome/,
    component: initPageWelcome,
  },
  {
    path: /\/reglas/,
    component: initPageReglas,
  },
  {
    path: /\/play/,
    component: initPagePlay,
  },
  {
    path: /\/ganaste/,
    component: initPageResultadoGanaste,
  },
  {
    path: /\/perdiste/,
    component: initPageResultadoPerdiste,
  },
  {
    path: /\/empate/,
    component: initPageResultadoEmpataste,
  },
];
export function initRouter(container: any) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  function handleRoute(route) {
    console.log("El router recibio una nueva ruta y esta es:::  ", route);

    ////for q recorre rutas y compara las regular exprecions
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  /// si en la ruta hay una sola "/" goto me lleva a Welcome
  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    //handleRoute inicializa y  pasa el path asi misma
    handleRoute(location.pathname);
  }
  /// window.onpopstate   se usa para que al cambiar la ruta desde la flecha atras ,adelante.........este este escuchando el estado para asi llamar al handleRoute
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
