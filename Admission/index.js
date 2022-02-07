const express = require('express')
const fs = require('fs')
const app = express()
const {spawn} = require('child_process')
var port = process.env.PORT || 8000;
const https = require('https')


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/upload' , (req, res) => {
  console.log("upload requested")
  const python = spawn('python', ['auto.py' , `${JSON.stringify(req.query)}`]);
  python.stdout.on('data', function (data) {
    console.log("print on");
   });
   python.stderr.on('data', (data) => {
    console.error(`child stderr:\n${data}`);
    res.send(`${data}`)
  });
  python.on('close',async (code, signal) => {
    console.log("python data added page redirected");
    res.redirect('https://api.cloudconvert.com/v1/convert?apikey=lrDgog8fVMz9S7h1nZtVf4FXmMhdwSve3A8kbLwFQoAQWtWPPR6lawHGH769ZoT9&inputformat=pptx&outputformat=pdf&input=download&file=https%3A%2F%2Fadmission-form-zphs.herokuapp.com%2Fgetppt&filename=t.pptx&wait=true&download=inline')
  });
  
})

app.get('/getppt' , (req , res) => {
  res.sendFile(__dirname + '/Admission_form.pptx' , (err) => {if(err) console.log(err)});
})

app.get('/excel' , (req , res) => {
  res.sendFile(__dirname + '/data.xlsx' , (err) => {if(err) console.log(err)});
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})