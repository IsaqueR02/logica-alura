function sortear(){
    /**
     * Declaro oos valores que serão retornados
     */
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    /**
     * Array para inserir os números que retornarão
     */
    let sorteados = [];
    let numero;

    /**
     * Estrutura de Repetição para que imprima os valores até o limite
     * definido para sortear
     */
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero)
    }

    alert(sorteados);
}

/**
 * Função que irá receber os valores aléatorios que serão inseridos
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}