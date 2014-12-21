module.exports = {
  name: "server",
  ns: "emailjs",
  title: "Email Server",
  description: "Connect to a smtp server",
  phrases: {
    active: "Connecting ot mail server {{input.domain}}"
  },
  ports: {
    input: {
      user: {
        type: "string",
        title: "Username"
      },
      password: {
        type: "string",
        title: "Password"
      },
      host: {
        type: "string",
        title: "Hostname"
      },
      ssl: {
        type: "boolean",
        title: "SSL",
        "default": true
      }
    },
    output: {
      server: {
        title: "Server",
        type: "function"
      }
    }
  },
  dependencies: {
    npm: {
      emailjs: require('emailjs')
    }
  },
  fn: function server(input, output, state, done, cb, on, emailjs) {
    var r = function() {
      var options = {
        user: input.user,
        password: input.password,
        host: input.host,
        timeout: input.timeout
      };

      if (input.domain) options.domain = input.domain;
      if (input.tls) options.tls = input.tls;
      if (input.ssl) options.ssl = input.ssl;

      output.server = emailjs.server.connect(options);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}