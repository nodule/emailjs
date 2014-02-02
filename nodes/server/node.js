var options = {
  user: input.user,
  password: input.password,
  host: input.host,
  timeout: input.timeout
};

if(input.domain) options.domain = input.domain;
if(input.tls) options.tls = input.tls;
if(input.ssl) options.ssl = input.ssl;

output.server = emailjs.server.connect(options);
