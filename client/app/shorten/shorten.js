angular.module('shortly.shorten', [])
// var linkController = require("../server/links/linkController.js")

.controller('ShortenController', function ($scope, $location, Links, $http) {
  // Your code here
  angular.extend($scope, Links);



  // $scope.addLink = function(link) {
  //   return $http({
  //     method: 'POST',
  //     url: '/api/links',
  //     data: {url: link},
  //   })
  //   .then(function(response) {
  //       console.log(response)''
  //       console.log('*******************success******************');
  //       $scope.data.links.push();
  //     },
  //     function(response) { // optional
  //       console.log('*******************FAILED******************');
  //     }
  //   );
  // };

  // $scope.link = {};

  // $scope.addLink();
});
