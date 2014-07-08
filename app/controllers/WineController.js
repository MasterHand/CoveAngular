(function() {

    var WineController = function ($scope, $log, WineFactory, appSettings) {
        $scope.sortBy = 'vintner';
        $scope.reverse = false;
        $scope.total_rows = 0;
        $scope.appSettings = appSettings;

        function init() {
            WineFactory.getWines()
                .success(function(json) {
                    $scope.total_rows = json.total_rows;
                    $scope.wines = [];

                    var tDoc = {};

                    for (var n = 0; n < json.total_rows; n++ ) {
                        tDoc = json.rows[n].doc;
                        $scope.wines.push(tDoc);

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

    WineController.$inject = ['$scope', '$log', 'WineFactory',
        'appSettings'];

    angular.module('coveApp')
        .controller('WineController', WineController);

}());
