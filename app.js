function Animal(name) {
  this.name = name;
}

Animal.prototype.getName = function getName() {
  return this.name;
};

function Dog(name) {
  this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function bark() {
  return 'Dog ' + this.name + ' is barking.';
};

var dog = new Dog("Aban");

console.log(dog.getName()); 
console.log(dog.bark());