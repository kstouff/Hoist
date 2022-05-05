class UnitCard{
    constructor(cost, power, resilience){
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }

    showStats(){
        console.log(this.cost + " " + this.power + " " + this.resilience)
    }
    attack(target){
        target.resilience -= this.power;
    }
}

class RedBeltNinja extends UnitCard{
    constructor(){
        super(3, 3, 4)
    }

}
class BlackBeltNinja extends UnitCard{
    constructor(name){
        super(4, 5, 4)
    }

}

class EffectCard{
    constructor(cost, text, stat, magnitude){

        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
}

class HardAlgorithm extends EffectCard{
    constructor()
    {
        super(2, "increase target's resilience by 3", "resilience", 3)
    }
    playCard(target){
        target.resilience += this.magnitude;
    }
}
class UnhandledPromiseRejection extends EffectCard{
    constructor()
    {
        super(1, "reduces target's resilience by 2", "resilience", -2)
    }
    playCard(target){
        target.resilience -= this.magnitude;
        target.cost -= this.cost;
    }
}
class PairProgramming extends EffectCard{
    constructor()
    {
        super(3, "increases target's power by 2", "power", 2)
    }
    playCard(target){
        target.power += this.magnitude;
        target.cost -= this.cost;
    }
}




//=============================================================

const kyle = new RedBeltNinja();
const hardAlgo1 = new HardAlgorithm();
kyle.showStats();
hardAlgo1.playCard(kyle);
kyle.showStats();
const senseiKyle = new BlackBeltNinja();
const bug1 = new UnhandledPromiseRejection();
bug1.playCard(kyle);
const teamUp = new PairProgramming();
teamUp.playCard(kyle);
kyle.attack(senseiKyle);
senseiKyle.showStats();



