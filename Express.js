//// Expressworks Exercise #4: Good Old Form
const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.post('/form', (req, res) => {
    res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])


//// Expressworks Exercise #3: Pug
// const express = require('express');
// const app = express();
// app.set('view engine', 'pug')
// app.set('views', process.argv[3])
// app.get('/home', (req, res) => {
//     res.render('index', { date: new Date().toDateString() })
// })
// app.listen(process.argv[2])


//// Expressworks Exercise #2: Static
// const express = require('express');
// const app = express();
// app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
// app.listen(process.argv[2])


//// Expressworks Exercise #1: Hello World!
// const express = require('express');
// const app = express();
// app.get('/home', (req, res) => {
//     res.end('Hello World!')
// })
// app.listen(process.argv[2])
