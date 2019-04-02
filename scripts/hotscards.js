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
      type: carsYeah.type
   
    };
  });

  allCars.forEach(myCar => {


    // this section is to create the html elements.
    let makeElement = document.createElement('div');
    let roleElement = document.createElement('p');
    let imageElement = document.createElement('img');
    let br1 = document.createElement('br');
    let typeElement = document.createElement('p');
    let br2 = document.createElement('hr');


  // assigning classes.
  makeElement.className = 'box';
  imageElement.className = 'imagecard';

    makeElement.textContent = myCar.mAKE;
    roleElement.textContent = myCar.role;
    imageElement.src = myCar.image;
    typeElement.textContent = myCar.type;


    
    mainContainer.appendChild(makeElement);
    makeElement.appendChild(br2);
    makeElement.appendChild(typeElement);
    makeElement.appendChild(roleElement);
    makeElement.appendChild(br1);
    makeElement.appendChild(imageElement);
    

   
});

document.body.appendChild(mainContainer);

console.log(heros)