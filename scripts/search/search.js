//Input do tipo text para pesquisa
const searchBtn = document.querySelector('#search');

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

searchBtn.addEventListener('click', (event) => {
    event.preventDefault()
    // a diferença é que o filtro não é a cada tecla, e sim quando o client clica para esquisar já com o valor inserido.
    // aqui o filterSearch vai retornar o array filtrado.
    // e o parametro filter que a função recebe, vai ser o valor do input.
    itemsSearched = filterSearch(event.target.value, prods)
})

function filterSearch (filter, arr) {
    
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
