(function() {

    var BottleBeerController = function ($scope, $log, BottleBeerFactory, appSettings) {
        $scope.sortBy = 'brand';
        $scope.reverse = false;
        $scope.total_rows = 0;
        $scope.appSettings = appSettings;

        function init() {
            BottleBeerFactory.getBottleBeers()
                .success(function(json) {
                    $scope.total_rows = json.total_rows;
                    $scope.bottleBeers = [];

                    var tDoc = {};

                    for (var n = 0; n < json.total_rows; n++ ) {
                        tDoc = json.rows[n].doc;
                        $scope.bottleBeers.push(tDoc);

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

        $scope.editEvent = function(beer){

            $scope.opts = ['on', 'off'];

            if (beer === 'new'){
                $log.log('envoke NEW editEvent, should launch modal...');
                $scope.newEvent = true;
                $scope.beer = {name: '', shortname: '', phonenumber: '', state: '', voteoptions: [{id:1, name: ''}]};
            }
            else {
                $log.log('edit this Event, should launch modal...');
                $scope.newEvent = false;
                $scope.beer = beer;
            }
        };


    };
    
    BottleBeerController.$inject = ['$scope', '$log', 'BottleBeerFactory',
                                   'appSettings'];

    angular.module('coveApp')
      .controller('BottleBeerController', BottleBeerController);
    
}());
