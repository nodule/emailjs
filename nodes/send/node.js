output = function() {
  var message = {
    text: $.text,
    from: $.from,
    to: $.to,
    subject: $.subject
  };

  if($.cc) message.cc = $.cc;

  $.server.send(message, function(err, out) {
    if(err) {
     output({error: $.create(err)});
    } else {
     output({out: $.create(out)});
    }
  });
};
