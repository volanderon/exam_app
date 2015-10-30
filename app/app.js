"use strict";
var app = angular.module('quizApp', ['User', 'Quiz', 'Result']);


app.controller('mainController', function ($http, $scope, UserFactory, QuizFactory, ResultFactory) {
	console.log("check controller");
	
});