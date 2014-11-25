angular.module('shortly.shorten', [])
// var linkController = require("../server/links/linkController.js")

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  angular.extend($scope, Links);

});
