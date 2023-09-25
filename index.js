const express = require('express');
const app     = express();

app.get('/', (req, res) => {
    res.send('Hello World')
  })

/*  
app.listen(3000, function(){
    console.log('Running on port 3000!')
})*/

// export app for testing
module.exports = app;