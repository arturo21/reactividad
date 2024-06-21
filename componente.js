// Clase Componente con estado inmutable
class Componente {
  constructor(props) {
    this.props = props;
    this._estado = {};
  }

  setState(nuevoEstado) {
    this._estado = { ...this._estado, ...nuevoEstado };
    this.render();
  }
  
  render() {
    throw new Error('Método render no implementado');
  }
}
