(function(){
  angular.module('app')
    .controller('taskListController', function(){
      var vm = this;
      vm.$onInit = function(){
        vm.remove = function (item) {
          var itemIndex = vm.items.indexOf(item);
          vm.items.splice(itemIndex, 1);
        };
      };

    });



})();
