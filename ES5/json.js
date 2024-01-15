const obj = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
};

const req = JSON.stringify(obj);
console.log(req);

const res = JSON.parse(req);

console.log(res);
