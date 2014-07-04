(function() {

    var LiquorFactory = function($http, $data, base64, appSettings) {

        var factory = {};

        // Prep Work
        var beg =   $data.db_beg;
        var end =   $data.db_end;
        var LiquorURL = beg + "drink/_view/Liquor" + end;     // Data URL (String)

        if (appSettings.devLocal)
            factory.getLiquor = function () { return $http.get('app/db/Liquor.json'); };
        else {
            factory.getLiquor = function () {
                return $http.get(LiquorURL);
            };
        }

        return factory;
    };

    LiquorFactory.$inject = ['$http', '$data', 'base64', 'appSettings'];

    angular.module('coveApp').factory('LiquorFactory', LiquorFactory);

}());
