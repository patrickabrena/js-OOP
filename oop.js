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
    console.log(ownProps);
    console.log(prototypeProps);

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
      console.log(ownProps);
      console.log(prototypeProps);
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
CHANGE_THE_PROTOTYPE_TO_A_NEW_OBJECT();
