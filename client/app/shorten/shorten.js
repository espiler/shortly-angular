angular.module('shortly.shorten', [])
// var linkController = require("../server/links/linkController.js")

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.data = { links:[] };

  $scope.submitLink = function() {
    console.log($scope.link);
    Links.addLink($scope.link)
    .then(function(){
      Links.getLinks()
      .then(function(links) {
        $scope.data.links = links;
      });
    });
    $scope.link = {};

  };

  // angular.extend($scope, Links);

});
