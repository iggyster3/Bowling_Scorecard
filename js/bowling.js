var BowlingGame = function() {
  this.currentRoll = 0;
  this.frameCount = 0;
  this.score = 0;
  this.pin = 0;
  this.spare = 0;
  this.strike = 10;
};

BowlingGame.prototype.bowlingFrame = function() {
  return this.frameCount  = this.frameCount + 1;
};

BowlingGame.prototype.allowPlayerToRollStrike = function(pins) {
  this.bowlingFrame(); // increment Frame
  this.score = pins; // add score
  return this.pins = this.strike; //return total pins knocked down.
};

BowlingGame.prototype.allowPlayerToRollSpare = function(pins) {

    this.bowlingFrame(); // increment Frame
    this.score = pins; // add score
    return this.spare = this.strike - this.score;

};
//
// Thermostat.prototype.switchOn = function(){
//   this.powerSave = true;
//   this.maximum = this.maximumPowerSaveOn;
//
//   if(this.temperature > this.maximum){
//     this.temperature = this.maximum;
//   }else{
//     this.temperature;
//   };
// };
//
// Thermostat.prototype.resetTemperature = function() {
//   this.temperature = this.resetTemperatureValue;
// };
//
// Thermostat.prototype.displayColor = function() {
//   if (this.temperature < this.ecoFriendlyValue) {
//     return 'ecoFriendly';
//   }
//   else if (this.temperature > this.energyIntenseValue) {
//     return 'energyIntense';
//   }
//   else {
//     return 'energyNeutral';
//   };
// };
