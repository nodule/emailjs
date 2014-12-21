output = function() {
  var message = {
    text: input.text,
    from: input.from,
    to: input.to,
    subject: input.subject
  };

  if(input.cc) message.cc = input.cc;

  input.server.send(message, function(err, out) {
    if(err) {
     output({error: err});
    } else {
     output({out: out});
    }
  });
};
