const newObject = {
  userName: "Valentina",
  role: "career advisor",
};

// like this I create a new property called hello FOR ALL THE OBJECTS IN MY APP
Object.prototype.hello = "Hellooooooo";

const user = {
  whatever: "bla bla",
  anotherThing: 3253,
};

// OK Marcel, this doesn't make any sense 😥

String.prototype.firstCharUpper = function () {
  return this[0].toUpperCase() + this.slice(1, this.length);
};

console.log("dsadsadsadsala".firstCharUpper());
console.log("hello".firstCharUpper());
