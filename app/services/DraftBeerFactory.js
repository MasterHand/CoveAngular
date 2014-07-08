(function() {

    var DraftBeerFactory = function($log, $http, $data, base64, appSettings) {
      
        var factory = {};

        // Prep work
        var beg =   $data.db_beg;
        var end =   $data.db_end;
        var DraftBeerURL = beg + "_design/drink/_view/DraftBeer" + end;     // Data URL (String)

        if (appSettings.devLocal)
            factory.getDraftBeers = function () { return $http.get('app/db/DraftBeer.json'); };
        else {
            factory.getDraftBeers = function () {
                return $http.get(DraftBeerURL);
            };
        }

        if (appSettings.devLocal) {
            $log.log("Details view currently unsupported while devLocal = true");
            factory.getDraftBeer = function (drinkId) { return $log.log("DEBUG ERROR: Not implemented yet!"); };

            //    factory.getDraftBeer = function (drinkId) { return $http.get('app/db/DraftBeer.json'); };

            // TO-DO: Add functionality to get nested document out of locally served JSON
        }

        else {

            factory.getDraftBeer = function (drinkId) {
                return $http.get(beg + drinkId);
            };
        }

        return factory;
    };
    
    DraftBeerFactory.$inject = ['$log','$http', '$data', 'base64','appSettings'];
        
    angular.module('coveApp').factory('DraftBeerFactory', DraftBeerFactory);
                                           
}());
