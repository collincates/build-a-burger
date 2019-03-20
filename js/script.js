const orderTicketData = [
  {
    name: 'Cheeseburger',
    ingredients: [
      'Bun',
      'Meat',
      'Lettuce',
      'Tomato',
      'Cheese',
      'Onion',
    ]
  },
  {
    name: 'Cheeseburger',
    ingredients: [
      'Bun',
      'Mushroom',
      'Avocado',
      'Cheese',
      'Meat',
      'Pickles',
      'Lettuce'
    ]
  },
  {
    name: 'Cheeseburger',
    ingredients: [
      'Bun',
      'Pineapple',
      'Fried Egg',
      'Meat',
      'Lettuce',
      'Cheese',
      'Bacon'
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
    ]
  },
  {
    name: 'Hamburger',
    ingredients: [
      'Bun',
      'Meat',
      'Pickles',
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
      'Pineapple',
      'Lettuce',
      'Tomato',
      'Onion',
      'Pickles'
    ]
  },
  {
    name: 'Veggie Burger',
    ingredients: [
      'Bun',
      'Veggie Patty',
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
      'Veggie Patty',
      'Cheese',
      'Avocado',
      'Lettuce',
      'Tomato',
      'Onion',
    ]
  },
  {
    name: 'Veggie Burger',
    ingredients: [
      'Bun',
      'Veggie Patty',
      'Cheese',
      'Avocado',
      'Lettuce',
      'Tomato',
      'Radish',
      'Onion',
    ]
  },
  {
    name: 'Veggie Burger',
    ingredients: [
      'Bun',
      'Mushroom',
      'Fried Egg',
      'Cheese',
      'Avocado',
      'Veggie Patty',
      'Lettuce',
      'Pickles'
    ]
  },
]
const tools = [
    {
    name: 'Spatula',
    imageLink: 'https://openclipart.org/download/28810/purzen-Cartoon-spatula.svg',
    }
]
const ingredients = [
    {
    name: 'Bun',
    imageLink: 'http://clipart-library.com/data_images/421595.jpg',
    },
    {
    name: 'Lettuce',
    imageLink: 'https://openclipart.org/download/291386/iceberg-lettuce.svg',
    },
    {
    name: 'Tomato',
    imageLink: 'https://openclipart.org/download/225413/mini-tomato.svg',
    },
    {
    name: 'Meat',
    imageLink: 'https://openclipart.org/download/295935/1517841160.svg',
    },
    {
    name: 'Cheese',
    imageLink: 'https://openclipart.org/download/1696/nodanero-Cheese.svg',
    },
    {
    name: 'Onion',
    imageLink: 'https://openclipart.org/download/177511/oignon.svg',
    },
    {
    name: 'Pickles',
    imageLink: 'https://openclipart.org/download/268438/picklesinajar.svg',
    },
    {
    name: 'Bacon',
    imageLink: 'https://openclipart.org/download/209517/food-bacon.svg',
    },
    {
    name: 'Mushroom',
    imageLink: 'https://openclipart.org/download/26150/johnny-automatic-mushrooms-1.svg',
    },
    {
    name: 'Avocado',
    imageLink: 'https://openclipart.org/download/22454/laobc-Avocado.svg',
    },
    {
    name: 'Fried Egg',
    imageLink: 'https://openclipart.org/download/23677/papapishu-Fried-egg.svg',
    },
    {
    name: 'Veggie Patty',
    imageLink: 'https://openclipart.org/download/209651/food-potato-patty.svg',
    },
    {
    name: 'Pineapple',
    imageLink: 'https://openclipart.org/download/248815/Pineapple3.svg',
    },
    {
    name: 'Radish',
    imageLink: 'https://openclipart.org/download/291387/radishes.svg',
    },
    {
    name: 'French Fries',
    imageLink: 'https://openclipart.org/download/314326/1548611385.svg',
    },
]
const condiments = [
    {
    name: 'Ketchup',
    imageLink: 'https://openclipart.org/download/298505/ketchup-bottle-publicdomainvectors.svg',
    },
    {
    name: 'Mustard',
    imageLink: ''
    },
    {
    name: 'Mayonnaise',
    imageLink: '',
    },
    {
    name: 'BBQ sauce',
    imageLink: '',
    },
    {
    name: '',
    imageLink: '',
    },
]
const orderTicketsDiv = document.getElementById('order-tickets');

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', startGame);

