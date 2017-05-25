/**
*  loginController
*  @name controller
*/

(function(){
    'usr Strict';
    angular
       .module('registerApp')
       .controller('loginCtrl',loginCtrl);
      loginCtrl.$inject=['$scope','$localStorage','authService','$state'];
      /*
      * @namespace  loginCtrl     
      */ 
      
    function loginCtrl($scope,$localStorage, authService,$state) {
           var vm=$scope;
        vm.submit=function(){
                console.log(vm.username);
                console.log($localStorage.data.user);
                authService.login(vm.username,vm.password);
            }
        vm.register = function(){
                 
                     $state.go('register');
                    } 
    };
})();