function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y ${this.soyAlto(this.altura)} soy alto`)
}

// Persona.prototype.soyAlto = () => this.altura >= 130 ? "sí" : "no"
// this no es lo que esperamos que sea. This va a apuntar al que este afuera. (This es window)

Persona.prototype.soyAlto = function () {
    return this.altura >= 130 ? "sí" : "no"
}

var vince = new Persona('Pedro', 'Pérez', 120)
var erika = new Persona('Erika', 'Loaiza', 135)
var juan = new Persona('Juan', 'Ramírez', 144)
