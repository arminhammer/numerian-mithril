// logfile view

var vm = require('../viewModels/logfileViewModel');
vm.init();

var logfileView = function() {

  return m("div", [
    m("div", [
      m("input", {onchange: m.withAttr("value", vm.inputString), value: vm.inputString() })
    ]),
    m("div", [
      //m('textarea[style="display:none;"]', "Write something here")
      //{onchange: vm.logfile.content, value: vm.logfile.content() })
      m("textarea", {onchange: m.withAttr("value", vm.logfile.content), value: vm.logfile.content() })
    ]),
    m('div', vm.logfile.title()),
    //m('div', vm.logfile.content()),
    m('div', vm.inputString()),
    m('div', vm.output().count),
    m('div.outputText', vm.output().body)

  ]);

  /*
   m("body", [
   m("input", {onchange: m.withAttr("value", vm.description), value: vm.description()}),
   m("button", {onclick: vm.add}, "Add"),
   m("table", [
   vm.list.map(function(task, index) {
   return m("tr", [
   m("td", [
   m("input[type=checkbox]", {onclick: m.withAttr("checked", task.done), checked: task.done()})
   ]),
   m("td", {style: {textDecoration: task.done() ? "line-through" : "none"}}, task.description()),
   ])
   })
   ])
   ])
   ]);
   */
};

module.exports = logfileView;
