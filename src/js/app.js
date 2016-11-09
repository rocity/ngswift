var ngswift = angular.module("ngswift", []);

ngswift.controller('remoteControl', ['$scope', ($scope) => {
    $scope.value = 1;

    $scope.incrementValue = (inc) => {
        $scope.value += inc;
    }
}]);