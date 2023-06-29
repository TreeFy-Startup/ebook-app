const nombre_producto = document.getElementById('nombre_producto');
const dinero_producto = document.getElementById('cantidad_producto');
const tipo_producto = document.getElementById('tipo_producto');
const categoria_producto = document.getElementById('categoria_producto');
const tabla_registrados = document.getElementById('cardsTableBody');

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

window.addEventListener('DOMContentLoaded', () => {
    getCardsList();
});

cardsForm.addEventListener('submit', e => {
    e.preventDefault();

    const _nombre_producto = nombre_producto.value;
    const _dinero_producto = dinero_producto.value;
    const _tipo_producto = tipo_producto.value;
    const _categoria_producto = categoria_producto.value;

    const tarjeta = {
        nombre: _nombre_producto,
        dinero: _dinero_producto,
        tipo: _tipo_producto,
        categoria: _categoria_producto,
    };

    fetch('http://localhost:3000/registros', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(tarjeta)
    })

    .then(response => response.json())
    .then(data => {
        console.log('tarjeta registrada:', data);
        cardsForm.reset();
        getCardsList();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
const getCardsList = () => {
    fetch('http://localhost:3000/registros')
    .then(response => response.json())
    .then(data => {
        console.log('Lista de tarjetas:', data);
        updateTarjetaTable(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
};
const updateTarjetaTable = async (tarjetas) => {
    cardsTableBody.innerHTML = '';

    for(const tarjeta of tarjetas) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${tarjeta.nombre}</td>
        <td>${tarjeta.dinero}</td>
        <td>${tarjeta.tipo}</td>
        <td>${tarjeta.categoria}</td>
      `;
    }
}