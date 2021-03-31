// import ValuesController from "./Controllers/ValuesController.js";
import GameController from './Controllers/GameController.js';

class App {
  gameController = new GameController()
  // valuesController = new ValuesController();
}

window["app"] = new App();
