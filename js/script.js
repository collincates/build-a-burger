const dishes = [
    {
    name: 'Burger',
    imageLink: 'https://openclipart.org/download/9079/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.svg',
    },
    {
    name: 'BurgerExplained',
    imageLink: 'https://openclipart.org/download/309325/1541081610.svg',
    },
]
const orderTicketData = [
  {
    name: 'Cheeseburger',
    ingredients: [
      'Bread',
      'Meat',
      'Lettuce',
      'Tomato',
      'Cheese',
      'Onion',
      'Ketchup',
      'Mustard',
    ]
  },
  {
    name: 'Hamburger',
    ingredients: [
      'Bread',
      'Meat',
      'Lettuce',
      'Tomato',
      'Onion',
    ]
  },
  {
    name: 'Double Cheeseburger',
    ingredients: [
      'Bread',
      'Meat',
      'Meat',
      'Cheese',
      'Cheese',
      'Lettuce',
      'Tomato',
      'Onion',
    ]
  },
  {
    name: 'Veggie Burger',
    ingredients: [
      'Bread',
      'Veggie Patty',
      'Cheese',
      'Lettuce',
      'Tomato',
      'Onion',
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
    name: 'Bread',
    imageLink: 'https://openclipart.org/download/249336/bread.svg',
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
    name: 'Mushrooms',
    imageLink: 'https://openclipart.org/download/26150/johnny-automatic-mushrooms-1.svg',
    },
    {
    name: 'Avocado',
    imageLink: 'https://openclipart.org/download/22454/laobc-Avocado.svg',
    },
    {
    name: 'Fried egg',
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

function startGame() {
  randomizeIngredientImages();

}

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', randomizeIngredientImages);


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


// function to randomly place ingredients
// should 'know' which ingredients are needed for the upcoming recipe(s) in the pipeline
// and place those definitely, then fill the remaining slots with random stuff

// the above function is called after a few recipes are done, more specifically,
// after all of the NEEDED ingredients are used on the recipes


// The ingredient images should appear in a different order every time
// the game is played. This function uses the custom function shuffle(array)
// to ensure this randomization. randomizeIngredientImages is called at
// the beginning of each game.
function randomizeIngredientImages() {
    const ingredientImageDivs = document.getElementsByClassName('ingredient-image-container');
    let shuffledIngredients = shuffle(ingredients.slice());

    for (i = 0; i < ingredientImageDivs.length; i++) {
        let image = document.createElement('img');
        image.name = shuffledIngredients[i].name;
        image.src = shuffledIngredients[i].imageLink;
        image.style.maxHeight = '100%';
        image.style.maxWidth = '100%';
        ingredientImageDivs[i].appendChild(image);
        ingredientImageDivs[i].addEventListener('click', crossOffItem);
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
            orderIngredientsList[i].style.backgroundColor = 'gray';
        }
    }
}

while (orderTicketsDiv.children.length > 0) {
    orderTicketsDiv.children[0].setAttribute('id', 'active-ticket');
}
// make active order ticket
// orderTicket.className = 'order-ticket active-ticket';

// function to check when all items on recipe list are checked off,

// remove recipe from order tickets

// make next recipe in array the order-ticket active-ticket class

// generate new recipe at end of array

// slide all recipes over
