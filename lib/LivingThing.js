'use strict';

class LivingThing {
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('LivingThing.name must be a string');
    }
    this._name = name;
  }

  get uniCellular() {
    return this._uniCellular;
  }

  set uniCellular(uniCellular) {
    if (typeof uniCellular !== 'boolean') {
      throw new TypeError('LivingThing.uniCellular must be a boolean');
    }
    this._uniCellular = uniCellular;
  }

  get multiCellular() {
    return !this._uniCellular;
  }

  set multiCellular(multiCellular) {
    if (typeof multiCellular !== 'boolean') {
      throw new TypeError('LivingThing.multiCellular must be a boolean');
    }
    this._uniCellular = !multiCellular;
  }

  get eukaryote() {
    return this._trueNucleus;
  }

  set eukaryote(eukaryote) {
    if (typeof eukaryote !== 'boolean') {
      throw new TypeError('LivingThing.eukaryote must be a boolean');
    }
    this._trueNucleus = eukaryote;
  }

  get prokaryote() {
    return !this._trueNucleus;
  }

  set prokaryote(prokaryote) {
    if (typeof prokaryote !== 'boolean') {
      throw new TypeError('LivingThing.prokaryote must be a boolean');
    }
    this._trueNucleus = !prokaryote;
  }

  get anaerobic() {
    return this._anaerobic;
  }

  set anaerobic(anaerobic) {
    if (typeof anaerobic !== 'boolean') {
      throw new TypeError('LivingThing.anaerobic must be a boolean');
    }
    this._anaerobic = anaerobic;
  }

  get aerobic() {
    return !this._anaerobic;
  }

  set aerobic(aerobic) {
    if (typeof aerobic !== 'boolean') {
      throw new TypeError('LivingThing.aerobic must be a boolean');
    }
    this._anaerobic = !aerobic;
  }

  get asexual() {
    return this._asexual;
  }

  set asexual(asexual) {
    if (typeof asexual !== 'boolean') {
      throw new TypeError('LivingThing.asexual must be a boolean');
    }
    this._asexual = asexual;
  }

  get sexual() {
    return !this._asexual;
  }

  set sexual(sexual) {
    if (typeof sexual !== 'boolean') {
      throw new TypeError('LivingThing.sexual must be a boolean');
    }
    this._asexual = !sexual;
  }

  get mobile() {
    return this._mobile;
  }

  set mobile(mobile) {
    if (typeof mobile !== 'boolean') {
      throw new TypeError('LivingThing.mobile must be a boolean');
    }
    this._mobile = mobile;
  }

  get immobile() {
    return !this._mobile;
  }

  set immobile(immobile) {
    if (typeof immobile !== 'boolean') {
      throw new TypeError('LivingThing.immobile must be a boolean');
    }
    this._mobile = !immobile;
  }
}

module.exports = LivingThing;