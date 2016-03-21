var options = {
  user: $.user,
  password: $.password,
  host: $.host,
  timeout: $.timeout
};

if($.domain) options.domain = $.domain;
if($.tls) options.tls = $.tls;
if($.ssl) options.ssl = $.ssl;

output.server = $.create(emailjs.server.connect(options));
