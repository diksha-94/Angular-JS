var myApp = angular
				.module("myModule",[])
					.controller("myController", function($scope){
						var location=[
						{countryName:"India", cities:[
							{name:"Bangalore"},
							{name:"Delhi"},
							{name:"Mumbai"}
						]},
						{countryName:"Australia", cities:[
							{name:"Melbourne"},
							{name:"Sydney"}
						]},
						{countryName:"USA", cities:[
							{name:"California"},
							{name:"Chicago"},
							{name:"Houston"}
						]}
					];
						$scope.location = location;
					})