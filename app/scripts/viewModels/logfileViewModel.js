// logfile View Model

var LogFile = require('../models/LogFile');

// the view-model tracks a running list of logfiles, and allows for logfiles to be added to the list.

var logfileViewModel = (function() {
    var vm = {};
    vm.init = function() {

        var logfile = new LogFile({ title: "Log File 1", content: "Content Content 111" });

        vm.inputString = m.prop("Input String");
        vm.title = logfile.title();
        vm.content = logfile.content();
        console.log('logfile:');
        console.log(vm.title);
        console.log(vm.content);
        //vm.content = 'Content';
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
