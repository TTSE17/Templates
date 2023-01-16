// window.alert("hello Js ");
// window.close();
// document.write("<h1>I <span> Hello</span> js</h1>");
// document.querySelector("h1").style.color="20px" ;
// console.log("Taha" + 10/6)

// console.error("Error");
// console.time();
// console.table(["Taha", ["A", "B"], [1 , 2, 3]]);
// console.log("%cHello From Js %cFile " ,"color:blue ; ", "color:red;")

// var name = "taah" ;
// console.log(`Hello ${name}`);

// console.log(typeof "TAHA");String
// console.log(typeof  hello);Object
// console.log(typeof null); Object
// console.log(typeof [10, 20, 30]); Object
// console.log(typeof ["taha", 1, "ali"]);Object
// console.log(typeof ["taha", "Osama", "ali"]);Object
// console.log(typeof {name:"TAHA" , Age : 19}); Object
// console.log(typeof false); boolean
// console.log(typeof undefined); undefined
// console.log(typeof NaN); Number
// console.log(typeof 500.1);Number
// console.log(typeof Infinity); Number

// var _ ;
// var user = 103 , age =20;
// hello.innerHTML="we";
// console.log("Hello \"\" ")
// console.log("TAHA\n \tWEB SCHOOL");
// let a = "We Love";
// let b ="js";
// document.write(a + " " + b);
// console.log(a+" \n"+b);

// let a = "We Love";
// let b = "js";
// let c = "also";
// console.log(a + " \n" + b + " '' " + c);
// console.log(`${a} ${b+" "  + (10 * 3)  / 2} ${c}`);

// let title = "Hiding";
// let desc = "paragraph";
// let markUp = `
// <div>
//   <div class="child">
//    <h2>${title}</h2>
//    <p>${desc}</p>
//   </div>
// </div>
// `;
// document.write(markUp);

// console.log("wev" - 1);//NaN
// console.log(-" k");
// console.log(-0xc);
// console.log(-null);
// console.log("   "+ +false + 1);
// console.log(-false);
// console.log(Number("111"));
// console.log((typeof undefined).length); // 9

// Double precision
// console.log(1_000_000);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(NaN + "!") //NaN

// console.log((100).toString(2 , 8 , 10 ,12 , 16 , 32 , 36))
// console.log(100.14.toString().length.toString())
// console.log(1.11111.toFixed(0))
// console.log(+"100 T")
// console.log(Number("100 T"))
// console.log(parseInt("100 TT"))
// console.log(parseInt("T 100 T"))
// console.log(parseInt(" 100.1 T"))
// console.log(parseFloat(" 100.1 T"))
// console.log(Number.isInteger("100"))
// console.log(Number.isInteger(1.1))
// console.log(Number.isInteger(1))
// console.log(Number.isNaN(1))
// console.log(Number.isNaN(1/"t"))
// console.log(Number.MAX_SAFE_INTEGER.toString().length);//16;
// console.log(Math.ceil(-10.4));
// console.log(Math.ceil(Math.random() * (max - min + 1) + min));

// let x = "  TAhA  ";
// console.log(x[3]);
// console.log(x.charAt(2));
// console.log(x.trim());
// console.log(x[3]);
// console.log(x.charAt(2));
// console.log(x.toLowerCase());
// console.log(x.toUpperCase());
// console.log(x.trim().charAt().toLowerCase())
// console.log(x.trim()[0].toLowerCase())

// let x = "Elzero Web School";
// console.log(x.indexOf("E", 11));
// console.log(x.lastIndexOf("e"));
// console.log(x.slice());
// console.log(x.slice(2, 1));//No Swap
// console.log(x.slice(-7, -5).repeat(2));
// console.log(x.split(" "));
// console.log(x.substring(0, 6));
// console.log(x.substring(6, 0));//Swap
// console.log(x.substring(-10(Any Index == 0), 1));
// console.log(x.substring(x.length-5 , x.length-3))
// console.log(x.substr(0 , 6 ))
// console.log(x.substr(-6 , 3 (Lenght , Not Index)  ))
// console.log(x.includes("c" ,1 ))
// console.log(x.startsWith("l", x.length-1))
// console.log(x.endsWith("ool", 17))
// console.log(-isNaN(myString))

// let gender ="Male"
// gender == "Male" ? console.log("Yes") : console.log("No");
// let result = gender == "Male" ? document.write("Yes") : document.write("No");
// console.log(result);
// console.log(`${gender == "Male" ? "Yes" : "No"} ${name}`);
// let age = 10;
// age < 10
//   ? console.log(10)
//   : age >= 10 && age <= 40
//   ? console.log("10 - 40")
//   : age > 40
//   ? console.log("Larger ")
//   : console.log("Error");

