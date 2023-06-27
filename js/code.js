//Variables predeterminadas
var arreglo_registros = [];
var cant_arreglo_registros = 0, agrego = false, cantidad_dinero = 666.4;

if (arreglo_registros.length != 0) {
    for(var i = 0; i < arreglo_registros.length; i++) {
        cantidad_dinero = cantidad_dinero + arreglo_registros[i].dinero.value;
        if (cantidad_dinero > 1000) {
            alert("Alerta del sobregasto de la cuenta...");
            break;
        }
    }
}

function agregar_registro() {
    var nombre, origen, dinero, tipo_gasto, tipo_ingreso, categoria, divisa;
    nombre = document.getElementById("text_nombre").value;
    origen = document.getElementById("text_origen").value;
    dinero = document.getElementById("text_dinero").value;

    if (document.getElementById("bool_gasto").checked) {
        tipo = document.getElementById("bool_gasto").value;
    }
    else if (document.getElementById("bool_ingreso").checked) {
        tipo = document.getElementById("bool_ingreso").value;
    }

    categoria = document.getElementById("text_categoria").value;
    divisa = document.getElementById("text_divisa").value;

    var objeto = {
        nombre: nombre,
        origen: origen,
        dinero: dinero,
        tipo: tipo,
        categoria: categoria,
        divisa: divisa
    }

    arreglo_registros.push(objeto);
    cant_arreglo_registros = cant_arreglo_registros + 1;
    //alert(arreglo_registros[cant_arreglo_registros].tipo);

    agrego = true;
    document.cookie = "agrego=true";
}



document.addEventListener("keyup", (e)=> {
    if (e.target.matches("#busqueda-registro")) {
        document.querySelectorAll("#objeto-registrado").forEach((tarjeta)=>{
            tarjeta.textContent.toLocaleLowerCase().includes(e.target.value) 
            ? tarjeta.classList.remove("filter"): tarjeta.classList.add("filter");
        });
        if (e.key === "Escape") {
            e.target.value = "";
        }
    }
})

var cookies = document.cookie.split(";"); // Obtener todas las cookies
for (var i = 0; i < cookies.length; i++) {
  var cookie = cookies[i].trim();
  if (cookie.startsWith("agrego=")) {
    agrego = cookie.substring("agrego=".length);
    break;
  }
}

if (agrego == true && arreglo_registros.length != 0) {
    tbody = document.querySelector('#tabla-nuevos-registros');

    tbody.innerHTML = '';
    for(var i = 0; i < arreglo_registros.length; i++) {
        var row = tbody.insertRow(i), 
        producto_celda = row.insertCell(0),
        cantidad_celda = row.insertCell(1),
        tipo_celda = row.insertCell(2),
        fecha_celda = row.insertCell(3);

        producto_celda.innerHTML = cant_arreglo_registros[i].nombre;
        cantidad_celda.innerHTML = cant_arreglo_registros[i].dinero;
        tipo_celda.innerHTML = cant_arreglo_registros[i].tipo;
        fecha_celda.innerHTML = "24/06/2023";

        tbody.appendChild(row);
    }
    agrego = false;
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
*/
