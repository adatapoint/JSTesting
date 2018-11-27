const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', '1')}`
const OPTS = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $
  .get(URL, OPTS, callback)
  .fail(() => console.log(`Sucedió un error, no se pudo obtener el personaje ${id}`)})
}


obtenerPersonaje(1, function (personaje) {
  console.log(`Hola, soy ${personaje.name}`) //OnPeopleResponse se ejecuta cuando el get sea exitoso.

  obtenerPersonaje(2, function (personaje) {
    console.log(`Hola, soy ${personaje.name}`)

    obtenerPersonaje(3, function (personaje) {
      console.log(`Hola, soy ${personaje.name}`)

      obtenerPersonaje(4, function (personaje) {
        console.log(`Hola, soy ${personaje.name}`)

        obtenerPersonaje(5, function (personaje) {
          console.log(`Hola, soy ${personaje.name}`)

          obtenerPersonaje(6, function (personaje) {
            console.log(`Hola, soy ${personaje.name}`)
          })
        })
      })
    })
  })
})
