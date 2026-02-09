import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

class TwoDArray {
  arr: number[][] = [];

  async getArray(size: number): Promise<void> {
    for (let i = 0; i < size; i++) {
      const row = await rl.question("");
      this.arr.push(row.split("\t").map(Number));
    }
  }

  displayArray(size: number): void {
    console.log("Array elements are:");
    for (let i = 0; i < size; i++) {
      console.log(this.arr[i].join("\t"));
    }
  }
}

async function main(): Promise<void> {
  const size = Number(await rl.question("Enter the size of array\n"));
  console.log("Enter the array values");

  const obj = new TwoDArray();
  await obj.getArray(size);
  obj.displayArray(size);

  rl.close();
}

main();
