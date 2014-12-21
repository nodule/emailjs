module.exports = {
  name: "send",
  ns: "emailjs",
  title: "Send Email",
  description: "Sends an Email",
  phrases: {
    active: "Sending email"
  },
  ports: {
    input: {
      server: {
        title: "Server",
        type: "function"
      },
      text: {
        type: "string",
        title: "Text"
      },
      from: {
        type: "string",
        title: "From"
      },
      to: {
        type: "string",
        title: "To"
      },
      subject: {
        type: "string",
        title: "Subject"
      },
      cc: {
        type: "string",
        title: "CC",
        "default": null
      },
      tls: {
        type: "boolean",
        title: "TLS",
        "default": null
      },
      timeout: {
        type: "number",
        title: "Timeout",
        description: "max number of milliseconds to wait for smtp responses",
        "default": 5000
      },
      domain: {
        type: "string",
        title: "Domain",
        description: "domain to greet smtp with (defaults to os.hostname)",
        "default": null
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      out: {
        title: "Details",
        description: "Details of the message that was send",
        type: "object"
      }
    }
  },
  fn: function send(input, output, state, done, cb, on) {
    var r = function() {
      var message = {
        text: input.text,
        from: input.from,
        to: input.to,
        subject: input.subject
      };

      if (input.cc) message.cc = input.cc;

      input.server.send(message, function(err, out) {
        if (err) {
          output({
            error: err
          });
        } else {
          output({
            out: out
          });
        }
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}