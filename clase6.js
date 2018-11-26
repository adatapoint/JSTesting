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

function imprimirNombreEnMayusculas({ nombre }){ // del objeto que recibe sólo accede al nombre
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(vince)
imprimirNombreEnMayusculas(pedro)
imprimirNombreEnMayusculas({ nombre: 'Daniel' }) // Creando el objeto aquí mismo.
