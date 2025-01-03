
// class assignment

// // process in node

// // console.log(process.argv);

// // console.log(process.argv[2]);

// let enviornment =process.argv.slice(2);

// // console.log(enviornment);
// enviornment.forEach(element => {

//    let obj = element.split('=');

//    console.log(obj);
//    //destructring the Array
//     let [key, value] = obj;
//  console.log("{" + key.replace("--", "") , value.replace("" ,":") + "}")
//     // console.log();
// });


// assignment 2

var envi = process.argv

console.log(envi);

let days = ["mon", "tue", "wed", "thurs", "fri"]
let weekend = [ "sat", "sun"]
function isWeekDay(day) {
       if(days.indexOf(day) != -1) {
           return true;
       }
      else {
       return false;
      }
    }


console.log(isWeekDay(envi));