angular.module("ngswift", [])
    .controller("NgSwiftController", function ($scope) {
        $scope.visible = true;

        $scope.toggle = function() {
            $scope.visible = !$scope.visible;
        };
    })