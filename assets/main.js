

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

			  meuService.getUser("werickvieira")
			  .then(sucesso, erro);

	    }; // Controller 

	    function meuService( $http ) {
           
	         var Requisicao = {
		        url:'https://api.github.com/users/',
		        method:'GET'
		      };

		     this.getUser = function(login) {
			  Requisicao.url += login;
			   return $http(Requisicao);
			 };
	 

	    }; // Service 


    meuControler.$inject = ['$scope', 'meuService']; //
      meuService.$inject = ['$http'];

