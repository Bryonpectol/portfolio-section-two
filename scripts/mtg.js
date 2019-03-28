import { good } from '../data/mtgdata.js';



const allCards = good.map(myCard => {
    let cardsYeah = good.find(CARD => {
      return CARD.name === myCard.name;
    });

    return {
      // this is how the script finds the item in the array.
      nAME: myCard.name,
      maNaCost: myCard.manaCost
    };
  });

  const mainContainer = document.createElement("div");
  const footerElement = document.createElement('footer');

  mainContainer.className = "container";

  allCards.forEach(myCard => {

      // all of the br elements.

      // this section is to create the html elements.
      let cardsElement = document.createElement('div');
      let imageElement = document.createElement('p');
    //   let cardElement = document.createElement('p');


    // assigning classes.
    cardsElement.className = 'box';
    // cardElement.className = 'box';
    

      // Makes the actual array display on the document.
      cardsElement.textContent = myCard.nAME;
      imageElement.textContent = myCard.maNaCost;
    //   cardElement.textContent = myCard.name;
    //   cardElement = textContent = mycard.


      // Creates the footer.
      
 

      // Appended Childeren, the order the elements appear.
      mainContainer.appendChild(cardsElement);
      cardsElement.appendChild(imageElement);

     
  });


  footerElement.className = 'footeryes';
  footerElement.textContent = "© All rights Reserved. Privacy Policy";

  // You need this.
  document.body.appendChild(mainContainer);
  document.body.appendChild(footerElement);

  console.log(allCards);
  console.log(good[0])