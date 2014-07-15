(function() {

    var LiquorFactory = function($log, $http, $data) {

        var factory = {};

        // Prep work
        var beg =   $data.db_beg;
        var mid =   $data.db_mid;
        var end =   $data.db_end;
        var LiquorURL = beg + mid + "Liquor" + end;     // Data URL (String)

        factory.getLiquors = function () {
            return $http.get(LiquorURL);
        };

        factory.getLiquor = function (drinkId) {
            return $http.get(beg + drinkId);
        };

        return factory;
    };

    LiquorFactory.$inject = ['$log','$http', '$data'];

    angular.module('coveApp').factory('LiquorFactory', LiquorFactory);

}());
