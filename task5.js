class Device {
    constuctor (name, powerConsumption) {
        this.name = name
        this.powerConsumption = powerConsumption
        this.switchedOn = false
    }
    plugIn () {
        let message
        if (!this.switchedOn) {
            this.switchedOn = !this.switchedOn
            message = `The ${this.name} is plugged in and consuming ${this.powerConsumption} kWh`
        } else {
            message = `The ${this.name} is plugged in already`
        }
        console.log (message)
    }
    plugOut() {
        let message
        if (this.switchedOn) {
            this.switchedOn = !this.switchedOn
            message = `The ${this.name} is plugged out and consuming 0 kWh`
        } else {
            message = `The ${this.name} is plugged out already`
        }
        console.log (message)
    }
}

class Lamp extends Device {
    constructor(name, powerConsumption, lightTemp) {
        super(name, powerConsumption)
        this.lightTemp = lightTemp
    }
    use() {
        let message
        if (this.switchedOn) {
            message = `The ${this.name} illuminate everything with ${this.lightTemp} light`
        } else {
            message = `The ${this.name} is plugged out and dim`
        }
        console.log(message)
    }
}
class Computer extends Device {
    constructor(name, powerConsumption, os) {
        super(name, powerConsumption)
        this.os = os
    }

    plugIn() {
        let message
        if (!this.switchedOn) {
            this.switchedOn = !this.switchedOn
            message = `The ${this.name} is plugged in and consuming ${this.powerConsumption} kWh.
${this.os} welcome screen is on the monitor`
        } else {
            message = `The ${this.name} is plugged in already`
        }
        console.log(message)
    }

    use() {
        let message
        if (this.switchedOn) {
            message = `The ${this.os} welcome screen is on the monitor. But you don't know how to use it.`
        } else {
            message = `The ${this.name} is plugged out. The monitor is dim`
        }
        console.log(message)
    }
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