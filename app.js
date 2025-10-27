// package using
// const a=require('cat-me');
// console.log(a());


// server creation
// const http=require('http')
// const server=http.createServer((req,res)=>{
//     if(req.url=="/"){
//         res.end('hello guys! how you doin')
//     }
//     if(req.url=="/about"){
//         res.end('hello guys! how about you')
//         console.log(req.url)
//     }
// })
// server.listen(3000)
// console.log('hiii')




// express using
// const express=require('express')
// const app=express()
// app.set("view engine",'ejs')

// // custom middleware
// app.use((req,res,next)=>{
//     console.log(5)
//     return next()
// })

// app.get('/',(req,res)=>{
//     // res.send('hello')
//     res.render('index')
// })

// // custom middleware for only /about route 
// app.get('/about',(req,res,next)=>{
//     console.log(65)
//     next()
// },(req,res)=>{
//     res.send('about myself')
// })


// app.listen(3000)



const express=require('express')
const app=express()
app.set("view engine",'ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index')
})

// app.get('/get-data',(req,res)=>{
//     console.log(req.query)
//     res.send('data received')
// })

app.post('/get-data',(req,res)=>{
    console.log(req.body)
    res.send('data received')
})

app.listen(3000)