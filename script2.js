
class Car {
    constructor(cName, cBrand, cYear, cFuel, cColor){
      this.name = cName;
      this.brand = cBrand;
      this.year = cYear;
      this.fuel = cFuel;
      this.color = cColor;
    }
  }
  
  class Tesla extends Car {
    constructor (cName, cBrand, cYear, cFuel, cColor,apV){
    super(cName, cBrand, cYear, cFuel, cColor);
  this.autoPilotVersion = apV;
  }
  }
  
  const march = new Car("March", "Nisan", 2018, "Gas","Green");
  const camry = new Car("March", "Nisan", 2018, "Gas","Green");
  

  // STATIC METHOD:
class Vehicle2 {
    constructor(nWheels) {
      this.numberWheels = nWheels;
    }
    static generateSerialNumber() {
      return 'It works';
    }
  }
  class Car6 extends Vehicle2 {
    constructor(cName, cBrand, cYear, cFuel, cColor, nWheels) {
      super(nWheels);
      this.name = cName;
      this.brand = cBrand;
      this.year = cYear;
      this.fuel = cFuel;
      this.color = cColor;
    }
  }
  ​
  class Tesla4  extends Car6 {
    constructor(cName, cBrand, cYear, cFuel, cColor, nWheels, apV) {
      super(cName, cBrand, cYear, cFuel, cColor, nWheels);
      this.autoPilotVersion = apV;
    }
  }
  ​
  const tesla5 = new Tesla4('Model-X', 'Tesla', 2020, 'Electric', 'Red', 4, 'Pilot');
  console.log(tesla5.generateSerialNumber());  // generateSerialNumber is NOT a function
  // Because static keyword make the method as private for specific class. It CANNOT be inherited by child class.


  // INHERITANCE
class Car {
    constructor() {
      this.name = 'Camry';
      this.brand = 'Toyota';
      this.year = 2020;
      this.fuel = 'gas';
      this.color = 'Grey';
    }
  }
  ​
  const camry = new Car();
  console.log(camry.name); // Camry
  ​
  // Actually this Car class is general Car class. Instead of creat with default value, create with parametersa as general
  ​
  class Car2 {
    constructor(cName, cBrand, cYear, cFuel, cColor) {
      this.name = cName;
      this.brand = cBrand;
      this.year = cYear;
      this.fuel = cFuel;
      this.color = cColor;
    }
  }
  ​
  const march = new Car2('March', 'Nissan', 2018, 'Gas', 'Green');
  const jazz = new Car2('Jazz', 'Honda', 2008, 'Gas', 'Blue');
  const tesla = new Car2('Model-X', 'Tesla', 2020, 'Electric', 'Red');
  console.log(march);
  console.log(jazz);
  console.log(tesla);
  ​
  ​
  // Now time to inheritance:
  class Car3 {
    constructor(cName, cBrand, cYear, cFuel, cColor) {
      this.name = cName;
      this.brand = cBrand;
      this.year = cYear;
      this.fuel = cFuel;
      this.color = cColor;
    }
  }
  ​
  class Tesla {
    constructor(cName, cBrand, cYear, cFuel, cColor, apV) {
      this.name = cName;
      this.brand = cBrand;
      this.year = cYear;
      this.fuel = cFuel;
      this.color = cColor;
      // Above properties are same as Car3 class. That's why, we don't need above properties.. We just need to INTERIT the Car3 class
      this.autoPilotVersion = apV;
    }
  }
  ​
  const march2 = new Car3('March', 'Nissan', 2018, 'Gas', 'Green');
  const jazz2 = new Car3('Jazz', 'Honda', 2008, 'Gas', 'Blue');
  const tesla2 = new Tesla('Model-X', 'Tesla', 2020, 'Electric', 'Red');
  console.log(march2);
  console.log(jazz2);
  console.log(tesla2);
  ​
  ​
  // Time to EXTEND Car4 class which will INHERIT from that class
  class Car4 {
    constructor(cName, cBrand, cYear, cFuel, cColor) {
      this.name = cName;
      this.brand = cBrand;
      this.year = cYear;
      this.fuel = cFuel;
      this.color = cColor;
    }
  }
  ​
  class Tesla2  extends Car4{
    constructor(cName, cBrand, cYear, cFuel, cColor, apV) {
      super(cName, cBrand, cYear, cFuel, cColor)
      this.autoPilotVersion = apV;
    }
  }
  ​
  const tesla3 = new Tesla2('Model-X', 'Tesla', 2020, 'Electric', 'Red', 'Pilot');
  console.log(tesla3.name);  // Model-X
  ​
  // ------------------------------
  // MULTI LEVEL INHERITANCE:
  class Vehicle {
    constructor(nWheels) {
      this.numberWheels = nWheels;
    }
  }
  class Car5 extends Vehicle {
    constructor(cName, cBrand, cYear, cFuel, cColor, nWheels) {
      super(nWheels);
      this.name = cName;
      this.brand = cBrand;
      this.year = cYear;
      this.fuel = cFuel;
      this.color = cColor;
    }
  }
  ​
  class Tesla3  extends Car5{
    constructor(cName, cBrand, cYear, cFuel, cColor, nWheels, apV) {
      super(cName, cBrand, cYear, cFuel, cColor, nWheels);
      this.autoPilotVersion = apV;
    }
  }
  ​
  const tesla4 = new Tesla3('Model-X', 'Tesla', 2020, 'Electric', 'Red', 4, 'Pilot');
  console.log(tesla4.numberWheels);  // 4
  ​
  