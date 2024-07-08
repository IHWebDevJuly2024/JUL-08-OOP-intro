# Introduction to OOP in JS

## What is OOP?

Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data, in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).

In today's lesson we have seen how to create a class in JavaScript and how to create objects from that class. We have also seen how to create a constructor and how to create methods in a class.

## Classes

A class is a blueprint for creating objects with pre-defined properties and methods. In JavaScript, a class is defined using the `class` keyword.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("Alice", 30);
person1.greet(); // Hello, my name is Alice and I am 30 years old.
```

## Constructor

A constructor is a special method that is called when a new object is created from a class. It is used to initialize the object's properties.

```javascript
class Person {
  constructor(name, age) {
    // Constructor method receives the name and age arguments
    this.name = name; // Initialize the name property
    this.age = age; // Initialize the age property
  }
}

const person1 = new Person("Alice", 30); // when we pass this  arguments to the constructor, it initializes the properties of the object
```

Check the examples to see what we've done in class.