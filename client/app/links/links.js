angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  angular.extend($scope, Links);

  $scope.data = { links:[] };

  $scope.getAll = function() {
    $scope.getLinks()
    .then(function(results) {
      $scope.data.links = results;
    });
  };

  $scope.getAll();

});


