let arr = ['|', "/", "-", '\\','|', "/", "-", '\\'];
let count = 0
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => { process.stdout.write(`\r${arr[i]}   `); }, (100 + (i * 200)));
}