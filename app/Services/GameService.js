import { ProxyState } from "../AppState.js";

class GameService {
  addQuarter() {
    ProxyState.total += 0.25;
    ProxyState.total = ProxyState.total;
  }

  buySnack(item) {
    let currentSnack = ProxyState.snacks[item - 1];
    if (ProxyState.total >= currentSnack.price) {
      ProxyState.total -= currentSnack.price;
      ProxyState.currentCart.push(currentSnack.name);
      ProxyState.currentCart = ProxyState.currentCart; 
    }
  }
}

export const gameService = new GameService();
