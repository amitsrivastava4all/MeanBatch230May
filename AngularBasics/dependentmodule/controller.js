
app2.controller("myctrl",function($scope,MyAppService){
    $scope.data = MyAppService.show();
});
// var serv = new MyAppService();
/*app2.controller('myctrl', ['$scope', 'MyAppService', function(scp, serv){
    scp.data = serv.show();
}])*/
