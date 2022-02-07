const merge = require('easy-pdf-merge');


var fs = require('fs');
var path = 'D:\\oct_2_certificates\\Haryana\\'
var files = fs.readdirSync(path);

var pdffiles =[]
function gettingFileNames(){
  files.map((fileName)=>{
    let parts = fileName.split('.')
    if(parts[parts.length -1] == 'pdf'){
      pdffiles.push(path+fileName)
    }
    
  })
}

gettingFileNames();
let temparr=[];
for(let i=60;i<=120;i++) {
  temparr.push(pdffiles[i])
}

merge(temparr, 'Haryana1.pdf', function (err) {
    if (err) {
        return console.log(err)
    }
    console.log('Success')
});