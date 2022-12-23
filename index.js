const { add, sub, multiply, divide, name, car, marvel } = require('./modules')

console.log(add(5, 8));
console.log(sub(100, 50));
console.log(multiply(5, 8));
console.log(divide(300, 3));
console.log(name);
console.log(car);
console.log(car.color);
console.log(marvel);
console.log(marvel[0].category)
console.log(" ")


marvel.map((i) => {
    console.log(i.Team_affiliation)
})