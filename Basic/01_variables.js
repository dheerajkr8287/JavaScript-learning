const accountId=12345
let accountEmail="Darker@gmail.com"
var accountPassword="7412"
accountCity="jaipur"
let accountState;//

// accountId=24685  //not allowed because we use const
accountEmail="dk@gmail.com"
accountPassword="87965"
accountCity="delhi"//we can also declare variable like this  but not prefer to use.

/*
prefer not use var because of issue in block scope and functional scope
*/


// console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])