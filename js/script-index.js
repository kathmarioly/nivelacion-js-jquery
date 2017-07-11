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
			//llame a los elememntos hieghlighted, para cumplir la condicion. 
		}	
	})
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	//console.log('Voy a pintar la receta: ', recipe);
	var tituloReceta = recipe.name;
	var nombreAutor = recipe.source.name;
	var imagen = "img/recipes/320x350/" + tituloReceta + ".jpg";
	$(".list-recipes").append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">'+ tituloReceta +'</span><span class="metadata-recipe"><span class="author-recipe">' + nombreAutor+ '</span><span class="bookmarks-recipe"><span class="icon-bookmark"></span> </span></span></span><img src=' + imagen + ' /></a>')
}






/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);

	
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}
