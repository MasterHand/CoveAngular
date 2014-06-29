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

                    $log.log("ATTEMPTING TO DISPLAY SOMETHING");
                    $log.log(json.rows[0].doc);

                    // Assign first doc to first bottleBeers element
                    bottleBeers[0] = (json.rows[0].doc);

                    $log.log("DEBUG: Logging first bottleBeers object below.");

                    $log.log(bottleBeers[0]);

                    // $log.log("ATTEMPTING TO PUSH DOC FROM JSON TO CONTAINER")
                    // bottleBeers.push(json.rows[0].doc);

                   /*
                   for (var i = 0; i < json.rows.length; i++) {
                        // Add document to bottleBeers container
                        bottleBeers.push(json.rows[i].doc);

                        // DEBUG
                        if (i > (json.rows.length - 1)) {
                            $log.log("SUCCESSFULLY POPULATED CONTAINER");
                        }
                    }
                    */

                  // $log.log("DEBUG: End of for loop.");

                    // old
                    // $scope.bottleBeers.content = bottleBeers;
                    //return bottleBeers;


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