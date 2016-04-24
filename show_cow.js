var cows = require('./')
var all = cows();

var cowArgument = process.argv[2]
if(!cowArgument || isNaN(Number(cowArgument))) {
  console.log("Give cow number as argument");
}
else {
  var cowNumber = Number(cowArgument);
  if(cowNumber && cowNumber <= all.length) {
    console.log(all[cowNumber-1]);
  } else {
    console.log("Enter cow number between [1-"+all.length+"]")
  }
}
