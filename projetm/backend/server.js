const express = require('express');
const cors = require('cors');
const app = express();

app.listen(8081, ()=>{
    console.log("listening");
})

const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
mongoose.connect('mongodb://localhost:27017/premiertest', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("connected"))
.catch((err) => console.log(err));

app.use(cors());



  
