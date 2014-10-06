// declare a module
var myAppModule = angular.module('ss.WorkoutLog', []);


myAppModule.filter('uppercase', function() {
 return function(name) {
    if (name) {
      return name.toUpperCase();
    }
    return '';
  };
});

myAppModule.filter('usPhoneNumber', function() {
  return function(number) {
    var phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    var replacer = function (match, p1, p2, p3, offset, string) {
      return '(' + p1 + ') ' + p2 + '-' + p3;
    };

    return number.replace(phoneNumberRegex, replacer);

    return '';
  };
});


myAppModule.filter('greet', function() {
 return function(name) {
    name = name || '_____';
    return 'Hello, welcome to my site ' + name + '!';
  };
});
