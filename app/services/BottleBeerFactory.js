(function() {

    var BottleBeerFactory = function($log, $http, $data) {

        var factory = {};

        // Prep work
        var beg =   $data.db_beg;
        var mid =   $data.db_mid;
        var end =   $data.db_end;
        var BottleBeerURL = beg + mid + "BottleBeer" + end;     // Data URL (String)

        factory.getBottleBeers = function () {
            $log.log(BottleBeerURL);
            return $http.get(BottleBeerURL);
        };

        factory.getBottleBeer = function (drinkId) {
            return $http.get(beg + drinkId);
        };

        return factory;
    };

    BottleBeerFactory.$inject = ['$log','$http', '$data'];

    angular.module('coveApp').factory('BottleBeerFactory', BottleBeerFactory);

}());
