
var fs = require("fs")

fs.mkdir("D:\\oct_2_certificates\\hello", function(error) {
  if (error) {
    console.log("Directory not exist.")
  } else {
    console.log("Directory created exists.")
  }
})