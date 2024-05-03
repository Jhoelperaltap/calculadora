// Agrega a la pantalla el boton que se pulse en la pantalla
function agregar(valor) {
    document.getElementById('pantalla').value += valor
}

function borrar() {
    document.getElementById('pantalla').value = ''
}

function calcular() {
    try {
        document.getElementById('pantalla').value = eval(document.getElementById('pantalla').value)
    } catch (err) {
        document.getElementById('pantalla').value = 'Error'
    }
}