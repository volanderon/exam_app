QuizModule.factory( 'QuizFactory',function( $http ){
	var urlBase = 'api/quiz';
	var quiz = [];
	var QuizFactory = {};

	UserFactory.addQuiz = function(){
		
	};

	UserFactory.matchQuiz = function(){
		$http.post(urlBase);
		return user;
	};

	UserFactory.getQuizDetails = function(){
		
	};


	return QuizFactory;
});