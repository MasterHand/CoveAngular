(function() {

    var DraftBeerFactory = function($log, $http, $data) {
      
        var factory = {};

        // Prep work
        var beg =   $data.db_beg;
        var mid =   $data.db_mid;
        var end =   $data.db_end;
        var DraftBeerURL = beg + mid + "DraftBeer" + end;     // Data URL (String)

        factory.getDraftBeers = function () {
            return $http.get(DraftBeerURL);
        };

        factory.getDraftBeer = function (drinkId) {
            return $http.get(beg + drinkId);
        };

        return factory;
    };
    
    DraftBeerFactory.$inject = ['$log','$http', '$data'];
        
    angular.module('coveApp').factory('DraftBeerFactory', DraftBeerFactory);
                                           
}());
