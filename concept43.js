// basic function

// console.log("mehedi");
// console.log("mehedi");
// console.log("mehedi");
// console.log("mehedi");
// console.log("mehedi");

// for (var i = 1; i <= 5; i++){
//     console.log("mehedi");
// }

// function printName(){
//     console.log("mehedi");
// }
// printName();
// printName();

// function printName(){
//     console.log("My name is Mehedi");
// }
// printName();

// function printName(name){
//     console.log("My name is ",name);
// }
// printName("Mehedi");
// printName("Hasan");

// function printDetails(name, age, address){
// console.log(`My name is ${name}. My age is ${age}. I live in ${address}.`);
// }
// printDetails("Mehedi", "26", "Rajshahi");

// function add(x, y){
//     const  total = x + y;
//     return total;
// }
// const z = add(4, 5);
// console.log(z); 

// function add(x, y){
//     const  total = x + y;
//     return total;
// }
// const z = add(40, 5);
// console.log(z); 

// function add(x, y){
//     const  total = x + y;
//     return total;
// }
// console.log(add(4, 5)); 

// function giveNumber(){
//     console.log("inside function: ",5);
//     return 5;
// }
// const x = giveNumber();
// console.log("outside function: ",x);

// function types js

// types of function 

// no parameters, no return;
// no parameters, but return; 
// parameters, but no return;
// parameters, return;

// // no parameters, no return;
// function fun1(){
//     console.log("no parameters, no return");
// }

// // no parameters, but return; 
// function fun2(){
//     return 5;
// }

// // parameters, but no return;
// function fun3(name){
//     console.log(name);
// }

// // parameters, return;
// function fun4(x,y){
//    return x + y;
// }

// problem solving 

// check if the number is even or odd

// const x = 5;
// if (x % 2 === 0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }


// function checkEvenOdd(x){
//     if (x % 2 === 0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }
// }
// checkEvenOdd(6);

// function checkEvenOdd(x){
//     if (x % 2 === 0){
//     return "Even";
// }
// else{
//     return "Odd";
// }
// }
// const result = checkEvenOdd(6);
// console.log(result);

// function printName(x){
//     for (let i = 1; i <= x; i++){
//         console.log("mehedi");
//     }
// }
// printName(5);

// function printName(x){
//     for (let i = 1; i <= x; i++){
//         console.log("mehedi");
//     }
// }
// printName("5");

// function printName(x){
//     for (let i = 1; i <= x; i++){
//         console.log("mehedi");
//     }
// }
// printName("hello"); // this will not work

// validation js

// function add(x, y){
//     return x + y;
// }
// console.log(add(3, 4));

// function add(x, y){
//     return x + y;
// }
// console.log(add(null, 4));

// function add(x, y){
//     return x + y;
// }
// console.log(add(undefined, 4));

// function add(x, y){
//     return x + y;
// }
// console.log(add({name: "x"}, 4));

// function add(x, y){
//     return x + y;
// }
// console.log(add("3", 4));

// function add(x, y){
//     return x + y;
// }
// console.log(add(4));

// function add(x, y){
//     if(typeof x !== "number" || typeof y !== "number"){
//         return "thik thak number de";
//     }
//     return x + y;
// }
// console.log(add(4,));

// function add(x, y){
//     if(typeof x !== "number" || typeof y !== "number"){
//         return "thik thak number de";
//     }
//     return x + y;
// }
// console.log(add(4, "7"));

// function add(x, y){
//     if(typeof x !== "number" || typeof y !== "number"){
//         return "thik thak number de";
//     }
//     return x + y;
// }
// console.log(add(4, 7));

// function details(info){
//     if(typeof info !== "object" || info.name || info.age){
//      return "thik thak object daw";
//     }
//     return `My name is : ${info.name}. My age is ${info.age}`;
// }
// console.log(details({name: "Mehedi"}));

// function details(info){
//     if(typeof info !== "object" || !info.name || !info.age){
//      return "thik thak object daw"
//     }
//     return `My name is : ${info.name}. My age is ${info.age}`;
// }
// console.log(details({name: "Mehedi", age: 26}));

// function details(info) {
//     if (typeof info !== "object") {
//         return "thik thak object daw"
//     }
//     else if (!info.name || !info.age) {
//         return "object must contain name and age property"
//     }
//     else if(typeof info.name !== "string" || typeof info.age !== "number") {
//         return "name should be a string, age should be a number"
//     }
//     else if(info.age <= 0){
//           return "age should be a positive number"
//     }
//     return `My name is : ${info.name}. My age is ${info.age}`;
// }
// console.log(details({ name: "Mehedi", age: 25 })); // it will work

