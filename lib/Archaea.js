'use strict';

const LivingThing = require('./LivingThing');

class Archaea extends LivingThing {
  constructor(name) {
    super(name,true, false, true, true, false);
  }
}

module.exports = Archaea;