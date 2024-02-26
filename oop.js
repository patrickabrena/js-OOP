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
usingTHISkeyword();

const DEFINE_A_CONSTRUCTOR_FUNC = () => {
  // constructors are funcs that create new objs

  const es5 = () => {
    function Bird() {
      this.name = "Albert";
      this.color = "blue";
      this.numLegs = 2;
    }
    console.log(Bird("ya", "red", 3));
  };
  es5();
  /*look at newest chat in gpt about the difference between es5 and es6 */
  const es6 = () => {};
  es6();

  //Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.
};
DEFINE_A_CONSTRUCTOR_FUNC();
