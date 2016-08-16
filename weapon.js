'use strict';
// WEAPON PROTOTYPE CHAIN
var Weapon = function (name) {
    this.name = name;
    this.damage = 0;
}

var Spark = function () {
    this.maxDamage = 8;
    this.minDamage = 5;
}

Spark.prototype = new Weapon("Spark");


var Uxi = function () {
    this.maxDamage = 9;
    this.minDamage = 2;
}

Uxi.prototype = new Weapon("Uxi");

 var Plier = function () {
    this.maxDamage = 11;
    this.minDamage = 5;
}

Plier.prototype = new Weapon("Plier");


var Scrappy = function () {
this.maxDamage = 10;
this.minDamage = 8;
}

Scrappy.prototype = new Weapon("Scrappy");



