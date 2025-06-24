// You// Define the Cat class
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says meow!`;
  }
}

// Define the Dog class
class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says woof!`;
  }
}

// Define the Bird class
class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    if (this.sex === "male") {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      return `${this.name} says squawk!`;
    }
  }
}

// Test the classes
const cat = new Cat("Whiskers", "female");
console.log(cat.speak()); // "Whiskers says meow!"

const dog = new Dog("Rex", "male");
console.log(dog.speak()); // "Rex says woof!"

const bird1 = new Bird("Polly", "male");
console.log(bird1.speak()); // "It's me! Polly, the parrot!"

const bird2 = new Bird("Lola", "female");
console.log(bird2.speak()); // "Lola says squawk!"