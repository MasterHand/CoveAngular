(function() {

    var DraftBeerFactory = function($http, $data, base64) {
      
        var factory = {};

        var user =  $data.user;
        var pass =  $data.pass;
        var beg =   $data.db_beg;
        var end =   $data.db_end;
        var DraftbeerURL = beg + "drink/_view/DraftBeer" + end;     // Data URL (String)

        factory.getDraftBeer = function () {
            // Set Headers
            $http.defaults.headers.common['Accept'] = 'application/json';
            $http.defaults.headers.common['Authorization'] = 'Basic ' + base64.encode(user + ':' + pass);

            return $http.get(DraftbeerURL);
        };      

        return factory;
    };
    
    DraftBeerFactory.$inject = ['$http', '$data', 'base64'];
        
    angular.module('coveApp').factory('DraftBeerFactory', DraftBeerFactory);
                                           
}());