// let arr = ["Taha", "Ali", " Mohamned"];
// arr[0] = 1;
// console.log(arr)
// console.log(arr.charAt(0))// Wrong
// console.log(Array.isArray(arr));
// console.log(arr instanceof Array);
// console.log(arr[0][0]);
// arr = ["Taha", "Ali", "Mohamned", [1, 2, 3]];
// console.log(arr[3][1]);
// arr[0] = "Ahmed";
// arr[1] = "Ameer";
// arr[3] = [4, 5, 6];
// arr[arr.length] = "Youssef";
// console.log(arr);
// arr.length = 2;
// console.log(arr);
// let arr = ["Taha", "Osama", "ALi", "Ahmed", "Ameer", "Sayed", "Gamal"];
// arr.unshift("Hbeb");
// arr.push("Mohamed");
// console.log(arr);
// arr.shift();
// arr.pop();
// console.log(arr);
// let arr = ["Taha", "Osama", "ALi", "Ahmed","Sayed" , "Ameer"];
// console.log(arr.indexOf("Taha" , -6))
// console.log(arr.lastIndexOf("Taha", -7))
// console.log(arr.includes("Taha"));
// console.log(arr.sort().reverse());
// let arr = ["Taha", "Osama", "ALi", "Ahmed", "Ameer", "Sayed"];
// console.log(arr.slice())
// arr.splice(2, 0, "TAHA");
// console.log(arr)
// let arr2 = [1, 3, 5, 7, 9];
// console.log(arr2.splice(0 , 2));
// console.log(arr2);
// console.log(arr2.fill("Kiwi", 2 ,3));
// console.log(arr.slice(3, -1));
// console.log(arr2.concat([2, 5, 00], arr, "as"))
// console.log(arr.join("/").toUpperCase())

// for (let i = 0; i < 10; ++i) {
//     console.log(i);
// }
// let arr = [1, "Ali", 2, "Taha", 3, "sayed"]
// let newArray = [];
// for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] === "string") {
//         newArray.push(arr[i]);
//     }
// }
// console.log(newArray)
// let a = ["Keyboard", "Mouse", "Moniter"];
// let b = ["Red", "Blue"];
// let c = [2020, 2021];
// for (let i = 0; i < a.length; i++) {
//   console.log("#".repeat(15));
//   console.log(a[i]);
//   console.log("#".repeat(15));
//   console.log("Colors :  ");
//   for (let j = 0; j < b.length; j++) {
//     console.log(b[j]);
//   }
//   console.log("Models : ");
//   for (let k = 0; k < c.length; k++) {
//     console.log(c[k]);
//   }}

// let arr = ["a", "b", "c", "d", "e"];
// let color = ["Red", "Green"];
// mainlopp: for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   nestedloop: for (let j = 0; j < color.length; j++) {
//     if (color[j] === "Green") {
//       break mainlopp;
//       }
//       console.log("-  "+color[j])
//   }
// }

// let i = 0;
// for (;;) {
//   console.log(arr[i]);
//   i++;
//   if (i >= arr.length) break;
// }

// document.write(`Show ${arr.length} Products`);
// for (let i = 0; i < arr.length; i++) {
//   document.write(`<div>
//   <h3>${arr[i]}</h3>`);
//   for (let j = 0; j < color.length; j++) {
//     document.write(`<p>- ${color[j]}</p>`);
//   }
//   // document.write(`<p>${color.join(" | ")}</p>`);
//   document.write(`</div>`);
// }

// let i = 0;
// while (true) {
//   console.log(arr[i]);
//   i++;
//   if (i === 3) break;
// }
// do {
//   console.log(arr[i]);
// i++;
// } while (false);

/// #59
// function calc(n1, n2) {
//   return n1 + n2;
// }
// console.log(calc(10) + 10);

// console.log(typeof console.log)
// function sum(n1, n2) {
//   return ;
//   n1 + n2;
// }
// console.log(sum())
// console.log(sum(1, 2) /*undefined*/ + 10);//Nan

// function generate(start, end) {
//     for (let i = start; i <= end; i++) {
//         if (i == 15) {
//             return ;
//         }
//         console.log(i)
//     }
// }
// console.log(generate(1, 20))
// console.log("T")

// function fun(name, age) {
//     age = age ?? "Unkown"; // (??) null+ undefined
//     console.log(name,age)
// }
// fun("Taha" , 0)

