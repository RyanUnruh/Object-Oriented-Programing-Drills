

// class Person {
//   constructor(name,city,age) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
//   }
//   sayHello() {
//     alert(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)
//   }
// }

// let p1 = new Person('Jon','Lo',31);
// let p2 = new Person('Jim','Lon',32);
// let p3 = new Person('Jon','Londo',33);
// let p4 = new Person('Jon','Londo',34);
// let p5 = new Person('Jon','London',35);
// p1.sayHello()
// p2.sayHello()
// p3.sayHello()
// p4.sayHello()
// p5.sayHello()

class Vehicle {
  constructor(manufacture,wheels){
    this.manufacture = manufacture;
    this.wheels = wheels;
  }
  aboutVehicle(){
    alert(`This vehicle is a ${this.manufacture}, and it has ${this.wheels} wheels!`)
  }
}

class Trucks extends Vehicle {
  constructor(manufacture ,wheels, doors, bed) {
    super(manufacture, wheels);
    this.doors = doors;
    this.manufacture = manufacture;
    this.bed = bed;

  }
  greet(){
    console.log(`This vehicle is a ${this.manufacture} truck, and it has ${this.wheels} wheels, ${this.doors} and ${this.bed ? 'yes' : 'no'} to bed!`);
  }
}

class Sedans extends Vehicle {
  constructor(manufacture,wheels, size, mpg) {
    super(manufacture, wheels);
    this.size = size;
    this.mpg = mpg;
  }
  greet(){
   console.log( `This is a ${this.manufacture} Sedan, and it has ${this.wheels} wheels, ${this.doors} and has a bed.!`);
  }
}

class Motorcycles extends Vehicle {
  constructor(manufacture, wheels, handleBars, doors) {
  super(manufacture, wheels);
  this.handleBars = handleBars;
  this.doors = doors;
}
greet(){
  console.log(`This is a ${this.manufacture} Moto, and it has ${this.wheels} wheels. Handlebars: ${this.handleBars} Moto has ${this.doors} doors!`);
}
}


let trucks = new Trucks('dodge', 4, 4, true);
trucks.greet();