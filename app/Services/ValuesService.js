import { ProxyState } from "../AppState.js";
import Value from "../Models/Value.js";

class ValuesService {
  addValue(num) {
    console.log('hi');
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}

export const valuesService = new ValuesService();

