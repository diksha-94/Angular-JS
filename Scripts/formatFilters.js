var myApp = angular
				.module("myModule",[])
					.controller("myController", function($scope){
						var employees = [
						{name:"Ben", gender:"male",dob:new Date("12 december 1998"),salary:50000.23},
						{name:"John", gender:"male",dob:new Date("30 march 1996"),salary:45000.2},
						{name:"Michael", gender:"male",dob:new Date("13 february 1991"),salary:98000},
						{name:"Christ", gender:"female",dob:new Date("19 july 1989"),salary:67000.0}
						];
						
						$scope.employees = employees;
						$scope.rowLimit = 3;
						$scope.sortBy = '+name';
					})