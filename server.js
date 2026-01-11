/************************
 * Require Statements
 *************************/
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Reece Mangum")
})

// Local server information 
// const port = process.env.PORT
// const host = process.env.HOST
const port = 5500

// Log statement to confirm server operation
app.listen(port, () => {
  console.log(`app listening on ${port}`)
})