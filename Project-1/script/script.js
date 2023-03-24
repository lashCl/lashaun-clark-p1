const openingTitles = document.querySelectorAll('.opening-title');
const openingDetails = document.querySelector('#opening-details');

openingTitles.forEach((openingTitle) => {
  openingTitle.addEventListener('click', () => {
    openingDetails.innerHTML = '';

    const openingName = document.createElement('h3');
    openingName.textContent = openingTitle.textContent;
    openingDetails.appendChild(openingName);

    const openingDescription = document.createElement('p');
    switch (openingTitle.textContent) {
      case 'Ruy Lopez':
        openingDescription.textContent =
          "The Ruy Lopez is a popular chess opening that begins with the moves 1.e4 e5 2.Nf3 Nc6 3.Bb5. It is one of the oldest openings, named after a Spanish bishop from the 16th century who wrote one of the first books on chess. The Ruy Lopez is favored by many top players because it puts pressure on black's position and can lead to a strong attack.";
        break;
      case 'Sicilian Defense':
        openingDescription.textContent =
          "The Sicilian Defense is a chess opening played by black. It is one of the most aggressive and popular openings, and has been played by many top players throughout history. The opening begins with the moves 1.e4 c5. The Sicilian Defense allows black to control the center of the board and puts pressure on white's position.";
        break;
      case 'French Defense':
        openingDescription.textContent =
          "The French Defense is a chess opening played by black. It is a solid and positional opening, often used by players who prefer to play a slower game. The opening begins with the moves 1.e4 e6. The French Defense aims to control the center of the board and restrict white's pawn advances.";

        break;
      case 'Caro-Kann Defense':
        openingDescription.textContent =
          'The Caro-Kann Defense is a chess opening played by black. It is a solid and defensive opening, often used by players who prefer a more passive style of play. The opening begins with the moves 1.e4 c6. The Caro-Kann Defense aims to control the center of the board and create a solid pawn structure.';
        break;
      case "Queen's Gambit":
        openingDescription.textContent =
          "The Queen's Gambit Declined is a chess opening played by black. It is a solid and defensive opening, often used by players who prefer to play a more strategic game. The opening begins with the moves 1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Bg5 Be7 5.e3 O-O. The Queen's Gambit Declined aims to control the center of the board and develop the pieces in a coordinated way.";
        break;
      default:
        openingDescription.textContent = 'No information available.';
    }

    openingDetails.appendChild(openingDescription);
  });
});
