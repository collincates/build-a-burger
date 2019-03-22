const orderTicketData = [
  {
    name: 'Cheeseburger',
    ingredients: [
      'Bun',
      'Meat',
      'Cheese',
      'Lettuce',
      'Tomato',
      'Onion',
    ]
  },
  {
    name: 'Cheeseburger',
    ingredients: [
      'Bun',
      'Meat',
      'Cheese',
      'Mushroom',
      'Avocado',
      'Pickle',
      'Lettuce',
    ]
  },
  {
    name: 'Cheeseburger',
    ingredients: [
      'Bun',
      'Meat',
      'Cheese',
      'Lettuce',
      'Pineapple',
      'Egg',
      'Bacon',
    ]
  },
  {
    name: 'Hamburger',
    ingredients: [
      'Bun',
      'Meat',
      'Lettuce',
      'Tomato',
    ]
  },
  {
    name: 'Hamburger',
    ingredients: [
      'Bun',
      'Meat',
      'Pickle',
      'Lettuce',
      'Tomato',
      'Onion',
    ]
  },
  {
    name: 'Hamburger',
    ingredients: [
      'Bun',
      'Meat',
      'Lettuce',
      'Tomato',
      'Onion',
      'Pineapple',
    ]
  },
  {
    name: 'Veggie Burger',
    ingredients: [
      'Bun',
      'Mushroom',
      'Cheese',
      'Lettuce',
      'Tomato',
      'Onion',
    ]
  },
  {
    name: 'Veggie Burger',
    ingredients: [
      'Bun',
      'Cheese',
      'Avocado',
      'Lettuce',
      'Tomato',
      'Mustard',
    ]
  },
  {
    name: 'Veggie Burger',
    ingredients: [
      'Bun',
      'Cheese',
      'Avocado',
      'Lettuce',
      'Onion',
      'Ketchup',
    ]
  },
  {
    name: 'Veggie Burger',
    ingredients: [
      'Bun',
      'Avocado',
      'Mushroom',
      'Cheese',
      'Mustard',
      'Lettuce',
      'Egg',
    ]
  },
]
const tools = [
    {
    name: 'Burger',
    imageMonochrome: './images/burger.svg',
    imageColor: './images/burger_color.svg',
    },
    {
    name: 'Hourglass',
    imageMonochrome: './images/hourglass.svg',
    imageColor: './images/hourglass_color.svg',
    },
    {
    name: 'Info Button',
    imageMonochrome: './images/info_button.svg',
    imageColor: './images/info_button.svg',
    },
    {
      name: 'Spatula',
      imageMonochrome: './images/spatula.svg',
      imageColor: './images/spatula_color.svg',
    },
    {
      name: 'Ticket',
      imageMonochrome: './images/ticket.svg',
      imageColor: './images/ticket_color.svg',
    },
]
const ingredients = [
    {
      name: 'Avocado',
      imageMonochrome: './images/avocado.svg',
      imageColor: './images/avocado_color.svg',
    },
    {
      name: 'Bacon',
      imageMonochrome: './images/bacon.svg',
      imageColor: './images/bacon_color.svg',
    },
    {
      name: 'Bun',
      imageMonochrome: './images/bun.svg',
      imageColor: './images/bun_color.svg',
    },
    {
      name: 'Cheese',
      imageMonochrome: './images/cheese.svg',
      imageColor: './images/cheese_color.svg',
    },
    {
      name: 'Egg',
      imageMonochrome: './images/egg.svg',
      imageColor: './images/egg_color.svg',
    },
    {
      name: 'Fries',
      imageMonochrome: './images/fries.svg',
      imageColor: './images/fries_color.svg',
    },
    {
      name: 'Ketchup',
      imageMonochrome: './images/ketchup.svg',
      imageColor: './images/ketchup_color.svg',
    },
    {
      name: 'Lettuce',
      imageMonochrome: './images/lettuce.svg',
      imageColor: './images/lettuce_color.svg',
    },
    {
      name: 'Meat',
      imageMonochrome: './images/meat.svg',
      imageColor: './images/meat_color.svg',
    },
    {
      name: 'Mushroom',
      imageMonochrome: './images/mushroom.svg',
      imageColor: './images/mushroom_color.svg',
    },
    {
      name: 'Mustard',
      imageMonochrome: './images/mustard.svg',
      imageColor: './images/mustard_color.svg',
    },
    {
      name: 'Onion',
      imageMonochrome: './images/onion.svg',
      imageColor: './images/onion_color.svg',
    },
    {
      name: 'Pickle',
      imageMonochrome: './images/pickle.svg',
      imageColor: './images/pickle_color.svg',
    },
    {
      name: 'Pineapple',
      imageMonochrome: './images/pineapple.svg',
      imageColor: './images/pineapple_color.svg',
    },
    {
      name: 'Tomato',
      imageMonochrome: './images/tomato.svg',
      imageColor: './images/tomato_color.svg',
    },
]

const startPopup = document.getElementById('start-popup');
const startPopupContentParagraph = startPopup.children[0];
const startButton = document.getElementById('start-button');
const score = document.getElementById('score');
const orderTicketsDiv = document.getElementById('order-tickets');
const ingredientImageDivs = document.getElementsByClassName('ingredient-image-container');

startButton.addEventListener('click', hideStartPopup);
startButton.addEventListener('click', startGame);

// let infoButton = document.getElementById('info-button');
// infoButton.addEventListener('click', function() {
//   showStartPopup();
// })

function showStartPopup() {
  startPopup.style.display = 'flex';
}

