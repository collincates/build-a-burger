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
      'Pickle',
      'Lettuce'
    ]
  },
  {
    name: 'Cheeseburger',
    ingredients: [
      'Bun',
      'Pineapple',
      'Egg',
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
      'Pineapple',
      'Lettuce',
      'Tomato',
      'Onion',
      'Pickle'
    ]
  },
  {
    name: 'Veggie Burger',
    ingredients: [
      'Bun',
      'Mustard',
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
      'Mustard',
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
      'Mustard',
      'Cheese',
      'Avocado',
      'Lettuce',
      'Tomato',
      'Ketchup',
      'Onion',
    ]
  },
  {
    name: 'Veggie Burger',
    ingredients: [
      'Bun',
      'Mushroom',
      'Egg',
      'Cheese',
      'Avocado',
      'Mustard',
      'Lettuce',
      'Pickle'
    ]
  },
]
const tools = [
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

]
const ingredients = [
    {
    name: 'Bun',
    imageMonochrome: './images/bun.svg',
    imageColor: './images/bun_color.svg',
    },
    {
    name: 'Lettuce',
    imageMonochrome: './images/lettuce.svg',
    imageColor: './images/lettuce_color.svg',
    },
    {
    name: 'Tomato',
    imageMonochrome: './images/tomato.svg',
    imageColor: './images/tomato_color.svg',
    },
    {
    name: 'Meat',
    imageMonochrome: './images/meat.svg',
    imageColor: './images/meat_color.svg',
    },
    {
    name: 'Cheese',
    imageMonochrome: './images/cheese.svg',
    imageColor: './images/cheese_color.svg',
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
    name: 'Bacon',
    imageMonochrome: './images/bacon.svg',
    imageColor: './images/bacon_color.svg',
    },
    {
    name: 'Mushroom',
    imageMonochrome: './images/mushroom.svg',
    imageColor: './images/mushroom_color.svg',
    },
    {
    name: 'Avocado',
    imageMonochrome: './images/avocado.svg',
    imageColor: './images/avocado_color.svg',
    },
    {
    name: 'Egg',
    imageMonochrome: './images/egg.svg',
    imageColor: './images/egg_color.svg',
    },
    {
    name: 'Pineapple',
    imageMonochrome: './images/pineapple.svg',
    imageColor: './images/pineapple_color.svg',
    },
    {
      name: 'Ketchup',
      imageMonochrome: './images/ketchup.svg',
      imageColor: './images/ketchup_color.svg',
    },
    {
    name: 'Mustard',
    imageMonochrome: './images/mustard.svg',
    imageColor: './images/mustard_color.svg',
    },
    {
    name: 'Fries',
    imageMonochrome: './images/fries.svg',
    imageColor: './images/fries_color.svg',
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
    imageDiv.style.backgroundImage = 'url(' + shuffledIngredients[i].imageColor + ')';
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
  let orderIngredientsList = activeOrderTicket.children[0].children;

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
    ticket.style.left = i * 210 + 'px';
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
  let activeListItems = Array.from(activeOrderTicket.children[0].children);

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
        ticket.style.left = i * 210 + 'px';
      });
      // shift recipe from order tickets
      orderTicketsDiv.children[0].remove();
      // make next recipe in array the order-ticket active-ticket class
      orderTicketsDiv.children[0].setAttribute('id', 'active-ticket');
      orderTicketsDiv.children[0].setAttribute('complete', 'false');

      // Move position of all tickets
      orderTickets = document.querySelectorAll('.order-ticket');
      orderTickets.forEach((ticket1,i1) => {
        ticket1.style.left = i1 * 210 + 'px';
      });
      scorePoint();
    }, 10);
  }
}
