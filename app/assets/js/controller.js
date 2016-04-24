angular.module('myApp.controllers', []).
  controller('ExampleController', ['$scope','$http', function($scope, $http) {
    $scope.buscou = false

    $scope.search = function (term) {
      $http.get('http://localhost:9200/blog/_search?q=' + term).
          success(function(data, status, headers, config) {
            $scope.posts = data;
            $scope.buscou = true;
          }).
          error(function(data, status, headers, config) {
          // log error
          });
    }
}]);
