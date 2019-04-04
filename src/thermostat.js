function Thermostat(){
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.powerSavingMode = true;
}

Thermostat.prototype.up = function () {
  if(this.powerSavingMode){
    if(this.temperature < 25){
      return this.temperature += 1;
    }
  } else if(this.temperature < 32){
    return this.temperature += 1;
  }
};
Thermostat.prototype.down = function () {
  if(this.temperature > 10){
    return this.temperature -= 1;
  }
  else {

  }
};
Thermostat.prototype.switchPSM = function(){
  this.powerSavingMode = !this.powerSavingMode
}
