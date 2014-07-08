(function() {

    var CocktailDetailsController = function ($log, $scope, $routeParams, CocktailFactory, appSettings) {
        var drinkId = $routeParams.drinkId;
        $scope.appSettings = appSettings;
        $scope.Cocktail = null;

        function init() {
            CocktailFactory.getCocktail(drinkId)
                .success(function(Cocktail) {
                    $scope.Cocktail = Cocktail;
                })
                .error(function(data, status, headers, config) {
                    $log.log("Something went wrong!");
                });
        }

        init();
    };

    CocktailDetailsController.$inject = ['$log', '$scope', '$routeParams', 'CocktailFactory', 'appSettings'];

    angular.module('coveApp')
        .controller('CocktailDetailsController', CocktailDetailsController);

}());