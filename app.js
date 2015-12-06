class Animal {
  constructor(name) { 
    this.name = name;
  }

  getName(name) { 
    return this.name;
  }
}

class Dog extends Animal {
  constructor(name) {
    this.name = name;
  }

  bark() { 
    return "Dog " + this.name + " is barking.";
  }
}

var dog = new Dog("Aban");

console.log(dog.getName()); 
console.log(dog.bark());