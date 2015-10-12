
	var app = angular.module("exemploService",[]);
	    app.controller("meuControler", meuControler );
	    app.service("meuService", meuService);

		    function meuControler ( $scope, meuService ){
			  function sucesso ( obj ){
		        $scope.User = obj.data;
			  }
			  function erro ( err ){
			    console.log( err );
			  }; 

			  meuService.then(sucesso, erro);
			  
	        }; // Controller 

	    function meuService( $http ) {
	         var Requisicao = {
		        url:'https://api.github.com/users/werickvieira',
		        method:'GET'
		      };
			 return $http(Requisicao);
	    }; // Service 


    meuControler.$inject = ['$scope', 'meuService']; //
      meuService.$inject = ['$http'];

