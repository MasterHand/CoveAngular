(function() {
    
    var BottleBeerController = function ($scope, $log, BottleBeerFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.bottleBeers = [];
        $scope.appSettings = appSettings;
        
        function init() {
            BottleBeerFactory.getBottleBeer()
                .success(function(customers) {
                    $scope.bottleBeers = customers;
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