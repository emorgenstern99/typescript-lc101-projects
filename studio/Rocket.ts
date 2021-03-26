import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket {
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let totalMass: number = 0;
        for (let i: number = 0; i < items.length; i++) {
            totalMass = totalMass + items[i].massKg;
        }
        // console.log("total mass:", totalMass);
        return totalMass;
    }

    currentMassKg(): number {
        // console.log(`Astronaut mass = ${this.sumMass(this.astronauts)}.  Cargo Mass = ${this.sumMass(this.cargoItems)}.`);
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean {
        // console.log(`Astronauts = ${this.astronauts}.  Cargo = ${this.cargoItems}.  Current mass = ${this.currentMassKg()}.  Item Mass = ${item.massKg}.  Can add = ${(this.currentMassKg() + item.massKg <= this.totalCapacityKg)}`);
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
 }