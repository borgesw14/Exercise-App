
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello, World!')
})
.get('/newpaltz', (req, res) => {
    res.send('Hello, New Paltz')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'));
        tab.classList.add('is-active');

        const target = tab.dataset.target;
        tabContentBoxes.forEach(box => {
            if (box.getAttribute('id') == target) {
                box.classList.remove('is-hidden');
            }else{
                box.classList.add('is-hidden');
            }
        })
    })
})