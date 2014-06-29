(function() {

    var BottleBeerController = function ($scope, $log, BottleBeerFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.json = [];
        $scope.bottleBeers = new Array();
        $scope.appSettings = appSettings;

        function init() {
            BottleBeerFactory.getBottleBeer()
                .success(function(json, bottleBeers) {
                    $log.log("HTTP REQUEST SUCCESSFUL");

                        // $log.log("TOTAL DOCS: " + (json.total_rows));

                    var tDoc = {};   // Temp Object to hold CouchDB doc
                    var tArray = new Array();
                    // Attempt to place first document into bottleBeers Array
                    tDoc = json.rows[0].doc;
                    tArray.push(tDoc);
                    $log.log(tArray[0]);

                    /*
                    for (var n = 0; n < json.total_rows; n++ ) {
                        tDoc = json.rows[n].doc;
                    }*/

                    /*
                    $log.log("LOGGING ALL BOTTLE BEERS BELOW:");
                    for (var t = 0; t < bottleBeers.length; t++) {
                        // Log bottleBeers
                        $log.log(bottleBeers[t]);
                    }*/

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