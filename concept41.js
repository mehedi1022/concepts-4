// var x = 10;
// var y = 5;

// x = 50
// console.log(x,y);
// variable

//2

// var x = 5;

// can not use reserve keyword
// var var = 6;
// var function = 8;
// var return = 7;
// var 1name = 5; can not use number as variable name
// var my-address = "Rajshahi";

// best practice 
// var age = 15; //if the variable name is one word
// var firstName = "mehedi" ;
// var firstNameMy = "mehedi" ;
// var first_name = "mehedi";
// var first_name_my = "mehedi";

// var num1 = 23;
// var num2 = 24;

// 3

// যোগ বিয়োগ গুন ভাগ ভাগশেষ (%)
// var x = 4;
// var y = 5;

// var total = x+y+9;

// console.log(total);



// var minus = total- 10;
// console.log(minus);
// var multiple = minus*2;
// console.log(multiple);

// var divide = multiple / x;
// console.log(divide);

// var money = 23;
// console.log(money % 2);
// var age = 26;
// console.log(age % 2)

// 23 % 4 
// 4 % 7 = 4 

// 4

// var x = 5;
//  x = x + 1;

// x += 5;

// x = x - 4;
// x -= 4;
//  console.log(x);

//5

// var Name = "mehedi" //String Tag
// var Age = 26; //number
// var isMale = true; //bolean (true,false)
// var x = null;  //null type
// var y; //undefined

// console.log(typeof Name); //string
// console.log(typeof Age); //number
// console.log(typeof isMale); //boolean
// console.log(typeof x); //object
// console.log(typeof y); //undefined





// conver js

// var number = 14.243;
// var x = "19.234";
// var y = "20";

// console.log(parseInt(number));
// console.log(parseInt(x));
// console.log(parseFloat(x));

// var num = parseFloat(x);
// console.log(num);

// var z = parseInt(y);
// console.log(z);

// var a = "20";
// console.log(typeof a);
// var converted = parseInt(a);
// console.log(typeof converted);

// console.log(3+5);
// console.log(3+"5");
// console.log(true+3);

// var x = 4.65098;
// var convert = x.toFixed(3);
// console.log(5 +convert);     
// console.log(typeof convert)          

// console.log(5+ parseFloat(convert));

// isNan

// console.log(isNaN("29"));
// console.log(isNaN("abc"));

// isNan যদি নাম্বার হয় বা নাম্বার এ কনভার্ট করা যায় তাহলে false দিবে । আর যদি নাম্বার না হয় বা নাম্বার এ কনভার্ট করা না যায় তাহলে true দিবে ।

// if else js



/*

if(condition){
condition true
}
else {
condition false
}

*/

// var x = 5;
// if (x > 10){
// console.log("x 10 er boro");
// }
// else{
// console.log("x 10 er choto")
// }
// // equal 
// var abc = 40;
// if (abc === 30){
// console.log("equal to 30")
// }
// else{
// console.log("not equal to 30")
// }

// // not equal 
// var abc = 40;
// if (abc !== 30){
// console.log("not equal to 30")
// }
// else{
// console.log("equal to 30")
// }


/*

if (condition){

}
else if(condition){

}
else if(condition){

}
else{
}



*/



// var temperature = 25;

// if (temperature > 30) {
//     console.log("It's a hot day!");
// }
// else if (temperature > 20) {
//     console.log("It's a warm day!")
// }
// else if (temperature > 10) {
//     console.log("It's a cold day!")
// }
// else {
//     console.log("It's a cold day!")
// }


/*

if (condition){

if (condition){
}
else{
}

}
else if(condition){

if (condition){
}
else{
}


}
else if(condition){

}
else{
}



*/

// logical operator && ||

// var hour = 14;

// if (hour >= 6 && hour < 12){
//     console.log("Good Morning");
// }
// else {
//     if(hour >= 12 && hour < 18){
//         console.log("Good afternoon")
//     }
//     else{
//         console.log("Good evening")
//     }
// }

// logical or
// var x = 5;

// // x এর মান যদি 5 এর ছোট হয় বা 10 এর বড় হয় তাহলে true হবে

// if(x > 5 || x > 10){
//     console.log("true");
// }
// else{
//     console.log("false")
// }


// ternary operator

// var y = 1;
// var message;

// if(y > 5) {
//     message = "bigger than 5";
// }
// else{
//     message = "less than 5";
// }
// console.log(message);


// message = y > 5 ? "bigger than 5" : "less than 5" ;

// console.log(message)

// y > 5 ? console.log("bigger than 5") : console.log("less than 5");


// var sunnyDay = true;

// console.log(!sunnyDay);

// === !=== < > true | false


// console.log(!(10 === 10));

// difference of == and === 
// == compares only value  === compares value with datatype

// console.log(10 == "10");
// console.log(20 === "20");


// array js 


// var x = 5;
// var name = "mehedi";
// var male = true;
// var names = ["mehedi", "habib", "yusuf"];
// console.log(names);

// var arryName = [value1, value2, value3, value4,.....]

// var numbers = [10,20,30,40,50];
// // console.log(numbers[0]);
// // numbers.push(60);
// // numbers.push(70, 80, 90);
// var a = numbers.pop();
// // numbers.pop();
// console.log(numbers);
// console.log(a);

// var numbers = [10, 20, 30, 40, 50];
// // numbers.shift();
// // numbers.shift();
// numbers.unshift(5);
// console.log(numbers);

// var numbers = [10, 20, 30, 40, 50];
// console.log(numbers.indexOf(40));
// console.log(numbers.indexOf(100));
// console.log(numbers[numbers.length - 1]);

// var numbers = [10, 20, 30, 40, 50, 60];
// slice (কোন ইনডেক্স থেকে শুরু , কোন ইনডেক্সের আগ পর্যন্ত)

// console.log(numbers.slice(1,4));
// console.log(numbers.slice(3));

// var x = numbers.slice(0,2).concat(numbers.slice(6));
// console.log(x);
// console.log(numbers.length);

// splice method
// splice (start, deleteCount, element1, element2)

// var numbers = [10, 20, 30, 40, 50, 60];
// numbers.splice(2, 1);
// console.log(numbers);

// var numbers = [10, 20, 30, 40, 50, 60];
// numbers.splice(2, 1, 100, 200);
// console.log(numbers);

// var numbers = [10, 20, 30, 40, 50, 60];
// numbers.splice(2, 0, 100, 200);
// console.log(numbers);





