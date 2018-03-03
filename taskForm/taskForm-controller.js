(function(){
  angular.module('app')
    .controller('taskFormController', function(){
      var vm = this;
      vm.$onInit = function(){
        vm.items = [];
        vm.addItem = function() {
          if (!vm.newItem){
            return;
          }
          vm.items.push(vm.newItem);
          vm.newItem = '';
        };
      };

    });



})();
