'use strict';

const Eukaryota = require('./Eukaryota');

class Protista extends Eukaryota {
  constructor(name, uniCellular, mobile, heterotroph) {
    super(name, uniCellular, true, mobile, heterotroph);
  }
}

module.exports = Protista;