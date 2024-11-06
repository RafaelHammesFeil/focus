export async function getCEPData(cep, element) {
    const url = `https://viacep.com.br/ws/${cep}/json/`; 

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    try {
        const response = await fetch(url, {
            headers: headers
        });

        if (response.ok) {
            const data = await response.json();
            
            element.innerHTML = `${data.logradouro}, ${data.complemento} - ${data.bairro}
            <br>${data.localidade}/${data.uf}, ${data.cep}
            <br>DDD(${data.ddd}) - ${data.regiao}`;
        } else {
            element.innerHTML = 'CEP não encontrado';
        }
    } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
        element.innerHTML = 'Erro ao buscar o CEP.';
    }
}

