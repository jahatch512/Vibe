var $ = require("jquery");





setTimeout(function(){
  var body = $('#main-body');
  var newEl = $('<p>I added this with jquery<p>');
  body.append(newEl);
}, 5000);
