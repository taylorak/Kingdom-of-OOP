'use strict';

const LivingThing = require('./LivingThing');

class Bacteria extends LivingThing {
  constructor(name) {
    super(name, true, false, false, true, false);
  }
}

module.exports = Bacteria;