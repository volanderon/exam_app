QuizModule.directive('quiz',function(){
	return {
		restrict: 'E',
		templateUrl: 'app/templates/_quiz.html',
		controller: 'QuizController'
    };
});

