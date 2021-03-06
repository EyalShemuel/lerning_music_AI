const express = require('express');
const app = express();
const path = require('path');



// app.use(express.static(path.join(__dirname+ '/client/build')));
// console.log(__dirname+ '/client/build')
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('*',(req,res) => {res.sendFile(path.join(__dirname,'build','index.html'))})
// app.get('/getNumber', (req, res)=>{
//     res.send({number:23423})
// })

// fetch('http://www.google.com')
// .then(r=>console.log(r))



const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})