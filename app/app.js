(function() {
    
    var app = angular.module('coveApp', ['ngRoute', 'ab-base64','cove-data', 'ui.bootstrap', 'ngGrid']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'MainController',
                templateUrl: 'app/views/Home.html'
            })
            .when('/BottleBeers', {
                controller: 'BottleBeerController',
                templateUrl: 'app/views/BottleBeers.html'
            })
            .when('/BottleBeerDetails/:drinkId', {
                controller: 'BottleBeerDetailsController',
                templateUrl: 'app/views/BottleBeerDetails.html'
            })
            .when('/DraftBeers', {
                controller: 'DraftBeerController',
                templateUrl: 'app/views/DraftBeers.html'
            })
            .when('/DraftBeerDetails/:drinkId', {
                controller: 'DraftBeerDetailsController',
                templateUrl: 'app/views/DraftBeerDetails.html'
            })
            .when('/Cocktail', {
                controller: 'CocktailController',
                templateUrl: 'app/views/Cocktail.html'
            })
            .when('/CocktailDetails/:drinkId', {
                controller: 'CocktailDetailsController',
                templateUrl: 'app/views/CocktailDetails.html'
            })
            .when('/Wines', {
                controller: 'WineController',
                templateUrl: 'app/views/Wines.html'
            })
            .when('/WineDetails/:drinkId', {
                controller: 'WineDetailsController',
                templateUrl: 'app/views/WineDetails.html'
            })
            .when('/Liquor', {
                controller: 'LiquorController',
                templateUrl: 'app/views/Liquor.html'
            })
            .when('/LiquorDetails/:drinkId', {
                controller: 'LiquorDetailsController',
                templateUrl: 'app/views/LiquorDetails.html'
            })
            .otherwise( { redirectTo: '/' } );
    });

    app.run(function($http, $data, base64) {
        // Local variables
        var user =  $data.user;
        var pass =  $data.pass;
        // Set Headers
        $http.defaults.headers.common['Accept'] = 'application/json';
        $http.defaults.headers.common['Authorization'] = 'Basic ' + base64.encode(user + ':' + pass);
    });


}());
