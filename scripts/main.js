import { films } from './data/films.js/'
import { planets } from '../data/planets.js'


films.sort((a,b) => (a.episode_id > b.episode_id) ? 1 : -1);

// const result = films.filter(film => film.)

const intro = document.querySelector('.intro')

films.forEach((films) => {

    let tile = document.createElement('div');

    let titleElement = document.createElement('h1')
    let crawlElement = document.createElement('h3')

    titleElement.textContent = films.title
    crawlElement.textContent = films.opening_crawl

    tile.appendChild(titleElement)
    tile.appendChild(crawlElement)

    intro.appendChild(tile);
})


// let titleElement = document.querySelector('.title')
// let crawlElement = document.querySelector('.crawl')

// titleElement.textContent = films[0].title
// crawlElement.textContent = films[0].opening_crawl