var app = angular.module('app',[]);

app.controller('FormController', function (){
  var vm = this;
  vm.item = [];
  vm.addItem = function () {
    if (!vm.newItem){
      return;
    }
    vm.item.push(vm.newItem);
    vm.newItem = '';
  };

  vm.remove = function (item) {
    var itemIndex = vm.item.indexOf(item);
    vm.item.splice(itemIndex, 1);
  };


});
