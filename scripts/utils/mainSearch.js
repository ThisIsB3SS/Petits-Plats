export function mainSearch(recipes, searchedItem, tagArray) {
  const searchedTerm = searchedItem.trim().toLowerCase();
  let filteredRecipes = [];

  if (searchedTerm.length > 0) {
    for (let i = 0; i < recipes.length; i++) {
      const recipe = recipes[i];
      let nameMatch = recipe.name.toLowerCase().includes(searchedTerm);
      let descriptionMatch = recipe.description.toLowerCase().includes(searchedTerm);
      let ingredientMatch = false;

      // Check ingredients
      for (let j = 0; j < recipe.ingredients.length; j++) {
        if (recipe.ingredients[j].ingredient.toLowerCase().includes(searchedTerm)) {
          ingredientMatch = true;
          break; // Exit the loop if an ingredient matches
        }
      }

      if (nameMatch || descriptionMatch || ingredientMatch) {
        filteredRecipes.push(recipe);
      }
    }
  }

  // Check tags
  if (tagArray && tagArray.length > 0) {
    let finalFilteredRecipes = [];
    // Add an intermediate array to store the recipes that match the searched term 
    // if there are no search term, use the recipes array as the intermediate filtered recipes
    let intermediateFilteredRecipes = [];
    if (filteredRecipes.length > 0) {
      intermediateFilteredRecipes = filteredRecipes;
    }
    else {
      intermediateFilteredRecipes = recipes;
    }
    // Loop through the intermediate filtered recipes
    for (let k = 0; k < intermediateFilteredRecipes.length; k++) {
      const recipe = intermediateFilteredRecipes[k];
      let ingredientTagsMatch = true;
      let applianceTagsMatch = false;
      let ustensilTagsMatch = true;

      // Check ingredient tags
      for (let l = 0; l < tagArray.length; l++) {
        let tag = tagArray[l];
        let found = false;

        for (let m = 0; m < recipe.ingredients.length; m++) {
          if (recipe.ingredients[m].ingredient.toLowerCase().includes(tag.toLowerCase())) {
            found = true;
            break; // Exit the loop if an ingredient matches
          }
        }

        if (!found) {
          ingredientTagsMatch = false;
          break; // Exit if an ingredient tag does not match
        }
      }

      // Check appliance
      for (let n = 0; n < tagArray.length; n++) {
        if (recipe.appliance.toLowerCase().includes(tagArray[n].toLowerCase())) {
          applianceTagsMatch = true;
          break; // Exit the loop if an appliance tag matches
        }
      }

      // Check utensils
      for (let o = 0; o < tagArray.length; o++) {
        let tag = tagArray[o];
        let foundUstensil = false;

        for (let p = 0; p < recipe.ustensils.length; p++) {
          if (recipe.ustensils[p].toLowerCase().includes(tag.toLowerCase())) {
            foundUstensil = true;
            break; // Exit the loop if a utensil matches
          }
        }

        if (!foundUstensil) {
          ustensilTagsMatch = false;
          break; // Exit if a utensil tag does not match
        }
      }

      // Add the recipe if it matches the criteria
      if (ingredientTagsMatch || applianceTagsMatch || ustensilTagsMatch) {
        finalFilteredRecipes.push(recipe);
      }
    }

    filteredRecipes = finalFilteredRecipes;
  }

  if (filteredRecipes.length === 0) {
    const mainInput = document.getElementById("main-search-input");
    mainInput.placeholder = `No recipe matches your search "${searchedTerm}"`;
  }
  // Reset the recipes if tagArray is empty && searchedTerm is empty
  if (tagArray.length === 0 && searchedTerm.length === 0) {
    filteredRecipes = recipes;
  }

  return filteredRecipes;
}