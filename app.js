
const express = require('express')
const path = require('path');
const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'docs')));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'scripts')));
app.use(express.static(path.join(__dirname, 'styles')));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
