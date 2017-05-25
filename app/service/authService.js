(function(){
     'use Strict';
     angular
         .module("registerApp")
         .factory('authService',authService);
         authService.$inject=['$rootScope','$state','$localStorage'];
    function authService($rootScope,$state,$localStorage){
         console.log("came to service");
            function login(user,pass){
                
                if(user==$localStorage.data.user && pass==$localStorage.data.pass){
                  console.log("loggedin");
                    $rootScope.user=user;
                    $rootScope.loggedIn=true;
                    $state.go('dashboard')
                }
                else{
                    alert("invalid username or password");
                }
            }
         return{
            login: login
           }
            
     };
})();