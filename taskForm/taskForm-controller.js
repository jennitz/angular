(function(){
  angular.module('app')
    .controller('taskFormController', function(DataFactory){
      var vm = this;
      vm.$onInit = function(){
        vm.items = DataFactory.getData() || [];
        vm.addItem = function() {
          if (!vm.newItem){
            return;
          }
          vm.items.push(vm.newItem);
          DataFactory.setData(vm.items);
          vm.newItem = '';
        };
      };

    });



})();
