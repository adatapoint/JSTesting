var x = 4
var y = '4'

console.log(x == y) // true
console.log(x === y) // false

var vince = {
  nombre: 'Vince'
}

var otroVince = {
  nombre: 'Vince'
}

console.log(vince == otroVince) // false (está comparando referencias)
console.log(vince === otroVince) // false (está comparando referencias)

var otroVinceMas = vince

console.log(otroVinceMas === vince) // True, porque es una referencia. Si modifico el nombre en uno, se modifica en ambos.


var yOtroVince = {
  ...vince
}

console.log(yOtroVince == vince) // False, está en otro lugar de la memoria, es otro objeto.
console.log(yOtroVince === vince) // False, misma razón
