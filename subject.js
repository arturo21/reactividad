/*

Arturo Vásquez 2024
Para implementar inmutabilidad en el estado de la clase `Subject` en JavaScript, 
puedes utilizar la siguiente versión reescrita.
En esta versión reescrita, el estado (`_state`) se establece como una propiedad privada 
utilizando el prefijo de guion bajo. Al modificar el estado a través del método `setState`, 
se verifica si el nuevo estado es diferente al estado actual antes de actualizarlo y notificar a los observadores. 
Esto garantiza que el estado se mantenga inmutable a menos que realmente cambie.
*/

class Subject {
  constructor(state) {
    this._state = state;
    this._observers = [];
  }
  getState() {
    return this._state;
  }
  setState(newState) {
    if (this._state !== newState) {
      this._state = newState;
      this.notifyObservers(this._state);
    }
  }
  registerObserver(observer) {
    this._observers.push(observer);
  }
  unregisterObserver(observer) {
    this._observers = this._observers.filter(obs => obs !== observer);
  }
  notifyObservers(data) {
    this._observers.forEach(observer => observer.notify(data));
  }
}