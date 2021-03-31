import { ProxyState } from "../AppState.js";
import { gameService } from "../Services/GameService.js";

export default class GameController {
  constructor() {
    console.log(ProxyState.total);
    ProxyState.on("total", _draw);
    ProxyState.on("currentCart", _drawCart);
  }

  addQuarter() {
    gameService.addQuarter();
  }

  buySnack(item) {
    gameService.buySnack(item);
  }
}
function _draw() {
  document.getElementById("total").innerText = ProxyState.total;
}
// go back to here
function _drawCart() {
  let template = "";
  ProxyState.currentCart.forEach((item) => {
      console.log(item);
    template += `
    <li>${item}</li>
    `;
  });
  document.getElementById("cart").innerHTML = template;
}
