const STORAGE = [
  { "name": "Old Fashioned", "category": "Cocktail", "glass": "Rocks glass", "instructions": "Combine ingredients in a rocks glass. Add ice. Garnish with a lemon and orange twist.", "image": "https://images.unsplash.com/photo-1621873495884-845a939892d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2xkJTIwZmFzaGlvbmVkfGVufDB8fDB8fHwy", "ingredients": ["2 1/2 oz Bourbon (or Rye Whiskey)", "1/2 oz Demerara Syrup", "3 Dashes Angostura Bitters", "1 Lemon/Orange twist",] },
  { "name": "Mint Julep", "category": "Cocktail", "glass": "Rocks glass", "instructions": "In a Julep cup or a rocks glass, lightly muddle the mint and simple syrup. Add the burbon and pack tightly with crushed ice. Stir until the cup is frosted on the outside. Top with more crushed ice to form an ice dome and garnish with a few drops of bitters and a mint sprig.", "image": "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWludCUyMGp1bGVwfGVufDB8fDB8fHwy", "ingredients": ["2 1/2 oz Bourbon (or Rye Whiskey)", "1/2 oz Demerara Syrup", "3 Dashes Angostura Bitters", "1 Lemon/Orange twist",] },
  { "name": "Whiskey Sour", "category": "Cocktail", "glass": "Rocks glass", "instructions": "Add all the ingredients to a shaker filled with ice and shake. Strain into a rocks glassed filled with fresh ice. Garnish with a cherry and lemon wedge.", "image": "https://images.unsplash.com/photo-1713720441159-466472b29b54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hpc2tleSUyMHNvdXJ8ZW58MHx8MHx8fDI%3D", "ingredients": ["1 1/2 oz Bourbon", "3/4 oz Fresh lemon juice", "3/4 oz Simple Syrup", "1 Maraschino Cherry",] },
  { "name": "Aviation", "category": "Cocktail", "glass": "Coupe glass", "instructions": "Add all the ingredients to a shaker filled with ice. Shake and strain into a coupe glass.", "image": "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F2022-09-Aviation-Cocktail%2FAviation_Cocktail", "ingredients": ["1 1/2 oz Bourbon", "3/4 oz Fresh lemon juice", "3/4 oz Simple Syrup", "1 Maraschino Cherry",] },
  { "name": "Dry Martini", "category": "Cocktail", "glass": "Cocktail glass", "instructions": "Add all the ingredients to a shaker/mixing glass with ice and stir until very cold. Strain into a chilled cocktail glass. Garnish with a lemon twist.", "image": "https://images.unsplash.com/photo-1694531595953-c74cb2ba9471?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "ingredients": ["2 1/2 oz Gin", "1/2 oz Dry Vermouth", "1 dash orange bitters",] },
  { "name": "Gimlet", "category": "Cocktail", "glass": "Coupe glass", "instructions": "Combine all ingredients in a shaker and add ice. Shake vigorously, until tin is frosted over. Strain into chilled coupe glass. Garnish with lime wheel.", "image": "https://d34nm4jmyicdxh.cloudfront.net/eyJidWNrZXQiOiJjaHJpc3N5LXR1eGVkby1ubzIiLCJrZXkiOiJyZWNpcGUtZ2ltbGV0LWNvY2t0YWlsLXJlY2lwZS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0Ijo2MDAsImZpdCI6ImNvdmVyIn19fQ==", "ingredients": ["2 Gin", "3/4 oz Lime", "3/4 Simple Syrup",] },
  { "name": "Bloody Mary", "category": "Cocktail", "glass": "Highball glass", "instructions": "Combine all ingredients in a highball glass. Add ice. Garnish with lemon, add celery and olives.", "image": "https://images.unsplash.com/photo-1551734322-f43b0798585a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "ingredients": ["2 oz Vodka", "5 oz Tomato Juice", "1/2 Fresh Lemon Juice", "1/2 oz Worcestershire", "Pinch Pepper", "Pinch Celery Salt", "Olives & Celery",] },
  { "name": "Moscow Mule", "category": "Cocktail", "glass": "Collins Glass or Moscow Mule Mug", "instructions": "Squeeze lime juice into Glass/Mug and drop in spent rind. Add 2/3 ice cubes, then pour in the vodka and fill with cold ginger beer (NOT ginger ale! or w.e). Garnish with a lemon wheel and a mint sprig.", "image": "https://images.unsplash.com/photo-1633152685816-8cd4a7443c84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9zY293JTIwbXVsZXxlbnwwfHwwfHx8Mg%3D%3D", "ingredients": ["2 oz Vodka", "1/2 oz Lime Juice", "6 oz Ginger beer", "Mint Sprig",] },
  { "name": "Cosmopolitan", "category": "Cocktail", "glass": "Cocktail Glass", "instructions": "Combine all ingredients in shaker and add ice. Shake vigorously, until tin is frosted over. Strain into chilled cocktail glass. Garnish with lime twist.", "image": "https://images.unsplash.com/photo-1632987788901-0c090e5f4eaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29zbW9wb2xpdGFufGVufDB8fDB8fHwy", "ingredients": ["1 1/2 oz Citrus Vodka", "1 oz Contreau", "1/2 oz Fresh Lime Juice", "1/2 oz Cranberry Juice",] },
  { "name": "Paloma", "category": "Cocktail", "glass": "Highball Glass", "instructions": "Add the tequila and lime juice to a highball glass filled with ice. Fill with grapefruit soda, and stir briefly. Garnish with a grapefruit wheel.", "image": "https://www.simplyrecipes.com/thmb/gx3OyWf1Hb6C-6upuFGwn4t-s-o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Paloma-Recipe-Drink-LEAD-01-834e4ff7aa4f4eb49d0d3273b7bcc166.jpg", "ingredients": ["2 oz Reposado or Blanco tequila", "1 oz Lime", "1 pinch of salt", "Grapefruit soda as needed.",] },
  { "name": "Margarita", "category": "Cocktail", "glass": "Margarita Glass", "instructions": "Run a lime around the rim of a margarita glass, then dip into a plate of kosher salt. Add all the ingredients into a shaker with ice, and shake. Strain into the prepared margarita glass over fresh ice. Garnish with a lime wheel.", "image": "https://images.unsplash.com/photo-1632987790465-2634b43c4289?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFyZ2FyaXRhfGVufDB8fDB8fHwy", "ingredients": ["2 oz Blanco tequila", "1 oz Fresh Lime Juice", "1/2 oz Orange Liqueur", "1/2 oz Agave Syrup",] },
  { "name": "Manhattan", "category": "Cocktail", "glass": "Coupe Glass", "instructions": "Add all the ingredients to a shaker/mixing glass with ice and stir until well-chilled. Strained into a chilled coupe glass. Garnish with a brandied cherry.", "image": "https://images.unsplash.com/photo-1593659169550-7abacf88550a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuaGF0dGFuJTIwZHJpbmt8ZW58MHx8MHx8fDI%3D", "ingredients": ["2 1/2 oz Rye or Canadian Whiskey", "1 oz Sweet Vermouth", "2 dashes Angostura",] },
  { "name": "Penicillin", "category": "Cocktail", "glass": "Rocks Glass", "instructions": "Add the blended scotch, juice, and syrup to a shaker with ice and shake. Strain into a rocks glass over fresh ice. Top with the single-malt scotch. Garnish with 1 piece of candied ginger", "image": "https://thetasteedit.com/wp-content/uploads/2022/12/Penicillin-cocktail-cookbook-recipe-thetasteedit-sarah-stanfield-.jpg", "ingredients": ["2 oz Blended Scoth Whiskey", "1/2 oz Ginger Liqour", "3 Spoonfuls Honey water (3:1 honey to water)", "3/4 oz Fresh Lemon Juice", "1/4 oz Islay single-malt scotch", "1 piece of candied ginger"] },
  { "name": "Mimosa", "category": "Cocktail", "glass": "Champagne Flute", "instructions": "Fill champagne flute 1/3 full of fresh-squeezed orange juice. Top up with Brut champagne. Add the teaspoon of Frand marnier or other orange liqueur. Garnish with an orange slice.", "image": "https://images.unsplash.com/photo-1555766720-1e727844cc8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWltb3NhfGVufDB8fDB8fHwy", "ingredients": ["2 oz Orange juice", "4 oz Brut champagne", "1 tsp. Grand Marniier (optional)", "Orange slice",] },
  { "name": "Pisco Sour", "category": "Cocktail", "glass": "Cocktail Glass", "instructions": "Combine all ingredients in a shaker and add ice. Shake vigorously, until tin is frosted over. Strain into chilled cocktail glass. Garnish with Angostura bitters and a lemon wheel.", "image": "https://images.unsplash.com/photo-1696594935685-1ad6ba69e83e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGlzY28lMjBzb3VyfGVufDB8fDB8fHwy", "ingredients": ["2 oz Pisco", "1 oz Lime", "3/4 oz Simple Syrup", "1 egg white (optional)",] },
  { "name": "Long Island Iced Tea", "category": "Cocktail", "glass": "Collins Glass", "instructions": "Combine all ingredients except the cola into a Collins glass with ice. Top with a splash of cola and stir briefly. Garnish with a lemon wedge", "image": "https://images.unsplash.com/photo-1643660090242-6a7322d18be9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZyUyMGlzbGFuZCUyMGljZWQlMjB0ZWF8ZW58MHx8MHx8fDI%3D", "ingredients": ["3/4 oz Gin", "3/4 oz White Rum", "3/4 oz Vodka", "3/4 oz Silver Tequila", "3/4 oz Triple Sec", "1 oz Lemon Juice", "3/4 oz Simple Syrup", "Cola to top"] },
  { "name": "Pina Colada", "category": "Cocktail", "glass": "Hurricane Glass", "instructions": "Add all the ingredients to a shaker and fill with ice. Shake, then strain into a Hurricane Glass filled with fresh ice. (Can also blend with crushed ice). Garnish with cherry and pineapple wedge.", "image": "https://www.onceuponachef.com/images/2023/07/pina-coladas-1200x1600.jpg", "ingredients": ["1 1/2 oz Light or gold Rum", "2 oz Coconut milk", "2 oz Pineapple Juice", "Maraschino Cherries", "Pineapple Wedge"] },
  { "name": "Mojito", "category": "Cocktail", "glass": "Highball Glass", "instructions": "In a shaker, lightly muddle the mint. Add the rum, simple syrup, and lime juice. Fill with ice and strain. Pour into a highball glass. Top with club soda. Garnish with mint sprig.", "image": "https://images.unsplash.com/photo-1653542772393-71ffa417b1c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9qaXRvfGVufDB8fDB8fHwy", "ingredients": ["3 Mint Leaves", "1/2 oz Simple Syrup", "3/4 oz Fresh Lime Juice", "2 oz White Rum", "Soda to Top"] },
  { "name": "Mai Tai", "category": "Cocktail", "glass": "Old Fashioned Glass", "instructions": "Fill an old-fashioned glass with 1 cup crushed ice. Set asidein the freezer. Combine the liqours and lime juice in a cocktail shaker. Add 1 cup ice, cover and shake until chilled.Strain into the chilled old-fashioned glass. Garnish with cherry and pineapple wedge.", "image": "https://images.unsplash.com/photo-1648757997020-94e698e36e55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFpJTIwdGFpfGVufDB8fDB8fHwy", "ingredients": ["3/4 Fresh Lime Juice", "1/2 oz Orgeat Almond Syrup", "1/2 oz Orange curacao liqour", "2 oz aged Rum", "Maraschino Cherries", "Pineapple Wedges"] },
]

// Variables to query select bootstrap elements
const rootDiv = document.querySelector('.root');

const loadData = _ => {
  let bootstrapCard = ''
  for (let i = 0; i < STORAGE.length; i++) {
    bootstrapCard += `
  <div class="card mb-3 htmlBody" style="border: none; margin: 4%;">
   <div class="row g-0">
     <div class="col-md-4">
       <img class="img-fluid rounded-start" src=${STORAGE[i].image} alt=${STORAGE[i].image} >
     </div>
     <div class="col-md-8">
       <div class="card-body">
         <h5 class="card-title cocktail-title">${STORAGE[i].name}</h5>
         <div class="card-text cocktail-instructions">${STORAGE[i].instructions}</div>
        ${loopThroughIngredients(STORAGE[i].ingredients)}
       </div>
     </div>
   </div>
 </div>`

  }
  rootDiv.innerHTML += bootstrapCard


}

const loopThroughIngredients = currentCocktailIngredientsArr => {
  let currentCocktailIngredientsList = ''
  for (let i = 0; i < currentCocktailIngredientsArr.length; i++) {
    currentCocktailIngredientsList += `<div>${currentCocktailIngredientsArr[i]}</div>`
  }
  return currentCocktailIngredientsList
}


// Event listener for the "Fetch Data From API" button
window.addEventListener('load', _ => {
  // Your code to execute after the page and all resources are fully loaded
  loadData()
});


