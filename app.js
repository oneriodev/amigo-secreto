// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar o nome de um amigo ao array
function adicionarAmigo() {
    const input = document.getElementById('amigo'); // Captura o valor do campo de entrada
    const nomeAmigo = input.value.trim(); // Remove espaços extras antes e depois do nome

    // Valida se o campo não está vazio
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.'); // Exibe um alerta caso o campo esteja vazio
        return; // Interrompe a execução da função
    }

    // Se o nome for válido, adiciona ao array
    amigos.push(nomeAmigo);

    // Exibe o nome na lista no HTML
    const listaAmigos = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nomeAmigo;
    listaAmigos.appendChild(li);

    // Limpa o campo de entrada após adicionar o nome
    input.value = '';
}

// Função para exibir todos os amigos na lista HTML
function exibirAmigos() {
    const listaAmigos = document.getElementById('listaAmigos'); // Obtém o elemento da lista

    // Limpa a lista antes de adicionar novos elementos
    listaAmigos.innerHTML = '';

    // Percorre o array de amigos e adiciona cada um como <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li'); // Cria um novo elemento <li>
        li.textContent = amigos[i]; // Define o texto do <li> como o nome do amigo
        listaAmigos.appendChild(li); // Adiciona o <li> à lista HTML
    }
}

// Função para sortear um amigo secreto aleatoriamente
function sortearAmigo() {
    // Verifica se há amigos na lista para sortear
    if (amigos.length === 0) {
        alert('Não há amigos para sortear. Adicione nomes primeiro.');
        return; // Se não houver amigos, interrompe a execução da função
    }

    // Gera um índice aleatório entre 0 e o comprimento do array - 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado usando o índice aleatório
    const amigoSorteado = amigos[indiceAleatorio];

    // Atualiza o conteúdo da lista de resultados com o nome sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}
