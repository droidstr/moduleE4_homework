function Device(name, powerConsumption) {
    this.name = name
    this.powerConsumption = powerConsumption
    this.switchedOn = false
}

Device.prototype.plugIn = function () {
    let message
    if (!this.switchedOn) {
        this.switchedOn = !this.switchedOn
        message = `The ${this.name} is plugged in and consuming ${this.powerConsumption} kWh`
    } else {
        message = `The ${this.name} is plugged in already`
    }
    console.log (message)
}

Device.prototype.plugOut = function () {
    let message
    if (this.switchedOn) {
        this.switchedOn = !this.switchedOn
        message = `The ${this.name} is plugged out and consuming 0 kWh`
    } else {
        message = `The ${this.name} is plugged out already`
    }
    console.log (message)
}

function Lamp (name, powerConsumption, lightTemp) {
    this.name = name
    this.powerConsumption = powerConsumption
    this.lightTemp = lightTemp
}

Lamp.prototype = new Device()
Lamp.prototype.use = function () {
    let message
    if (this.switchedOn) {
        message = `The ${this.name} illuminate everything with ${this.lightTemp} light`
    } else {
        message = `The ${this.name} is plugged out and dim`
    }
    console.log (message)
}

function Computer (name, powerConsumption, os) {
    this.name = name
    this.powerConsumption = powerConsumption
    this.os = os
}

Computer.prototype = new Device()
Computer.prototype.plugIn = function () {
    let message
    if (!this.switchedOn) {
        this.switchedOn = !this.switchedOn
        message = `The ${this.name} is plugged in and consuming ${this.powerConsumption} kWh.
${this.os} welcome screen is on the monitor`
    } else {
        message = `The ${this.name} is plugged in already`
    }
    console.log (message)
}

Computer.prototype.use = function () {
    let message
    if (this.switchedOn) {
        message = `The ${this.os} welcome screen is on the monitor. But you don't know how to use it.`
    } else {
        message = `The ${this.name} is plugged out. The monitor is dim`
    }
    console.log(message)
}

let nightLamp = new Lamp('night lamp', 0.005, 'warm')
let chandelier = new Lamp ('chandelier', 0.2, 'cold')
let laptop = new Computer('laptop', 0.3, 'chrome OS')

nightLamp.plugOut()
laptop.use()
laptop.plugIn()
laptop.use()
laptop.plugOut()
chandelier.use()
chandelier.plugIn()
chandelier.use()
chandelier.plugOut()
nightLamp.plugIn()
nightLamp.use()