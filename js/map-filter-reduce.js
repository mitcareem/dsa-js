const users = [
    { name: "Allen", age: 26 },
    { name: "Bob", age: 21 },
    { name: "Jack", age: 32 },
];

//get the name of user whose age is less than 30

// const output = users.filter((x) => x.age < 30).map((x) => x.name);
// console.log(output);

const output = users.reduce(function (acc, curr) {
    if (curr.age < 30) {
        // acc = [...acc, curr["name"]];
        acc.push(curr.name)
    }
    return acc;
}, []);

console.log(output);
