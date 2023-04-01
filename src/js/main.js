const botoesCarrossel = document.querySelectorAll('.botao');
const carrosselImagem = document.querySelectorAll('.imagem');

// dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
//desativar botao selecionado
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
//marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');
// esconder a imagem ativa de fundo
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa')
// fazer apararecer a imagem de fundo correspondente ao botão clicado
        carrosselImagem[indice].classList.add('ativa')     
    })
})