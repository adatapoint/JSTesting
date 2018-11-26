var nombre = 'Vince'

function imprimirNombreEnMayusculas(nombre){ // Este nombre no es el global
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)
