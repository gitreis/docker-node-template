const express = require(express)

const app = express()

app.get("/", (req, res) => {
  res.send("<h1>E aí</h1>")
})

const port = process.env.PORT || 8888

app.listen(port, ( => console.log(`Running on port ${port}`)))