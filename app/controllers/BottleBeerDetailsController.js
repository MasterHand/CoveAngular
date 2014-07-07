(function() {

    var BottleBeerDetailsController = function ($log, $scope, $routeParams, BottleBeerFactory) {
        var drinkId = $routeParams.drinkId;
        $scope.BottledBeer = null;

        function init() {
            BottleBeerFactory.getBottleBeer(drinkId)
                .success(function(BottledBeer) {
                    $scope.BottledBeer = BottledBeer;
                })
                .error(function(data, status, headers, config) {
                    $log.log("Something went wrong!");
                });
        }

        init();
    };

    BottleBeerDetailsController.$inject = ['$log', '$scope', '$routeParams', 'BottleBeerFactory'];

    angular.module('coveApp')
        .controller('BottleBeerDetailsController', BottleBeerDetailsController);

}());