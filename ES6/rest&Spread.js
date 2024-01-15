const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];

// console.log(combinedArr);

const part1 = {
  fName: "Bijay",
};

const part2 = {
  gName: "Preeti",
};

const couple = { ...part1, ...part2 };
// console.log(couple);

const duck = {
  name: "Donal Duck",
  isFunny: true,
};

const char = { ...duck, dressColor: "blue" };
// console.log(char);

const str = `Hi I'm JS
I am awesome ${char.name}
`;

console.log(str);
