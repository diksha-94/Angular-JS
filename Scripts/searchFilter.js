var myApp = angular
				.module("myModule",[])
					.controller("myController", function($scope){
						var employees = [
						{name:"Ben", gender:"male",city:"Bangalore",salary:50000.23},
						{name:"John", gender:"male",city:"Chennai",salary:45000.2},
						{name:"Michael", gender:"male",city:"Chennai",salary:98000},
						{name:"Christ", gender:"female",city:"Delhi",salary:67000.0}
						];
						
						$scope.employees = employees;
						
					})