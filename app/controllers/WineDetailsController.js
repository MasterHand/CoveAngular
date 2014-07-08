(function() {

    var WineDetailsController = function ($log, $scope, $routeParams, WineFactory, appSettings) {
        var drinkId = $routeParams.drinkId;
        $scope.appSettings = appSettings;
        $scope.Wine = null;

        function init() {
            WineFactory.getWine(drinkId)
                .success(function(Wine) {
                    $scope.Wine = Wine;
                })
                .error(function(data, status, headers, config) {
                    $log.log("Something went wrong!");
                });
        }

        init();
    };

    WineDetailsController.$inject = ['$log', '$scope', '$routeParams', 'WineFactory', 'appSettings'];

    angular.module('coveApp')
        .controller('WineDetailsController', WineDetailsController);

}());