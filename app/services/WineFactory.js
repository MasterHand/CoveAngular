(function() {

    var WineFactory = function($log, $http, $data, base64, appSettings) {

        var factory = {};

        // Prep Work
        var beg =   $data.db_beg;
        var end =   $data.db_end;
        var wineURL = beg + "_design/drink/_view/Wine" + end;     // Data URL (String)

        if (appSettings.devLocal)
            factory.getWines = function () { return $http.get('app/db/Wine.json'); };
        else {
            factory.getWines = function () {
                return $http.get(wineURL);
            };
        }
        if (appSettings.devLocal) {
            $log.log("Details view currently unsupported while devLocal = true");
            factory.getWine = function (drinkId) { return $log.log("DEBUG ERROR: Not implemented yet!"); };

            //    factory.getWine = function (drinkId) { return $http.get('app/db/Wine.json'); };

            // TO-DO: Add functionality to get nested document out of locally served JSON
        }

        else {

            factory.getWine = function (drinkId) {
                return $http.get(beg + drinkId);
            };
        }

        return factory;
    };

    WineFactory.$inject = ['$log','$http', '$data', 'base64', 'appSettings'];

    angular.module('coveApp').factory('WineFactory', WineFactory);

}());
