import Swal from 'sweetalert2';
import './style.css'

const button = document.querySelector('button');
const input = document.querySelector('input');
const span = document.getElementsByClassName('info');

button.addEventListener('click', handleClick);

function creatSpan(data) {
  const infoCep = Object.values(data);
  for (let i = 0; i <= span.length; i += 1) {
    span[i].innerHTML = infoCep[i];
  }
}

async function handleClick() {
  try {
    const result = await fetch(`https://viacep.com.br/ws/${input.value}/json/`);
    const data = await result.json();
    creatSpan(data);

    return data;
  } catch (error) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'O CEP precisa ser um CEP válido!',
      background: 'rgb(10, 15, 10)',
      color: '#fff',
      confirmButtonColor: 'rgb(162, 224, 70)'
    });
  }
}
