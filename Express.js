//// Expressworks Exercise #8: JSON Me
const express = require('express')
const app = express()
const fs = require('fs')
app.get('/books', (req, res) => {
    const filename = process.argv[3]
    fs.readFile(filename, (error, data) => {
        if (error) {
            return res.sendStatus(500)
        }
        try {
            const books = JSON.parse(data)
            res.json(books)
        } catch (error) {
            res.sendStatus(500)
        }
    })
})
app.listen(process.argv[2])

//// Expressworks Exercise #7: What's in Query
// const express = require('express')
// const app = express()
// app.get('/search', (req, res) => {
//     const query = req.query
//     res.send(query)
// })
// app.listen(process.argv[2])



//// Expressworks Exercise #6: Param Pam Pam
// const express = require('express')
// const app = express()
// app.put('/message/:id', (req, res) => {
//     const id = req.params.id
//     str = require('crypto')
//         .createHash('sha1')
//         .update(new Date().toDateString() + id)
//         .digest('hex')
//     res.send(str)
// })
// app.listen(process.argv[2])


//// Expressworks Exercise #5: Stylish CSS
// const express = require('express')
// const app = express()
// app.use(require('stylus').middleware(process.argv[3]))
// app.use(express.static(process.argv[3]))
// app.listen(process.argv[2])


//// Expressworks Exercise #4: Good Old Form
// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }))
// app.post('/form', (req, res) => {
//     res.send(req.body.str.split('').reverse().join(''))
// })
// app.listen(process.argv[2])


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
