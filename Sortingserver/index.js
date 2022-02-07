const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });
const path = require('path');
const fs = require('fs');
const xlsx = require('xlsx');

const PORT = process.env.PORT || 8000;
const app = express();

app.get('/',(req,res) =>{
  res.sendFile(path.join(__dirname,'/index.html'));
});

function checkJSON(data,res){
  if(!data[0]['Date of Joining in the present post']){
    res.send('`Date of Joining in the present post` doesnt exist');
  }
  if(!data[0]['Year of DSC']){
    res.send('`Year of DSC` doesnt exist');
  }
  if(!data[0]['DSC Rank']){
    res.send('`DSC Rank` doesnt exist');
  }
  if(!data[0]['Date of first Appointment as regular teacher']){
    res.send('`Date of first Appointment as regular teacher` doesnt exist');
  }
  if(!data[0]['Date of Birth']){
    res.send('`Date of Birth` doesnt exist');
  }
}

function getSplitDate(newDate){
  let splitNewDate=[];
  for(let k=0;k<newDate.length;k++){
    if(newDate[k] == '/'){
      splitNewDate = newDate.split('/');
      break;
    }
    else if(newDate[k] == '-'){
      splitNewDate = newDate.split('-');
      break;
    }
    else if(newDate[k] == '.'){
      splitNewDate = newDate.split('.');
      break;
    }
    else {
      splitNewDate = ['00','00','0000']
    }
  }
  return splitNewDate;
}
function joiningDate(newData,oldData,newDate,oldDate,dataInserted,index){
  let splitNewDate=getSplitDate(newDate);
  let splitOldDate=getSplitDate(oldDate);
  
  if(parseInt(splitNewDate[2]) < parseInt(splitOldDate[2])){
    newData.splice(index,0,oldData);
    dataInserted = true;
   
    return true;
  }
  else if(parseInt(splitNewDate[2]) == parseInt(splitOldDate[2])){
    if(parseInt(splitNewDate[1]) < parseInt(splitOldDate[1])){
      newData.splice(index,0,oldData);
      dataInserted = true;
   
      return true;
    }
    else if(parseInt(splitNewDate[1]) == parseInt(splitOldDate[1])){
      if(parseInt(splitNewDate[0]) < parseInt(splitOldDate[0])){
        newData.splice(index,0,oldData);
        dataInserted = true;
        
        return true;
      }
      else if(parseInt(splitNewDate[0]) == parseInt(splitOldDate[0])){
        if(!dscYear(newData,oldData,oldData['Year of DSC'],newData[index]['Year of DSC'],dataInserted,index)){

        }
        else {
          return true;
        }
      }
    }
  }
  return false;
}

function dscYear(newData,oldData,newYear,oldYear,dataInserted,index){
  if(parseInt(newYear) < parseInt(oldYear)){
    newData.splice(index,0,oldData);
    dataInserted = true;
    return true;
  }
  else if(parseInt(newYear) == parseInt(oldYear)){
    if(!dscRank(newData,oldData,oldData['DSC Rank'],newData[index]['DSC Rank'],dataInserted,index)){

    }
    else{
      return true;
    }
  }
  else if(parseInt(newYear) > parseInt(oldYear)){
    return false;
  }
  else {
    return false;
  }
  return false;
}

function dscRank(newData,oldData,newRank,oldRank,dataInserted,index){
  if(parseInt(newRank) < parseInt(oldRank)){
    newData.splice(index,0,oldData);
    dataInserted = true;
    return true;
  }
  else if(parseInt(newRank) == parseInt(oldRank)){
    if(!appointmetDate(newData,oldData,oldData['Date of first Appointment as regular teacher'],newData[index]['Date of first Appointment as regular teacher'],dataInserted,index)){

    }
    else{
      return true;
    }
  }
  else if(parseInt(newRank) > parseInt(oldRank)){
    return false;
  }
  else {
    return false
  }
  return false;
}

function appointmetDate(newData,oldData,newDate,oldDate,dataInserted,index){
  let splitNewDate=getSplitDate(newDate);
  let splitOldDate=getSplitDate(oldDate);
  
  if(parseInt(splitNewDate[2]) < parseInt(splitOldDate[2])){
    newData.splice(index,0,oldData);
    dataInserted = true;
    
    return true;
  }
  else if(parseInt(splitNewDate[2]) == parseInt(splitOldDate[2])){
    if(parseInt(splitNewDate[1]) < parseInt(splitOldDate[1])){
      newData.splice(index,0,oldData);
      dataInserted = true;
      
      return true;
    }
    else if(parseInt(splitNewDate[1]) == parseInt(splitOldDate[1])){
      if(parseInt(splitNewDate[0]) < parseInt(splitOldDate[0])){
        newData.splice(index,0,oldData);
        dataInserted = true;
        
        return true;
      }
      else if(parseInt(splitNewDate[0]) == parseInt(splitOldDate[0])){
        if(!dateOfBirth(newData,oldData,oldData['Date of Birth'],newData[index]['Date of Birth'],dataInserted,index)){

        }
        else {
          return true;
        }
      }
    }
  }
  return false;
}

function dateOfBirth(newData,oldData,newDate,oldDate,dataInserted,index){
  let splitNewDate=getSplitDate(newDate);
  let splitOldDate=getSplitDate(oldDate);
  
  if(parseInt(splitNewDate[2]) < parseInt(splitOldDate[2])){
    newData.splice(index,0,oldData);
    dataInserted = true;
    
    return true;
  }
  else if(parseInt(splitNewDate[2]) == parseInt(splitOldDate[2])){
    if(parseInt(splitNewDate[1]) < parseInt(splitOldDate[1])){
      newData.splice(index,0,oldData);
      dataInserted = true;
      
      return true;
    }
    else if(parseInt(splitNewDate[1]) == parseInt(splitOldDate[1])){
      if(parseInt(splitNewDate[0]) < parseInt(splitOldDate[0])){
        newData.splice(index,0,oldData);
        dataInserted = true;
        
        return true;
      }
      else if(parseInt(splitNewDate[0]) == parseInt(splitOldDate[0])){
        return false;
      }
    }
  }
  return false;
}


function sortData(data, newData){
  for(let i=0;i<data.length;i++){
    tempData = data[i];
    let dataInserted = false;
    for(let j=0;j<newData.length;j++){
      if(!joiningDate(newData,data[i],data[i]['Date of Joining in the present post'],newData[j]['Date of Joining in the present post'],dataInserted,j)){
        
      }
      else{
        dataInserted=true;
        break;
      }
    }
    if(!dataInserted){
      newData.push(data[i]);
    }

  }
}


app.post('/upload', upload.single('excel'), function (req, res, next) {
  

  //Converting excel to JSON
  const wb = xlsx.readFileSync(req.file.path, {dateNF:'dd/mm/yyyy'});
  const ws = wb.Sheets["Sheet1"];
  const data = xlsx.utils.sheet_to_json(ws,{raw:false})
  const newData=[];
  checkJSON(data , res);
  sortData(data ,newData)

  // fs.writeFileSync("./datajson.json",JSON.stringify(data,null,2));






  //Writing JSON to excel and sending excel
  let newWb = xlsx.utils.book_new();
  let newWs = xlsx.utils.json_to_sheet(newData);
  xlsx.utils.book_append_sheet(newWb,newWs,'Sheet1');
  var wbbuf = xlsx.write(newWb, {
    type: 'base64'
  });
  res.writeHead(200, ['Content-Type',  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']);
  res.end( new Buffer(wbbuf, 'base64') );




});

app.listen(PORT,()=>{
  console.log('listening on 8000')
})