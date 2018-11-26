class Persona {
  constructor(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(fn){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    if (fn) {
      fn(this.nombre, this.apellido, false)
    }
  }

  soyAlto(){
    return this.altura > 180
  }

}


  class Desarrollador extends Persona {
    constructor (nombre, apellido, altura){
      super(nombre, apellido, altura) // Debe llamar al constructor padre
    }

    saludar(fn){
      console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
      if (fn) {
        fn(this.nombre, this.apellido, true)
      }
    }


  }

  function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
      console.log(`No sabía que eras dev`)
    }
  }


  var vince = new Persona('Pedro', 'Pérez', 120)
  var erika = new Persona('Erika', 'Loaiza', 135)
  var juan = new Desarrollador('Juan', 'Ramírez', 144)

  vince.saludar()
  erika.saludar(responderSaludo)
  juan.saludar(responderSaludo)
