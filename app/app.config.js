(function(){
    'use Strict';
    angular
      .module('registerApp')
      .config(config);
      config.$inject=['$stateProvider','$urlRouterProvider','$injector'];
       function config($stateProvider,$urlRouterProvider,$injector){
       
        $stateProvider
           .state('home',{
                
               url:'/home',
               templateUrl:'layout/login/login.html',
               controller:'loginCtrl'
               
        })
         
           .state('register',{
              url:'/register',
              templateUrl:'layout/register/register.html',
             controller:'registerCtrl'
        })
        .state('dashboard', {
            resolve:{
                check: check 
            },
            
            url: '/dashboard',
            templateUrl: 'dashboard/dashboard.html',
            controller: 'dashCtrl'
            
        })
        $urlRouterProvider.otherwise(function ($injector, $location) {
        var $state = $injector.get('$state');
        //console.log('--came here--');
        $state.go('home');
    });
    };
    function check($state,$rootScope){
                      
                    if(!$rootScope.loggedIn){
                       $state.go('/') 
                    }
                    
                }
})();