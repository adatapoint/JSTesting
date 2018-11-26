var vince = {
  nombre: 'Vince',
  apellido: 'Restrepo',
  edad: 20,
  ingeniero: true,
  cocinero: false,
  abogado: false,
  lector: true
}


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


  if (persona.ingeniero){  // De esta forma sólo entra a uno
    console.log('Ingeniero');
  } else if (persona.cocinero){
    console.log('Cocinero');
  } else if (persona.abogado){
    console.log('Abogado');
  } else if (persona.lector){
    console.log('Lector');
  }
}

imprimirProfesiones(vince)
