function alterarStatus(id) {
    let jogosAlugados = 0;

    function contarEExibirJogosAlugados() {
        console.log(`Total de jogos alugados: ${jogosAlugados}`);
    }

    let gameClick = document.getElementById(`game-${id}`);
    let imagem = gameClick.querySelector('.dashboard__item__img');
    let button = gameClick.querySelector('.dashboard__item__button');
    let nomeJogo = gameClick.querySelector('.dashboard__item__name');

    /**
     * Confirmação antes de devolver o jogo
     */
    if (confirm(imagem.classList.contains('dashboard__item__img--rented'))) {
        imagem.classList.remove('dashboard__item__img--rented');
        button.classList.remove('dashboard__item__button--return')
        button.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Devolver';
    }

    contarEExibirJogosAlugados();
}
/**
 * Inicializa a contagem considerando que os jogos já começam alugados
 */
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});