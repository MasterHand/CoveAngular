(function() {

    var CocktailController = function ($scope, $log, CocktailFactory, appSettings) {
        $scope.sortBy = 'drink_name';
        $scope.reverse = false;
        $scope.total_rows = 0;
        $scope.appSettings = appSettings;

        function init() {
            CocktailFactory.getCocktail()
                .success(function(json) {
                    $scope.total_rows = json.total_rows;
                    $scope.Cocktail = [];

                    var tDoc = {};

                    for (var n = 0; n < json.total_rows; n++ ) {
                        tDoc = json.rows[n].doc;
                        $scope.Cocktail.push(tDoc);

                    }

                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });

        }

        init();

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

    };
    
    CocktailController.$inject = ['$scope', '$log', 'CocktailFactory',
                                   'appSettings'];

    angular.module('coveApp')
      .controller('CocktailController', CocktailController);
    
}());
