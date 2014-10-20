// declare a module
var app = angular.module('workoutLog', [
  'workoutLog.controllers'
]);

angular.module('workoutLog.controllers', []).
  controller('workoutController', function($scope) {
    $scope.workout = {
      name: 'Fran',
      date: '10/19/2014',
      movements: [
        {name: "thrusters", reps: 21},
        {name: "pull-ups", reps: 21},
        {name: "thrusters", reps: 15},
        {name: "pull-ups", reps: 15},
        {name: "thrusters", reps: 9},
        {name: "pull-ups", reps: 9},
      ],
      time: "9:59"
    };
  });