// function info(us = "-", age = "-", rt = 0, sh = "yes", ...sk) {
//   document.write(`<div>`);
//   document.write(`<h2>Hello ${us}</h2>`);
//   document.write(`<p>Your Age : ${age}</p>`);
//   document.write(`<p>Hour Rate : ${rt} </p>`);
//   if (sh == "yes") {
//     if (sk.length > 0) document.write(`<p>Your Skills : ${sk.join(" | ")}</p>`);
//     else document.write(`<p>You Don't Have Skills</p>`);
//   }
//   else {
//    document.write(`Your Skills Is Hidden`)
//   }
//   document.write(`</div>`);
// }
// info("Osama", 41, 10 , "no", "Html", "Css", "JS");

// let test = function () {
//   console.log("Hi");
// };
// test();
// document.getElementById("show").onclick = function () {
//   console.log("Done");
// }; //override
// document.getElementById("show").onclick = test;
// setTimeout(test, 1000);
// setTimeout( function(){
//   console.log("Welcome")
// }, 3000);

// function method(x, y) {
//   let m = "Hello";
//   function fun2() {
//     function fun3() {
//      return ` ${x}${y}`;
//     }
//     return`${m} ${fun3()} `;
//   }
//   return fun2();

// }
// console.log(method("TA", "HA"));

//  #66

// let print = _ => console.log("Hello");
// print();
// let print = (n) => n;
// console.log(print(10));
// let print = (x, y) => x + y;
// console.log(print(10, 5));

// var a = 1;
// let b = 2;
// function text() {
//     var a = 10;
//     let b = 20;
//     console.log(`inside Fun ${a}`);
//     console.log(`inside Fun ${b}`);
// }
// console.log(`Global var ${a}`);
// console.log(`Global var ${b}`);
// text();

// var x = 10;
// function f() {
//   //Test When If (Block)
//   var x = 50;
//   console.log(x);
// }
// console.log(x);
// f();
// console.log(x);

// let x = 10;
// {
//   let x = 50;
//   console.log(x);
// }
// console.log(x);

// function parent() {
//   let a = 10;
//   function child() {
//     console.log(`Child ${a}`);
//     // console.log(`Child ${b}`);
//     function grand() {
//       let b = 100;
//       console.log(`Grand ${a}`);
//       console.log(`Grand ${b}`);
//     }
//     grand();
//   }
//   child();
// }
// parent();

// #71

// let arr = [1, 2, 3, 4, 5];
// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//   newArr.push(arr[index] * 2);
// }
// console.log(newArr);

// let x = arr.map(function (el) {
// //   console.log(`This ${this}`);
//   return el + el;
// },0);
// console.log(x);

// let y = arr.map(a => a + a ,1); // this does not work with arrow Function
// console.log(y);

// function addition(num) {
//     console.log(this)
//   return num + num;
// }
// let z = arr.map(addition,10);
// console.log(z);

// #72

// let a = "elZeRo";
// let x = a
//   .split("")
//   .map(function (el) {
//     return el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase();
//   })
//   .join("");
// console.log(x);

// let b = [1, -1, 2, -2, 3];
// let y = b.map(function (e) {
//   return -e;
// });
// console.log(y,b);

// let c = "Elz123e4ro5";
// let z = c
//   .split("")
//   .map(function (e) {
//     return isNaN(e) ? e : "";
//   })
//   .join("");
// console.log(z);

// let a = ["ahmed", "Taha", "Ali", "Osama", "Alaa"];
// let b = [1, 2, 3, , 4, 5];
// let x = a.filter(function (el) {
//   return el.toUpperCase().startsWith("A");
// });
// console.log(x);
// let y = b.filter(function (e) {
//   return e % 2 !== 0;
// });
// console.log(y);

// let sentence = "I Love Foood Code Too PLaying Much";
// let a = sentence
//   .split(" ")
//   .filter(function (el) {
//     return el.length <= 4 ? el : "";
//   })
//   .join(" ");
// console.log(a);

// let mix = "A12B3C45";
// let b = mix.split("").filter(function (el) {
//     return Number.isInteger(Number(el));
//     // return !isNaN(el);
//     // return parseInt(el);
// }).map(function (el ) {
//     return el * el;
// }).join(" ")
// console.log(b);

// let nums = [1, 2, 3, 4, 5];
// let sum = nums.reduce(function (acc, curr, i, arr) {
//   console.log(acc);
//   console.log(curr);
//   console.log(i);
//   console.log(arr);
//   return acc + curr;
// },0);
// console.log(sum);

// let names = ["A", "BB", "CCC", "DDD", "EEE"];
// let max = names.reduce(function (acc, curr) {
//     console.log(acc,curr)
//   return acc.length > curr.length ? acc : curr;
// },"a");
// console.log(max);

// let strings = ["E", "@", "L", "Z", "@", "E", "R", "@", "O"];
// let final = strings
//     .reduce(function (acc, curr) {
//       console.log(acc+"   " + curr)
//       return curr !== "@" ? acc + curr : acc;
//   },"");
// console.log(final);

