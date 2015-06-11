// logfile View Model

var LogFile = require('../models/LogFile');

// the view-model tracks a running list of logfiles, and allows for logfiles to be added to the list.

var logfileViewModel = (function() {
  var vm = {};
  vm.init = function() {

    vm.logfile = new LogFile({
      title: "Log File 1",
      content: "Input 1 \t\n" +
      "Input 2 \t\n" +
      "Input 3\t\n"
    });

    vm.inputString = m.prop("Input");
    //vm.title = logfile.title();
    //vm.content = logfile.content();

    vm.output = function() {

      if(vm.inputString() == '') {
        return vm.logfile.content();
      }

      var tempContent = vm.logfile.content();
      var input = vm.inputString();
      var pattern = new RegExp(input, 'g');
      console.log('Pattern:');
      console.log(pattern);
      return m.trust(tempContent.replace(pattern, '<span class="patternMatch">' + input + '</span>'));

    };

    console.log('logfile:');
    console.log(vm.title);
    console.log(vm.content);
    console.log(vm.inputString());
    /*
     //a running list of logfiles
     vm.list = [];
     vm.description = m.prop("");

     //adds a logfile to the list, and clears the description field for user convenience
     vm.add = function() {
     if (vm.description()) {
     vm.list.push(new LogFile({description: vm.description()}));
     vm.description("");
     }
     };
     */
  };
  return vm
}());

module.exports = logfileViewModel;
