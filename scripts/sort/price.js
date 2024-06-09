
/* Array de objetos para utilizar como exemplo */

let prods = [
    {
        id: 1,
        name: 'iPhone 1',
        price: 100
    },
    {
        id: 2,
        name: 'iPhone 2',
        price: 200
    },
    {
        id: 3,
        name: 'iPhone 3',
        price: 300
    }
]

/**
 * Filtra um array de objetos pelo preço e retorna o array ordenado.
 *
 * @param {string} filter - o filtro a ser aplicado, deve ser 'min' ou 'max'.
 * @returns {Array} - o array ordenao.
 */
function filterByPrice(filter) {
    
    /* cria um array para ser retornado apos ser ordenado */

    // ordena o array baseado no filtro
    const sortedArr = prods.sort((a, b) => {

        // Se o filtro for 'min'
        if (filter === 'min') {
            // esta expressão ordena o array em ordem ascendente (menor para maior)
            return a.price - b.price
        }

        // esta expressão ordena o array em ordem descendente (maior para menor)
        return b.price - a.price
    });

    // retorna o array ordenado
    return sortedArr;
}

function filterSameArray (filter) {

    // não recomendo, melhor criar outro array para os itens ordenados e usar o prods como base
    
    // não retorna nenhum valor, porém o array prods vai ser ele mesmo ordenado

    prods = prods.sort((a, b) => {
        if (filter === 'min') {
            return a.price - b.price
        }
        return b.price - a.price
    })


}


/* Explicação completa e detalhada na documentação: 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort */