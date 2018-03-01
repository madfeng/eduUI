
app.config(function($stateProvider){
	
	$stateProvider
			
		.state('regist',{
			url: '/regist',
			templateUrl: 'pages/regist.html',
			cache:false,
			controller: 'registMainCtrl'
		})
		
		.state('commEval',{
			url: '/commEval',
			templateUrl: 'pages/survey.html',
			cache:false,
			controller: 'surveyMainCtrl'
		})
		
		.state('chooseSubject',{
			url: '/chooseSubject/:evaluationId',
			templateUrl: 'pages/subjectChoose.html',
			cache:false,
			controller: 'subjectMainCtrl'
		})
		
		.state('evalMorality',{
			url: '/evalMorality/:evaluationId/:subjectId',
			templateUrl: 'pages/evalMorality.html',
			cache:false,
			controller: 'subjectMoralityMainCtrl'
		})
		
		.state('evalIntelligence',{
			url: '/evalIntelligence/:evaluationId/:subjectId',
			templateUrl: 'pages/evalIntelligence.html',
			cache:false,
			controller: 'subjectIntelligenceMainCtrl'
		})
		
		.state('evalLabour',{
			url: '/evalLabour/:evaluationId/:subjectId',
			templateUrl: 'pages/evalLabour.html',
			cache:false,
			controller: 'subjectLabourMainCtrl'
		})

		.state('login',{
			url: '/login',
			templateUrl:'my/login.html',
			cache:false,
			controller:'loginMainCtrl'
		})
		
})

app.controller("indexMainCtrl",function($scope, $http, $state, $stateParams){
	
		// $scope.loginId = getQueryString2("code");
		
		$state.go('regist',{reload:true});
	
});

