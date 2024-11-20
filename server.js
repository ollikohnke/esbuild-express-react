const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

// gets the static files from the build folder
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`https://beta.opako.xyz/`);
});