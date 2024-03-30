const name="Dheeraj-kr";
const repoCount=50;
// console.log(name+repoCount+"Value");
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// declare a string  by making object
const gameName=new String ('dheeraj-kr-com');
// console.log(gameName[2]);
// console.log(gameName.__proto__);
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2));//at postion 2 which character is there
// console.log(gameName.indexOf('r'));//character 'r' at which postion is.


// const newString=gameName.substring(-1,4);//ignore -ve value
// console.log(newString);
// const anotherString=gameName.slice(-8,6);
// console.log(anotherString);


// const newStringOne="    dheeraj   ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url="https://hitesh.com/dheeraj%20kumar";
console.log(url.replace('%20','-'));
// console.log(url.includes('sunfae'));//false

console.log(gameName.split('-'));