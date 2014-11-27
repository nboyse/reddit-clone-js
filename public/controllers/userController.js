redditclone.controller('userController', ['$scope', '$http', 'loginService',
 function($scope, $http, loginService) {
    $scope.loggedIn = false;

    $scope.login = function() {
        loginService.login($scope.username, $scope.password, function() {
            $scope.loggedIn = loginService.loggedIn;
        });
    };
    $scope.register = function() {
        loginService.register($scope.username, $scope.password, function() {
            $scope.loggedIn = loginService.loggedIn;
        });
    };

    if(sessionStorage.user) {
        var user = sessionStorage.user;
        $scope.username = user.username;
        $scope.password = user.password;
        $scope.login();
    }
}]);
