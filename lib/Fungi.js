'use strict';

const Eukaryota = require('./Eukaryota');

class Fungi extends Eukaryota {
  constructor(name) {
    super(name, false, true, false, true);
  }
}

module.exports = Fungi;