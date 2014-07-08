(function() {

    var DraftBeerController = function ($scope, $log, DraftBeerFactory, appSettings) {
        $scope.sortBy = 'brand';
        $scope.reverse = false;
        $scope.total_rows = 0;
        $scope.appSettings = appSettings;

        function init() {
            DraftBeerFactory.getDraftBeers()
                .success(function(json) {
                    $scope.total_rows = json.total_rows;
                    $scope.DraftBeers = [];

                    var tDoc = {};

                    for (var n = 0; n < json.total_rows; n++ ) {
                        tDoc = json.rows[n].doc;
                        $scope.DraftBeers.push(tDoc);

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
    
    DraftBeerController.$inject = ['$scope', '$log', 'DraftBeerFactory',
                                   'appSettings'];

    angular.module('coveApp')
      .controller('DraftBeerController', DraftBeerController);
    
}());
