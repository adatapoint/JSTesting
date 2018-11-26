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
    console.log('Cocinero');
  }

  if (persona.abogado){
    console.log('Abogado');
  }

  if (persona.lector){
    console.log('Lector');
  }
}

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

imprimirMayorDeEdad(vince)
imprimirMayorDeEdad(juan)