function hideStartPopup() {
  startPopup.style.display = 'none';
}

function shuffle(array) {
  // This function will mutate the original array and should
  // accept a slice or copy of the original array instead.
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // Iterate backwards through array, randomizing the indexes of all items
  while (0 != currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function randomlyPlaceIngredientImages() {
  // Slice the array to prevent mutation of the original
  let shuffledIngredients = shuffle(ingredients.slice());

  for (i = 0; i < ingredientImageDivs.length; i++) {
    let imageDiv = document.createElement('div');
    imageDiv.name = shuffledIngredients[i].name;
    imageDiv.style.backgroundImage = 'url(' + shuffledIngredients[i].imageColor + ')';
    imageDiv.className = 'ingredient';
    ingredientImageDivs[i].appendChild(imageDiv);
    ingredientImageDivs[i].addEventListener('click', crossOffItem);
    ingredientImageDivs[i].addEventListener('click', switchOrderTicket);
  }
}

function createRandomOrderTicket() {
  let shuffledOrderTickets = shuffle(orderTicketData.slice());
  let randomTicket = shuffledOrderTickets.pop();

  let orderTicket = document.createElement('div');
  orderTicket.className = 'order-ticket';

  let ingredientsUL = document.createElement('ul');
  ingredientsUL.className = 'recipe-items';
  orderTicket.appendChild(ingredientsUL);

  for (i = 0; i < randomTicket.ingredients.length; i++) {
    let ingredientLI = document.createElement('li')
    ingredientLI.textContent = randomTicket.ingredients[i];
    ingredientsUL.appendChild(ingredientLI);
  }
  orderTicketsDiv.appendChild(orderTicket);
}

function crossOffItem(event) {
  let clickedIngredient = event.target;
  let activeOrderTicket = document.getElementById('active-ticket');
  let orderIngredientsList = activeOrderTicket.children[0].children;

  // Check all ingredients on the active ticket for a value
  // that matches the name of the clicked ingredient.
  for (i = 0; i < orderIngredientsList.length; i++) {
    if (orderIngredientsList[i].textContent === clickedIngredient.name) {
      orderIngredientsList[i].style.textDecoration = 'line-through wavy black';
    }
  }
}

function isListComplete() {
  let activeOrderTicket = document.getElementById('active-ticket');
  let activeListItems = Array.from(activeOrderTicket.children[0].children);

  function isItemCrossedOut(listItem) {
    return listItem.style.textDecoration === 'line-through wavy black';
  }

  if (activeListItems.every(isItemCrossedOut)) {
    return true;
  }
}

function distributeTicketSpacing() {
    let orderTickets = document.querySelectorAll('.order-ticket');
    // Move position of all tickets

    orderTickets.forEach((ticket1,i1) => {
      ticket1.style.left = i1 * 210 + 'px';
    });
}

function switchOrderTicket() {
  if (isListComplete()) {
    // Push new order ticket onto array
    createRandomOrderTicket();
    // Shift completed order ticket from array
    orderTicketsDiv.children[0].remove();
    // Make the current first ticket active
    orderTicketsDiv.children[0].setAttribute('id', 'active-ticket');
    // Make sure the newly added ticket is spaced correctly
    distributeTicketSpacing();
    // Increment the game score for the completed ticket
    score.children[0].textContent++;
  }
}

function tallyScore() {
  let scoreText = document.createElement('p');
  scoreText.textContent = `${score.children[0].textContent}`;
  startPopupContentParagraph.insertBefore(scoreText, startButton);
}


function runClock(duration) {
  let timeRemaining = duration;
  let clockElement = document.getElementById('clock');
  let timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeRemaining == 0) {
      clockElement.textContent = `${timeRemaining}`;
      clearTimeout(timerId);
      tallyScore();
      showStartPopup();
      for (let i = 0; i < ingredientImageDivs.length; i++) {
        ingredientImageDivs[i].removeEventListener('click', crossOffItem);
        ingredientImageDivs[i].removeEventListener('click', switchOrderTicket);
      };
      startButton.addEventListener('click', startGame);

    } else {
      // TODO: Make this a progress bar?
      clockElement.textContent = `${timeRemaining}`;
      timeRemaining--;
    }
  }
}

function resetGame() {
  let ingredientDivs = document.getElementsByClassName('ingredient');

  // Remove all order tickets left over from previous game
  for (i = 0; i < orderTicketsDiv.children.length; i++) {
    orderTicketsDiv.children[i].remove();
  }
  // Remove score left over from previous game
  if (score.children[0]) {
    score.children[0].remove();
  }

  // Remove ingredients left over from previous game
  if (ingredientDivs) {
    for (i = ingredientDivs.length -1 ; i >= 0; i--) {
      ingredientDivs[i].remove();
    }
  }

  // Remove score from start popup modal
  if (startPopupContentParagraph.children.length > 1) {
    startPopupContentParagraph.children[0].remove();
  }
}

function startGame() {

  resetGame();

  let activeOrderTicket;
  let ingredientDivs = document.getElementsByClassName('ingredient');
  let startingScore = document.createElement('div');

  startingScore.textContent = 0;
  score.appendChild(startingScore);

  runClock(30);
  randomlyPlaceIngredientImages();

  // Make three new order tickets
  createRandomOrderTicket();
  createRandomOrderTicket();
  createRandomOrderTicket();

  distributeTicketSpacing();

  // Make the first ticket active
  orderTicketsDiv.children[0].setAttribute('id', 'active-ticket');
  activeOrderTicket = document.getElementById('active-ticket');
}

// Start start popup on page load
showStartPopup();
