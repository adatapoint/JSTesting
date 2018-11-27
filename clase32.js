const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', '1')}`
const OPTS = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
    .get(URL, OPTS, function (data) {
      resolve(data)
    })
    .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
  .then(function (personaje) {
    console.log(`Hola, soy ${personaje.name}`)
  })
  .catch(onError)
