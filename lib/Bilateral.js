'use strict';

const Animal = require('./Animal');

class Bilateral extends Animal {
  constructor(name, body) {
    super(name, 'bilateral');
    this._body = body;
  }

  get body() {
    return this._body;
  }

  set body(body) {
    if (typeof body !== 'string') {
      throw new TypeError("Bilateral.body must be a string");
    }
    this._body = body;
  }
}

module.exports = Bilateral;