startGame();

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (0 != currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// Randomly place ingredients
function randomizeIngredientImages() {
  const ingredientImageDivs = document.getElementsByClassName('ingredient-image-container');
  let shuffledIngredients = shuffle(ingredients.slice());

  for (i = 0; i < ingredientImageDivs.length; i++) {
    let imageDiv = document.createElement('div');
    imageDiv.name = shuffledIngredients[i].name;
    imageDiv.style.backgroundImage = 'url(' + shuffledIngredients[i].imageLink + ')';
    imageDiv.className = 'ingredient';
    ingredientImageDivs[i].appendChild(imageDiv);
    ingredientImageDivs[i].addEventListener('click', crossOffItem);
    ingredientImageDivs[i].addEventListener('click', switchout);
  }
}


function createRandomOrderTicket() {
  let shuffledOrderTickets = shuffle(orderTicketData.slice());
  let currentTicket = shuffledOrderTickets.pop();

  let orderTicket = document.createElement('div');
  orderTicket.className = 'order-ticket';

  let h3 = document.createElement('h3');
  h3.textContent = currentTicket.name;
  orderTicket.appendChild(h3);

  let ul = document.createElement('ul');
  ul.className = 'recipe-items';
  orderTicket.appendChild(ul);

  for (i = 0; i < currentTicket.ingredients.length; i++) {
    let li = document.createElement('li')
    li.textContent = currentTicket.ingredients[i];
    ul.appendChild(li);
  }
  orderTicketsDiv.appendChild(orderTicket);
}


// function to click on ingredient image.
function crossOffItem(event) {
  let clickedIngredient = event.target;
  let activeOrderTicket = document.getElementById('active-ticket');
  let orderIngredientsList = activeOrderTicket.children[1].children;

  for (i = 0; i < orderIngredientsList.length; i++) {
    if (orderIngredientsList[i].textContent === clickedIngredient.name) {
      orderIngredientsList[i].style.textDecoration = 'line-through wavy black';
    }
  }
}

function runClock() {
  let timeRemaining = 30;
  let clockElement = document.getElementById('clock');

  let timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeRemaining == 0) {
      clockElement.textContent = `${timeRemaining}`;
      clearTimeout(timerId);
      clockElement.textContent = "Score:";
      let ingredientImageDivs = document.getElementsByClassName('ingredient-image-container');
      for (let i = 0; i < ingredientImageDivs.length; i++) {
        ingredientImageDivs[i].removeEventListener('click', crossOffItem);
        ingredientImageDivs[i].removeEventListener('click', switchout);
      };
      startButton.addEventListener('click', startGame);

    } else {
      // make this a progress bar
      clockElement.textContent = `${timeRemaining}`;
      timeRemaining--;
    }
  }
}

function startGame() {
  startButton.removeEventListener('click', startGame);
  let startingScore = document.createElement('h1');
  let score = document.getElementById('score');
  let newTicket = createRandomOrderTicket;
  let activeOrderTicket;
  let ingredientImageDivs = document.getElementsByClassName('ingredient-image-container');
  let ingredientDivs = document.getElementsByClassName('ingredient');
  // Remove all order tickets left over from previous game
  for (i = 0; i < orderTicketsDiv.children.length; i++) {
    orderTicketsDiv.children[i].remove();
  }
  // Remove score left over from previous game
  for (i = 0; i < score.children.length; i++) {
    score.children[i].remove();
  }

  // Remove ingredients left over from previous game
  if (ingredientDivs) {
    for (i = ingredientDivs.length -1 ; i >= 0; i--) {
      ingredientDivs[i].remove();
    }
  }

  startingScore.textContent = 0;
  score.appendChild(startingScore);

  runClock();
  randomizeIngredientImages();
  // make new ticket
  newTicket();
  newTicket();
  newTicket();
  newTicket();
  let orderTickets = document.querySelectorAll('.order-ticket');
  orderTickets.forEach((ticket, i) => {
    ticket.style.left = i * 180 + 'px';
  });
  // make the ticket active
  orderTicketsDiv.children[0].setAttribute('id', 'active-ticket');
  activeOrderTicket = document.getElementById('active-ticket');
  activeOrderTicket.setAttribute('complete', 'false');
}


// function to check when all items on recipe list are checked off,
function isItemCrossedOut(listItem) {
  return listItem.style.textDecoration === 'line-through wavy black';
}


function isListComplete() {
  let activeOrderTicket = document.getElementById('active-ticket');
  let activeListItems = Array.from(activeOrderTicket.children[1].children);

  if (activeListItems.every(isItemCrossedOut)) {
    activeOrderTicket.setAttribute('complete', 'true');
    return true;
  }
}

function scorePoint() {
  let score = document.getElementById('score');
  score.children[0].textContent++;
}

function switchout() {
  if (isListComplete()) {
    setTimeout(() => {
      let orderTickets = document.querySelectorAll('.order-ticket');

      // generate new recipe at end of array
      createRandomOrderTicket();

      orderTickets.forEach((ticket, i) => {
        ticket.style.left = i * 180 + 'px';
      });
      // shift recipe from order tickets
      orderTicketsDiv.children[0].remove();
      // make next recipe in array the order-ticket active-ticket class
      orderTicketsDiv.children[0].setAttribute('id', 'active-ticket');
      orderTicketsDiv.children[0].setAttribute('complete', 'false');

      // Move position of all tickets
      orderTickets = document.querySelectorAll('.order-ticket');
      orderTickets.forEach((ticket1,i1) => {
        ticket1.style.left = i1 * 180 + 'px';
      });
      scorePoint();
    }, 10);
  }
}
