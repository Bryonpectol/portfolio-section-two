import { pokemon } from '../data/pokemon.js';

console.log(pokemon);


class Pokemon {
  constructor(id) {
    this.id = id
  }
}

const mainContainer = document.querySelector('.container')

  function createpokecard(pokedata) {
      let card = document.createElement('div')
      card.className = 'box'
      let figure = document.createElement('figure')
      let caption = document.createElement('figcaption')
      let title = document.createElement('h2')
      let image = document.createElement('img')

      
      caption.textContent = pokedata.name
      if(pokedata.id !== 0) {
        image.src = ""
      }
      title.textContent = UpperName
      figure.appendChild(image)
     figure.appendChild(caption)
      card.appendChild(title)
      card.appendChild(image)
    mainContainer.appendChild(card)
  }

  // pokemon.forEach((singleMon) => {
  //   fetch(singleMon.url)
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(myJson) {
  //     createpokecard(myJson)
  //   });
  
  // })

  function fetchSinglePokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(function(response) {
      return response.json();
    })
    .then(function(retrievePokemon) {
      console.log(retrievePokemon.id)
      if(retrievePokemon.id < 10) {
          retrievePokemon.imageID = "00" + retrievePokemon.id
        }
        if(retrievePokemon.id > 9 && retrievePokemon.id < 100) {
          retrievePokemon.imageID = "00" + retrievePokemon.id
        }

        if(retrievePokemon.id > 99) {
          retrievePokemon.imageID = retrievePokemon.id
        }

      retrievePokemon.name = retrievePokemon.name.charAt(0).toUpperCase() + retrievePokemon.name.slice(1)

      createpokecard(retrievePokemon)
    });
  }
  

const newPokemonButton = document.querySelector('button')

newPokemonButton.addEventListener('click', function() {
  let pokemonID = prompt('Enter an ID')
  fetchSinglePokemon(pokemonID)
  // const retrievePokemon = fetchSinglePokemon((pokemonID))
  // console.log(retrievePokemon)
  //

  // createpokecard(retrievePokemon)
});
