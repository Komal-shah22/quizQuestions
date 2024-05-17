#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.italic.blue.bgWhite(`\n\t\t\t=============ASSALAM O ALIKUM============`));
console.log(chalk.bold.italic.cyan.underline(`\n\t\t========"BEST OF LUCK FOR YOUR TEST"========\n`));
let quizQuestin = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.bold.italic.magentaBright(`WHAT'S YOUR full NAME ?`)
    },
    {
        name: 'cnic',
        type: 'number',
        message: chalk.bold.italic.yellowBright(`YOUR CNIC NUM HERE...`)
    },
    {
        name: 'test',
        type: 'confirm',
        message: chalk.bold.italic.redBright(`ARE YOU READY FOR TEST?`),
        default: 'false'
    },
    {
        name: "q1",
        type: "list",
        message: chalk.bold.italic.green(`\nQ1: which command is used to compile typescript code?\n`),
        choices: ['ts build', 'ts compile', 'tsc', 'typescript']
    },
    {
        name: "q2",
        type: "list",
        message: chalk.bold.italic.green(`\nQ2: What will be the output of this?\n let a = 5; \n console.log(a++)\n`),
        choices: ['4', '5', '6', '7']
    },
    {
        name: "q3",
        type: "list",
        message: chalk.bold.italic.green(`\nQ3: What will be the output of this?\n let a = 7;\n console.log(--a)\n`),
        choices: ['8', '5', '7', '6']
    },
    {
        name: "q4",
        type: "list",
        message: chalk.bold.italic.green(`\nQ4:What will be the output of this?\n console.log(2 +"2") \n`),
        choices: ['NAN', '2', '4', '22']
    },
    {
        name: "q5",
        type: "list",
        message: chalk.bold.italic.green(`\nQ5: Array can hold only numbers?\n`),
        choices: ['All of them', 'May be', 'No', 'Yes']
    },
    {
        name: "q6",
        type: "list",
        message: chalk.bold.italic.green(`\nQ6: What will be the output?\n const num:number[] = [1,2,3,4,5];\n num.splice(1,1,6);\n console.log(num);\n`),
        choices: ['1,5,3,4,6', '1,3,4,5', '1,2,3,4,6', '1,6,3,4,5,']
    },
    {
        name: "q7",
        type: "list",
        message: chalk.bold.italic.green(`\nQ7: what will be the output\n const a = 5;\n const b = 6;\n console.log(a===5 && a===6)\n`),
        choices: ['Yes', 'No', 'true', 'false']
    },
    {
        name: "q8",
        type: "list",
        message: chalk.bold.italic.green(`\nQ8: What will be the output of the following typescript code?\n const sentence = 'hellow world';\n const result = sentence.split("");\n console.log(result) \n`),
        choices: ['helloworld', 'h e l l o w o r l d', 'hello,world', 'hello world']
    },
    {
        name: "q9",
        type: "list",
        message: chalk.bold.italic.green(`\nQ9: what is the output of the folling typescript code?\n const add = (a:number,b?:number): number =>{\n   if (b){return a + b};\n   return a;\n };\n console.log(add(5));\n`),
        choices: ['a', 'undefined', '10', '5']
    },
    {
        name: "q10",
        type: "list",
        message: chalk.bold.italic.green(`\nQ10: what will be the output of this code in console?\n const myStr = (str: string):string =>{\n   return str.charAt(0).toUppercase() + str.slice(1);\n};\n console.log(myStr('typescript'))\n`),
        choices: ['typescript', 'Typescript', 'TYPESCRIPT', 'undefine']
    },
    {
        name: "q11",
        type: "list",
        message: chalk.bold.italic.green(`\nQ11: what will be the output of the following typescript code?\n const numbers:number[] = [1,2,3,4,5];\n const double = number.map((num)=> num * 2);\n console.log(doubled);\n`),
        choices: ['1,2,3,4,5,1,2,3,4,5', '2,4,6,8,10', '1,4,9,16,25', '1,2,3,4,5,']
    },
    {
        name: "q12",
        type: "list",
        message: chalk.bold.italic.green(`\nQ12: what is the output of the following typescript code?\n const nams = [1,2,3,4];\n const sum = nums.reduce((acc,curr)=> acc + curr , 0);\n console.log(sum);\n`),
        choices: ['undefine', '[10]', '10', '[1,2,3,4]']
    },
    {
        name: "q13",
        type: "list",
        message: chalk.bold.italic.green(`\nQ13: what is the output one of the following typescript code?\n let x:string | number ;\n x = 'hello';\n console.log(typeof x);\n`),
        choices: ['string', 'number', 'string and number', 'undefine']
    },
    {
        name: "q14",
        type: "list",
        message: chalk.bold.italic.green(`\nQ14: what is the output one of the following typescript code?\n let numbers:numbers[] = [1,2,3,4,5];\n const evenNum = numbers.filter(num => num % 2===0);\n console.log(evenNum));\n`),
        choices: ['1,2,3,4', 'true,false,true,false,true', '1,2,3,4,5', '2,4']
    },
    {
        name: "q15",
        type: "list",
        message: chalk.bold.italic.green(`\nQ15: what is the output one of the following typescript code?\n const sentence = 'fasih';\n const changeStr = sentence.split('').reverse().join('');\n console.log(changeStr)\n`),
        choices: ['FASIH', 'h i s a f', 'hisaf', 'fasih']
    },
]);
let score = 0;
console.log(chalk.bold.italic.blue(`YOUR ANSWER IS SUMBITED : ${quizQuestin.q1}`));
if (quizQuestin.q1 === 'ts build') {
    console.log(chalk.bold.italic.red(`ANS:1  Wrong Answer`));
}
else if (quizQuestin.q1 === 'ts compile') {
    console.log(chalk.bold.italic.red(`ANS:1  Wrong Answer`));
}
else if (quizQuestin.q1 === 'tsc') {
    console.log(chalk.bold.italic.cyan.underline.bgWhite(`ANS:1 Correct Answer${++score}`));
}
else if (quizQuestin.q1 === 'typescript') {
    console.log(chalk.bold.italic.red(`ANS:1  Wrong Answer`));
}
console.log(`\n`);
console.log(chalk.bold.italic.blue(`YOUR ANSWER IS SUMBITED : ${quizQuestin.q2}`));
if (quizQuestin.q2 === '4') {
    console.log(chalk.bold.italic.red(`ANS:2  Wrong Answer`));
}
else if (quizQuestin.q2 === '5') {
    console.log(chalk.bold.italic.cyan.underline.bgWhite(`ANS:2  Correct Answer${++score}`));
}
else if (quizQuestin.q2 === '6') {
    console.log(chalk.bold.italic.red(`ANS:2 Wrong Answer`));
}
else if (quizQuestin.q2 === '7') {
    console.log(chalk.bold.italic.red(`ANS:2  Wrong Answer`));
}
console.log(`\n`);
console.log(chalk.bold.italic.blue(`YOUR ANSWER IS SUMBITED : ${quizQuestin.q3}`));
if (quizQuestin.q3 === '8') {
    console.log(chalk.bold.italic.red(`ANS:3  Wrong Answer`));
}
else if (quizQuestin.q3 === '7') {
    console.log(chalk.bold.italic.red(`ANS:3  Wrong Answer`));
}
else if (quizQuestin.q3 === '6') {
    console.log(chalk.bold.italic.cyan.underline.bgWhite(`ANS:3 Correct Answer${++score}`));
}
else if (quizQuestin.q3 === '5') {
    console.log(chalk.bold.italic.red(`ANS:3  Wrong Answer`));
}
console.log(`\n`);
console.log(chalk.bold.italic.blue(`YOUR ANSWER IS SUMBITED : ${quizQuestin.q4}`));
if (quizQuestin.q4 === 'NAN') {
    console.log(chalk.bold.italic.red(`ANS:4  Wrong Answer`));
}
else if (quizQuestin.q4 === '2') {
    console.log(chalk.bold.italic.red(`ANS:4  Wrong Answer`));
}
else if (quizQuestin.q4 === '4') {
    console.log(chalk.bold.italic.red(`ANS:4 Wrong Answer`));
}
else if (quizQuestin.q4 === '22') {
    console.log(chalk.bold.italic.cyan.underline.bgWhite(`ANS:4  Correct Answer${++score}`));
}
console.log(`\n`);
console.log(chalk.bold.italic.blue(`YOUR ANSWER IS SUMBITED : ${quizQuestin.q5}`));
if (quizQuestin.q5 === 'All of them') {
    console.log(chalk.bold.italic.red(`ANS:5  Wrong Answer`));
}
else if (quizQuestin.q5 === 'May be') {
    console.log(chalk.bold.italic.cyan.underline.bgWhite(`ANS:5  correct Answer${++score}`));
}
else if (quizQuestin.q5 === 'No') {
    console.log(chalk.bold.italic.red(`ANS:5 Wrong Answer`));
}
else if (quizQuestin.q5 === 'Yes') {
    console.log(chalk.bold.italic.red(`ANS:5  Wrong Answer`));
}
console.log(`\n`);
console.log(chalk.bold.italic.blue(`YOUR ANSWER IS SUMBITED : ${quizQuestin.q6}`));
if (quizQuestin.q6 === '1,5,3,4,6') {
    console.log(chalk.bold.italic.red(`ANS:6  Wrong Answer`));
}
else if (quizQuestin.q6 === '1,3,4,5') {
    console.log(chalk.bold.italic.red(`ANS:6  Wrong Answer`));
}
else if (quizQuestin.q6 === '1,2,3,4,6') {
    console.log(chalk.bold.italic.red(`ANS:6 Worong Answer`));
}
else if (quizQuestin.q6 === '1,6,3,4,5') {
    console.log(chalk.bold.italic.cyan.underline.bgWhite(`ANS:6  Correct Answer${++score}`));
}
console.log(`\n`);
console.log(chalk.bold.italic.blue(`YOUR ANSWER IS SUMBITED : ${quizQuestin.q7}`));
if (quizQuestin.q7 === 'Yes') {
    console.log(chalk.bold.italic.red(`ANS:7  Wrong Answer`));
}
else if (quizQuestin.q7 === 'No') {
    console.log(chalk.bold.italic.red(`ANS:7  Wrong Answer`));
}
else if (quizQuestin.q7 === 'true') {
    console.log(chalk.bold.italic.cyan.underline.bgWhite(`ANS:7 Correct Answer${++score}`));
}
else if (quizQuestin.q7 === 'false') {
    console.log(chalk.bold.italic.red(`ANS:7  Wrong Answer`));
}
console.log(`\n`);
console.log(chalk.bold.italic.blue(`YOUR ANSWER IS SUMBITED : ${quizQuestin.q8}`));
if (quizQuestin.q8 === 'helloworld') {
    console.log(chalk.bold.italic.red(`ANS:8  Wrong Answer`));
}
else if (quizQuestin.q8 === 'h e l l o w o r l d') {
    console.log(chalk.bold.italic.cyan.underline.bgWhite(`ANS:8  Correct Answer${++score}`));
}
else if (quizQuestin.q8 === 'hello world') {
    console.log(chalk.bold.italic.red(`ANS:8 Correct Answer`));
}
else if (quizQuestin.q8 === 'hello , world') {
    console.log(chalk.bold.italic.red(`ANS:8  Wrong Answer`));
}
console.log(`\n`);
console.log(chalk.bold.italic.blue(`YOUR ANSWER IS SUMBITED : ${quizQuestin.q9}`));
if (quizQuestin.q9 === 'a') {
    console.log(chalk.bold.italic.red(`ANS:9  Wrong Answer`));
}
else if (quizQuestin.q9 === 'undefine') {
    console.log(chalk.bold.italic.red(`ANS:9  Wrong Answer`));
}
else if (quizQuestin.q9 === '5') {
    console.log(chalk.bold.italic.cyan.underline.bgWhite(`ANS:9 Correct Answer${++score}`));
}
else if (quizQuestin.q9 === '10') {
    console.log(chalk.bold.italic.red(`ANS:9  Wrong Answer`));
}
console.log(`\n`);
console.log(chalk.bold.italic.blue(`YOUR ANSWER IS SUMBITED : ${quizQuestin.q10}`));
if (quizQuestin.q10 === 'typescript') {
    console.log(chalk.bold.italic.red(`ANS:10  Wrong Answer`));
}
else if (quizQuestin.q10 === 'Typescript') {
    console.log(chalk.bold.italic.cyan.underline.bgWhite(`ANS:10  correct Answer${++score}`));
}
else if (quizQuestin.q10 === 'TYPESCRIPT') {
    console.log(chalk.bold.italic.red(`ANS:10 Correct Answer`));
}
else if (quizQuestin.q10 === 'undefine') {
    console.log(chalk.bold.italic.red(`ANS:10  Wrong Answer`));
}
console.log(`\n`);
console.log(chalk.bold.italic.blue(`YOUR ANSWER IS SUMBITED : ${quizQuestin.q11}`));
if (quizQuestin.q11 === '1,2,3,4,5,1,2,3,4,5') {
    console.log(chalk.bold.italic.red(`ANS:11  Wrong Answer`));
}
else if (quizQuestin.q11 === '1,4,9,16,25') {
    console.log(chalk.bold.italic.red(`ANS:11  Wrong Answer`));
}
else if (quizQuestin.q11 === '2,4,6,8,10') {
    console.log(chalk.bold.italic.cyan.underline.bgWhite(`ANS:11 Correct Answer${++score}`));
}
else if (quizQuestin.q11 === '1,2,3,4,5') {
    console.log(chalk.bold.italic.red(`ANS:11  Wrong Answer`));
}
console.log(`\n`);
console.log(chalk.bold.italic.blue(`YOUR ANSWER IS SUMBITED : ${quizQuestin.q12}`));
if (quizQuestin.q12 === 'undefine') {
    console.log(chalk.bold.italic.red(`ANS:12  Wrong Answer`));
}
else if (quizQuestin.q12 === '[10]') {
    console.log(chalk.bold.italic.red(`ANS:12  Wrong Answer`));
}
else if (quizQuestin.q12 === '10') {
    console.log(chalk.bold.italic.cyan.underline.bgWhite(`ANS:12 Correct Answer${++score}`));
}
else if (quizQuestin.q12 === '[1,2,3,4]') {
    console.log(chalk.bold.italic.red(`ANS:12  Wrong Answer`));
}
console.log(`\n`);
console.log(chalk.bold.italic.blue(`YOUR ANSWER IS SUMBITED : ${quizQuestin.q13}`));
if (quizQuestin.q13 === 'string') {
    console.log(chalk.bold.italic.cyan.underline.bgWhite(`ANS:13  Correct Answer${++score}`));
}
else if (quizQuestin.q13 === 'number') {
    console.log(chalk.bold.italic.red(`ANS:13  Wrong Answer`));
}
else if (quizQuestin.q13 === 'string & number') {
    console.log(chalk.bold.italic.red(`ANS:13 Wrong Answer`));
}
else if (quizQuestin.q13 === 'undefine') {
    console.log(chalk.bold.italic.red(`ANS:13  Wrong Answer`));
}
console.log(`\n`);
console.log(chalk.bold.italic.blue(`YOUR ANSWER IS SUMBITED : ${quizQuestin.q14}`));
if (quizQuestin.q14 === '1,2,3,4') {
    console.log(chalk.bold.italic.red(`ANS:14  Wrong Answer`));
}
else if (quizQuestin.q14 === '2,4') {
    console.log(chalk.bold.italic.cyan.underline.bgWhite(`ANS:14  correct Answer${++score}`));
}
else if (quizQuestin.q14 === 'true,false,true,false,true') {
    console.log(chalk.bold.italic.red(`ANS:14 Wrong Answer`));
}
else if (quizQuestin.q14 === '1,2,3,4,5') {
    console.log(chalk.bold.italic.red(`ANS:14  Wrong Answer`));
}
console.log(`\n`);
console.log(chalk.bold.italic.blue(`YOUR ANSWER IS SUMBITED : ${quizQuestin.q15}`));
if (quizQuestin.q15 === 'FASIH') {
    console.log(chalk.bold.italic.red(`ANS:15  Wrong Answer`));
}
else if (quizQuestin.q15 === 'hisaf') {
    console.log(chalk.bold.italic.cyan.underline.bgWhite(`ANS:15  Correct Answer${++score}`));
}
else if (quizQuestin.q15 === 'h i s a f') {
    console.log(chalk.bold.italic.red(`ANS:15 Correct Answer`));
}
else if (quizQuestin.q15 === 'fasih') {
    console.log(chalk.bold.italic.red(`ANS:15  Wrong Answer`));
}
console.log(chalk.bold.italic.bgMagenta.white(`\n\n\t\t============TOTAL MARKS : 15/${score}===========`));
