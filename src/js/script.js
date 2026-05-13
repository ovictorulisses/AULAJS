// objetos

const produto = {
    nome: 'Mouse Gamer',
    preco: 89.90,
    categoria: 'Informática',
    // aqui podem ir mais caracteristicas (chava: valor,)
};

console.log(produto);
console.log(produto.nome);

// ##################################################
// Array - Lista

// const nomes = ['texto', 1, 4.5, true, [], {}] // posso colocar aqui tudo que o javascript suporta


const nomes = ['Ana', 'Carlos', 'Mariana'];

console.log(nomes);
console.log(nomes[1]);

// ##################################################
// Lista de objetos - base para JSON

const produtos = [
    {
        nome: 'Teclado Mecânico',
        preco: 199.90,
        categoria: 'Informática'
    },
    {
        nome: 'Monitor 24',
        preco: 749.90,
        categoria: 'Informática'
    },
    {
        nome: 'Cadeira gamer',
        preco: 899.90,
        categoria: 'Móveis'
    },    
];

produtos.forEach((produto) => {
    console.log(produto.nome);
});

produtos.forEach((produto) => {
    console.log(`${produto.nome} - R$ ${produto.preco}`);
});

const listaProdutos = document.getElementById('lista-produtos');

produtos.forEach((produto) => {
    listaProdutos.innerHTML += `
        <div class='card'>
            <h2>${produto.nome}</h2>
            <p><strong>Preço: </strong>${produto.preco}</p>
            <p><strong>Categoria: </strong>${produto.categoria}</p>
        </div>
    `;
})