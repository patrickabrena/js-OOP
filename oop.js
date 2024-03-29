/*I am going to do this!*/

const CREATE_A_BASIC_JAVASCRIPT_OBJECT = () => {
  //create a dog object with name and numLegs properties and set them to a string and number
  let dog = {
    name: "Rufus",
    numLegs: 3,
  };
  console.log(dog);
};
// CREATE_A_BASIC_JAVASCRIPT_OBJECT();

const USE_DOT_NOTATION_TO_ACCESS_PROPS = () => {
  let dog = {
    name: "Spot",
    numLegs: 4,
  };
  console.log(dog.name, dog.numLegs);
};
// USE_DOT_NOTATION_TO_ACCESS_PROPS();

const CREATE_A_METHOD_ON_AN_OBJECT = () => {
  //objectss can have a special type of propeerty called METHOD
  //Methods are props that are also funcs.
  const EX_ONE = () => {
    let duck = {
      name: "Aflac",
      numLegs: 2,
      sayName: function () {
        return "The name of this duck is " + duck.name + ".";
      },
    };
    duck.sayName(); // sayName is the name of the function that has a return statement with string concatenation with the string provided and duck.name
  };
  //   EX_ONE();

  //using dog obj, give it a method called sayLegs. the method should return the sentence this Dog has 4 legs
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
      return `This dog has ${dog.numLegs} legs.`;
    },
  };

  console.log(dog.sayLegs());
};
// CREATE_A_METHOD_ON_AN_OBJECT();

const usingTHISkeyword = () => {
  //use "this" refers to the object that the moethod is associtated with (in this case it's duck)
  //modify the hdog.sayLegs method to remove any references to dog. Use the duck example for guidance
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
      return "This dog has " + this.numLegs + " legs.";
    },
  };

  let ans = dog.sayLegs();
  console.log(ans);
};
// usingTHISkeyword();

const DEFINE_A_CONSTRUCTOR_FUNC = () => {
  // constructors are funcs that create new objs

  const es5 = () => {
    function Bird() {
      this.name = "Albert";
      this.color = "blue";
      this.numLegs = 2;
    }
  };
  es5();
  /*look at newest chat in gpt about the difference between es5 and es6 */
  const es6 = () => {
    class Bird {
      constructor() {
        this.name = "Albert";
        this.color = "blue";
        this.numLegs = 2;
      }
    }
  };
  es6();

  //Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.
  class Dog {
    constructor() {
      this.name = "Charlie";
      this.color = "red";
      this.numLegs = 8;
    }
  }
};
// DEFINE_A_CONSTRUCTOR_FUNC();

const USE_A_CONSTRUCTOR_TO_CREATE_OBJECTS = () => {
  //take example from last challenge
  //creating a new instance of bird called "bluebird"
  const BIRD_CONSTRUCTOR = () => {
    const es5 = () => {
      function Bird() {
        this.name = "Albert";
        this.color = "blue";
        this.numLegs = 2;
      }
      let bluebird = new Bird();
      bluebird.name = "Changed Name";
      console.log(bluebird);
    };
    es5();

    const es6 = () => {
      class Bird {
        constructor() {
          this.name = "Albert";
          this.color = "blue";
          this.numLegs = 2;
        }
      }
      let bluebird = new Bird();
      console.log(bluebird);
    };
    es6();
  };
  BIRD_CONSTRUCTOR();
  //
  //
  //
  //Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.
  class Dog {
    constructor() {
      this.name = "Charlie";
      this.color = "red";
      this.numLegs = 8;
    }
  }
  let hound = new Dog();
  console.log(hound);
};
// USE_A_CONSTRUCTOR_TO_CREATE_OBJECTS();

const EXTEND_CONSTRUCTORS_TO_RECIEVE_ARGUMENTS = () => {
  //notice that all instances that are created with Bird constructor are automatically named albert, have blue wings and 2 legs.
  //If I wanted to create birds with different values I can design the constructor to accept parameters
  //
  //
  //Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.
  const es5 = () => {
    function Dog(name, color) {
      this.name = name;
      this.color = color;
      this.numLegs = 4;
    }
    let terrier = new Dog("Jaag", "Mint-Green");
    console.log(terrier);
  };
  es5();
  //
  const es6 = () => {
    class Dog {
      constructor(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 4;
      }
    }
    let terrier = new Dog("MIholv", "Indigo");
    console.log(terrier);
  };
  es6();
};
// EXTEND_CONSTRUCTORS_TO_RECIEVE_ARGUMENTS();

