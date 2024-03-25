export class Impuesto {
  constructor(montoBrutoanual, deducciones) {
    this._montoBrutoanual = montoBrutoanual;
    this._deducciones = deducciones;
  }
  get montoBrutoanual() {
    return this._montoBrutoanual;
  }
  set montoBrutoanual(nuevoMonto) {
    this._montoBrutoanual = nuevoMonto;
  }

  get deducciones() {
    return this._deducciones;
  }
  set deducciones(nuevasDeducciones) {
    this._deducciones = nuevasDeducciones;
  }
}
