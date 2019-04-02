import { pokemon } from '../data/pokemon.js'

class Pokemon {
    constructor(id) {
        this.id = id
    }
}

const mainContainer = document.querySelector('.container')

function cardFront(pokeData) {
    let cardFront = document.createElement('div')
    let card = document.createElement('div')
    card.className = 'box'
    let figure = document.createElement('figure')
    let caption = document.createElement('figcaption')
    let image = document.createElement('img')
}

function cardBack(pokeData) {
    let cardBack = document.createElement('div');
    return cardBack
}

function createPokeCard(pokeData) {
    

    caption.textContent = pokeData.name
    if(pokeData.id !== 0) {
        image.src = `../images/${pokeData.imageID}${pokeData.name}.png`
    } else {
        image.src = `../images/pokeball.png`
    }
    
    figure.appendChild(image)
    figure.appendChild(caption)
    cardFront.appendChild(figure)
    return cardFront
    mainContainer.appendChild(card)
}


// pokemon.forEach(singleMon => {
//     fetch(singleMon.url)
//     .then(function(response) {
//       return response.json()
//     })
//     .then(function(myJson) {
//       createPokeCard(myJson)
//     })
// })

function matchIdToImage(aPokemon) {
    if(aPokemon.id < 10) {
        aPokemon.imageID = "00" + aPokemon.id
    }
    if(aPokemon.id > 9 && aPokemon.id < 100 ) {
        aPokemon.imageID = "0" + aPokemon.id
    }
    if(aPokemon.id > 99) {
        aPokemon.imageID = aPokemon.id
    }
    aPokemon.name = aPokemon.name.charAt(0).toUpperCase() + aPokemon.name.slice(1)
    return aPokemon
}

function fetchSinglePokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(function(response) {
        return response.json()
    })
    .then(function(retrievedPokemon) {
        console.log(typeof(retrievedPokemon.id))
        
        createPokeCard(retrievedPokemon)
    })
}


const newPokemonButton = document.querySelector('button')

newPokemonButton.addEventListener('click', function() {
    let pokemonID = prompt('Enter an ID of an existing pokemon:')
    fetchSinglePokemon(pokemonID)
  });



