function eliminar() {
    let puntero = document.getElementById('parrafo')
    let valor = document.getElementById('posicion').value

    if (valor < puntero.children.length)
        puntero.removeChild(puntero.children[valor])
}