var fs = require('fs');
const data = require('./list.json');

length = data["DETAILS"].length;
error1 = 0;
for( i=0; i<length;i++){
    for(j=i+1;j<length;j++){
        if(data["DETAILS"][j] != undefined && data["DETAILS"][i] != undefined){
            if(data["DETAILS"][j]["Employee ID"] == data["DETAILS"][i]["Employee ID"]){
                delete data["DETAILS"][j];
                console.log(j);
            }
        }
    }
    
}
fs.writeFile ("list.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
    }
); 