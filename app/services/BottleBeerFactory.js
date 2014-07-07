(function() {

    var BottleBeerFactory = function($log, $http, $data, base64, appSettings) {
      
        var factory = {};

        // Prep Work
        var beg =   $data.db_beg;
        var end =   $data.db_end;
        var beerURL = beg + "_design/drink/_view/BottleBeer" + end;     // Data URL (String)

        if (appSettings.devLocal)
            factory.getBottleBeers = function () { return $http.get('app/db/BottleBeer.json'); };
        else {

            factory.getBottleBeers = function () {
                return $http.get(beerURL);
            };
        }

        if (appSettings.devLocal) {
            $log.log("Details view currently unsupported while devLocal = true");
            factory.getBottleBeer = function (drinkId) { return $log.log("DEBUG ERROR: Not implemented yet!"); };

            //    factory.getBottleBeer = function (drinkId) { return $http.get('app/db/BottleBeer.json'); };

            // TO-DO: Add functionality to get nested document out of locally served JSON
        }

        else {

            factory.getBottleBeer = function (drinkId) {
                return $http.get(beg + drinkId);
            };
        }


        return factory;
    };
    
    BottleBeerFactory.$inject = ['$log', '$http', '$data', 'base64', 'appSettings'];

    angular.module('coveApp').factory('BottleBeerFactory', BottleBeerFactory);
                                           
}());
