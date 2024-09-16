
export function getIngredients(data) {
  let ingredients = [];

  // Loop through each recipe
  for (let i = 0; i < data.length; i++) {
    const recipe = data[i];

    // Loop through each ingredient in the recipe
    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ingredient = recipe.ingredients[j].ingredient.toLowerCase();
      const capitalizedIngredient = capitalize(ingredient);

      // Add the ingredient to the list if it's not already included
      if (!ingredients.includes(capitalizedIngredient)) {
        ingredients.push(capitalizedIngredient);
      }
    }
  }

  return ingredients;
}

export function getUstensils(data) {
  let ustensils = [];

  // Loop through each recipe
  for (let i = 0; i < data.length; i++) {
    const recipe = data[i];

    // Loop through each ustensil in the recipe
    for (let j = 0; j < recipe.ustensils.length; j++) {
      const ustensil = recipe.ustensils[j].toLowerCase();
      const capitalizedUstensil = capitalize(ustensil);

      // Add the ustensil to the list if it's not already included
      if (!ustensils.includes(capitalizedUstensil)) {
        ustensils.push(capitalizedUstensil);
      }
    }
  }

  return ustensils;
}

export function getAppliances(data) {
  let appliances = [];

  // Loop through each recipe
  for (let i = 0; i < data.length; i++) {
    const recipe = data[i];
    const appliance = recipe.appliance.toLowerCase();
    const capitalizedAppliance = capitalize(appliance);

    // Add the appliance to the list if it's not already included
    if (!appliances.includes(capitalizedAppliance)) {
      appliances.push(capitalizedAppliance);
    }
  }

  return appliances;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