const VERIFY_AN_OBJECTS_CONSTRUCTOR_WITH_INSTANCE_OF = () => {
  // anytime a constructor creates a new objects, it is the INSTANCE of it's constructor.
  // use instanceof to test if an object is an instance of a constructor
  // will return true or false
  const EX = () => {
    let Bird = function (name, color) {
      this.name = name;
      this.color = color;
      this.numLegs = 2;
    };

    let crow = new Bird("Alexis", "black");

    console.log(crow instanceof Bird); // returns true with the console log
  };
  EX();
  //Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.

  class House {
    constructor(numBedrooms) {
      this.numBedrooms = numBedrooms;
    }
  }
  let myHouse = new House(4);
  console.log(myHouse instanceof House);
};
// VERIFY_AN_OBJECTS_CONSTRUCTOR_WITH_INSTANCE_OF();

const UNDERSTAND_OWN_PROPERTIES = () => {
  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }

  let duck = new Bird("Donald");
  let canary = new Bird("Tweety");
  // The following code adds all of thee own properties of "duck" to the array "ownProps"
  let ownProps = [];

  for (let property in duck) {
    if (duck.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
  console.log(ownProps);
};
// UNDERSTAND_OWN_PROPERTIES();

const USE_PROTOTYPE_PROPERTIES_TO_REDUCE_DUPLICATE_CODE = () => {
  // Since numLegs will prob ahve the same valuee for all instances of Bird, there will be a duplicated numLegs var inside each instance of Bird
  // A better way is to use the prototype of Bird. Properties in prototype are shared among ALL instances of Bird. COde below is how to add numLegs to the Bird prototype
  function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 3;

  // Only change code above this line
  let beagle = new Dog("Snoopy");
  console.log(beagle);
  console.log(beagle.numLegs); // since all instances have the properties on the prototype, a prototype can be thought as a "recipe" for creating objects
};
// USE_PROTOTYPE_PROPERTIES_TO_REDUCE_DUPLICATE_CODE();

const ITERATE_OVER_ALL_PROPERTIES = () => {
  // so far have seen 2 kinds of properties
  // - Own properties =  defined directly on the object instance itself
  // - Prototype properties = deefined on the prototype

  const EX = () => {
    class Bird {
      constructor(name) {
        this.someName = name; // Own property
      }
    }
    Bird.prototype.numLegs = 2; // prototype property

    let duck = new Bird("Donald");

    // code below is how you would add own properties to an array and prototype properties to a different array
    let ownProps = [];
    let prototypeProps = [];

    for (let property in duck) {
      if (duck.hasOwnProperty(property)) {
        ownProps.push(property);
      } else {
        prototypeProps.push(property);
      }
    }
    // console.log(ownProps);
    // console.log(prototypeProps);

    const ACTUAL_EXAMPLE = () => {
      function Dog(name) {
        this.name = name;
      }

      Dog.prototype.numLegs = 4;

      let beagle = new Dog("Snoopy");

      let ownProps = [];
      let prototypeProps = [];

      // Only change code below this line

      for (let property in beagle) {
        if (beagle.hasOwnProperty(property)) {
          ownProps.push(property);
        } else {
          prototypeProps.push(property);
        }
      }
      console.log(`this is OwnProps arr. ownProps = [${ownProps}]`);
      console.log(
        `this is the prototypesProps arr. prototypeProp = [${prototypeProps}]`
      );
    };

    ACTUAL_EXAMPLE();
  };
  EX();
};
// ITERATE_OVER_ALL_PROPERTIES();

const UNDERSTAND_THE_CONSTRUCTOR_PROPERTY = () => {
  // There is a special CONSTRUCTOR prop located on the object instances DUCK and BEAGLE that were created in the previous challenges
  // Note that the constructor prop is a refeerence to the constructor func that created the instance. The advantage of the constructor prop is that it's possible to check for this prop to find out what kind of object it is.

  // Write a joinDogFraternity function thaat takes a candidate param
  // using the constructor prop, return true if the candidate is a Dog, otherwise return false
  function Dog(name) {
    this.name = name;
  }

  // Only change code below this line
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    }
    return false;
  }
  // the codee above passes the freeCodeCamp challenege
};
// UNDERSTAND_THE_CONSTRUCTOR_PROPERTY();

