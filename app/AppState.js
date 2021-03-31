import Snack from './Models/Snack.js'
// import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = [];
  total = 0;
  snacks = [
    new Snack(1, "Lays Potato Chips", 1.5, 350),
    new Snack(2, "Snickers", 1, 450),
    new Snack(3, "Coke Zero", 1.25, 0),
    new Snack(4, "Sour Patch", 2, 350),
    new Snack(5, "Water", 1.50, 450),
    new Snack(6, "Doritos", 2.25, 0),
  ];
  currentCart = [];
}





export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})


