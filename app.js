const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const adminroutes = require('./routes/admin');
const shoproutes = require('./routes/shop')


app.use(bodyParser.urlencoded({extended:false}))
app.use('/admin',adminroutes);
app.use(shoproutes);

app.use((req,res,next) => {
  res.status(404).sendFile((path.join(__dirname, 'views', '404.html')))
})

app.listen(3000, ()=>{
  console.log('Listening to the port 3000')
})


