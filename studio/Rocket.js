"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var totalMass = 0;
        for (var i = 0; i < items.length; i++) {
            totalMass = totalMass + items[i].massKg;
        }
        // console.log("total mass:", totalMass);
        return totalMass;
    };
    Rocket.prototype.currentMassKg = function () {
        // console.log(`Astronaut mass = ${this.sumMass(this.astronauts)}.  Cargo Mass = ${this.sumMass(this.cargoItems)}.`);
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    Rocket.prototype.canAdd = function (item) {
        // console.log(`Astronauts = ${this.astronauts}.  Cargo = ${this.cargoItems}.  Current mass = ${this.currentMassKg()}.  Item Mass = ${item.massKg}.  Can add = ${(this.currentMassKg() + item.massKg <= this.totalCapacityKg)}`);
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
