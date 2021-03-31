import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";


//Private
function _draw() {
  // document.getElementById('total').innerText = ProxyState.total;
  let values = ProxyState.values;
  let template = ''
  values.forEach(v => template += v.Template)
  // document.getElementById("app").innerHTML = /*html*/`
  // <button className="btn btn-info" onclick="app.valuesController.addValue(1)">Add Value</button>  
  // <div className="card-columns values">
  //     ${template}
  // </div>
  // `
}

//Public
export default class ValuesController {
  constructor() {
    //watch values and when it changes in proxystate, run the draw fn
    ProxyState.on("values", _draw);
    _draw()
  }

  addValue(num) {
    valuesService.addValue(num)
  }

}
