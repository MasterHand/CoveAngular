(function() {

    var BottleBeerFactory = function($http, $data, base64, appSettings) {
      
        var factory = {};

        // Prep Work
        var user =  $data.user;
        var pass =  $data.pass;
        var beg =   $data.db_beg;
        var end =   $data.db_end;
        var beerURL = beg + "drink/_view/BottleBeer" + end;     // Data URL (String)

        if (appSettings.devLocal)
            factory.getBottleBeer = function () { return $http.get('app/db/BottleBeer.json'); };
        else {

            factory.getBottleBeer = function () {
                // Set Headers
                $http.defaults.headers.common['Accept'] = 'application/json';
                $http.defaults.headers.common['Authorization'] = 'Basic ' + base64.encode(user + ':' + pass);

                return $http.get(beerURL);
            };
        }

        return factory;
    };
    
    BottleBeerFactory.$inject = ['$http', '$data', 'base64', 'appSettings'];

    angular.module('coveApp').factory('BottleBeerFactory', BottleBeerFactory);
                                           
}());
