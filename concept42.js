// let const
// while loop
// for loop
// for of loop
// break and continue
// do while loop
// string comapare lowercase uppercase trim
// object dot notation, bracket notation 
// get set delete properties
// for in loop
// bonus part(template string)

// js concept 2

// let const

// var x = 5;
// x = 10;
// var x = 10;
// console.log(x);

// let x = 5;
// x = 10;
// let x = 15 is not correct
// console.log(x);

// const x = 5;
// x = 15; is not allowed
// const x = 20; is not allowed
// console.log(x);

/*
while loop (condition){
}
*/

// let i = 1;
// while (i <= 5){
//     console.log("mehedi");
// //    it will be infinite
// }

// let i = 1;
// while (i <= 5){
//     console.log("mehedi");
//     i = i + 1;
// }

// let i = 1;
// while (i <= 5){
//     console.log("mehedi");
//     i++;
// }

// let i = 1;
// let sum = 0;

// while (i <= 10){
//     // sum = sum + 1;
//     sum += i;
//     i++;  // i++, i=i+1, i+=1
// }
// console.log(sum);

// let i = 1;
// let sum = 1;

// while (i <= 5){
//     sum *= i;  // sum = sum * i;
//     i++;  // i = i + 1;
// }

// console.log(sum);

// for loop 

// for (let i = 1; i <= 10; i += 1){
//     console.log("mehedi");
//     // console.log("mehedi", i);  it will show number in mehedi     
// }

// for (let i = 1; i <= 100; i++){
//     console.log("Sorry babu....!", i);
// }

// for (let i = 0; i <= 100; i +=2){
//     console.log("Sorry babu....!", i);
// }

// const nums = [23, 43, 2, 5, 346, 203, 2];
// console.log(nums[3]);

// const nums = [23, 43, 2, 5, 346, 203, 2];
// for (let i = 0; i < nums.length; i++){
//     console.log(nums[i]);
// }

// const nums = [23, 43, 2, 5, 346, 203, 2];
// let sumOfOdd = 0;  //23 43 5 203
// let sumOfEven = 0;  // 2 346 2
// for (let i = 0; i < nums.length; i++){
//    const x = nums[i]; //array[index number]
//    if(x % 2 === 1){
//     sumOfOdd += x;  // sumOfOdd = sumOfOdd + x;
//    }
//    else{
//     sumOfEven += x;
//    }
// }

// console.log(sumOfEven);
// console.log(sumOfOdd);

// const nums = [23, 43, 2, 5, 346, 203, 2];
// for (let i = 0;i < nums.length; i++){
//     console.log(nums[i]);
// }

// const nums = [23, 43, 2, 5, 346, 203, 2];
// for (let item of nums){
//     console.log(item);
// }

// do while loop 

// let i = 5;
// while (i > 10){
//     console.log(i);
//     i++;
// }

// let i = 5;
// do{
//     console.log(i);
//     i++;
// } while(i > 10);

// break and continue

// const nums = [23, 43, 2, 5, 36, 20, 21];
// for (let i of nums){
//     console.log(i);
// }

// const nums = [23, 43, 2, 5, 36, 20, 21];
// for (let mehedi of nums){    // "i" can anything like mehedi, munna
//     console.log(mehedi);
// }

// const nums = [23, 43, 2, 5, 36, 20, 21];
// for (let mehedi of nums){
//     console.log(mehedi);
//     if (mehedi === 2){
//         break;
//     }
// }

// const nums = [23, 43, 2, 5, 36, 20, 21];
// for (let item of nums){
//     if(item === 36){
//         continue;   
//     }
//     console.log(item);
// }

// const nums = [23, 43, 2, 5, 36, 20, 21];
// for (let item of nums){
//     if(item % 2 === 0){
//         continue;   
//     }
//     console.log(item);
// }

// const nums = [23, 43, 2, 5, 36, 20, 21];
// for (let item of nums){
//     if(item % 2 === 1){
//         continue;   
//     }
//     console.log(item);
// }

// string js

// const x = "hello";
// const y = "hElLo";
// if (x.toUpperCase() === y.toLocaleUpperCase()){
//     console.log("both are same");
// }
// else{
//     console.log("both are different");
// }

// const x = "Hellw world";
// const y = "hellw"
// console.log(x.includes(y));

// const x = "Hello world"; // hello world
// const y = "hello"        
// console.log(x.toLocaleLowerCase().includes(y.toLocaleLowerCase()));

// const x = "hello";
// const y = " Hello  ";
// if(x.trim().toLocaleLowerCase === y.trim().toLocaleLowerCase){           // first and last unwanted gap
//     console.log("both are same");
// }
// else{
//     console.log("both are different");
// }

// array Method js

const x = "My name is Programming Hero";
console.log(x);
const words = x.split(" ");
console.log(words);
const y = words.join("/");
console.log(y);

