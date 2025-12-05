//From API
/*
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
*/
//MixNCraft
const STORAGE = [
  { "name": "Old Fashioned", "category": "Cocktail", "glass": "Rocks glass", "instructions": "Combine ingredients in a rocks glass. Add ice. Garnish with a lemon and orange twist.", "image": "https://images.unsplash.com/photo-1621873495884-845a939892d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2xkJTIwZmFzaGlvbmVkfGVufDB8fDB8fHwy", "ingredients": ["2 1/2 oz Bourbon (or Rye Whiskey)", "1/2 oz Demerara Syrup", "3 Dashes Angostura Bitters", "1 Lemon/Orange twist",] },
  { "name": "Mint Julep", "category": "Cocktail", "glass": "Rocks glass", "instructions": "In a Julep cup or a rocks glass, lightly muddle the mint and simple syrup. Add the burbon and pack tightly with crushed ice. Stir until the cup is frosted on the outside. Top with more crushed ice to form an ice dome and garnish with a few drops of bitters and a mint sprig.", "image": "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWludCUyMGp1bGVwfGVufDB8fDB8fHwy", "ingredients": ["2 1/2 oz Bourbon (or Rye Whiskey)", "1/2 oz Demerara Syrup", "3 Dashes Angostura Bitters", "1 Lemon/Orange twist",] },
  { "name": "Whiskey Sour", "category": "Cocktail", "glass": "Rocks glass", "instructions": "Add all the ingredients to a shaker filled with ice and shake. Strain into a rocks glassed filled with fresh ice. Garnish with a cherry and lemon wedge.", "image": "https://images.unsplash.com/photo-1713720441159-466472b29b54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hpc2tleSUyMHNvdXJ8ZW58MHx8MHx8fDI%3D", "ingredients": ["1 1/2 oz Bourbon", "3/4 oz Fresh lemon juice", "3/4 oz Simple Syrup", "1 Maraschino Cherry",] },
  { "name": "Aviation", "category": "Cocktail", "glass": "Coupe glass", "instructions": "Add all the ingredients to a shaker filled with ice. Shake and strain into a coupe glass.", "image": "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F2022-09-Aviation-Cocktail%2FAviation_Cocktail", "ingredients": ["1 1/2 oz Bourbon", "3/4 oz Fresh lemon juice", "3/4 oz Simple Syrup", "1 Maraschino Cherry",] },
  { "name": "Dry Martini", "category": "Cocktail", "glass": "Cocktail glass", "instructions": "Add all the ingredients to a shaker/mixing glass with ice and stir until very cold. Strain into a chilled cocktail glass. Garnish with a lemon twist.", "image": "https://images.unsplash.com/photo-1694531595953-c74cb2ba9471?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "ingredients": ["2 1/2 oz Gin", "1/2 oz Dry Vermouth", "1 dash orange bitters",] },
  { "name": "Gimlet", "category": "Cocktail", "glass": "Coupe glass", "instructions": "Combine all ingredients in a shaker and add ice. Shake vigorously, until tin is frosted over. Strain into chilled coupe glass. Garnish with lime wheel.", "image": "https://d34nm4jmyicdxh.cloudfront.net/eyJidWNrZXQiOiJjaHJpc3N5LXR1eGVkby1ubzIiLCJrZXkiOiJyZWNpcGUtZ2ltbGV0LWNvY2t0YWlsLXJlY2lwZS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0Ijo2MDAsImZpdCI6ImNvdmVyIn19fQ==", "ingredients": ["2 Gin", "3/4 oz Lime", "3/4 Simple Syrup",] },
  { "name": "Bloddy Mary", "category": "Cocktail", "glass": "Highball glass", "instructions": "Combine all ingredients in a highball glass. Add ice. Garnish with lemon, add celery and olives.", "image": "https://images.unsplash.com/photo-1551734322-f43b0798585a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "ingredients": ["2 Vodka", "5 oz Tomato Juice", "1/2 Fresh Lemon Juice", "1/2 oz Worcestershire", "Pinch Pepper", "Pinch Celery Salt", "Olives & Celery",] },
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
  { "id": 23, "ingredient": "3 oz Club soda" },
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
  cocktailTitle.innerHTML += `${randomCocktail.name} in a ${randomCocktail.glass}`
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
    allChoices = {}
    answerKey = {}
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
