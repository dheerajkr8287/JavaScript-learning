// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);//true
// console.log("02">1);//true

// console.log(null>0);//false
// console.log(null==0);//false
// console.log(null>=0);//true

// console.log(undefined==0);//false
// console.log(undefined>0);//false
// console.log(undefined<0);//false

// ===
// console.log("2"===2);//false



//  ********Stack and Heap memory********

// stack (primitive)=>call by value
// Heap  (non-primitive)=>call by reference

//call by value
let myname="dheeraj";
let anotherName=myname;
anotherName="Neeraj";
// console.log(myname);   //dheeraj
// console.log(anotherName); //Neeraj




// call by reference
let userone={
    email:"user@gMail.com",
    upi:"use@ybl",
};
let usertwo=userone;
usertwo.email="dheeraj@gamil.com";
console.log(userone.email);//dheeraj@gamil.com
console.log(usertwo.email);//dheeraj@gamil.com






