let text = "How are you doing today How are";
const words = text.split(" ");

// let frequency = {}

// for (const word of words) {
//     // console.log(word)
//     if (word in frequency) {
//         frequency[word] += 1
//     } else {
//         frequency[word] = 1
//     }
// }
// console.log(frequency)

const output = words.reduce((acc, curr) => {
    if (acc[curr]) {
        acc[curr] += 1;
    } else {
        acc[curr] = 1;
    }
    return acc;
}, {});

console.log(output);