// let all = document.querySelectorAll("ul li");
// let divs = document.querySelectorAll(".content div");
// // console.log(divs)
// // console.log(all)
// all.forEach(function (el) {
//   //   console.log(el)
//   // console.log(el.className);
//   // console.log(el.innerHTML);
//   el.onclick = function () {
//     // console.log(el);
//     all.forEach(function (el) {
//       el.classList.remove("active");
//     });
//     this.classList.add("acitve");
//     divs.forEach(function (el) {
//       el.style.display = "none";
//     });
//   };
// });

// #79
// console.log(window.location.href);
// // console.log(window.location.assign("https://google"));
// let user = {
//   name: "TAHA",
//   age: 19,
//   print: function (ele) {
//     return `hello ${ele}`;
//   },
// };
// console.log(user.age);
// console.log(user.print("Ahmed"));

//  x = {
// a:1 ,
// b:1 ,
// }
// console.log(Object.keys(x))
// console.log(Object.values(x))
// console.log(Object.entries(x)[1])

// let myvar = 100;
// let user = {
//   name: "Osama",
//   country: "Egypt",
//   "country of": "palestine",
//   _: "Notation",  // Or $
//   100: "Number",
// };
// console.log(user["country of"]);
// console.log(user._);
// console.log(user[myvar]);

// let ava = false;
// let user = {
//   name: "TAHA",
//   age: 19,
//   skills: ["HTML", "CSS", "JS"],
//   ava: true,
//   addresses: {
//     ksa: "Riyadh",
//     egypt: {
//       one: "Cairo",
//       two: "Giza",
//     },
//   },
//   check: function () {
//     return user.ava == true ? "Free" : "Not Free";
//   },
// };
// console.log(user.skills.join(" "));
// console.log(user.skills[1]);
// console.log(user.addresses);
// console.log(user.addresses.egypt.one);
// console.log(user["addresses"].egypt["one"]);
// console.log(user.check());

// #82

// let user = new Object({
//   age: 29,
// });
// console.log(user);
// user.age = 19;
// user["name"] = "Osama";
// user["print"] = function () {
//     return "Hello";
// }
// console.log(user);

// console.log(this);
// console.log(this == window);
// myvar = 100; // or var
// console.log(this.myvar)
// console.log(window.myvar)
// function This() {
//     return (this);
// }
// console.log(This()==window)
// document.getElementById("show").onclick = function () {
//   console.log(this);
// };
// let user = {
//     age: 19,
//     days:  () => this.age * 365,
// }
// console.log(user.days())

// let user = {
//   age: 19,
//   doubleAge: function () {
//    return this.age *2
//   }
// }
// console.log(user.doubleAge())
// console.log(user)
// let obj = Object.create({})
// obj.nunber = 100;
// console.log(obj)
// let newObject = Object.create(user);
// newObject.age = 21;
// console.log(newObject,user)
// console.log(newObject.doubleAge())

// let o1 = {
//   prop1: 100,
//   method1: function () {
//     return this.prop1;
//   },
// };
// let o2 = {
//   prop2: 2,
//   method2: function () {
//     return this.prop2;
//   },
// };
// let o3 = {
//   prop1: 1,
//   prop2: 4,

// };

// let newObject = Object.assign( o1,o1,o3);
// console.log(newObject,o2);
// console.log(newObject,o3);
// console.log(newObject,o1);
// newObject.p4 = 15;
// console.log(newObject);

// let finalObj = Object.assign( {},o1, {
//   p5: 5,
//   p6: 6,
//   mult: function () {
//     return o1.prop1 + this.p5 ;
//   },
// });
// console.log(finalObj,o1);
// console.log(finalObj.mult());


// "use strict"
// var arguments = 3.14;

// x = 10;

// let y = 10;
// delete y;

// function same (p1 , p1){}

// x = {};
// let x = 010;
// let x = "\10\"


///////////////////////
let span = document.getElementById("button")

let title = document.getElementById("string");
let titleT = document.getElementById("letter");

span.addEventListener("click", function () {

    if (title.style.display == "none") {
        titleT.style.display = "none";
        title.style.display = "block";
    }
    else {
        titleT.style.display = "block";
        title.style.display = "none"
    }

});

let sideOne = document.getElementById("sid1")
let sideTwo = document.getElementById("sid2")

sideTwo.style.display = 'none'
span.addEventListener("click", function () {
    sideOne.style.display == "none" ? sideOne.style.display = 'block' : sideOne.style.display = "none"
    sideTwo.style.display == 'none' ? sideTwo.style.display = 'block' : sideTwo.style.display = 'none';

});
