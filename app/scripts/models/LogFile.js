/**
 * Created by arming on 6/10/15.
 */

// LogFile model

var LogFile = function(data) {
  this.title = m.prop(data.title);
  this.content = m.prop(data.content);
  //this.done = m.prop(false);
};

module.exports = LogFile;
