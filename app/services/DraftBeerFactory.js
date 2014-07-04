(function() {

    var DraftBeerFactory = function($http, $data, base64, appSettings) {
      
        var factory = {};

        // Prep work
        var beg =   $data.db_beg;
        var end =   $data.db_end;
        var DraftBeerURL = beg + "drink/_view/DraftBeer" + end;     // Data URL (String)

        if (appSettings.devLocal)
            factory.getDraftBeer = function () { return $http.get('app/db/DraftBeer.json'); };
        else {
            factory.getDraftBeer = function () {
                return $http.get(DraftBeerURL);
            };
        }
        return factory;
    };
    
    DraftBeerFactory.$inject = ['$http', '$data', 'base64','appSettings'];
        
    angular.module('coveApp').factory('DraftBeerFactory', DraftBeerFactory);
                                           
}());
