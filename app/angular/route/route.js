//registerApp route.js
(function(){
    'use Strict';
    angular
      .module('registerApp')
      .run(runApp);
     runApp.$inject=['routerHelper'];
    /* @ngInject */
    function runApp(routerHelper){
        routerHelper.configStates(States());
    }
    
    function States(){
        
        return[
            {
                
                state:'home',
                config:{
                    url:'/home',
                    templateUrl:'layout/login/login.html',
                    controller:'loginCtrl'
                    
                }
            },
            {
               state:'register',
                config:{
                    url:'/register',
                    templateUrl:'layout/register/register.html',
                    controller:'registerCtrl'
                }
            },
            {
                state:'dashboard',
                config:{
                    resolve:{
                      check: check 
                    },
            
                   url: '/dashboard',
                   templateUrl: 'dashboard/dashboard.html',
                   controller: 'dashCtrl'
                }
            },
            {
                state:'otherwise',
                 config:{
                       
                     $urlRouterProvider:'/'
            }
            }
        ];
    }
    check.$inject=['$state','$rootScope'];
    /* @ngInject */
    function check($state,$rootScope){
                                  
                    if(!$rootScope.loggedIn){
                       $state.go('/') 
                    }
                    
                }
    
})();