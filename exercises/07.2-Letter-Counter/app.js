let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
for (let char of par.replace(/ /g, ""))
    if (char.toLowerCase() in counts)
        counts[char.toLowerCase()] += 1;
    else
        counts[char.toLowerCase()] = 1;

console.log(counts);