"use strict"//treat all js code as newer version
//alert(3+3)//we are using node js ,not browser
let name="dheeraj"
let age=18
let isLoggedIn=false
let state=null


//number =>2 to power 53
//bigInt
// string=>""
//boolean=> true/false
//null =>standalone value   :The Null type has exactly one value, called null.
// undefined=>:The Undefined type has exactly one value, called undefined. Any variable that has not been assigned a value has the value undefined.
// symbol=>unique
// object 

// console.log(typeof "dheeraj")
// console.log(typeof age);


// console.log(typeof null);//object
// console.log(typeof undefined);//undefined

// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

// dataTypes are two types
/* 1:primitive(call by value)
    7types:String,Number,Boolean,null,undefined,Symbol,BigInt

*/   
const id=Symbol('123');
const anotherId=Symbol('123');
// console.log(id===anotherId);//false

const bigNumber=565468464644648n;


/*
    2:Non primitive (call by reference)
    ex=>Array,Objects,Functions

*/

const heros=["bheem","motu","shaktiman"];
console.log(typeof heros);//object

let myObj={
    name:"dheeraj",
    age:32,

};
console.log(typeof myObj);//object

const myFunction=function(){
    console.log("hello world");
}
console.log(typeof myFunction);//function




 

