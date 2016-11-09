var app = angular.module("ngswift", []);

app.directive("show", function () {
    return {
        link: (scope, element, attributes) => {
            scope.$watch(attributes.show, (value) => {
                element.css('display', value ? '' : 'none')
            });
        }
    }
})