const express = require('express');
const contactRoutes = express.Router();

let Contact = require('./contact.model');

contactRoutes.route('/add').post((req, res) => {
  let contact = new Contact(req.body);
  contact
    .save()
    .then(newContact => {
      res.status(200).json({ newContact: 'contact added successfully' });
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});

contactRoutes.route('/').get((req, res) => {
  Contact.find((err, contacts) => {
    if (err) {
      console.log(err);
    } else {
      res.json(contacts);
    }
  });
});

module.exports = contactRoutes;
