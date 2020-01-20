function Fighter(object) {
	let wins= 0;
	let losses =0;
	this.getName = function(){
		return object.name;
	}
	this.getDamage = function(){
		return object.damage;
	}
	this.getStrength = function(){
		return object.strength;
	}
	this.getAgility = function(){
		return object.agility;
	}
	this.getAgility = function(){
		return object.agility;
	}
	this.getHealth = function(){
		return object.hp;
	}
	this.attack = function(defender){
		let attack = Math.floor(Math.random() * 100);
		let defend = defender.getStrength() + defender.getAgility();
		if (defend<attack){
			defender.dealDamage(this.getDamage());
			console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
		} else{
			console.log(`${defender.getName()} attack missed`);
		}
	}
	this.logCombatHistory = function(){
		console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`);
	}
	this.heal = function(hp) {
		object.hp = object.hp + hp > 100? 100:object.hp + hp;
	}
	this.dealDamage = function(hp) {
		object.hp = object.hp - hp < 0? 0:object.hp - hp;
	}
	this.addWin = function() {
		wins++;
	}
	this.addLoss = function() {
		losses++;
	}
}

function battle(fighter1,fighter2) {
	if(fighter1.getHealth()===0||fighter2.getHealth()===0) {
		if (fighter1.getHealth()===0){
			console.log(`${fighter1.getName()} is dead and can not fight`);
		} else{
			console.log(`${fighter2.getName()} is dead and can not fight`)
		}
	} else {
		let fight = true;
		while (fight){
			fighter1.attack(fighter2);
			if (fighter2.getHealth()===0) {
				fighter1.addWin();
				fighter2.addLoss();
				console.log(`${fighter1.getName()} has won!`);
				fight = false;
				break;
			}
			fighter2.attack(fighter1);
			if (fighter1.getHealth()===0) {
				fighter2.addWin();
				fighter1.addLoss();
				console.log(`${fighter2.getName()} has won!`);
				fight = false;
				break;
			}
		}
	}
}

const fighter1 = new Fighter({name: 'Maximus', damage: 20, hp: 100, strength: 20, agility: 15});
const fighter2 = new Fighter({name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 20});