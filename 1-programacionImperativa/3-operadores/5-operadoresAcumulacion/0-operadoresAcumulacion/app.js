const { Console } = require("./console");

const console = new Console();
x=100;
console.writeln(x += 2); // 102
console.writeln(x -= 2); // 100
console.writeln(x *= 2); // 200
console.writeln(x **= 2); // 40000
console.writeln(x /= 2); // 20000
console.writeln(x %= 7); // 1
console.writeln(x &= 2); // 0
console.writeln(x |= 2); // 2
console.writeln(x ^= 2); // 0
console.writeln(x <<= 2); // 0
console.writeln(x >>= 2); // 0
console.writeln(x >>>= 2); // 0

console.writeln(x += 1 * 5); // 5
console.writeln(x += 1 * 5); // 10
