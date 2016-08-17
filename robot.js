'use strict';
// ROBOT PROTOTYPE CHAIN

  var Robot =function () {
    this.name = "Robot";
    // this.type = "";
    // this.maxHealth = 0;
    // this.minHealth = 0;
    // this.model = "";
    this.health = 0;
    // console.log("main", this.health)
   }


  // Drone Robot models
  //       - Ziggo
  //       - Chinkilla

  var Drone = function () {
    this.name = "Drone";
    this.Drone = true;
    this.health = 0;
    // console.log("drone", this.health)
  }
  Drone.prototype = new Robot();

  var Ziggo = function () {
    this.name = "Ziggo";
    // this.maxHealth = 80;
    // this.minHealth = 60;
    this.health = Math.floor(Math.random() * 20) + 60;
    console.log("Ziggo", this.health)
    this.image = "img/Ziggo.jpg";
  }
  Ziggo.prototype = new Drone();

  var Chinkilla = function () {
    this.name = "Chinkilla";
    // this.maxHealth = 70;
    // this.minHealth = 55;
    this.health = Math.floor(Math.random() * 15) + 55;
    console.log("Chinkilla", this.health)
    this.image = "/img/Chinkilla.jpg";
  }
  Chinkilla.prototype = new Drone();


  // Bipedal Robot models
  //       - Deadblow
  //       - Valkyrie


  var Bipedal = function () {
    this.name = "Bipedal";
    this.Bipedal = true;
    this.health = 0;

  }
  Bipedal.prototype = new Robot();

  var Deadblow = function () {
    this.name = "Deadblow";
    // this.maxHealth = 70;
    // this.minHealth = 40;
    this.health = Math.floor(Math.random() * 30) + 40;
    this.image = "/img/Deadblow.jpg";
  }
  Deadblow.prototype = new Bipedal();

  var Voltronic = function () {
    this.name = "Voltronic";
    // this.maxHealth = 90;
    // this.minHealth = 60;
    this.health = Math.floor(Math.random() * 30) + 60;
    this.image = "/img/Voltronic.jpg";
  }
  Voltronic.prototype = new Bipedal();


  // Atv Robot models
  //       - BioHazard
  //       - frenZy

  var Atv = function () {
    this.name = name;
    this.Atv = true;
    this.health = 0;

  }
  Atv.prototype = new Robot();


  var BioHazard = function () {
    this.name = "BioHazard";
    // this.maxHealth = 95;
    // this.minHealth = 55;
    this.health = Math.floor(Math.random() * 30) + 55;
    this.image = "/img/BioHazard.jpg";
  }
  BioHazard.prototype = new Atv();

  var frenZy = function () {
    this.name = "frenZy";
    // this.maxHealth = 75;
    // this.minHealth = 45;
    this.health = Math.floor(Math.random() * 30) + 45;
    this.image = "/img/frenZy.jpg";
  }
  frenZy.prototype = new Atv();
// });
