const voter = {
  fName: "Samkisha",
  lName: "Tikhile",
  set age(ageVal) {
    if (ageVal >= 18) {
      this._age = ageVal;
    } else {
      console.log("Age has to be atleast 18");
    }
  },
  get age() {
    return this._age;
  },
};

voter.age = 15; // set is invoked
// console.log(voter.age); // get is invoked

const rectangle = {
  length: 40,
  width: 120,

  get area() {
    return this.length * this.width;
  },
};

console.log(rectangle.area);
