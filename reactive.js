// Clase Reactive que implementa la inmutabilidad en el estado sin intervención del programador
class Reactive {
  constructor(value) {
    this._value = new Proxy(value, {
      set: function(obj, prop, newValue) {
        throw new Error("El estado es inmutable y no puede ser modificado");
      }
    });
    this._callbacks = [];
  }
  get value() {
    return this._value;
  }
  subscribe(callback) {
    this._callbacks.push(callback);
  }
  notify() {
    this._callbacks.forEach(callback => callback(this._value));
  }
}