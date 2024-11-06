import '../css/style.css'
import { getCEPData} from "./fetchCEP.js";

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Qual seu CEP?</h1>
    <div>
        <input type="text" name="cep" id="cep_field">
        <button type="submit" id="cep_get">GET</button>
    </div>
    <h2 id="cep">-</h2>
  </div>
`

document.querySelector('#cep_get').addEventListener('click', function () {
  const cepInput = document.querySelector('#cep_field').value; 
  const resultadoElement = document.querySelector('#cep'); 
  
  
  if (cepInput.trim() !== '') {
      getCEPData(cepInput, resultadoElement); 
  } else {
      alert('Por favor, digite um CEP válido.');
  }
});