const CHANGE_THE_PROTOTYPE_TO_A_NEW_OBJECT = () => {
  // so far we've beeen adding props to the prototype individually
  // A more efficient way is to set the prototype toa new objecet that already contains the properties.
  // This way, the props are added all at once
  function Dog(name) {
    this.name = name;
  }

  Dog.prototype = {
    // Only change code below this line
    numLegs: 2,
    eat: () => {
      console.log("yahher");
    },
    describe: () => {
      console.log(`My name is ${this.name}`);
    },
  };
  // this will pass the challenge
};
// CHANGE_THE_PROTOTYPE_TO_A_NEW_OBJECT();

const REMEMBER_TO_SET_THE_CONSTRUCTOR_PROP_WHEN_CHANGING_THE_PROTOTYPE = () => {
  // big side effect of manually setting the prototype to a new object
  // - it ERASES the constructor property!
  // - the fix is to MANUALLY DEFINE the CONSTRUCTOR property
  //
  //
  //
  //
  function Dog(name) {
    this.name = name;
  }
  // Only change code below this line
  Dog.prototype = {
    constructor: Dog, // without this line, the console log would return false
    numLegs: 4,
    eat: function () {
      console.log("nom nom nom");
    },
    describe: function () {
      console.log("My name is " + this.name);
    },
  };

  let buggle = new Dog("James");

  console.log(buggle.constructor === Dog);
};
// REMEMBER_TO_SET_THE_CONSTRUCTOR_PROP_WHEN_CHANGING_THE_PROTOTYPE();

const UNDERSTAND_WHERE_AN_OBJECTS_PROTOTYPE_COMES_FROM = () => {
  // Just like how children inherit genes from parents, objects inherit prototype from the constructor func
  const EX = () => {
    class Bird {
      constructor(name) {
        this.name = name;
      }
    }
    let duck = new Bird("Donald");
    console.log(duck);
    console.log(Bird.prototype.isPrototypeOf(duck)); // will return true
  };
  EX();

  function Dog(name) {
    this.name = name;
  }

  let beagle = new Dog("Snoopy");
  console.log(Dog.prototype.isPrototypeOf(beagle)); // will return true
  // Only change code below this line
};
// UNDERSTAND_WHERE_AN_OBJECTS_PROTOTYPE_COMES_FROM();

const UNDERSTAND_THE_PROTOTYPE_CHAIN = () => {
  // all objects in javascript (some exceptions) have a prototype.
  // also, an objets prototype IS also an object
  // Because prototype is an object, prototype can also have it's own prototype
  function Dog(name) {
    this.name = name;
  }

  let beagle = new Dog("Snoopy");

  Dog.prototype.isPrototypeOf(beagle); // yields true

  // Fix the code below so that it evaluates to true
  Object.prototype.isPrototypeOf(Dog.prototype); // Object is a SUPERTYPE to both Dog and beagle
};
// UNDERSTAND_THE_PROTOTYPE_CHAIN();

