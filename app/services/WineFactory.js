(function() {

    var WineFactory = function($log, $http, $data) {

        var factory = {};

        // Prep work
        var beg =   $data.db_beg;
        var mid =   $data.db_mid;
        var end =   $data.db_end;
        var WineURL = beg + mid + "Wine" + end;     // Data URL (String)

        factory.getWines = function () {
            return $http.get(WineURL);
        };

        factory.getWine = function (drinkId) {
            return $http.get(beg + drinkId);
        };

        return factory;
    };

    WineFactory.$inject = ['$log','$http', '$data'];

    angular.module('coveApp').factory('WineFactory', WineFactory);

}());
