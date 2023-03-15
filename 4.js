function electricalDevices(name, power) {
  this.name = name,
  this.power = power,
  this.turnOn = function() {
    this.status = 1
  }
  this.turnOff = function() {
    this.status = 0
  }
}

function VacuumCleaner (color) { 
    this.color = color;
  }
  
function Fridge (height) { 
    this.height = height;
  }

VacuumCleaner.prototype = new electricalDevices('пылесос', 1700);

Fridge.prototype = new electricalDevices('холодильник', 250)

const vacuumCleaner = new VacuumCleaner('чёрный')
const fridge = new Fridge(170 + 'см')

vacuumCleaner.turnOn()
fridge.turnOn()
console.log(`Суммарная потребляемая мощность ${vacuumCleaner.name}а и ${fridge.name}а равна ${vacuumCleaner.status * vacuumCleaner.power + fridge.status * fridge.power} Вт`);

