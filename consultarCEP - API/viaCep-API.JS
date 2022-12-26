

function consultar(){
    let cepConsultado = document.getElementById('cep').value
    console.log(cepConsultado)

    
    //Requisição sem precisar acessar o site pelo navegador.
    const ajax = new XMLHttpRequest();
    ajax.open('GET', `https://viacep.com.br/ws/${cepConsultado}/json/`)
    ajax.send();

    ajax.onload = function(){
        let convertCEP = JSON.parse(this.responseText);
        
        let cep = convertCEP.cep;
        let logradouro = convertCEP.logradouro;
        let bairro = convertCEP.bairro;
        let localidade = convertCEP.localidade;
        let uf = convertCEP.uf;

        document.getElementById('cep-consultado').innerHTML = `CEP: ${cep} <br> logradouro: ${logradouro} <br> bairro: ${bairro} <br> localidade: ${localidade} <br> estado: ${uf} <br>`
    }
};

