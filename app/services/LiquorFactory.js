(function() {

    var LiquorFactory = function($log, $http, $data, base64, appSettings) {

        var factory = {};

        // Prep Work
        var beg =   $data.db_beg;
        var end =   $data.db_end;
        var LiquorURL = beg + "_design/drink/_view/Liquor" + end;     // Data URL (String)

        if (appSettings.devLocal)
            factory.getLiquors = function () { return $http.get('app/db/Liquor.json'); };
        else {
            factory.getLiquors = function () {
                return $http.get(LiquorURL);
            };
        }
        if (appSettings.devLocal) {
            $log.log("Details view currently unsupported while devLocal = true");
            factory.getLiquor = function (drinkId) { return $log.log("DEBUG ERROR: Not implemented yet!"); };

            //    factory.getLiquor = function (drinkId) { return $http.get('app/db/Liquor.json'); };

            // TO-DO: Add functionality to get nested document out of locally served JSON
        }

        else {

            factory.getLiquor = function (drinkId) {
                return $http.get(beg + drinkId);
            };
        }



        return factory;
    };

    LiquorFactory.$inject = ['$log','$http', '$data', 'base64', 'appSettings'];

    angular.module('coveApp').factory('LiquorFactory', LiquorFactory);

}());
