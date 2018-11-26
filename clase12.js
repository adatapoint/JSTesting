var vince = {
  nombre: 'Vince',
  apellido: 'Restrepo',
  edad: 20,
  ingeniero: true,
  cocinero: false,
  abogado: false,
  lector: true
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gómez',
  edad: 12,
}

const MAYORIA_DE_EDAD = 18 // No se sobreescribe

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es:`)

  if (persona.ingeniero){
    console.log('Ingeniero');
  }

  if (persona.cocinero){
    console.log('Cocinero');var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}
  }

  if (persona.abogado){
    console.log('Abogado');
  }

  if (persona.lector){
    console.log('Lector');
  }
}

// const esMayorDeEdad = function (persona) { // La variable es una función anónima
//   return persona.edad >= MAYORIA_DE_EDAD
// }

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD



function imprimirMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

imprimirMayorDeEdad(vince)
imprimirMayorDeEdad(juan)


const permitirAcceso = ({ edad }) =>
!esMayorDeEdad({ edad }) ? console.log("ACCESO DENEGADO") : console.log("ACCESO CONCEDIDO")
