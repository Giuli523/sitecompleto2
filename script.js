// Função para adicionar produto ao carrinho
function adicionarCarrinho(nomeProduto) {
    alert(nomeProduto + ' foi adicionado ao carrinho!');
}

// Função para girar as imagens no footer
let index = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function rotateImages() {
    // Remover a classe "active" do item atual
    items[index].classList.remove('active');

    // Avançar para o próximo item
    index = (index + 1) % totalItems;

    // Adicionar a classe "active" ao próximo item
    items[index].classList.add('active');

    // Mover a imagem atual para a posição correta
    const offset = -index * 100;  // Deslocamento de 100% para cada item
    items.forEach(item => {
        item.style.transform = `translateX(${offset}%)`;
    });
}

// Iniciar a rotação das imagens a cada 5 segundos
setInterval(rotateImages, 5000);

// Inicializa a primeira imagem como visível
rotateImages();
// script.js
// Exemplo: Adicionar um evento de clique para um botão
const botaoSimular = document.getElementById('simularParcelas');
botaoSimular.addEventListener('click', () => {
  // Abrir um modal ou redirecionar para outra página
  alert('Simulando parcelas...');
});