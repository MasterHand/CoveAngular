(function() {
    
    var app = angular.module('coveApp', ['ngRoute', 'ab-base64','cove-data']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'BottleBeerController',
                templateUrl: 'app/views/BottleBeers.html'
            })
            .otherwise( { redirectTo: '/' } );
    });

}());
