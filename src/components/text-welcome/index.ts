export function initTextWelcomComp() {
  class TextComponent extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super();
      this.render();
    }
    render() {
      const div = document.createElement("div");
      //tomo atributo para manejar las classe
      const className = this.getAttribute("classname") || "reglas";
      //agrego estilos desde el componente con style
      const style = document.createElement("style");
      style.innerHTML = `
      
      .conteiner{
        display:flex;
        justify-content:center;
       aling-items:center
       }
       .title{
        width:308px ;
           display:flex;
           justify-content:center;
           aling-items:center;
           text-align: center;
            color: #009048;
            margin-top:50px;
            margin-bottom:30px;
            font-weight: 700;
            font-size: 80px;

          }
          .reglas{
            

            width:308px ;
            display:flex;
            justify-content:center;
            aling-items:center;
            text-align: center;
            margin-top:50px;
            margin-bottom:30px;

            color: #000000;
            font-weight: 600;
            font-size: 40px;
          }
      
       `;
      div.className = className;
      div.textContent = this.textContent;
      ///el textcontent del this se lo paso al div q appendeo

      this.shadow.appendChild(div);
      this.shadow.appendChild(style);
    }
  }
  customElements.define("custom-text-welcome", TextComponent);
}
