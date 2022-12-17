const json = { name: 'basma', password: 55, age: 45210 };
const picked = (({ name, password }) => ({ name, password }))(json);
console.log(picked);
