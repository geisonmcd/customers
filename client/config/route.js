angular.module("customers").config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "view/add-customer.html",
        controller: "addCustomerController"
    });
}]);