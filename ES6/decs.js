const arr = [1, 2, 3, 4, 5];
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

const person = {
  fName: "Bijay",
  lName: "Singh",
  mobile: 9874510236,
  address: {
    line1: "afkdjh",
    line2: "sdf",
    pin: 102354,
  },
};

const { fName, lName: LastName } = person;
console.log(fName, LastName);
