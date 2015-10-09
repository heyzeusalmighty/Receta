(function() {
  
  'use strict';
  
  angular.module('rect').controller('ViewController', ViewController);
  
  ViewController.$inject= ['DataService', '$location', '$routeParams', 'toastr'];

  function ViewController(DataService, $location, $routeParams, toastr) { 
    
   var vm = this;
   vm.recipe = {};
   //var recipe = DataService.getRecipe(recipe);
   
   var recipeId = $routeParams.recipeId;
   DataService.getRecipe(recipeId).then(function(data) {
     vm.recipe = data;
   });
   
   vm.commenceEditing = function() {
     console.log(recipeId);
     toastr.info(recipeId);
     $location.path('/edit/' + recipeId);
     
   };
   
   
   
    
    
  }
  
})();