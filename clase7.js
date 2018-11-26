var vince = {
  nombre: 'Vince',
  apellido: 'Restrepo',
  edad: 28
}


var pedro = {
  nombre: 'Pedro',
  apellido: 'González',
  edad: 25
}

function imprimirNombreEnMayusculas(persona){
  //var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}


// function imprimirNombreYEdad(persona){
//   console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años`);
// }

function imprimirNombreYEdad(persona){
  var { edad } = persona, { nombre } = persona
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

// imprimirNombreEnMayusculas(vince)
// imprimirNombreEnMayusculas(pedro)
imprimirNombreYEdad(vince)
