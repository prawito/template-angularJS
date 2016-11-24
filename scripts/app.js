var app = angular.module ('templateApp', ['ui.router', 'angular-loading-bar']);

app.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/home');
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  })
  .state('main', {
    abstract: true,
    templateUrl: 'templates/main.html'
  })
  .state('main.home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  })
  .state('main.profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html'
  });
});

app.controller('templateCtrl', function($scope){
  $scope.name = 'Prawito Hudoro';
});
