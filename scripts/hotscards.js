import { heros } from '../data/hots.js';

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

const allCars = heros.map(myCar => {
    let carsYeah = heros.find(CAR => {
      return CAR.name === myCar.name;
    });

    return {
      // this is how the script finds the item in the array.
    //   nAME: myCar.name,
      mAKE: carsYeah.name,
      role: carsYeah.role,
      image: carsYeah.image,
      type: carsYeah.type,
      ability1: carsYeah.ability1,
      ability2: carsYeah.ability2,
    };
  });

  allCars.forEach(myCar => {

    //br's
    let br3 = document.createElement('br');
    let br1 = document.createElement('br');
    let br2 = document.createElement('hr');

    // this section is to create the html elements.
    let makeElement = document.createElement('div');
    let roleElement = document.createElement('p');
    let imageElement = document.createElement('img');
    let typeElement = document.createElement('p');
    let ability1Element = document.createElement('p');
    let ability1button = document.createElement('button');
    let ability2Element = document.createElement('p');
    let ability2button = document.createElement('button');


  // assigning classes.
  makeElement.className = 'box';
  imageElement.className = 'imagecard';
  roleElement.className = 'role';
  typeElement.className = 'role';
  ability1Element.className = 'roles';
  ability1button.className = 'ability1button';
  ability2Element.className = 'roles';
  ability2button.className = 'ability2button';


    makeElement.textContent = myCar.mAKE;
    roleElement.textContent = myCar.role;
    imageElement.src = myCar.image;
    typeElement.textContent = myCar.type;
    ability1Element.textContent = myCar.ability1;
    ability2Element.textContent = myCar.ability2;


    
    mainContainer.appendChild(makeElement);
    makeElement.appendChild(br2);
    makeElement.appendChild(typeElement);
    makeElement.appendChild(roleElement);
    makeElement.appendChild(br1);
    makeElement.appendChild(imageElement);
    makeElement.appendChild(br3);
    makeElement.appendChild(ability1button);
    makeElement.appendChild(ability2button);
    
    ability1button.onclick = function() {Ability1()};

    function Ability1() {
      makeElement.appendChild(ability1Element);
    }

    ability2button.onclick = function() {Ability2()};

    function Ability2() {
      makeElement.appendChild(ability2Element);
    }
    
});

document.body.appendChild(mainContainer);

console.log(heros)