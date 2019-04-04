function Thermostat(){
  this.temperature = 20;
  this.MIN_TEMP = 10;
}

Thermostat.prototype.up = function () {
  return this.temperature += 1;
};
Thermostat.prototype.down = function () {
  if(this.temperature > 10){
    return this.temperature -= 1;
  }
  else {
    
  }
};
