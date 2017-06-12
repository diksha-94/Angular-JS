//Creating module
var myApp = angular.module("myModule",[]);

//Creating controller
var myController = function($scope){
	$scope.message = "Controller created";
}

//Binding controller to module
myApp.controller("myController",myController);