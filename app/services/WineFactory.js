(function() {

    var WineFactory = function($http, $data, base64, appSettings) {

        var factory = {};

        // Prep Work
        var user =  $data.user;
        var pass =  $data.pass;
        var beg =   $data.db_beg;
        var end =   $data.db_end;
        var wineURL = beg + "drink/_view/Wine" + end;     // Data URL (String)

        if (appSettings.devLocal)
            factory.getWine = function () { return $http.get('app/db/Wine.json'); };
        else {
            factory.getWine = function () {
                // Set Headers
                $http.defaults.headers.common['Accept'] = 'application/json';
                $http.defaults.headers.common['Authorization'] = 'Basic ' + base64.encode(user + ':' + pass);

                return $http.get(wineURL);
            };
        }

        return factory;
    };

    WineFactory.$inject = ['$http', '$data', 'base64', 'appSettings'];

    angular.module('coveApp').factory('WineFactory', WineFactory);

}());
