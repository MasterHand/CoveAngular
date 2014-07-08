(function() {

    var CocktailFactory = function($log,$http, $data, base64, appSettings) {
      
        var factory = {};

        // Prep Work
        var beg =   $data.db_beg;
        var end =   $data.db_end;
        var CocktailURL = beg + "_design/drink/_view/Cocktail" + end;     // Data URL (String)

        if (appSettings.devLocal)
            factory.getCocktails = function () { return $http.get('app/db/Cocktail.json'); };
        else {
            factory.getCocktails = function () {
                return $http.get(CocktailURL);
            };
        }
        if (appSettings.devLocal) {
            $log.log("Details view currently unsupported while devLocal = true");
            factory.getCocktail = function (drinkId) { return $log.log("DEBUG ERROR: Not implemented yet!"); };

            //    factory.CocktailBeer = function (drinkId) { return $http.get('app/db/Cocktail.json'); };

            // TO-DO: Add functionality to get nested document out of locally served JSON
        }

        else {

            factory.getCocktail = function (drinkId) {
                return $http.get(beg + drinkId);
            };
        }
        return factory;
    };
    
    CocktailFactory.$inject = ['$log', '$http', '$data', 'base64','appSettings'];
        
    angular.module('coveApp').factory('CocktailFactory', CocktailFactory);
                                           
}());
