import React from "react";
import * as emailjs from "@emailjs/browser";
// https://www.emailjs.com/docs/examples/reactjs/

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      submitted: false,
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    // Name
        let formIsValid = true;
    if (!fields["name"]) {
      formIsValid = false;
      // Set error message under Name input
      errors["name"] = "Please enter a name";
    }
    // Email
    if (!fields["email"] || !this.validateEmail(fields["email"])) {
      formIsValid = false;
      errors["email"] = "Please enter a valid email";
    }
    // Message
    if (!fields["message"]) {
      formIsValid = false;
      errors["message"] = "Please enter a message";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  validateEmail = (email) => {
    return email.match(
      // eslint-disable-next-line
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleValidation()
      ? this.handleSend()
      : console.log("Form has errors");
  }

  handleSend() {
    const { name, email, message } = this.state.fields;

    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          this.setState({ submitted: true });
          console.log(result);
          console.log(result.text);
        },
        (error) => console.log(error)
      );
  }

  render() {
    return (
      <div className="contact page-marker">
        {this.state.submitted ? (
          <>
            <h1 className="contact-header contact">Thanks!</h1>
            <p className="contact">We'll be in touch with you asap!</p>
          </>
        ) : (
          <>
            <h1 className="contact-header">Have A Question?</h1>
            <h4>Leave us a message and we'll get back to you soon</h4>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="name"
                  name="from_name"
                  onChange={this.handleChange.bind(this, "name")}
                  placeholder="Name"
                />
                <span className="error-msg">{this.state.errors["name"]}</span>
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="email"
                  name="reply_to"
                  onChange={this.handleChange.bind(this, "email")}
                  placeholder="Email"
                />
                <span className="error-msg">{this.state.errors["email"]}</span>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  type="message"
                  name="message"
                  onChange={this.handleChange.bind(this, "message")}
                  placeholder="Message"
                ></textarea>
                <span className="error-msg">
                  {this.state.errors["message"]}
                </span>
              </div>

              <div className="d-grid d-sm-block">
                <button
                  className="btn btn-info"
                  type="submit"
                  value="Send"
                  disabled={this.state.submitted}
                >
                  submit
                </button>
              </div>
            </form>
            <h3 className="mt-5">. . . or feel free to call us</h3>

            <button className="btn btn-info btn-lg mt-2">
              <a href="tel:5702533267" className="black-link">
                570 253-3267
              </a>
            </button>
          </>
        )}
      </div>
    );
  }
}

export default ContactForm;
