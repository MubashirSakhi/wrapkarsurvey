var myApp=angular.module('myApp',["firebase"]);
myApp.controller('SurveyController',['$scope','$firebaseArray',function($scope,$firebaseArray){
    var ref=new Firebase("https://wrapkarsurvey.firebaseio.com/wrapkarsurvey");
    $scope.temp=$firebaseArray(ref);
    $scope.review={};
    $scope.addData=function(){
        $scope.temp.$add($scope.review);
        $scope.review={};
    };
}]);