const USE_INHERITANCE_SO_YOU_DONT_REPEAT_YOURSELF = () => {
  // REMEMBER: Don't Repeat Yourself (DRY)
  // notice in the example below, that the "describe" method is hsared by Bird and Dog

  const EX = () => {
    Bird.prototype = {
      constructor: Bird,
      describe: function () {
        console.log("My name is " + this.name);
      },
    };

    Dog.prototype = {
      constructor: Dog,
      describe: function () {
        console.log("My name is " + this.name);
      },
    };
  };
  EX();
  // The describe method is repeated in two places. The code can be edited to follow the DRY principle by creating a supertype (or parent) called ANIMAL

  const DRY_PRINCIPLE = () => {
    function Animal() {}

    Animal.prototype = {
      constructor: Animal,
      describe: function () {
        console.log("My name is " + this.name);
      },
    };
    //since Animal inclues the describe method, you can remove it from Bird and Dog
    Bird.prototype = {
      constructor: Bird,
    };

    Dog.prototype = {
      constructor: Dog,
    };
  };
  DRY_PRINCIPLE();

  const ACTUAL_EXAMPLE = () => {
    function Cat(name) {
      this.name = name;
    }

    Cat.prototype = {
      constructor: Cat,
    };

    function Bear(name) {
      this.name = name;
    }

    Bear.prototype = {
      constructor: Bear,
    };

    function Animal() {}

    Animal.prototype = {
      constructor: Animal,
      eat: function () {
        console.log("nom nom nom");
      },
    };
  };
  ACTUAL_EXAMPLE(); // this code inside ACTUAL_EXAMPLE passes the challenge
};
// USE_INHERITANCE_SO_YOU_DONT_REPEAT_YOURSELF();

const INHERIT_BEHAVIOURS_FROM_A_SUPERTYPE = () => {
  // In the previous challenge, I created a supertype called Animal that defined behaviours shared by all animals
  // Inheritance is utilized for reusing methods of Animal insde Bird and Dog without defining them again.
  // this challenge covers the first step
  // 1. make an instance of the supertype(parent)
  //
  /* let animal = Object.create(Animal.prototype) */
  //
  // This syntax above creates a new object. It sets "obj" in this case (Animal.prototype) as the new object's prototype. Recall the prototype is like the "recipe" fro creating an object. By setting the prototype of animal to be the prototype of "Animal", you are effectively giving the animal instances the same "recipe" as any other isntances of "Animal"
  //
  //
  //
  // Use Object.create to make two instances of Animal named "duck" and "beagle"

  function Animal() {}

  Animal.prototype = {
    constructor: Animal,
    eat: function () {
      console.log("nom nom nom");
    },
  };

  // Only change code below this line

  let duck = Object.create(Animal.prototype); // Change this line
  let beagle = Object.create(Animal.prototype); // Change this line

  //the code above passes the challenge

  console.log(duck, beagle); // just here to not throw error
};
// INHERIT_BEHAVIOURS_FROM_A_SUPERTYPE();

const SET_THE_CHILDS_PROTOTYPE_TO_AN_INSTANCE_OF_THE_PARENT = () => {
  // In the previous challenege you sas the first step for inheriting behaviour from the supertype(parent) "Animal": which was maaking a new instance of Animal
  // This challenge covers the next step, setting the prototype of the subtype(child) in this case "Bird" to be an instance of Animal
  //
  //
  //
  /* Modify the code so that instances of Dog inherit from Animal */
  //
  //
  //
  function Animal() {}

  Animal.prototype = {
    constructor: Animal,
    eat: function () {
      console.log("nom nom nom");
    },
  };

  function Dog() {}

  // Only change code below this line
  Dog.prototype = Object.create(Animal.prototype);

  let beagle = new Dog();
};
// SET_THE_CHILDS_PROTOTYPE_TO_AN_INSTANCE_OF_THE_PARENT();

const RESET_AN_INHERITED_CONSTRUCTOR_PROP = () => {
  // When an object inherts its prototype fromm another object, it also inherts the supertype's constructor property
  // need to manually set the constructor prop of the instance to the instance object

  Animal.prototype = {
    constructor: Animal,
    eat: function () {
      console.log("nom nom nom");
    },
  };
  /*****/
  function Animal() {}
  function Bird() {}
  function Dog() {}

  Bird.prototype = Object.create(Animal.prototype);
  Dog.prototype = Object.create(Animal.prototype);

  // Only change code below this line
  Bird.prototype.constructor = Bird;
  Dog.prototype.constructor = Dog;

  let duck = new Bird();
  let beagle = new Dog();
  duck.eat();
  beagle.eat();
};
// RESET_AN_INHERITED_CONSTRUCTOR_PROP();

