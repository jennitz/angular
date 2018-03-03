(function(){
  angular.module('app')
    .component('taskList', {
      controller: 'taskListController',
      templateUrl: 'taskList/taskList.html',
      bindings: {
        items: '<',
        search: '<'
      }
    });


})();
