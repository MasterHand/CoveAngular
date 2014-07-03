(function() {

    var CocktailFactory = function($http, $data, base64) {
      
        var factory = {};

        // Prep Work
        var user =  $data.user;
        var pass =  $data.pass;
        var beg =   $data.db_beg;
        var end =   $data.db_end;
        var CocktailURL = beg + "drink/_view/Cocktail" + end;     // Data URL (String)

        factory.getCocktail = function () {
            // Set Headers
            $http.defaults.headers.common['Accept'] = 'application/json';
            $http.defaults.headers.common['Authorization'] = 'Basic ' + base64.encode(user + ':' + pass);

            return $http.get(CocktailURL);
        };      

        return factory;
    };
    
    CocktailFactory.$inject = ['$http', '$data', 'base64'];
        
    angular.module('coveApp').factory('CocktailFactory', CocktailFactory);
                                           
}());
