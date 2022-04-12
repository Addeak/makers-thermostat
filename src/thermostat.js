'use strict';

class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10
    this.MAX_LIMIT_PSM_ON = 25
    this.MAX_LIMIT_PSM_OFF = 32
    this.DEFAULT_TEMPERATURE = 20
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18
    this.HIGH_ENERGY_USAGE_LIMIT = 25
    this.temperature = this.DEFAULT_TEMPERATURE
    this.powerSavingMode = true
  }

  getCurrentTemperature() {
    return this.temperature
  }

  up() {
    if (this._isMaximumTemperature()) {
      return
    }
    this.temperature++
  }

  down() {
    if (this._isMinimumTemperature()) {
      return
    }
    this.temperature--
  }

  switchPowerSavingModeOff() {
    this.powerSavingMode = false
  }

  switchPowerSavingModeOn() {
    this.powerSavingMode = true
  }

  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE
  }

  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage'
    }
    if (this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'medium-usage'
    }
    return 'high-usage'
  }

  _isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE
  }

  _isMaximumTemperature() {
    if (this._isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON
  }

  _isPowerSavingModeOn() {
    return this.powerSavingMode === true
  }
}
