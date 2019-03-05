import { people } from '../data/people.js';
import { planets } from '../data/planets.js';

const men = people.filter(person => person.gender === 'male');
const women = people.filter(person => person.gender === 'female');
const other = people.filter(person => (person.gender === 'n/a') || 
(person.gender === 'Hermaphrodite') || (person.gender === 'none'));





const allHomeWorlds = people.map(person => {
    let foundWorld = planets.find(element => {
      return  element.url === person.homeworld
    })
    return {name: person.name, home:  person.homeworld}
});

console.log(allHomeWorlds);

// const peopleAndPlanets = [...people, ...planets]

// const homeWorld = peopleAndPlanets.find(element => {
//     console.log(element.url, element.homeworld)
// })

// console.log(peopleAndPlanets);

const mainContainer = document.createElement('div');

mainContainer.className = 'container';


men.forEach((man) => {
let manElement = document.createElement('div');
manElement.className = 'box';
manElement.textContent = man.name;
let eyeColor = document.createElement('p');
eyeColor.textContent = man.eye_color;
manElement.appendChild(eyeColor);
mainContainer.appendChild(manElement);
});

women.forEach((man) => {
    let manElement = document.createElement('div');
    manElement.className = 'box';
    manElement.textContent = man.name;
    let eyeColor = document.createElement('p');
    eyeColor.textContent = man.eye_color;
    manElement.appendChild(eyeColor);
    mainContainer.appendChild(manElement);
    });

    other.forEach((man) => {
        let manElement = document.createElement('div');
        manElement.className = 'box';
        manElement.textContent = man.name;
        let eyeColor = document.createElement('p');
        eyeColor.textContent = man.eye_color;
        manElement.appendChild(eyeColor);
        mainContainer.appendChild(manElement);
        });


document.body.appendChild(mainContainer);