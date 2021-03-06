class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3
    }

    sayName = () => console.log(this.name);
    
    showStats() {
        console.log("Name: " + this.name)
        console.log("Strength: " + this.strength)
        console.log("Speed: " + this.speed)
        console.log("Health: " + this.health)
    }
    drinkSake = () => this.health += 10;
    
}

class Sensei extends Ninja {
    constructor(name){
        super(name, 200)
        
        this.wisdom = 10;
    }

    speakWisdom(wisdom){
        this.drinkSake();
        console.log(wisdom);
        
    }
}

// const ninja1 = new Ninja("Hyabusa", 40);
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom("There is no spoon");
superSensei.showStats();
