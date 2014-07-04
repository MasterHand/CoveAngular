(function() {

    var MainController = function ($scope, $log, appSettings) {
        $scope.appSettings = appSettings;
        $scope.message = "Welcome Home";

        /* For whenever Home Page functionality is added
        function init() {
            $log.log("Loaded MainController")
        }

        init(); */

    };
    
    MainController.$inject = ['$scope', '$log', 'appSettings'];

    angular.module('coveApp')
      .controller('MainController', MainController);
    
}());
