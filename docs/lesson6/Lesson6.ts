let countTS: number = 1; //ok

// countTS = 'name'; //error ?

console.log(">>> check name: ", countTS);

let names1: string[] = ['Eric', 'Hỏi Dân IT', 'Typescript'] // array chỉ bao gồm string
// names1.push(25) //error ?
names1.push("25") //error ?
console.log(">>> check names: ", names1);