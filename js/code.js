function busqueda_registros() {
    var input, filtro, nombre, objeto, i, x, texto;

    input = document.getElementById("busqueda-registro");
    filtro = input.value.toUpperCase();
    objeto = document.getElementById("objetos-registrados");
    nombre = objeto.getElementsById("objeto-registrado");
    for (i = 0; i < nombre.length; i++) {
        x = nombre[i].getElementsById("nombre-objeto")[0];
        texto = x.textValue || x.innerText; 

        if (texto.toUpperCase().indexOf(filtro) > -1) {
            nombre[i].style.display = "";
        }
        else {
            nombre[i].style.display = "none";
        }
    }
}
/*
document.addEventListener('keyup', e => {
    if (e.target.matches('#busqueda-registro')) {
        document.querySelectorAll('#objeto-registrado').forEach(objeto => {
            objeto.textContent.toLowerCase().includes(e.target.value)
            ? objeto.classList.remove('filtro') : objeto.classList.add('filtro');
        })
    }
})
*/
