// const arr = ["Bijay", "Nikhil", "Saurabh"];

// // const prefixedArr = arr.map((e) => {
// //   return `Mr. ${e}`;
// // });

// const prefixedArr = arr.map((e) => `Mr. ${e}`);

// console.log(prefixedArr);
// console.log(arr);

// const products = [
//   {
//     type: "Mobile",
//     brand: "Nokia",
//   },
//   {
//     type: "Mobile",
//     brand: "OnePlus",
//   },
//   {
//     type: "Mobile",
//     brand: "Samsung",
//   },
// ];

// const modifiedArr = products.map((e) => {
//   return {
//     id: `${e.type}-${e.brand}`,
//     ...e
//   };
// });

// console.log(modifiedArr);

// const restaurent = new Map();
// restaurent.set("Name", "Meghana");
// restaurent.set(1, "Open");
// restaurent.set(0, "False");
// restaurent.set(true, "Good");
// restaurent.set(["cusinies"], ["NI", "SI"]);

// console.log(restaurent);

// IMMUTABLE => Which cannot be modified

// let topic = "JAVASCRIPT";
// console.log(topic[1]);
// topic[1] = "B";
// console.log(topic);

// topic = "PYTHON";
// console.log(topic);

// const person = {
//   fName: "Preeti",
//   lName: "Verma",
// };

// const copyObj = { ...person };
// copyObj.lName = "Singh";

// console.log(person);
// console.log(copyObj);

// const disney_char = {
//   fName: "Micky",
//   lName: "Mouse",
//   greet() {
//     console.log(`Hi I am ${this.fName} ${this.lName}`);
//     console.log(this);
//     function test() {
//       console.log("I am just an useless function", this);
//     }
//     test();
//   },
// };

// const disney_charII = {
//   fName: "Mini",
//   lName: "Mouse",
// };

// disney_char.greet();

function capitalizeWords(str) {
  const words = str.split(" "); // ['j','a','s','m','i','n','e']
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
}
// ['J','a','s','m','i','n','e'] => Jasmine
const str = capitalizeWords("jasmine");
console.log(str);

if (true) {
  console.log("Correct");
} else {
  console.log("Wrong");
}
