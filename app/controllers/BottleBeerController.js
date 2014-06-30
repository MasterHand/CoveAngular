(function() {

    var BottleBeerController = function ($scope, $log, BottleBeerFactory, appSettings) {
        $scope.sortBy = 'brand';
        $scope.reverse = false;
        $scope.total_rows = 0;
        $scope.appSettings = appSettings;

        function init() {
            BottleBeerFactory.getBottleBeer()
                .success(function(json) {
                    $scope.total_rows = json.total_rows;
                    $scope.bottleBeers = new Array();           // Add bottleBeers to $scope

                    // $log.log("HTTP REQUEST SUCCESSFUL");     // DEBUG

                    var tDoc = {};   // Temp Object to hold CouchDB doc

                    // Populate bottleBeers Array
                    for (var n = 0; n < json.total_rows; n++ ) {
                        tDoc = json.rows[n].doc;
                        $scope.bottleBeers.push(tDoc);

                    }

                    /* DEBUG: THE FOLLOWING CODE WORKS:
                    $log.log("LOGGING ALL BOTTLE BEERS BELOW:");
                    for (var t = 0; t < $scope.bottleBeers.length; t++) {
                        // Log bottleBeers
                        $log.log($scope.bottleBeers[t]);
                    }
                    END */

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
    
    BottleBeerController.$inject = ['$scope', '$log', 'BottleBeerFactory',
                                   'appSettings'];

    angular.module('coveApp')
      .controller('BottleBeerController', BottleBeerController);
    
}());