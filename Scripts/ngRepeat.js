var myApp = angular
				.module("myModule",[])
					.controller("myController", function($scope){
						var employees=[
						{name:"Sam", gender:"male", age:30},
						{name:"John", gender:"female", age:28},
						{name:"Francis", gender:"female", age:31},
						{name:"Michael", gender:"male", age:33}
						];
						$scope.employees = employees;
					})