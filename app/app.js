(function() {
    
    var app = angular.module('coveApp', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'BottleBeerController',
                templateUrl: 'app/views/BottleBeers.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());