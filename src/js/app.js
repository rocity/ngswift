var ngswift = angular.module("ngswift", []);

ngswift.controller('remoteControl', ['$scope', ($scope) => {
    $scope.name = "";

    $scope.$watch("name", function (newValue, oldValue) {
        if ($scope.name.length > 5) {
            $scope.greeting = "Greetings, " + $scope.name;
        }
    });
}]);
