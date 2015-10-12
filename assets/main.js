
	
	var app = angular.module("exemploService",[]);
	    app.controller("meuControler", minhaFuncaoControler );
	    app.service("meuService", minhaFuncaoService);

		    function minhaFuncaoControler ( $scope, callback ){
				function sucesso ( obj ){
			        $scope.User = obj.data;
				  };
				function erro ( err ){
				    console.log( err );
				  }; 
				callback.then(sucesso, erro);
	        }; // Controller 

	        function minhaFuncaoService( $http ){
		         var Requisicao = {
			        url:'https://api.github.com/users/werickvieira',
			        method:'GET'
			      };
				 return $http(Requisicao);
	        }; // Service 

    // Dependências
    minhaFuncaoControler.$inject = ['$scope', 'meuService']; 
      minhaFuncaoService.$inject = ['$http'];


