import { people } from '../data/people.js';
import { planets } from '../data/planets.js';












men.forEach((man) => {
let manElement = document.createElement('div');
manElement.className = 'box';
manElement.textContent = man.name;
let eyeColor = document.createElement('p');
eyeColor.textContent = man.eye_color;
manElement.appendChild(eyeColor);
mainContainer.appendChild(manElement);
});

document.body.appendChild(mainContainer);