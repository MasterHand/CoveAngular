(function() {

    var DraftBeerDetailsController = function ($log, $scope, $routeParams, DraftBeerFactory, appSettings) {
        var drinkId = $routeParams.drinkId;
        $scope.appSettings = appSettings;
        $scope.draftBeer = null;

        function init() {
            DraftBeerFactory.getDraftBeer(drinkId)
                .success(function(draftBeer) {
                    $scope.draftBeer = draftBeer;
                })
                .error(function(data, status, headers, config) {
                    $log.log("Something went wrong!");
                });
        }

        init();
    };

    DraftBeerDetailsController.$inject = ['$log', '$scope', '$routeParams', 'DraftBeerFactory', 'appSettings'];

    angular.module('coveApp')
        .controller('DraftBeerDetailsController', DraftBeerDetailsController);

}());