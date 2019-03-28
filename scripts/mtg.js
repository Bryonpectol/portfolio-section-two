import { mtgdata } from '../data/mtgdata.js';



const allCards = mtgdata.map(myCard => {
    let cardsYeah = mtgdata.find(CARD => {
      return CARD.name === myCard.name;
    });
    return {
      // this is how the script finds the item in the array.
      nAME: myCard.name,
      manaCost: cardsYeah.manaCost
    };
  });

  const mainContainer = document.createElement("p");
  const footerElement = document.createElement('footer');

  mainContainer.className = "container";

  allCards.forEach(myCard => {

      // all of the br elements.

      // this section is to create the html elements.
      let cardsElement = document.createElement('div');
      let imageElement = document.createElement('p');
      let cardElement = document.createElement('p');


    // assigning classes.
    cardsElement.className = 'box';
    cardElement.className = 'name';
    footerElement.className = 'footeryes';

      // Makes the actual array display on the document.
      cardsElement.textContent = myCard.name;
      imageElement.textContent = myCard.manaCost;
    //   cardElement = textContent = mycard.


      // Creates the footer.
      footerElement.textContent = "© All rights Reserved. Privacy Policy";
 

      // Appended Childeren, the order the elements appear.
      mainContainer.appendChild(cardsElement);
      cardsElement.appendChild(imageElement);