// function details(info) {
//     if (typeof info !== "object") {
//         return "thik thak object daw"
//     }
//     else if (!info.name || !info.age) {
//         return "object must contain name and age property"
//     }
//     else if(typeof info.name !== "string" || typeof info.age !== "number") {
//         return "name should be a string, age should be a number"
//     }
//     else if(info.age <= 0){
//           return "age should be a positive number"
//     }
//     return `My name is : ${info.name}. My age is ${info.age}`;
// }
// console.log(details("hello"));

// function details(info) {
//         if (typeof info !== "object") {
//             return "thik thak object daw"
//         }
//         else if (!info.name || !info.age) {
//             return "object must contain name and age property"
//         }
//         else if(typeof info.name !== "string" || typeof info.age !== "number") {
//             return "name should be a string, age should be a number"
//         }
//         else if(info.age <= 0){
//               return "age should be a positive number"
//         }
//         return `My name is : ${info.name}. My age is ${info.age}`;
//     }
//     console.log(details({ name: "Mehedi" }));

// basic problems js

// function findLargest(values){
//     let max = values[0];
//     for (let i = 1; i < values.length; i++){
//         if(values[i] > max){
//             max = values[i];
//         }
//     }
//     return max;
// }
// const numbers = [3, 12, 4, 2, 0, 53, 2, 5, 6];
// console.log(findLargest(numbers));

// function findLargest(values){
//     if(!Array.isArray(values)){
//         return "provide an array";
//     }
//     let max = values[0];
//     for (let i = 1; i < values.length; i++){
//         if(values[i] > max){
//             max = values[i];
//         }
//     }
//     return max;
// }
// const numbers = [3, 12, 4, 2, 0, 53, 2, 5, 6];
// console.log(findLargest(null));

// function findLargest(values) {
//     if (!Array.isArray(values)) {
//         return "provide an array";
//     }
//     else {
//         let max = values[0];
//         for (let i = 1; i < values.length; i++) {
//             if(typeof values[i] !== "number"){
//                return "all values should be number" 
//             }
//             else{
//                 if (values[i] > max) {
//                     max = values[i];
//                 } 
//             }
            
//         }
//         return max;
//     }

// }
// const numbers = [3, 12, 4, 2, 0, 53, "2", false, 6];
// console.log(findLargest(numbers));

// solving1 js 

// ১। [ফাংশন নেম দিতে হবে AnaToVori]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে আনা (Ana)। তারপর সেটাকে ভরি তে কনভার্ট কত মান হয় সেই সংখ্যা রিটার্ন করবে । শুধু সংখ্যাটা রিটার্ন করবে ।

// function AnaToVori(Ana){
//     if(typeof Ana !== "number" || Ana < 0){
//      return "Please provide a valid integer number"
//     }
//     else{
//         const Vori = Ana * 0.0625;
//         return Vori;
//     }
    
// }
// console.log(AnaToVori(5));

// solving 2 js 

/*
২. [ফাংশন নেম দিতে হবে pandaCost]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে।
১ টি সিঙ্গারা এর দাম - ৭ টাকা
১ টি সমুচা এর দাম - ১০ টাকা
১ টি জিলাপি এর দাম - ১৫ টাকা
এখন যদি সে বিভিন্ন সংখ্যার সিঙ্গারা, সমুচা আর জিলাপি এর অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সৈই সংখ্যা রিটার্ন করতে হবে।
*/

// function pandaCost(singara, samucha, jilapi){
//    if(typeof singara !== "number" || typeof samucha !== "number" || typeof jilapi !== "number"){
//     return "please provide valid integer number";
//    }
//    else if(singara < 0 || samucha < 0 || jilapi < 0){
//     return "all parameter should be positive";
//    }
//    else{
//     const singaraPrice = 7;
//     const samuchaPrice = 10;
//     const jilapiPrice = 15;
//     const total = (singara * singaraPrice) + (samucha * samuchaPrice) + (jilapi * jilapiPrice);
//     return total;
//    }
   
// }
// console.log(pandaCost(1,2,1));

// solving 3 js 

/*
৩. [ফাংশন নেম দিতে হবে picnicBudget]: প্যারামিটার হিসেবে নিবে কয়জন পিকনিকে যাবে সৈই সংখ্যা। 
যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে।
যদি ১০০ এর বেশি কিন্তু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি (অর্থাৎ ১০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক ওই জন্য ৪০০০ টাকা করে দিতে হবে।
আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ থেকে বেশি যতজন আছে তাদের প্রত্যেকের জন্য ৪০০০ হাজার টাকা করে দিতে হবে। এর ২০০ এর বেশি (অর্থাৎ ২০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০০ টাকা করে দিতে হবে।
এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে  
*/