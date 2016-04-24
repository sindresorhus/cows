var cows = require('./')

var all = cows();
if(!process.argv[2] || isNaN(Number(process.argv[2]))) {
  console.log("Give cow number as argument");
}
else {
  var cowNumber = Number(process.argv[2]);
  if(cowNumber <= all.length) {
    console.log(all[cowNumber-1]);
  } else {
    console.log("Enter cow number between [1-"+all.length+"]")
  }
}
