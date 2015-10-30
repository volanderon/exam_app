UserModule.directive('login',function(){
	return {
		restrict: 'E',
		templateUrl: 'app/templates/_login.html',
		controller: 'UserController'
    };
});

