const cardsForm = document.getElementById('cardsForm');
const nombreBancoInput = document.getElementById('nombreBanco');
const numeroCuenta = document.getElementById('numeroCuenta');
const saldoInput = document.getElementById('saldo');
const cardsTableBody = document.getElementById('cardsTableBody');

window.addEventListener('DOMContentLoaded', () => {
    getCardsList();
  });
  
  cardsForm.addEventListener('submit', e => {
    e.preventDefault();
  
    const nombreBanco = nombreBancoInput.value;
    const saldo = saldoInput.value;
  
    const tarjeta = {
      nombre: nombreBanco,
      saldo: saldo
    };
  
    fetch('http://localhost:3000/tarjetas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
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
    fetch('http://localhost:3000/tarjetas')
      .then(response => response.json())
      .then(data => {
        console.log('Lista de tarjetas:', data);
        updateTarjetaTable(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  const updateTarjetaTable = async (tarjetas) => {
    cardsTableBody.innerHTML = '';
  
    for (const tarjeta of tarjetas) {  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${tarjeta.nombre}</td>
        <td>${tarjeta.saldo}</td>
      `;
      cardsTableBody.appendChild(row);
    }
  };
