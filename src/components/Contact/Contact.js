import React, { Component } from 'react';
import './Contact.scss';
import axios from 'axios';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      contact: {
        name: '',
        email: '',
        message: ''
      }
    };
  }

  onChangeInput = inputId => ({ target: { value } }) => {
    this.setState(prevState => {
      const newContact = { ...prevState.contact, [inputId]: value };
      return { contact: newContact };
    });
  };

  onSubmit(event) {
    event.preventDefault();
    const newContact = { ...this.state.contact };
    axios.post('http://localhost:8000/contact/add', newContact).then(res => console.log('axios post', res.data));
    this.setState({
      contact: {
        name: '',
        email: '',
        message: ''
      }
    });
  }

  render() {
    const { name, email, message } = this.state.contact;
    return (
      <section id="contact">
        <h3>I'd LOVE to here from you</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form__group">
            <label>Name: </label>
            <input type="text" className="form-control" value={name} onChange={this.onChangeInput('name')} />
          </div>
          <div className="form__group">
            <label>Email: </label>
            <input type="text" className="form-control" value={email} onChange={this.onChangeInput('email')} />
          </div>
          <div className="form__group">
            <label>Message: </label>
            <textarea className="form-control" value={message} onChange={this.onChangeInput('message')} />
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" className="form__button" />
          </div>
        </form>
      </section>
    );
  }
}
