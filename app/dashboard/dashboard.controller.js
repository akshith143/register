(function(){
    'use Strict';
    angular
      .module('registerApp')
      .controller('dashCtrl',dashCtrl);
    dashCtrl.$inject=['$scope','$rootScope','$state'];
      function dashCtrl($scope,$rootScope,$state){
        var vm=$scope;
        vm.user=$rootScope.user;
          vm.logout=function(){
              $rootScope.loggedIn=false;
              $state.go('home');
          }
    }
})();