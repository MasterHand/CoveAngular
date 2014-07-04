(function() {

    var CocktailFactory = function($http, $data, base64, appSettings) {
      
        var factory = {};

        // Prep Work
        var user =  $data.user;
        var pass =  $data.pass;
        var beg =   $data.db_beg;
        var end =   $data.db_end;
        var CocktailURL = beg + "drink/_view/Cocktail" + end;     // Data URL (String)

        if (appSettings.devLocal)
            factory.getCocktail = function () { return $http.get('app/db/Cocktail.json'); };
        else {
            factory.getCocktail = function () {
                // Set Headers
                $http.defaults.headers.common['Accept'] = 'application/json';
                $http.defaults.headers.common['Authorization'] = 'Basic ' + base64.encode(user + ':' + pass);

                return $http.get(CocktailURL);
            };
        }
        return factory;
    };
    
    CocktailFactory.$inject = ['$http', '$data', 'base64','appSettings'];
        
    angular.module('coveApp').factory('CocktailFactory', CocktailFactory);
                                           
}());
