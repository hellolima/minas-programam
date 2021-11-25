/* Crie uma lista com os itens e mostre a quantidade de itens */
let itens = ["Ovos", "Feijão", "Macarrão", "Cenoura"];
let quantidade = itens.length
console.log(quantidade)


/* Adicione na última posição o nome Beatriz */
let nomes = ["Jennifer", "Fernanda", "Gabriella", "Amanda"];
nomes.push("Beatriz")
console.log(nomes)

/* Adicione na primeira posição o nome Ana */
nomes.unshift("Ana")
console.log(nomes)


/* Map para não usar o array inicial */
let frutas = ["Banana", "Maçã", "Abacate", "Laranja"]

frutas.map((items, index, arr) => {
    console.log(items)
    console.log(arr)
    console.log(index)
})



let produtos = [
    { id: 123, nome: 'Camiseta', cor: 'azul', tamanho: 'P', categoria: 'Vestuário', estoque: 10, disponivel: true, precoUnitario: 15 },
    { id: 125, nome: 'Regata', cor: 'azul', tamanho: 'GG', categoria: 'Vestuário', estoque: 0, disponivel: false, precoUnitario: 20 },
    { id: 456, nome: 'Calça', cor: 'preto', tamanho: 'GG', categoria: 'Vestuário', estoque: 1, disponivel: true, precoUnitario: 15 },
    { id: 982, nome: 'Tênis', cor: 'amarelo', tamanho: '38', categoria: 'Esportes', estoque: 2, disponivel: true, precoUnitario: 125 },
];

let produtosAcrescimo = produtos.map((items) =>{
    return{
        id: items.id,
        tamanho: items.tamanho,
        precoUnitario: items.precoUnitario * 1.15
    }
})

console.log(produtosAcrescimo)
