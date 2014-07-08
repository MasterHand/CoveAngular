(function() {

    var LiquorDetailsController = function ($log, $scope, $routeParams, LiquorFactory, appSettings) {
        var drinkId = $routeParams.drinkId;
        $scope.appSettings = appSettings;
        $scope.Liquor = null;

        function init() {
            LiquorFactory.getLiquor(drinkId)
                .success(function(Liquor) {
                    $scope.Liquor = Liquor;
                })
                .error(function(data, status, headers, config) {
                    $log.log("Something went wrong!");
                });
        }

        init();
    };

    LiquorDetailsController.$inject = ['$log', '$scope', '$routeParams', 'LiquorFactory', 'appSettings'];

    angular.module('coveApp')
        .controller('LiquorDetailsController', LiquorDetailsController);

}());