const ADD_METHODS_AFTER_INHERITANCE = () => {
  // A constructor func that inherits its prototype object from a supertype constructor func can still have it's OWN methods in additon to inherited methods
  // For example, Bird is a constructor that inherits its prototype from Animal

  function Animal() {}
  Animal.prototype.eat = function () {
    console.log("yaehf");
  };
  function Bird() {}
  Bird.prototype = Object.create(Animal.prototype);
  Bird.prototype.construtor = Bird;

  // IN addition to what is inherited by Animal(), I'm also going to add a behaviour that is unique to Bird objects.
  // Bird will be getting a fly() function.
  // NOTE: functions added to a bird's prototype is thee same way as any constuctor func
  Bird.prototype.fly = function () {
    console.log("i'm flyingd");
  };
  // Now instances of Bird will have both eat() and fly() methods
  let duck = new Bird();
  duck.eat();
  duck.fly();

  /********/

  // Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog
  // THen add a bark() method to the DOg objecet so that beagle can eat() and bark().
  // bark() method shoudl print Woof! to the console
  const ACTUAL_EXAMPLE = () => {
    function Animal() {}
    Animal.prototype.eat = function () {
      console.log("nom nom nom");
    };

    function Dog() {}

    // Only change code below this line
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;
    Dog.prototype.bark = function () {
      console.log("Woof!");
    };

    // Only change code above this line

    let beagle = new Dog();
    beagle.eat();
    beagle.bark();
  };
  ACTUAL_EXAMPLE();
};
// ADD_METHODS_AFTER_INHERITANCE();

const OVERRIDE_INHERITED_METHODS = () => {
  // IN the previous lessons, I learned that an objeect can inherit its behaviour from another object by referencing its prototype object
  /* ChildObject.prototype = Object.create(ParentObject.prototype) */
  // Then the ChildObject recieved its own methods by chaining them onto its prototype:
  /* ChildObject.prototype.methodName = function() {...} */

  /*
  It's possible to override an inherited method. it's done the same way by adding a method to ChildObject.prototype using the same method as the one to override. 

  Below is an example of overriding thee eat() method inherited from Animal
  */

  const EX = () => {
    function Animal() {}
    Animal.prototype.eat = function () {
      return "nom nom nom";
    };
    function Bird() {}

    Bird.prototype = Object.create(Animal.prototype);

    Bird.prototype.eat = function () {
      return "peck peck peck";
    };

    EX();
  };
  /*****/
  // Override the fly() method for Penguin so that is returns the string "Alas, this is a flightless bird."
  function Bird() {}

  Bird.prototype.fly = function () {
    return "I am flying!";
  };

  function Penguin() {}
  Penguin.prototype = Object.create(Bird.prototype);
  Penguin.prototype.constructor = Penguin;

  // Only change code below this line
  Penguin.prototype.fly = function () {
    return "Alas, this is a flightless bird.";
  };

  // Only change code above this line

  let penguin = new Penguin();
  console.log(penguin.fly());
};
// OVERRIDE_INHERITED_METHODS();

const USE_A_MIXIN_COMMON_BEHAVIOUR_BETWEEN_UNRELATED_OBJECTS = () => {
  //There are some cases where inheritance isn't the best solution
  // inheritance doesn't work well for unrelated objects like Bird and Airplane.
  // They can both fly but a bird is not a type of airplane
  // For unrelated objects it's better to use "mixins"
  // Mixin allows other objets to use a collection of functions

  const EXAMPLE_MIXINS = () => {
    let flyMixin = function (obj) {
      obj.fly = function () {
        console.log("Flying, wooosh!");
      };
    };
    //The flyMixin takes an object and gives it the fly moethod
    let bird = {
      name: "Donald",
      numLegs: 2,
    };

    let plane = {
      model: "777",
      numPassengers: 524,
    };

    flyMixin(bird);
    flyMixin(plane);
    // Here bird anad plane area PASSED into the flyMixin which assigns the fly function to each project
    // now bird and plane can both fly
    bird.fly();
    plane.fly();
  };
  EXAMPLE_MIXINS();

  /*******/
  // create a mixin glideMixin that defines a method named glide. THen use glideMixin to give both bird and plane the ability to glide
  let bird = {
    name: "Donald",
    numLegs: 2,
  };

  let boat = {
    name: "Warrior",
    type: "race-boat",
  };

  // Only change code below this line
  const glideMixin = (obj) => {
    obj.glide = () => {
      console.log(`${typeof obj} has the ability to glide`);
    };
  };
  glideMixin(bird);
  glideMixin(boat);
  bird.glide();
  boat.glide();
};
// USE_A_MIXIN_COMMON_BEHAVIOUR_BETWEEN_UNRELATED_OBJECTS();

