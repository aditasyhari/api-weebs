const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const router = require('./routes/index')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload({createParentPath:true}))

app.use('/api',router)
app.use('/',(req,res)=>{
    res.send({
        message : 'Welcome To Weebs Rest Api',
        createdBy : 'Weebs Team ♥️'
    })
})

app.use('*',(req,res) =>{
    res.json({
        status: 'not found path',
        message: 'read the docs here https://github.com/Kaede-No-Ki/otakudesu-rest-api'
    })
})
app.listen(port, () => {
    console.log('listening on port', port)
})