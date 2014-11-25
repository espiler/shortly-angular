angular.module('shortly.services', [])

.factory('Links', function ($http) {
  // Your code here
  var data = {links: []};
  var link = {};

  var getLinks = function() {
    $http({
      method: 'GET',
      url: '/api/links'
    })
    .then(function(res) {
      data.links = res.data;
    });
  };

  var addLink = function(link) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: {url: link},
    })
    .then(function(response) {
        // invoke newLink -> pass result to next two definitions
        var newLink;
        data.links.push(newLink); // Adds new link to master links list
        link = newLink; // assigns newly created link to link object
      },
      function(response) {}  // If Error
    );
  };


  return {
    getLinks: getLinks,
    data: data,
    link: link,
    addLink: addLink
  };

})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
