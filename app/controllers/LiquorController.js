(function() {

    var LiquorController = function ($scope, $log, LiquorFactory, appSettings) {
        $scope.sortBy = 'brand';
        $scope.reverse = false;
        $scope.total_rows = 0;
        $scope.appSettings = appSettings;

        function init() {
            LiquorFactory.getLiquors()
                .success(function(json) {
                    $scope.total_rows = json.total_rows;
                    $scope.liquor = [];

                    var tDoc = {};

                    for (var n = 0; n < json.total_rows; n++ ) {
                        tDoc = json.rows[n].doc;
                        $scope.liquor.push(tDoc);

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

    LiquorController.$inject = ['$scope', '$log', 'LiquorFactory',
        'appSettings'];

    angular.module('coveApp')
        .controller('LiquorController', LiquorController);

}());