ResultModule.factory( 'ResultFactory',function( $http ){
	var urlBase = 'api/result';
	var result = [];
	var ResultFactory = {};

	ResultFactory.addResult = function(){
		
	};

	ResultFactory.matchResult = function(){
		$http.post(urlBase);
		return result;
	};

	ResultFactory.getResultDetails = function(){
		
	};


	return ResultFactory;
});