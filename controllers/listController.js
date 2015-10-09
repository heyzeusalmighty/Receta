(function() {
  
  'use strict';
  
  angular.module('rect').controller('ListController', ListController);
  
  ListController.$inject= ['DataService', '$location'];

  function ListController(DataService, $location) { 
    
    var vm = this;
    vm.tags = [];
    vm.recipes = [];
    vm.name = "list";
    
    DataService.getTags().then(function(data) {
      vm.tags = data;
    });
    
    
    DataService.getRecentRecipes().then(function(data) {
      vm.recipes = data;
    });
    
    
    vm.goToRecipe = function(recipe) {
      
      $location.path('/view/' + recipe);
    }
    
  }
  
})();