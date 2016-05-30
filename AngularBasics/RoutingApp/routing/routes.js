// $routeProvider - Angular Define , it provide the routing information
app.config(function($routeProvider){
   $routeProvider.when('/mobile/:type', {
                templateUrl : '../pages/mobile.html',
                controller  : 'itemController'
    })
   .when('/tablet/:type', {
                templateUrl : '../pages/tablet.html',
                controller  : 'itemController'
    });
   
});