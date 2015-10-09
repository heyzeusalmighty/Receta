(function() {
  
  'use strict';
  
  angular.module('rect').controller('EditController', EditController);
  
  EditController.$inject= ['DataService', 'toastr', '$location', '$routeParams'];

  function EditController(DataService, toastr, $location, $routeParams) { 
    
    var vm = this;
    
    vm.name = "recipe"; 
    var instructionCounter = 0;
    
    console.info('edit loaded');
    toastr.success('leodadddd');
    vm.recipeId = $routeParams.recipeId || 'dummmmmm';
    
    
    
    DataService.getTags().then(function(data) {
      vm.allTags = data;
      
      DataService.getRecipe(vm.recipeId).then(function(data) {
        console.log(data);
        vm.recipe = data;
        
        var selectedRecipes = data.Tags.map(function(y) { return y.TagId; });
        instructionCounter = vm.recipe.Instructions.length;
      
        for(var i=0; i < vm.allTags.length; i++) {
          if(selectedRecipes.indexOf(vm.allTags[i].TagId) < 0 ) {
            vm.allTags[i].Selected = true;
          }
        }
      });
    });
   
   vm.addNewInstruction = function() {
      instructionCounter++;
      vm.recipe.Instructions.push({id: instructionCounter, instructions:""});
    };
   
   vm.addNewGroup = function() {
    var newGroup = { 'Title': '', 'RecipeId': 0, 'Ingredients': [{ 'Ingredient': '' }] };
    if(vm.recipe.Ingredients === undefined) {
      vm.recipe.Ingredients = [];
    } 
    
    vm.recipe.Ingredients.push(newGroup);
    
   };
   
   vm.addNewIngredient = function(group) {
    var index = vm.recipe.Ingredients.indexOf(group);
    var newIng = { 'Ingredient': '' };
    vm.recipe.Ingredients[index].Ingredients.push(newIng);
   };
   
   vm.deleteIngredient = function(ing, group) {
     vm.recipe.Ingredients[group].Ingredients.splice(ing, 1);
   };
   
   
   
   //function s
   vm.update = function() {
     toastr.success('Saving');
     DataService.updateRecipe(vm.recipe).then(function(data) {
       toastr.success(data);
       $location.path('/view/' + vm.recipeId);
     });
   }
   
   vm.cancelEdit = function() {
     toastr.error('cancelling edit');
     $location.path('/view/' + vm.recipeId);
   }
   
    
  }
  
})();