
// console.log("Enter your birthyear");

// process.stdin.on("data", data => {
//   console.log(`Your birthyear is  ${data}`);  //template string
//   let currentYear = new Date().getFullYear()
//   let age = currentYear - Number(data);
//   console.log(`your age is ${age}`);
//   process.exit() 
// })

// function with two parameter 

print = (str, num) => {
    let result = str.slice(-num) + str.slice(0, -num);
    console.log(result);  
   }
   print("javascript", 2)
