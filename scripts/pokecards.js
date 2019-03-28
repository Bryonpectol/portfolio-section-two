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
      let title = document.createElement('h2')
      let image = document.createElement('img')

      let UpperName = pokedata.name.charAt(0).toUpperCase() + pokedata.name.slice(1)
      title.textContent = UpperName
      image.src = pokedata.sprites.front_shiny
      card.appendChild(title)
      card.appendChild(image)
    mainContainer.appendChild(card)
  }

  pokemon.forEach((singleMon) => {
    fetch(singleMon.url)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      createpokecard(myJson)
    });
  
  })


