/************************
 * Require Statements
 *************************/
const express = require("express")
const app = express()

app.use('/', require('./routes'));

// Local server information 
const port = 5500

// Log statement to confirm server operation
app.listen(port, () => {
  console.log(`app listening on ${port}`)
})
