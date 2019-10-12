/// Expressworks Exercise #3
const express = require('express');
const app = express();
app.set('view engine', 'pug')
app.set('views', process.argv[3])
app.get('/home', (req, res) => {
    res.render('index', { date: new Date().toDateString() })
})
app.listen(process.argv[2])



// const express = require('express')
// const app = express()
// app.set('view engine', 'pug')
// app.set('views', process.argv[3])
// app.get('/home', function (req, res) {
//     res.render('index', { date: new Date().toDateString() })
// })
// app.listen(process.argv[2])


//// Expressworks Exercise #2
// const express = require('express');
// const app = express();
// app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
// app.listen(process.argv[2])


//// Expressworks Exercise #1
// const express = require('express');
// const app = express();
// app.get('/home', (req, res) => {
//     res.end('Hello World!')
// })
// app.listen(process.argv[2])
