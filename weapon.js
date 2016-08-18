'use strict';
// WEAPON PROTOTYPE CHAIN

var Weapon = function (name) {
    this.name = "Weapon";
    this.name = name;
    this.damage = 0;
}

var Spark = function () {
    this.name = "Spark";
    this.damage = Math.floor(Math.random() * 3) + 5;
}
Spark.prototype = new Weapon();

var Uxi = function () {
    this.name = "Uxi";
    this.damage = Math.floor(Math.random() * 7) + 2;
}
Uxi.prototype = new Weapon();

 var Plier = function () {
    this.name = "Plier";
    this.damage = Math.floor(Math.random() * 6) + 5;
}
Plier.prototype = new Weapon();

var Scrappy = function () {
this.name = "Scrappy";
this.damage = Math.floor(Math.random() * 2) + 5;
}
Scrappy.prototype = new Weapon();



