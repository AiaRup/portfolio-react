import React, { Component } from 'react';
import './Contact.scss';
import Progress from './Progress/Progress';
import axios from 'axios';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.state = {
      contact: {
        name: '',
        email: '',
        message: ''
      },
      percentage: 0,
      inputId: ''
    };
  }

  onChangeInput = inputId => ({ target: { value } }) => {
    this.setState(prevState => {
      const newContact = { ...prevState.contact, [inputId]: value };
      return { contact: newContact };
    }, this.checkProgress);
  };

  checkProgress() {
    const values = Object.values(this.state.contact);
    let percentage = 0;
    for (const value of values) {
      if (value) {
        percentage += 33;
      }
    }
    if (percentage !== this.state.percentage) {
      this.setState({ percentage: percentage });
    }
  }

  onFocus({target: {id}}) {
    this.setState({inputId: id})
  }

  onBlur() {
    this.setState({inputId: ""})
  }

  onSubmit(event) {
    event.preventDefault();
    const newContact = { ...this.state.contact };
    axios.post('http://localhost:8000/contact/add', newContact).then(res => console.log('axios post', res.data));
    this.setState({
      contact: {
        name: '',
        email: '',
        message: ''
      },
      percentage: 0
    });
  }

  render() {
    const {
      contact: { name, email, message },
      percentage,
      inputId
    } = this.state;
    return (
      <section id="contact">
        <h3 className="contact__title">I'd love to hear from you...</h3>
        <form onSubmit={this.onSubmit} className="contact__form">
          <div className="form__container">
            <div className="form__left">
              <div className={inputId === 'name' ? 'form__group active__input' : 'form__group'}>
                <label className="form__label" htmlFor="name">
                  Name:
                </label>
                <input
                id="name"
                type="text"
                className="form__input"
                value={name}
                onChange={this.onChangeInput('name')}
                placeholder="Your Name *"
                onBlur={this.onBlur}
                onFocus={this.onFocus}/>
              </div>
              <div className={inputId === 'email' ? 'form__group active__input' : 'form__group'}>
                <label className="form__label" htmlFor="email">
                  Email:
                </label>
                <input
                id="email"
                type="email"
                className="form__input"
                value={email}
                onChange={this.onChangeInput('email')} placeholder="Your Email *"
                onBlur={this.onBlur}
                onFocus={this.onFocus}/>
              </div>
            </div>
            <div className={inputId === 'message' ? 'form__group active__input' : 'form__group'}>
              <label className="form__label" htmlFor="message">
                Message:
              </label>
              <textarea
              id="message"
              className="form__textarea"
              rows="10"
              value={message}
              onChange={this.onChangeInput('message')} placeholder="What's on your mind? *"
              onBlur={this.onBlur}
              onFocus={this.onFocus}/>
            </div>
          </div>
          {percentage <= 66 ? (
            <Progress percentage={this.state.percentage} />
          ) : (
            <div className="form__group-submit">
              <input type="submit" value="Submit" className="form__submit" />
            </div>
          )}
        </form>
      </section>
    );
  }
}
