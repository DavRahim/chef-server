const express = require('express');
const app  = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const allChef = require('./data/allChef.json')
app.use(cors());

app.get('/', (req, res) =>{
    res.send("Dregent is runnig");
});

app.get('/allChef', (req, res) =>{
     res.send(allChef)
})
app.get('/allChef/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id);
    const selectChef = allChef.find(n => n._id === id);
    res.send(selectChef);
})


app.listen(port, () => {
  console.log(`Dragon API is Runnig on port : ${port}`);
});

