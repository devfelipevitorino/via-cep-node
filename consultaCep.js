const axios = require('axios');

async function consultarCep(cep) {
    try{
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

        if(response.data.erro) {
            console.log('CEP não encontrado!');
        }else{
            console.log('Dados do endereço:');
            console.log(`Logradouro: ${response.data.logradouro}`);
            console.log(`Complemento: ${response.data.complemento}`);
            console.log(`Unidade: ${response.data.unidade}`);
            console.log(`Bairro: ${response.data.bairro}`);
            console.log(`Localidade: ${response.data.localidade}`);
            console.log(`UF: ${response.data.uf}`);
            console.log(`Estado: ${response.data.estado}`);
            console.log(`Região: ${response.data.regiao}`);
            console.log(`IBGE: ${response.data.ibge}`);
            console.log(`GIA: ${response.data.gia}`);
            console.log(`DDD: ${response.data.ddd}`);
            console.log(`Siafi: ${response.data.siafi}`);
        }
    }catch (error){
        console.error('Erro ao consultar CEP', error.message);
    }
}

consultarCep(58300970)