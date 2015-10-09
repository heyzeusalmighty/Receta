

(function() {
  'use strict';
  
  angular.module('rect')
    .config(function($routeProvider) {
      
      $routeProvider
        .when("/", {
          templateUrl: "pages/list.html",
          controller: 'ListController',
          controllerAs: 'list'
        })
        
        .when("/home", {
          templateUrl: "pages/landing.html",
          controller: 'MainController',
          controllerAs: 'main'
        })
      
        .when("/list", {
          templateUrl: "pages/list.html",
          controller: 'ListController',
          controllerAs: 'list'
        })
        
        .when("/contact", {
          templateUrl: "pages/landing.html",
          controller: 'MainController',
          controllerAs: 'main'
        })
        
        .when("/new", {
          templateUrl: "pages/newRecipe.html",
          controller: 'NewRecipeController',
          controllerAs: 'rec'
        })
        
        .when("/view/:recipeId", {
          templateUrl: "pages/view.html",
          controller: 'ViewController',
          controllerAs: 'view'
        })
        
        .when("/edit/:recipeId", {
          templateUrl: "pages/edit.html",
          controller: "EditController",
          controllerAs: 'rec'
        });
        
        
      
    });
  
  
  
  
})();