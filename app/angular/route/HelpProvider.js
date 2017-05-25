//HelpProvider.js
(function(){
    'use Strict';
    angular
       .module('registerApp')
       .provider('routerHelper',HelpProvider);
    HelpProvider.$inject=['$locationProvider','$stateProvider','$urlRouterProvider'];
    /* @ngInject */  
    function HelpProvider($locationProvider,$stateProvider,$urlRouterProvider){
        /* jshint validthis:true */
        
        this.$get=RouterHelper;
        /*$locationProvider.html5Mode({
             enabled: true,
             requireBase: false
        });*/
        RouterHelper.$inject=['$state'];
         /* @ngInject */
        function RouterHelper($state){
            
             var hasOtherwise=false;
            var service = {
                
                
                configStates:configStates,
                
                getStates:getStates,
                
            };
            console.log("hello");
            
            return service;
            /* function declarations */
            function configStates(states,otherwisePath){
                states.forEach(function(state){
                    
                   $stateProvider.state(state.state,state.config); 
                    
                });
                if(otherwisePath && !hasOtherwise){
                    hasOtherwise=true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }
            function getStates(){
                
                return $state.get();
                
            }
            
        }
    }   
      
})();