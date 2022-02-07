var toPdf = require("office-to-pdf")
var fs = require("fs")
var wordBuffer = fs.readFileSync("./certificate.pptx")

var filename;
var data_;
fs.readFile('data.txt', 'utf8', function(err, data){
  if (err) throw err;
  data_ = data.split(' ');
});

toPdf(wordBuffer).then(
  (pdfBuffer) => {
    fs.access(`D:\\bathukamma_cert\\${data_[1]}`, function(error) {
      if (error) {
        fs.mkdir(`D:\\bathukamma_cert\\${data_[1]}`, function(error) {
          if (error) {
            console.log("Directory not created.")
          } else {
            fs.writeFileSync(`D:\\bathukamma_cert\\${data_[1]}\\${data_[0]}.pdf`, pdfBuffer)
            console.log(`file Conversion Completed ${data_[0]}`)
          }
        })
      } else {
        fs.writeFileSync(`D:\\bathukamma_cert\\${data_[1]}\\${data_[0]}.pdf`, pdfBuffer)
        console.log(`file Conversion Completed ${data_[0]}`)
      }
    })
    fs.writeFile('done.txt', 'true', function (err) {
      if (err) return console.log(err);
    });
  }, (err) => {
    console.log(err)
  }
)