var UserModule = angular.module('User', []);
var QuizModule = angular.module('Quiz', ['User']);
var ResultModule = angular.module('Result', ['User', 'Quiz']);