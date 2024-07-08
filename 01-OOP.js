const object = {
  // Properties
  property1: "value1",
  property2: 1231321,
  // Methods (different syntaxes):
  method1: function () {
    console.log("hello method 1");
  },
  method2() {
    console.log("hello method 2");
  },
  // Newest syntax
  method3: () => {
    console.log("hello method 3");
  },
};

// A method is a function inside an object.
object.method1();
object.method2();
object.method3();

const myVariable = "property1";

console.log(object[myVariable]);

const prop0 = "Campus";
const prop1 = "Bootcamp";
const prop2 = "Teacher";

const cohort1 = {
  [prop0]: "Barcelona",
  [prop1]: "Web dev",
  [prop2]: "Marcel",
};

console.log(cohort1);

// const newCateogry = prompt("What category you want to add ??");

const user1 = {
  username: "",
  email: "",
  // [newCateogry]: "",
};

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2024,
  startEngine: function () {
    return `${this.year} ${this.brand} ${this.model} engine started!`;
  },
  stopEngine() {
    return `${this.brand} ${this.model} engine stopped!`;
  },
  honk: () => {
    // here we don't have access to "this"
    return "Beep! Beep!";
  },
};

console.log(car.startEngine());
console.log(car.stopEngine());
console.log(car.honk());

const player = {
  playerName: "Crash",
  score: 0,
  // Create a method that adds points to the player.
  addPoints(pointsToAdd) {
    this.score += pointsToAdd;
  },
  resetScore() {
    this.score = 0;
  },
};

// the player collects a STAR
player.addPoints(90);

// the player collects a coin
player.addPoints(10);

// The player hits an enemy
player.resetScore();

console.log(player.score);
