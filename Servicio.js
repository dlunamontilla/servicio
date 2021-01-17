import Orden from './Orden.js'

class Servicio {
  ordenes = [];
  
  constructor() {
    this.ordenes = []
    this.newOrder()
    this.agregar = document.getElementById('agregarOrden')
    this.agregar.onclick = () => this.newOrder()
    this.eliminar
  }

  async newOrder() {
    if ( typeof this.ordenes == "undefined" )
      return;

    this.cuenta = this.ordenes.length
    let nuevaOrden = await new Orden(this.cuenta)
    this.ordenes.push(nuevaOrden)
  }

  eliminar(cuenta) {

    if ( typeof this.ordenes == "undefined" )
      return;

    /*   debugger */
    let elimina = cuenta - 1
    console.log(this.ordenes)
    this.ordenes.splice(elimina, 1)

    this.ordenes.forEach(function (o) {
      if (o.cuenta > cuenta) {
        o.cuenta -= 1
        o.elegir.id = `elegir${o.cuenta}`
      }
    })
  }

  splice() {
    this.ordenes.splice();
  }
}


export default Servicio