(function() {

    var BottleBeerDetailsController = function ($log, $scope, $routeParams, BottleBeerFactory, appSettings) {
        var drinkId = $routeParams.drinkId;

        $scope.appSettings = appSettings;
        $scope.BottledBeer = null;
        $scope.gridOptions = {};

        function init() {
            BottleBeerFactory.getBottleBeer(drinkId)
                .success(function(BottledBeer) {

                    /** NOTE: ngGrid Expects an Array. We must format our object as a compatible Array. **/

                    // $scope.BottledBeer = JSON.parse(BottledBeer);
                    $log.log(BottledBeer);
                    // var myData = Array.prototype.slice.call(BottledBeer);    // Doesn't work
                    var myData = [];
                    $log.log(myData);
                    // $scope.myData = myData;

                    $scope.gridOptions = {
                        data: 'myData',
                        enableRowSelection: false,
                        enableCellEditOnFocus: true,
                        multiSelect: false

                    };

                })
                .error(function(data, status, headers, config) {
                    $log.log("Something went wrong!");
                    $scope.gridOptions = {};
                });
        }

        init();
    };

    BottleBeerDetailsController.$inject = ['$log', '$scope', '$routeParams', 'BottleBeerFactory', 'appSettings'];

    angular.module('coveApp')
        .controller('BottleBeerDetailsController', BottleBeerDetailsController);

}());