const koopasArray = [];

class Koopa {
  // The constructor is the method that is going to define my new objects
  constructor(initialType, initialHealth) {
    this.type = initialType;
    this.health = initialHealth;
    this.color = "red"; // default value
    koopasArray.push(this);
    console.log("Koopa created");
    console.log("This is THIS 🤣: ", this);
  }

  decreaseHealth(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      // we need also, to remove this Koopa from the enemies array
      console.log("The Koopa died ☠️");
    }
  }
}

new Koopa("Water", 5000);
new Koopa("Fire", 6000);
new Koopa("Wind", 4000);

console.table(koopasArray);

koopasArray[0].health = 9999999;

koopasArray[0].decreaseHealth(111);
koopasArray[1].decreaseHealth(111);
koopasArray[2].decreaseHealth(111090985985098098);

console.table(koopasArray);

class Bowser extends Koopa {
  constructor(type, health) {
    super(type, health); // this is going to send the info to the superior class (Koopa)
    this.boss = true;
  }
}

const bowser1 = new Bowser("Fire", 100000);

bowser1.decreaseHealth(100);
console.log(bowser1.__proto__);
console.log(Object.keys(bowser1));


