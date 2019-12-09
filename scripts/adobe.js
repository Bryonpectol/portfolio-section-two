import { adobe } from "../data/adobedata.js";

const secContainer = document.createElement("div");
secContainer.className = "secContainerp";

const figurep = document.createElement("div");
figurep.className = "figurep";

const allCars = adobe.map(myCar => {
  let carsYeah = adobe.find(CAR => {
    return CAR.name === myCar.name;
  });

  return {
    // this is how the script finds the item in the array.
    //   nAME: myCar.name,
    mAKE: carsYeah.name,
    role: carsYeah.role,
    image: carsYeah.image,
    type: carsYeah.type,
    ability1: carsYeah.image,
    ability2: carsYeah.ability2,
    ability3: carsYeah.ability3,
    ability4: carsYeah.ability4,
    ability5: carsYeah.ability5,
    ability6: carsYeah.ability6,
    ability7: carsYeah.ability7,
    ability8: carsYeah.ability8,
    ability9: carsYeah.ability9,
    ability10: carsYeah.ability10,
    ability11: carsYeah.ability11,
    ability12: carsYeah.ability12,
    ability13: carsYeah.ability13,
    name: carsYeah.name,

  };
});

allCars.forEach(myCar => {
  //br's
  let br3 = document.createElement("br");
  let br1 = document.createElement("br");
  let abilBr1 = document.createElement('br');
  let abilBr2 = document.createElement('br');
  let abilBr3 = document.createElement('br');
  let abilBr4 = document.createElement('br');
  let abilBr5 = document.createElement('br');
  let abilBr6 = document.createElement('br');
  let abilBr7 = document.createElement('br');
  let abilBr8 = document.createElement('br');
  let abilBr9 = document.createElement('br');
  let abilBr10 = document.createElement('br');
  let abilBr11 = document.createElement('br');
  let abilBr12 = document.createElement('br');
  let abilBr13 = document.createElement('br');
  let br2 = document.createElement("hr");

  // this section is to create the html elements.
  let makeElement = document.createElement("div");
  let roleElement = document.createElement("p");
  let imageElement = document.createElement("img");
  let typeElement = document.createElement("p");
  let ability1Element = document.createElement("img");
  let ability2Element = document.createElement("p");
  let ability3Element = document.createElement("p");
  let ability4Element = document.createElement("p");
  let ability5Element = document.createElement("p");
  let ability6Element = document.createElement("p");
  let ability7Element = document.createElement("p");
  let ability8Element = document.createElement("p");
  let ability9Element = document.createElement("p");
  let ability10Element = document.createElement("p");
  let ability11Element = document.createElement("p");
  let ability12Element = document.createElement("p");
  let ability13Element = document.createElement("p");
  let abilDiv = document.createElement("p");
  let nameElement = document.createElement("div");


  //buttons
  let ability1button = document.createElement("button");
  // let ability2button = document.createElement("button");
  let x = document.createElement('button');
  let otherAbil = document.createElement('button');

  ability1button.innerHTML = "Abilities";
  // ability2button.innerHTML = "Ability 2";
  x.innerHTML = "X";
  otherAbil.innerHTML = "Other Abilities";


  // assigning classes.
  makeElement.className = "box";
  abilDiv.className = "bolso";
  imageElement.className = "imagecard";
  roleElement.className = "role";
  typeElement.className = "role";
  ability1Element.className = "roles";
  ability1button.className = "ability1button";
  otherAbil.className = "ability1button";
  ability2Element.className = "roles";
  ability3Element.className = "roles";
  ability4Element.className = "roles";
  ability5Element.className = "roles";
  ability6Element.className = "roles";
  ability7Element.className = "roles";
  ability8Element.className = "roles";
  ability9Element.className = "roles";
  ability10Element.className = "roles";
  ability11Element.className = "roles";
  ability12Element.className = "roles";
  ability13Element.className = "roles";
  // ability2button.className = "ability2button";
  x.className = "exit";
  // abilDiv.className = "roles";
  nameElement.className = "roles";


  makeElement.textContent = myCar.mAKE;
  roleElement.textContent = myCar.role;
  imageElement.src = myCar.image;
  typeElement.textContent = myCar.type;
  ability1Element.src = myCar.ability1;
  ability2Element.textContent = myCar.ability2;
  ability3Element.textContent = myCar.ability3;
  ability4Element.textContent = myCar.ability4;
  ability5Element.textContent = myCar.ability5;
  ability6Element.textContent = myCar.ability6;
  ability7Element.textContent = myCar.ability7;
  ability8Element.textContent = myCar.ability8;
  ability9Element.textContent = myCar.ability9;
  ability10Element.textContent = myCar.ability10;
  ability11Element.textContent = myCar.ability11;
  ability12Element.textContent = myCar.ability12;
  ability13Element.textContent = myCar.ability13;
  abilDiv.textContent = myCar.mAKE;
  nameElement.textContent = myCar.ability1;

  secContainer.appendChild(makeElement);
  makeElement.appendChild(br2);
  makeElement.appendChild(typeElement);
  makeElement.appendChild(roleElement);
  makeElement.appendChild(br1);
  makeElement.appendChild(imageElement);
  makeElement.appendChild(br3);
  makeElement.appendChild(ability1button);
  // makeElement.appendChild(otherAbil);
  // makeElement.appendChild(ability2button);


  ability1button.onclick = function() {
    Ability1();
  };

  function Ability1() {
    // makeElement.appendChild(ability1Element);

    abilDiv.appendChild(x); 

    abilDiv.appendChild(nameElement);

    abilDiv.appendChild(abilBr1);

    abilDiv.appendChild(ability2Element);

    abilDiv.appendChild(abilBr2);

    abilDiv.appendChild(ability3Element);

    abilDiv.appendChild(abilBr3);

    abilDiv.appendChild(ability4Element);

    abilDiv.appendChild(abilBr4);

    abilDiv.appendChild(ability5Element);

    abilDiv.appendChild(abilBr5);
    
    abilDiv.appendChild(ability6Element);

    abilDiv.appendChild(abilBr6);

    abilDiv.appendChild(ability7Element);

    abilDiv.appendChild(abilBr7);

    abilDiv.appendChild(ability8Element);

    abilDiv.appendChild(abilBr8);

    abilDiv.appendChild(ability9Element);

    abilDiv.appendChild(abilBr9);


    secContainer.appendChild(abilDiv);
    
    
  }

  x.onclick = function() {
    exit();
  };

  function exit () {
    secContainer.removeChild(abilDiv);
  }

  
  // otherAbil.onclick = function() {
  //   others();
  // };

  // function others() {

  //   abilDiv.appendChild(x); 

  //   abilDiv.appendChild(ability10Element);

  //   abilDiv.appendChild(abilBr10);

  //   abilDiv.appendChild(ability11Element);

  //   abilDiv.appendChild(abilBr11);

  //   abilDiv.appendChild(ability12Element);

  //   abilDiv.appendChild(abilBr12);

  //   abilDiv.appendChild(ability13Element);

  //   abilDiv.appendChild(abilBr13);

  //   mainContainer.appendChild(abilDiv);
  
  // }

  // ability2button.onclick = function() {
  //   Ability2();
  // };

  // function Ability2() {
  //   makeElement.appendChild(ability2Element);
  // }
});

document.body.appendChild(secContainer);

console.log(adobe);
