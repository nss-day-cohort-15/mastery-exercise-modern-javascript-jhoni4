'use strict';
// ROBOT PROTOTYPE CHAIN

var Robot =function (type) {
  this.type = type;
  this.health = 0;
  this.model = "robot";
}
var generateHealth = function (){
  this.health = Math.round(Math.random() * (this.maxHealth - this.minHealth) + this.minHealth);
}
// Drone type Robot models
//       - Ziggo
//       - Chinkilla

var Drone = function (name) {
  this.name = "Drone";
}
Drone.prototype = new Robot();

var Ziggo = function () {
  this.maxHealth = 80;
  this.minHealth = 60;
  this.image = `img/Ziggo.jpg`;
}
Ziggo.prototype = new Drone();

var Chinkilla = function () {
  this.maxHealth = 70;
  this.minHealth = 55;
  this.image = `img/Chinkilla.jpg`;
}
Chinkilla.prototype = new Drone();


// Bipedal type Robot models
//       - Deadblow
//       - Valkyrie


var Bipedal = function (name) {
  this.name = "Bipedal";
}
Bipedal.prototype = new Robot();

var Deadblow = function () {
  this.maxHealth = 70;
  this.minHealth = 40;
  this.image = `img/Deadblow.jpg`;
}
Deadblow.prototype = new Bipedal();

var Voltronic = function () {
  this.maxHealth = 90;
  this.minHealth = 60;
  this.image = `img/Voltronic.jpg`;
}
Voltronic.prototype = new Bipedal();


// Atv type Robot models
//       - BioHazard
//       - frenZy

var Atv = function (name) {
  this.name = name;
}
Atv.prototype = new Robot();


var BioHazard = function () {
  this.maxHealth = 95;
  this.minHealth = 55;
  this.image = `img/BioHazard.jpg`;
}
BioHazard.prototype = new Atv();

var frenZy = function () {
  this.maxHealth = 75;
  this.minHealth = 45;
  this.image = `img/frenZy.gif`;
}
frenZy.prototype = new Atv();
