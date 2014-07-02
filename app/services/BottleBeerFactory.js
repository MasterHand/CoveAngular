(function() {

    var BottleBeerFactory = function($http) {

        var factory = {};
        /*
        factory.getBottleBeer = function () {

           return $http.get('app/db/BottleBeer.json');
        };
        */

        $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

        factory.getBottleBeer = function () {

            var user = "commeelyinguederistroust";
            var pass = "2imaJ47lISdfKTXV48oAKdXp";

            var db = "covebeta/_design/drink/_view/BottleBeer?include_docs=true&reduce=false";

            var beerURL = "https://" + user + ":" + pass + "@" + "infiniteinnovations.cloudant.com/" + db;

            // Request Headers
            //$http.defaults.headers.request['Content-type'] = 'application/json';

            //$http.defaults.headers.request['Accept'] = 'application/json';

            // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


            return $http.get(beerURL);
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
