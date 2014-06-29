(function() {

    var BottleBeerController = function ($scope, $log, BottleBeerFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.json = [];
        $scope.bottleBeers = [];
        $scope.appSettings = appSettings;

        function init() {
            BottleBeerFactory.getBottleBeer()
                .success(function(json, bottleBeers) {
                    $log.log("HTTP REQUEST SUCCESSFUL");

                    $log.log("TOTAL DOCS: " + (json.total_rows));

                    var tDoc = {};   // Temp obj to hold CouchDB doc

                    $log.log("ATTEMPTING TO DISPLAY ALL TEMP OBJECTS");
                    for (var n = 0; n < json.total_rows; n++ ) {
                        tDoc = json.rows[n].doc;
                        $log.log(tDoc);
                    }

                    /* THE FOLLOWING CODE WORKS:
                    tDoc = json.rows[0].doc;
                    $log.log("ATTEMPTING TO DISPLAY TEMP OBJ");
                    $log.log(tDoc);
                    END */

                    /* THE FOLLOWING CODE WORKS:
                    $log.log("ATTEMPTING TO DISPLAY SOMETHING");
                    $log.log(json.rows[0].doc);
                    END */

                    // $log.log("DEBUG: Use Angular to Iterate through results");


                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });

        }

        init();


    };
    
    BottleBeerController.$inject = ['$scope', '$log', 'BottleBeerFactory',
                                   'appSettings'];

    angular.module('coveApp')
      .controller('BottleBeerController', BottleBeerController);
    
}());