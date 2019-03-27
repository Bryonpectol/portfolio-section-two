import { mtgdata } from '../data/mtgdata.js';



const allCards = mtgdata.map(myCard => {
    let cardsYeah = mtgdata.find(CARD => {
      return CARD.name === myCard.name;
    });

    return {
      // this is how the script finds the item in the array.
      nAME: cardsYeah.name,
      manaCost: myCard.manaCost
    };
  });

  const mainContainer = document.createElement("div");
  const footerElement = document.createElement('footer');

  mainContainer.className = "container";

  allCards.forEach(myCard => {

      // all of the br elements.

      // this section is to create the html elements.
      let makeElement = document.createElement('div');
      let imageElement = document.createElement('p');
      let cardElement = document.createElement('p');


    // assigning classes.
    makeElement.className = 'box';
    cardElement.className = 'name';
    footerElement.className = 'footeryes';

      // Makes the actual array display on the document.
      makeElement.textContent = myCard.nAME;
      imageElement.textContent = myCard.image;
    //   cardElement = textContent = mycard.


      // Creates the footer.
      footerElement.textContent = "© All rights Reserved. Privacy Policy";
 

      // Appended Childeren, the order the elements appear.
      mainContainer.appendChild(makeElement);
      makeElement.appendChild(cardElement);
    //   makeElement.appendChild(originElement);
      makeElement.appendChild(imageElement);

    //   makeElement.appendChild(br11Element);
      // makeElement.appendChild(cylindersElement);

    //   makeElement.appendChild(br1Element);
     
    //   makeElement.appendChild(yearElement);

    //   makeElement.appendChild(br2Element);
    //   makeElement.appendChild(priceElement);

    //   makeElement.appendChild(br3Element);
    //   makeElement.appendChild(engineElement);

    //   makeElement.appendChild(br4Element);
    //   makeElement.appendChild(hpElement);

    //   makeElement.appendChild(br5Element);
    //   makeElement.appendChild(driveElement);

    //   makeElement.appendChild(br6Element);
    //   makeElement.appendChild(transElement);

    //   makeElement.appendChild(br7Element);
    //   makeElement.appendChild(weightElement);
      
    //   makeElement.appendChild(br12Element);
    //   makeElement.appendChild(mphkphElement);

    //   makeElement.appendChild(br8Element);
    //   makeElement.appendChild(zeroto60Element);

    //   makeElement.appendChild(br9Element);
    //   makeElement.appendChild(mpgElement);

    //   makeElement.appendChild(br10Element);
    //   makeElement.appendChild(torqueElement);
      
    //   makeElement.appendChild(br11Element);
    //   makeElement.appendChild(cylindersElement);

     
  });

  // You need this.
  document.body.appendChild(mainContainer);
  document.body.appendChild(footerElement);

  console.log(allCards);