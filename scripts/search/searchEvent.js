//Input do tipo text para pesquisa
const exampleInput = document.querySelector('#exampleInput');

//Array de objetos para utilizar como exemplo
const prods = [
    {
        id: 1,
        name: 'iPhone 1',
        price: 100
    },
    {
        id: 2,
        name: 'xiaomi 2',
        price: 200
    },
    {
        id: 3,
        name: 'samsung 3',
        price: 300
    }
]

//Array para armazenar os itens pesquisados, inicialmente vazio
let itemsSearched = []

exampleInput.addEventListener('input', (event) => {
    itemsSearched = filterSearch(event, prods)
})


/**
 * filtra um array de objetos pelo baseado no valor do input e retorna o array filtrado.
 *
 * @param {Event} event - O evento que ativa o filtro.
 * @param {Array} arr - O array a ser filtrado.
 * @returns {Array} - O array filtrado.
 */
function filterSearch (event, arr) {

    // Pega o valor do input
    const filter = event.target.value
    
    // Filtra o array baseado no valor do input
    const filterArr = arr.filter((item) => {
        // Checa se o nome do item contem o valor do input (sempre em minusculo)
        return item.name.toLowerCase().includes(filter.toLowerCase())
    })

    // Retorna o array filtrado
    return filterArr
}

/* Documentação sobre o metodo filter e includes:

filter >> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 

includes >> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes*/
