class ElectricalDevices {
  constructor(name, power) {
    this.name = name,
    this.power = power
  }
  turnOn(){
    this.status = 1
  }
  turnOff(){
    this.status = 0
  }
}
  
class VacuumCleaner extends ElectricalDevices {
  constructor(name, power, color) {
    super(name, power);
    this.color = 'чёрный'
  }


getInfo(){
  return `Мощность ${this.name}а равна ${this.power} Вт, цвет ${this.color}`
}
  powerOn(){
    super.turnOn()
  }
  powerOff(){
    super.turnOff()
  }
}


class Fridge extends ElectricalDevices {
  constructor(name, power, height) {
    super(name, power);
    this.height = 170
  }
  
  getInfo(){
    return `Мощность ${this.name}а равна ${this.power} Вт, высота ${this.height} см`
  }
  powerOn(){
    super.turnOn()
  }
  powerOff(){
    super.turnOff()
  }
}


const vacuumCleaner = new VacuumCleaner('пылесос', 1700);
const fridge = new Fridge('холодильник', 250)



console.log(vacuumCleaner.getInfo());
console.log(fridge.getInfo());

vacuumCleaner.powerOn();
fridge.powerOn();
console.log(`Суммарная потребляемая мощность включенных приборов равна ${vacuumCleaner.status * vacuumCleaner.power + fridge.status * fridge.power} Вт`)
