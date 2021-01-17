import Orden from './Orden.js'

// Solución temporal:
const ordenes = [];

class Servicio {
  constructor() {
    this.ordenes = []
    this.newOrder()
    this.agregar = document.getElementById('agregarOrden')
    this.agregar.onclick = () => this.newOrder()
    this.eliminar
  }

  newOrder() {
    this.cuenta = this.ordenes.length;
    let nuevaOrden = new Orden(this.cuenta);
    ordenes.push( nuevaOrden );
    this.ordenes = ordenes;

    // Mostrar las órdenes actuales:
    console.clear();
    console.log( this.ordenes );
  }

  eliminar( cuenta ) {
    this.ordenes = ordenes;

    /*   debugger */
    let elimina = cuenta - 1
    this.ordenes.splice(elimina, 1)

    for ( let orden of this.ordenes ) {
      if ( orden.cuenta > cuenta ) {
        orden.cuenta -= 1;
        orden.elegir.id = `elegir${orden.cuenta}`;
      }
    }

    // Mostrar la cantidad actual de órdenes:
    console.clear();
    console.log( this.ordenes );
  }

  splice() {
    this.ordenes.splice();
  }
}


export default Servicio