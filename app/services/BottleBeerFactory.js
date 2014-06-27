(function() {
    var BottleBeerFactory = function($http) {

        var factory = {};

        factory.getBottleBeer = function () {
            return $http.get('/something');
        };

        return factory;
    };
    
    BottleBeerFactory.$inject = ['$http'];
        
    angular.module('coveApp').factory('BottleBeerFactory',
                                           BottleBeerFactory);
                                           
}());
////////////////
// From Example:
////////////////

/*
factory.getBottleBeer = function(drinkId) {
 return $http.get('/bottleBeers/' + drinkId);
};
*/
