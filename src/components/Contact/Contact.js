import React, { Component } from 'react';
import './Contact.scss';
import Progress from './Progress/Progress';
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
        <h3 className="contact__title">I'd LOVE to hear from you...</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Name:{' '}
            </label>
            <input id="name" type="text" className="form__input" value={name} onChange={this.onChangeInput('name')} placeholder="Your Name *" />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email:{' '}
            </label>
            <input id="email " type="text" className="form__input" value={email} onChange={this.onChangeInput('email')} placeholder="Your Email *" />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="message">
              Message:{' '}
            </label>
            <textarea id="message " className="form__textarea" rows="10" value={message} onChange={this.onChangeInput('message')} placeholder="What's on your mind? *" />
          </div>
          <Progress percentage={this.state.percentage} />
          <div className="form__group-submit">
            <input type="submit" value="Submit" className="form__submit" />
          </div>
        </form>
      </section>
    );
  }
}