const USE_CLOSURE_TO_PROTECT_PROPERTIES_WITHIN_AN_OBJECT_FROM_BEING_MODIFIED_EXTERNALLY =
  () => {
    // In the previous challenge, bird had aa public prop name. It is considered public because it can be accessed and changed outside of bird's definition
    // eg . bird.name = "Duffy";

    //Because "name" is a public property of bird, any part of my code can eaasily change the name of bird to any value.
    //This is an issue because think of paasswords and bank accounts

    // thee simplest way to make this public proerty private is by creating a variable WITHIN the constructor function. This changes the scope of that variable to be within the constructor function versus available globally.
    const EX = () => {
      //
      function Bird() {
        let hatchedEgg = 10;

        this.getHatchedEggCount = function () {
          return hatchedEgg;
        };
      }
      let ducky = new Bird();
      let ans = ducky.getHatchedEggCount();
      console.log(ans);
    };
    EX();
    // Here getHatchedEggCount is a privileged method, because it has acess to the private variable "hatchedEgg".
    // Possible beceause hatchedEgg is delcared in the same context as getHatchedEggCount. In Javscript, aa function always has access to the context in which it was created.
    // This is called CLOSURE

    /******/

    //Change how weight is delcareed in the Bird function so it is a private variable. Then, create a method "getWeight" that returns the value of weight 15.
    function Bird() {
      let weight = 15;

      this.getWeight = () => {
        return weight;
      };
    }
    let penguin = new Bird();
    let ans = penguin.getWeight();
    console.log(ans);
  };
// USE_CLOSURE_TO_PROTECT_PROPERTIES_WITHIN_AN_OBJECT_FROM_BEING_MODIFIED_EXTERNALLY();

const UNDERSTAND_THE_IMMEDIATELY_INVOKED_FUNCTION_EXPRESSION = () => {
  // a common pattern in Javascript is to exectute a function as soon as it is delcared
  // IIFE is the term for this

  (function () {
    console.log("A cozy nest is ready");
  })();
};
// UNDERSTAND_THE_IMMEDIATELY_INVOKED_FUNCTION_EXPRESSION();

const USE_AN_IIFE_TO_CREATE_A_MODULE = () => {
  // an IIFE is often used to group related functionality into a single object or MODULE.
  // eeg. an earlier challenege difined two mixins:

  const EXAMPLE_MIXINS = (() => {
    function glideMixin(obj) {
      obj.glide = function () {
        console.log("Gliding on the water");
      };
    }
    function flyMixin(obj) {
      obj.fly = function () {
        console.log("FLying, woosh!");
      };
    }
  })();
  // We can group these mixins into a module as follows using IIFE:
  const EXAMPLE_IIFE = (() => {
    let motionModule = (function () {
      return {
        glideMixin: function (obj) {
          obj.glide = function () {
            console.log("Gliding on the water");
          };
        },
        flyMixin: function (obj) {
          obj.fly = function () {
            console.log("Flying, wooosh!");
          };
        },
      };
    })();
  })();
  // Creeate a module named funModule to wrap the two mixins "isCUteMixin" and "singMixin"
  const ACTUAL_EXAMPLE = (() => {
    //SETUP
    /*
    let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
    */
    //
    //
    //
    let funModule = (function () {
      return {
        isCuteMixin: function (obj) {
          obj.isCute = function () {
            return true;
          };
        },
        singMixin: function (obj) {
          obj.sing = function () {
            console.log("Singing to an awesome tune");
          };
        },
      };
    })(); // this IIFE module passes the final challenge
  })();
};
USE_AN_IIFE_TO_CREATE_A_MODULE();
