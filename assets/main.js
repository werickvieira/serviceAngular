
	var app = angular.module("exemploService",[]);
	    app.controller("meuControler", meuControler );

	    function meuControler ( $scope, $http ){

	      var Requisicao = {
	        url:'https://api.github.com/users/werickvieira',
	        method:'GET'
	      };

		  $http(Requisicao)
		  .success(function( data ){
	         $scope.User = data;
		  })
		  .error(function( err ){
		     console.log( err );

		  }); 

	    };


    meuControler.$inject = ['$scope', '$http']; //

