"use strict";

// let misTypedVal;
// misTypeVal = "Some Value";
// console.log(misTypeVal);

// Assignment to a non-writable property
// const obj1 = {};
// Object.defineProperty(obj1, "x", { value: 42, writable: false });
// obj1.x = 9; // TypeError

// Assignment to a getter-only property
// const obj2 = {
//   get x() {
//     return 17;
//   },
// };
// obj2.x = 5; // TypeError

delete Object.prototype;

// var x = 5;
// delete x;
