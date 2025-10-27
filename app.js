// package using
// const a=require('cat-me');
// console.log(a());


// server creation
const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end('hello guys! how you doin')
    }
    if(req.url=="/about"){
        res.end('hello guys! how about you')
        console.log(req.url)
    }
})
server.listen(3000)
console.log('hiii')