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

    vm.newLineCount = function() {
      var pattern = new RegExp('\\n', 'g');
      var result = vm.logfile.content().match(pattern);
      if(result) {
        return vm.logfile.content().match(pattern).length;
      }
      else {
        return 0;
      }
    };

    vm.output = function() {

      if(vm.inputString() == '') {
        return vm.logfile.content();
      }

      var tempContent = vm.logfile.content();
      var input = vm.inputString();
      var pattern = new RegExp(input, 'g');
      //console.log('Pattern:');

      //console.log('logfile:');
      //console.log(vm.logfile.content());

      var counter = vm.logfile.content().match(pattern);

      var count = 0;
      if (counter) {
        count = vm.logfile.content().match(pattern).length
      }

      console.log('count');
      console.log(count);

      return {
        count: count,
        body: m.trust(tempContent.replace(pattern, '<span class="patternMatch">' + input + '</span>'))
    }
  };

  //console.log(vm.title);
  //console.log(vm.content);
  //console.log(vm.inputString());
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
