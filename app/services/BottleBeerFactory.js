(function() {
  


    var BottleBeerFactory = function($http, base64) {
      
        var factory = {};

        factory.getBottleBeer = function () {
          
          var user = "commeelyinguederistroust";
          var pass = "2imaJ47lISdfKTXV48oAKdXp";
          var db = "covebeta/_design/drink/_view/BottleBeer?include_docs=true&reduce=false";

          var beerURL = "https://infiniteinnovations.cloudant.com/" + db;
                    
          $http.defaults.headers.common['Accept'] = 'application/json';
                    
          $http.defaults.headers.common['Authorization'] = 'Basic ' + base64.encode(user + ':' + pass);

            /*
            console.log("Below is the the object base64");
            console.log(base64);
            */

            return $http.get(beerURL);
        };      

        return factory;
    };
    
    BottleBeerFactory.$inject = ['$http', 'base64'];
        
    angular.module('coveApp').factory('BottleBeerFactory',
                                           BottleBeerFactory);
                                           
}());
/////////////////
// OLD STUFF:
////////////////

/* FROM EXAMPLE:
factory.getBottleBeer = function(drinkId) {
 return $http.get('/bottleBeers/' + drinkId);
};
*/
/* for getting local database
   factory.getBottleBeer = function () {

           return $http.get('app/db/BottleBeer.json');
        };
*/

// Headers and Stuff

// $http.defaults.headers.common = {"Access-Control-Request-Headers": "Accept, Origin, Authorization"};
// $http.defaults.headers.common['Origin'] = 'http://cove-admin-demo-125709.use1-2.nitrousbox.com:8888';