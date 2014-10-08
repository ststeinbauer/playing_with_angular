// declare a module
var app = angular.module('eos.WorkoutLog', []);

app.controller('eos.WorkoutController', function($scope) {

  $scope.currentMovement = {
    movement: null,
    reps: null
  };

  $scope.movements = [];

  $scope.addMovement = function(movement){
    $scope.movements.push(movement);
  };

});
