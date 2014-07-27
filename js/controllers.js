var modulo = angular.module('photoApp', []);
 
modulo.config(function($routeProvider) {
  $routeProvider.when('/photos',
                      {templateUrl: 'photo-list.html', controller: PhotoListCtrl});
  $routeProvider.when('/photos/:id',
                      {templateUrl: 'photo-detail.html', controller: PhotoDetailCtrl});
  $routeProvider.otherwise({redirectTo: '/photos'});
});
