const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter some data: ', (data) => {
  console.log(`Received: ${data}`);
  rl.close();
});
