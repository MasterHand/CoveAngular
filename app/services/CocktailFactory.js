(function() {

    var CocktailFactory = function($log, $http, $data) {

        var factory = {};

        // Prep work
        var beg =   $data.db_beg;
        var mid =   $data.db_mid;
        var end =   $data.db_end;
        var CocktailURL = beg + mid + "Cocktail" + end;     // Data URL (String)

        factory.getCocktails = function () {
            return $http.get(CocktailURL);
        };

        factory.getCocktail = function (drinkId) {
            return $http.get(beg + drinkId);
        };

        return factory;
    };

    CocktailFactory.$inject = ['$log','$http', '$data'];

    angular.module('coveApp').factory('CocktailFactory', CocktailFactory);

}());
