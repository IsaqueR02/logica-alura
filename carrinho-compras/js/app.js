let totalGeral;
limpar();

function adicionar() {
    /**
     * Recuperar os valores nome do produto, quantidade e valor
     */
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnit = produto.split('R$')[1];
    let qtndProduct = document.getElementById('quantidade').value;
    /**
      * calcular o preço sendo o nosso subtotal
      */
    let preco = qtndProduct * valorUnit;
    let carrinho = document.getElementById('lista-produtos');
    /** 
      * adicionar no carrinho
      * */
     carrinho.innerHTML = carrinho.innerHTML + `
  <section
    class="carrinho__produtos__produto">
    <span class="texto-azul">${qtndProduct}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;
    /** 
      * atualizar o valor total
      */
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;

    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    // Verificar se a quantidade inserida é válida
    if (isNaN(qtndProduct) || qtndProduct <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }
}

function limpar() {
  /**
   * limpa toda aplicação para fazer uma nova compra
   */
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$0';
}
