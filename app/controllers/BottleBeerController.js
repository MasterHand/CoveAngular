(function() {

    var BottleBeerController = function ($scope, $log, BottleBeerFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        //new
        $scope.bottleBeers= {content:null};
        $scope.appSettings = appSettings;

        function init() {
            BottleBeerFactory.getBottleBeer()
                .success(function(bottleBeers) {
                    $log.log("HTTP REQUEST SUCCESSFUL");

                    //new
                    $scope.bottleBeers.content = bottleBeers;
                    //return bottleBeers;


                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
            //new
           // return bottleBeers;
        }

        init();


    };







    
    BottleBeerController.$inject = ['$scope', '$log', 'BottleBeerFactory',
                                   'appSettings'];

    angular.module('coveApp')
      .controller('BottleBeerController', BottleBeerController);
    
}());