// const x = "My name is Programming Hero";
// console.log(x);
// const words = x.split(" ");
// console.log(words);
// const y = words.join("_");
// console.log(y);

// object js 

// my pet
// const name = "Travis";
// const age = 2;
// const isMale = true;
// const food = "Fish";
// const color = "white";
// const specis = "Hul beral";
/*
const objectName = {
propertyName : propertyValue,
}
*/
// const myPet = {
//      name : "Travis",
//      age : 2,
//      isMale : true,
//      food : "Fish",
//      color : "white",
//      specis : "Hul beral",
// }
// console.log(myPet);

// const myPet = {
//      name : "Travis",
//      age : 2,
//      isMale : true,
//      food : "Fish",
//      color : "white",
//      specis : "Hul beral",
// }
// console.log(myPet.color);

// const myPet = {
//      name : "Travis",
//      age : 2,
//      isMale : true,
//      food : "Fish",
//      color : "white",
//      specis : "Hul beral",
// }
// console.log(myPet.name);

// dot notation(object.propertyName)
// const myPet = {
//      name : "Travis",
//      age : 2,
//      isMale : true,
//      food : "Fish",
//      color : "white",
//      specis : "Hul beral",
// };
// const catFood = myPet.food;
// console.log(catFood);

// bracket notation (object["propertyName"])
// const myPet = {
//      name : "Travis",
//      age : 2,
//      isMale : true,
//      food : "Fish",
//      color : "white",
//      specis : "Hul beral",
// };
// const catFood = myPet["food"];
// console.log(catFood);

// you can write property this method also like "name" and space, number must use this qoutation
// const myPet = {
//      "name" : "Travis",
//      "age" : 2,
//      "isMale" : true,
//      "food" : "Fish",
//      "color" : "white",
//      "specis" : "Hul beral",
// };
// const catFood = myPet["food"];
// console.log(catFood);

// const myPet = {
//      name : "Travis",
//      age : 2,
//      isMale : true,
//      food : "Fish",
//      color : "white",
//      specis : "Hul beral",
//      "is married" : false,
// };
// const catFood = myPet["is married"];
// console.log(catFood);

// const myPet = {
//     name : "Travis",
//     age : 2,
//     isMale : true,
//     food : "Fish",
//     color : "white",
//     specis : "Hul beral",
//     "is married" : false,
// };
// myPet.color = "Black";
// myPet["is married"] = true;
// console.log(myPet);

// const myPet = {
//     name : "Travis",
//     age : 2,
//     isMale : true,
//     food : "Fish",
//     color : "white",
//     specis : "Hul beral",
//     "is married" : false,
// };
// myPet.sound = "mew mew";
// console.log(myPet);

// const myPet = {
//     name : "Travis",
//     age : 2,
//     isMale : true,
//     food : "Fish",
//     color : "white",
//     specis : "Hul beral",
//     "is married" : false,
// };
// myPet["sound"] = "hamba hamba";
// console.log(myPet);

// const myPet = {
//     name : "Travis",
//     age : 2,
//     isMale : true,
//     food : "Fish",
//     color : "white",
//     specis : "Hul beral",
//     "is married" : false,
// };
// delete myPet.age;
// console.log(myPet);

// const myPet = {
//     name : "Travis",
//     age : 2,
//     isMale : true,
//     food : "Fish",
//     color : "white",
//     specis : "Hul beral",
//     "is married" : false,
// };
// const x = "name";
// console.log(myPet[x]);

// const myPet = {
//     name : "Travis",
//     age : 2,
//     isMale : true,
//     food : "Fish",
//     color : "white",
//     specis : "Hul beral",
//     "is married" : false,
// };
// // object work for in loop [array work for of loop]
// for(let key in myPet){
//     console.log(key, typeof key);  
// }

// const myPet = {
//     name : "Travis",
//     age : 2,
//     isMale : true,
//     food : "Fish",
//     color : "white",
//     specis : "Hul beral",
//     "is married" : false,
// };
// // this is string and you have to write using []
// for(let key in myPet){
//     console.log(myPet[key]);  
// }

// const student = {
//     name: {
//         firstName: "muhammad",
//         middleName: "mehedi",
//         lastName: "hasan",
//     },
//     subject: ["bangla", "english"],
//     isMale: true,
//     roll: 34,
// };          
// console.log(student.name.middleName);
// console.log(student.subject[1]);

// templete js 

// const myPet = {
//     name : "Travis",
//     food : "Fish",
//     color : "white",
// };
// // My pet name is Travis. His favorite food is Fish and his color is white
// const sentence = "My name is "+myPet.name+". His favorite food is "+myPet.food+" and his color is "+myPet.color;
// console.log(sentence);

// const myPet = {
//     name : "Travis",
//     food : "Fish",
//     color : "white",
// };
// // My pet name is Travis. His favorite food is Fish and his color is white
// const sentence = `My name is ${myPet.name}. His favorite food is ${myPet.food} and his color is ${myPet.color}.`;
// console.log(sentence);