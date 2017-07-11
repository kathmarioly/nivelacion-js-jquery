$(document).ready( function(){
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	$(".home .js-back").hide(); 
	renderActivities(activities);
});



$(function(printNews){
	$("#nuevas-recetas").append('NUEVAS RECETAS');

})

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	recipesArray.forEach(function(el){
		if (el.highlighted == true) { 
			renderRecipe(el); 
		}	
	})
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/