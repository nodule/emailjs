var message = {
  text: input.text,
  from: input.from,
  to: input.to,
  subject: input.subject
};

if(input.cc) message.cc = input.cc;

output = [input.server, 'send', message];
