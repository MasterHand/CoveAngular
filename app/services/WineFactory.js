(function() {

    var WineFactory = function($http, $data, base64, appSettings) {

        var factory = {};

        // Prep Work
        var beg =   $data.db_beg;
        var end =   $data.db_end;
        var wineURL = beg + "drink/_view/Wine" + end;     // Data URL (String)

        if (appSettings.devLocal)
            factory.getLiquor = function () { return $http.get('app/db/Wine.json'); };
        else {
            factory.getLiquor = function () {
                return $http.get(wineURL);
            };
        }

        return factory;
    };

    WineFactory.$inject = ['$http', '$data', 'base64', 'appSettings'];

    angular.module('coveApp').factory('WineFactory', WineFactory);

}());
