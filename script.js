const STORAGE = [
  { "name": "Tom Collins", "category": "Ordinary Drink", "glass": "Collins glass", "instructions": "In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a collins glass alomst filled with ice cubes. Add the club soda. Stir and garnish with the cherry and the orange slice.", "image": "https://www.thecocktaildb.com/images/media/drink/7cll921606854636.jpg", "ingredients": ["2 oz Gin", "1 oz Lemon juice", "1 tsp superfine Sugar", "3 oz Club soda", "1 Maraschino cherry", "1 Orange",] },
  { "name": "Old Fashioned", "category": "Cocktail", "glass": "Old-fashioned glass", "instructions": "Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved.Fill the glass with ice cubes and add whiskey. Garnish with orange twist, and a cocktail cherry.", "image": "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg", "ingredients": ["4.5 cL Bourbon", "2 dashes Angostura bitters", "1 cube Sugar", "dash Water",] },
  { "name": "Mojito", "category": "Cocktail", "glass": "Highball glass", "instructions": "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.", "image": "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg", "ingredients": ["2-3 oz Light rum", "Juice of 1 Lime", "2 tsp Sugar", "2-4 Mint", "Top w/ Soda water",] },
  { "name": "Margarita", "category": "Ordinary Drink", "glass": "Cocktail glass", "instructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.", "image": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg", "ingredients": ["1 1/2 oz Tequila", "1/2 oz Triple sec", "1 oz Lime juice", "Salt",] },
  { "name": "Daiquiri", "category": "Ordinary Drink", "glass": "Cocktail glass", "instructions": "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.", "image": "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg", "ingredients": ["1 1/2 oz Light rum", "Juice of 1/2 Lime", "1 tsp Powdered sugar",] }, { "name": "Gimlet", "category": "Cocktail", "glass": "Martini Glass", "instructions": "Add all the ingredients to a shaker and fill with ice. Shake, and strain into a chilled cocktail glass or an Old Fashioned glass filled with fresh ice. Garnish with a lime wheel.", "image": "https://www.thecocktaildb.com/images/media/drink/3xgldt1513707271.jpg", "ingredients": ["2 1/2 oz Gin", "1/2 oz Lime Juice", "1/2 oz Sugar Syrup", "1 Lime",] },
  { "name": "Mimosa", "category": "Ordinary Drink", "glass": "Champagne flute", "instructions": "Ensure both ingredients are well chilled, then mix into the glass. Serve cold.", "image": "https://www.thecocktaildb.com/images/media/drink/juhcuu1504370685.jpg", "ingredients": ["Chilled Champagne", "2 oz Orange juice",] },
  { "name": "Moscow Mule", "category": "Punch / Party Drink", "glass": "Copper Mug", "instructions": "Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish.", "image": "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg", "ingredients": ["2 oz Vodka", "2 oz Lime juice", "8 oz Ginger ale",] },
  { "name": "Whiskey Sour", "category": "Ordinary Drink", "glass": "Old-fashioned glass", "instructions": "Shake with ice. Strain into chilled glass, garnish and serve. If served 'On the rocks', strain ingredients into old-fashioned glass filled with ice.", "image": "https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg", "ingredients": ["2 oz Blended whiskey", "Juice of 1/2 Lemon", "1/2 tsp Powdered sugar", "1 Cherry", "1/2 slice Lemon",] },
  { "name": "Boulevardier", "category": "Cocktail", "glass": "Martini Glass", "instructions": "Stir with ice, strain, garnish and serve.", "image": "https://www.thecocktaildb.com/images/media/drink/km84qi1513705868.jpg", "ingredients": ["1 oz Campari", "1 oz Sweet Vermouth", "1 1/4 oz Rye whiskey", "1 Orange Peel",] },
  { "name": "Bloody Mary", "category": "Ordinary Drink", "glass": "Old-fashioned glass", "instructions": "Stirring gently, pour all ingredients into highball glass. Garnish.", "image": "https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg", "ingredients": ["1 1/2 oz Vodka", "3 oz Tomato juice", "1 dash Lemon juice", "1/2 tsp Worcestershire sauce", "2-3 drops Tabasco sauce", "1 wedge Lime",] },
  { "name": "Espresso Martini", "category": "Cocktail", "glass": "Cocktail glass", "instructions": "Pour ingredients into shaker filled with ice, shake vigorously, and strain into chilled martini glass", "image": "https://www.thecocktaildb.com/images/media/drink/n0sx531504372951.jpg", "ingredients": ["5 cl Vodka", "1 cl Kahlua", "1 dash Sugar syrup",] },
  { "name": "Long Island Iced Tea", "category": "Ordinary Drink", "glass": "Highball glass", "instructions": "Mix all contents in a highball glass and sitr gently. Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist.", "image": "https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg", "ingredients": ["1/2 oz Vodka", "1/2 oz Tequila", "1/2 oz Light rum", "1/2 oz Gin", "1 dash Coca-Cola", "Twist of Lemon peel",] },
  { "name": "Spritz", "category": "Ordinary Drink", "glass": "Old-Fashioned glass", "instructions": "Build into glass over ice, garnish and serve.", "image": "https://www.thecocktaildb.com/images/media/drink/j9evx11504373665.jpg", "ingredients": ["6 cl Prosecco", "4 cl Campari", "splash Soda Water",] },
  { "name": "Mai Tai", "category": "Ordinary Drink", "glass": "Collins glass", "instructions": "Shake all ingredients with ice. Strain into glass. Garnish and serve with straw.", "image": "https://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg", "ingredients": ["1 oz Light rum", "1/2 oz Orgeat syrup", "1/2 oz Triple sec", "1 1/2 oz Sweet and sour", "1 Cherry",] },
  { "name": "Negroni", "category": "Ordinary Drink", "glass": "Old-fashioned glass", "instructions": "Stir into glass over ice, garnish and serve.", "image": "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg", "ingredients": ["1 oz Gin", "1 oz Campari", "1 oz Sweet Vermouth",] },
  { "name": "Martini", "category": "Cocktail", "glass": "Cocktail glass", "instructions": "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.", "image": "https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg", "ingredients": ["1 2/3 oz Gin", "1/3 oz Dry Vermouth", "1 Olive",] },
  { "name": "Sazerac", "category": "Ordinary Drink", "glass": "Old-fashioned glass", "instructions": "Rinse a chilled old-fashioned glass with the absinthe, add crushed ice, and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Add the lemon peel for garnish.", "image": "https://www.thecocktaildb.com/images/media/drink/vvpxwy1439907208.jpg", "ingredients": ["1 tsp Ricard", "1/2 tsp superfine Sugar", "2 dashes Peychaud bitters", "1 tsp Water", "2 oz Bourbon", "1 twist of Lemon peel",] },
  { "name": "Pina Colada", "category": "Ordinary Drink", "glass": "Collins glass", "instructions": "Mix with crushed ice in blender until smooth. Pour into chilled glass, garnish and serve.", "image": "https://www.thecocktaildb.com/images/media/drink/upgsue1668419912.jpg", "ingredients": ["3 oz Light rum", "3 tblsp Coconut milk", "3 tblsp Pineapple",] },
  { "name": "Sidecar", "category": "Ordinary Drink", "glass": "Cocktail glass", "instructions": "Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass.", "image": "https://www.thecocktaildb.com/images/media/drink/x72sik1606854964.jpg", "ingredients": ["2 oz Cognac", "1/2 oz Cointreau", "1 oz Lemon juice",] },
  { "name": "French 75", "category": "Ordinary Drink", "glass": "Collins glass", "instructions": "Combine gin, sugar, and lemon juice in a cocktail shaker filled with ice. Shake vigorously and strain into a chilled champagne glass. Top up with Champagne. Stir gently.", "image": "https://www.thecocktaildb.com/images/media/drink/hrxfbl1606773109.jpg", "ingredients": ["1 1/2 oz Gin", "2 tsp superfine Sugar", "1 1/2 oz Lemon juice", "4 oz Chilled Champagne", "1 Orange", "1 Maraschino cherry",] },
  { "name": "Manhattan", "category": "Cocktail", "glass": "Cocktail glass", "instructions": "Stirred over ice, strained into a chilled glass, garnished, and served up.", "image": "https://www.thecocktaildb.com/images/media/drink/yk70e31606771240.jpg", "ingredients": ["3/4 oz Sweet Vermouth", "2 1/2 oz Blended Bourbon", "dash Angostura bitters", "2 or 3 Ice", "1 Maraschino cherry", "1 twist of Orange peel",] },
  { "name": "Paloma", "category": "Cocktail", "glass": "Collins glass", "instructions": "Stir together and serve over ice.", "image": "https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg", "ingredients": ["3 oz Grape Soda", "1 1/2 oz Tequila",] },
  { "name": "Cosmopolitan", "category": "Cocktail", "glass": "Cocktail glass", "instructions": "Add all ingredients into cocktail shaker filled with ice. Shake well and double strain into large cocktail glass. Garnish with lime wheel.", "image": "https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg", "ingredients": ["1 1/4 oz Vodka", "1/4 oz Lime juice", "1/4 oz Cointreau", "1/4 cup Cranberry juice",] }];
let answerKey = {};
let checked = {};
let allChoices = {};


// Variables to query select bootstrap elements
const cocktailTitle = document.querySelector('.card-title');
const cocktailImage = document.querySelector('.cocktail-image');
const cocktailInstructions = document.querySelector('.cocktail-instructions');
const multipleChoiceContainer = document.querySelector('.multipleChoiceContainer')
const errorContainer = document.querySelector('.error-container')
const summitButtonContainer = document.querySelector('.summitButtonContainer')

const jsonContainer = document.querySelector('.json')

// Function to handle ingredient selection
const ingreSelected = element => {
  element.addEventListener('change', function() {
    if (this.checked) {
      // add ingredient to checked object
      checked[element.id] = element.value

    } else {
      // remove ingredient from checked object
      delete checked[element.id]

    }
  });
}

// Function to select a random drink from a list of popular drinks
const randomPopularDrink = _ => {
  const popularDrinksList = ['Bloody Mary', 'Boulevardier', 'Cosmopolitan', 'Daiquiri', 'Espresso martini', 'French 75', 'Gimlet', 'Long Island iced', 'Mai Tai', 'Manhattan', 'Margarita', 'Martini', 'Mimosa', 'Mojito', 'Moscow mule', 'Negroni', 'Old fashioned', 'Paloma', 'Piña colada', 'Sazerac', 'Sidecar', 'Spritz', 'Tom Collins', 'Whiskey sour']
  const randomIndex = Math.floor(Math.random() * popularDrinksList.length);
  return popularDrinksList[randomIndex];
}

// Function to add random ingredients to the drink
const randomIngredients = dataIngredient => {
  let concateddataIngredient = dataIngredient.replace(/ /g, "")
  const randomIngredientsList = [{ "id": 20, "ingredient": "2 oz Gin" },
  { "id": 21, "ingredient": "1 oz Lemonjuice" },
  { "id": 22, "ingredient": "1 tsp super fine Sugar" },
  { "id": 23, "ingredient": "3 oz Club soda" },
  { "id": 24, "ingredient": "1 Maraschino cherry" },
  { "id": 25, "ingredient": "1 Orange" },
  { "id": 26, "ingredient": "1 Lemon" },
  { "id": 27, "ingredient": "1 Lime" },
  { "id": 28, "ingredient": "1/2 oz Vodka" },
  { "id": 29, "ingredient": "1 oz Rum" },
  { "id": 30, "ingredient": "1 oz Whiskey" },
  { "id": 31, "ingredient": "2 oz Tequila" },
  { "id": 32, "ingredient": "1 oz Brandy" },
  { "id": 33, "ingredient": "1 oz Cognac" },
  { "id": 34, "ingredient": "1 oz Bourbon" },
  { "id": 35, "ingredient": "1 oz Scotch" },
  { "id": 36, "ingredient": "1/2 oz Rye" },
  { "id": 37, "ingredient": "1 cup Cranberry juice" },
  { "id": 38, "ingredient": "1/2 oz Tomato juice" },
  { "id": 39, "ingredient": "1/2 oz Worcestershire sauce" },
  { "id": 40, "ingredient": "1/2 oz Hot sauce" },
  { "id": 41, "ingredient": "1/2 oz Tabasco" },
  { "id": 42, "ingredient": "1/2 oz Lime juice" },
  { "id": 43, "ingredient": "1/2 oz Lemon juice" },
  { "id": 44, "ingredient": "1/2 oz Orange juice" },
  { "id": 45, "ingredient": "1/2 oz Pineapple juice" },
  { "id": 46, "ingredient": "1/2 oz Grapefruit juice" },
  { "id": 47, "ingredient": "1/2 oz Apple juice" },
  { "id": 48, "ingredient": "1/2 oz Peach juice" },
  { "id": 49, "ingredient": "1/2 oz Pear juice" },
  { "id": 50, "ingredient": "1/2 oz Mango juice" },
  { "id": 51, "ingredient": "1/2 oz Coconut cream" },
  { "id": 52, "ingredient": "1/2 oz Cream" },
  { "id": 53, "ingredient": "1/2 oz Milk" },
  { "id": 54, "ingredient": "1/2 oz Heavy cream" },
  { "id": 55, "ingredient": "1/2 oz Whipped cream" },
  { "id": 56, "ingredient": "1/2 oz Butter" },
  { "id": 57, "ingredient": "1/2 oz Sugar" },
  { "id": 58, "ingredient": "1/2 oz Honey" },
  { "id": 59, "ingredient": "1/2 oz Syrup" },
  { "id": 60, "ingredient": "1/2 oz Simple syrup" },
  { "id": 61, "ingredient": "1/2 oz Molasses" },


  ]
  const randomIndex = Math.floor(Math.random() * randomIngredientsList.length);
  const randomIngre = randomIngredientsList[randomIndex].ingredient.replace(/ /g, "")

  //TEST TO SEE IF THE RANDOM INGREDIENT IS ALREADY IN THE ANSWER KEY
  //console.log('inside randomIngredients', "answerkey", answerKey, concateddataIngredient, randomIngre, 'OBJECT.VAL', Object.values(answerKey).includes(randomIngre))
  if (concateddataIngredient !== randomIngre && Object.values(answerKey).includes(randomIngre) === false && Object.values(allChoices).includes(randomIngre) === false) {
    allChoices[randomIngredientsList[randomIndex].id] = randomIngredientsList[randomIndex].ingredient.replace(/ /g, "")

    let htmlOutput = `<div style="width:100%"><input type="checkbox" class="btn-check" id=${randomIngredientsList[randomIndex].id} autocomplete="off" value=${randomIngredientsList[randomIndex].ingredient.replace(/ /g, "")} onclick=ingreSelected(this) style="width:100%">
      <label class="btn btn-outline-primary" for=${randomIngredientsList[randomIndex].id} style="width:100%" >${randomIngredientsList[randomIndex].ingredient}</label></div>`

    return htmlOutput
  } else {
    return ''
  }
}

// Fetch data from the API (Pulling from API, no longer needed. Pulled needed data from api into STORAGE)
/*
const data = _ => {
//cocktailapi 
const randomDrink = randomPopularDrink()

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${randomDrink}`)
  .then(response => {
    // Check if the response was successful (e.g., status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the response body as JSON
    return response.json();
  })
  .then(data => {
    // Work with the fetched data
    const drinkObj = {

      name: data.drinks[0].strDrink,
      category: data.drinks[0].strCategory,
      glass: data.drinks[0].strGlass,
      instructions: data.drinks[0].strInstructions,
      image: data.drinks[0].strDrinkThumb,
      ingredients: [
        `${data.drinks[0].strMeasure1} ${data.drinks[0].strIngredient1}`,
        `${data.drinks[0].strMeasure2} ${data.drinks[0].strIngredient2}`,
        `${data.drinks[0].strMeasure3} ${data.drinks[0].strIngredient3}`,
        `${data.drinks[0].strMeasure4} ${data.drinks[0].strIngredient4}`,
        `${data.drinks[0].strMeasure5} ${data.drinks[0].strIngredient5}`,
        `${data.drinks[0].strMeasure6} ${data.drinks[0].strIngredient6}`,
        `${data.drinks[0].strMeasure7} ${data.drinks[0].strIngredient7}`,
        `${data.drinks[0].strMeasure8} ${data.drinks[0].strIngredient8}`,
        `${data.drinks[0].strMeasure9} ${data.drinks[0].strIngredient9}`,
        `${data.drinks[0].strMeasure10} ${data.drinks[0].strIngredient10}`,
        `${data.drinks[0].strMeasure11} ${data.drinks[0].strIngredient11}`,
        `${data.drinks[0].strMeasure12} ${data.drinks[0].strIngredient12}`,
        `${data.drinks[0].strMeasure13} ${data.drinks[0].strIngredient13}`,
        `${data.drinks[0].strMeasure14} ${data.drinks[0].strIngredient14}`,
        `${data.drinks[0].strMeasure15} ${data.drinks[0].strIngredient15}`

      ]
    }

    //STORAGE.push(drinkObj);

    // Bootstrap elements
    cocktailTitle.innerHTML += `${drinkObj.name} is an ${drinkObj.category} in a ${drinkObj.glass}`
    cocktailImage.src = drinkObj.image;
    cocktailImage.alt = drinkObj.name;

    cocktailInstructions.innerHTML += `<p style="width:100%"> <!-- Bootstrap Button to show instructions -->
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample"
          aria-expanded="false" aria-controls="collapseWidthExample" style="width:100%">
          Show Instructions
        </button>
      </p>
      <div>
        <div class="collapse collapse-horizontal" id="collapseWidthExample"
          style="border: none; margin: none; padding: none">
          <div class="card card-body cocktail-instructions" style="border: none;">${drinkObj.instructions}
          </div>
        </div>
      </div>`

    // Loop through the ingredients and add them to the multiple choice container
    for (let j = 0; j < drinkObj.ingredients.length; j++) {
      if (drinkObj.ingredients[j].includes('null')) break;

      // Add Ingredients to the answer key
      answerKey[j] = drinkObj.ingredients[j].replace(/ /g, "")
      allChoices[j] = drinkObj.ingredients[j].replace(/ /g, "")

      // Add Random Ingredients for the multiple choice
      multipleChoiceContainer.innerHTML += randomIngredients(drinkObj.ingredients[j])

      // Add Ingredients to the multiple choice container
      multipleChoiceContainer.innerHTML += `<div style="width:100%"><input type="checkbox" class="btn-check" id=${j} autocomplete="off" value=${drinkObj.ingredients[j].replace(/ /g, "")} onclick=ingreSelected(this) style="width:100%" > 
        <label class="btn btn-outline-primary" for=${j} style="width:100%" >${drinkObj.ingredients[j]}</label></div>`

} // End of for loop



  }).then(_ => {

    let parent = document.getElementById("shuffle");
    let frag = document.createDocumentFragment();
    while (parent.children.length) {
      frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
    }
    parent.appendChild(frag);


    // ERROR MESSAGE CONTAINER
    errorContainer.innerHTML += `<div class='error-container' style="width:100%"></div>`

    // Add Submit Button to the multiple choice container
    summitButtonContainer.innerHTML += `<button type="button" class="btn btn-outline-success" onclick=submit() style="width:100%" >Submit</button></br>`

  }).catch(error => {
    // Handle any errors that occurred during the fetch operation
    console.error('Err:', error);
  });
}
*/

const loadData = _ => {
  const randomIndex = Math.floor(Math.random() * STORAGE.length);
  const randomCocktail = STORAGE[randomIndex]

  // Bootstrap elements
  cocktailTitle.innerHTML += `${randomCocktail.name} is a ${randomCocktail.category} in a ${randomCocktail.glass}`
  cocktailImage.src = randomCocktail.image;
  cocktailImage.alt = randomCocktail.name;

  cocktailInstructions.innerHTML += `<p style="width:100%"> <!-- Bootstrap Button to show instructions -->
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample"
      aria-expanded="false" aria-controls="collapseWidthExample" style="width:100%">
      Show Instructions
    </button>
  </p>
  <div>
    <div class="collapse collapse-horizontal" id="collapseWidthExample"
      style="border: none; margin: none; padding: none">
      <div class="card card-body cocktail-instructions" style="border: none;">${randomCocktail.instructions}
      </div>
    </div>
  </div>`


  // Loop through the ingredients and add them to the multiple choice container
  for (let j = 0; j < randomCocktail.ingredients.length; j++) {
    if (randomCocktail.ingredients[j].includes('null')) break;

    // Add Ingredients to the answer key
    answerKey[j] = randomCocktail.ingredients[j].replace(/ /g, "")
    allChoices[j] = randomCocktail.ingredients[j].replace(/ /g, "")

    // Add Random Ingredients for the multiple choice
    multipleChoiceContainer.innerHTML += randomIngredients(randomCocktail.ingredients[j])

    // Add Ingredients to the multiple choice container
    multipleChoiceContainer.innerHTML += `<div style="width:100%"><input type="checkbox" class="btn-check" id=${j} autocomplete="off" value=${randomCocktail.ingredients[j].replace(/ /g, "")} onclick=ingreSelected(this) style="width:100%" > 
    <label class="btn btn-outline-primary" for=${j} style="width:100%" >${randomCocktail.ingredients[j]}</label></div>`

  } // End of for loop

  let parent = document.getElementById("shuffle");
  let frag = document.createDocumentFragment();
  while (parent.children.length) {
    frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
  }
  parent.appendChild(frag);


  // ERROR MESSAGE CONTAINER
  errorContainer.innerHTML += `<div class='error-container' style="width:100%"></div>`

  // Add Submit Button to the multiple choice container
  summitButtonContainer.innerHTML += `<button type="button" class="btn btn-outline-success" onclick=submit() style="width:100%" >Submit</button></br>`


}


// Event listener for the "Fetch Data From API" button
window.addEventListener('load', _ => {
  // Your code to execute after the page and all resources are fully loaded
  //data(() - old code
  loadData()
});


// Function to handle answer key and users selection. 
// If the user selects the correct ingredients, the user will be able to move on to the next drink. If the user selects the wrong ingredients, the user will be able to try again.
const submit = _ => {
  let answerClone = JSON.stringify({ ...answerKey })
  let checkedClone = JSON.stringify({ ...checked })
  const errorContainer = document.querySelector('.error-container')
  console.log('allChoices', allChoices)
  console.log('a', answerClone)
  console.log('c', checkedClone)

  // check to see if answers are correct  
  if (answerClone === checkedClone) {
    errorContainer.innerHTML = ''
    summitButtonContainer.innerHTML = ''
    multipleChoiceContainer.innerHTML += `</br><button type="button" class="btn btn-success" onclick=nextDrink()>Next</button>`
    window.scrollTo(0, document.body.scrollHeight);
    checked = {}
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(checkbox => {
      checkbox.checked = false;
    });

  } else {
    errorContainer.innerHTML = ''
    errorContainer.innerHTML += '<button type="button" class="btn btn-outline-danger disabled" style="width:100%" >Try Again</button>'

    checked = {}
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
    setTimeout((_ => {
      errorContainer.innerHTML = '';
    }), 5000)

  }

}

const nextDrink = _ => {
  cocktailTitle.innerHTML = '';
  cocktailImage.src = '';
  cocktailImage.alt = '';
  cocktailInstructions.innerHTML = '';
  multipleChoiceContainer.innerHTML = '';
  errorContainer.innerHTML = '';
  summitButtonContainer.innerHTML = '';
  loadData()
}
