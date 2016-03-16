'use strict';

const Eukaryota = require('./Eukaryota');

class Plant extends Eukaryota {
  constructor(name) {
    super(name, false, true, false, false);
  }
}

module.exports = Plant;