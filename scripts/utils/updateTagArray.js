import { tagArray } from "../pages/homepage.js";
import { allRecipes } from "../pages/homepage.js";
import { mainSearch } from "./mainSearch.js";
import { showRecipes } from "./showRecipes.js";

const mainInput = document.getElementById("main-search-input");
let filteredRecipes = [];

export function addTagToArray(tag) {
  tagArray.push(tag);

  // Update the search
 filteredRecipes = mainSearch(allRecipes, mainInput.value, tagArray);
 showRecipes(filteredRecipes);
}

export function removeTagFromArray(tag) {
    const index = tagArray.indexOf(tag);
    if (index !== -1) {
    tagArray.splice(index, 1);
    } 
    
    // Update the search
    filteredRecipes = mainSearch(allRecipes, mainInput.value, tagArray);
    showRecipes(filteredRecipes);
  }
  