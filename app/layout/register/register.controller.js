(function(){
    'usr Strict';
    angular
       .module('registerApp')
       .controller('registerCtrl',registerCtrl)
      registerCtrl.$inject=['$rootScope','$localStorage','$scope','$state'];
      function registerCtrl($rootScope,$localStorage,$scope,$state){
            var vm=$scope;
            vm.register=function(){
                 var data={
                     user:vm.username,
                     email:vm.email,
                     pass:vm.password
                 }
                 
                 $localStorage.data=data;
                 console.log(data);
                 alert("submitted successfully");
                 $state.go("home");
                
            }
            vm.login = function(){
                     $state.go('home');
                 }
    };
})();