(function() {

    var BottleBeerURL = 'https://infiniteinnovations.cloudant.com/covebeta/_design/drink/_view/BottleBeer?include_docs=true&reduce=false';

    var BottleBeerFactory = function($http) {

        var factory = {};

        factory.getBottleBeer = function () {
            //return $http.get(BottleBeerURL);

           return $http.get('app/db/BottleBeer.json');
        };

        return factory;
    };
    
    BottleBeerFactory.$inject = ['$http'];
        
    angular.module('coveApp').factory('BottleBeerFactory',
                                           BottleBeerFactory);
                                           
}());
/////////////////
// From Example:
////////////////

/*
factory.getBottleBeer = function(drinkId) {
 return $http.get('/bottleBeers/' + drinkId);
};
*/
