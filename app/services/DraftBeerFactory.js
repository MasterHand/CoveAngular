(function() {

    var DraftBeerFactory = function($http, $data, base64, appSettings) {
      
        var factory = {};

        var user =  $data.user;
        var pass =  $data.pass;
        var beg =   $data.db_beg;
        var end =   $data.db_end;
        var DraftbeerURL = beg + "drink/_view/DraftBeer" + end;     // Data URL (String)

        if (appSettings.devLocal)
            factory.getDraftBeer = function () { return $http.get('app/db/DraftBeer.json'); };
        else {
            factory.getDraftBeer = function () {
                // Set Headers
                $http.defaults.headers.common['Accept'] = 'application/json';
                $http.defaults.headers.common['Authorization'] = 'Basic ' + base64.encode(user + ':' + pass);

                return $http.get(DraftbeerURL);
            };
        }
        return factory;
    };
    
    DraftBeerFactory.$inject = ['$http', '$data', 'base64','appSettings'];
        
    angular.module('coveApp').factory('DraftBeerFactory', DraftBeerFactory);
                                           
}());
