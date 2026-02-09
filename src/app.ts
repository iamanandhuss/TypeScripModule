import * as readline from 'readline/promises';
import {stdin as input,stdout as output} from 'process';
import { promises } from 'dns';

const rl=readline.createInterface({input,output});

 async function multiplication():Promise<void>{
const num:number=parseInt(await rl.question('Enter the number : '));
const limit:number=parseInt(await rl.question('Enter the lkimit: '));
let int:number=0;
while(int<limit){
  int++ 
  console.log(`${int}*${num}=${int*num}`);
   
}
multiplication();
}

multiplication();
 