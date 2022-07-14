// const http = require('http')
// const fs = require('fs')
const express = require('express')
const app =express()
const port =3000



app.set('view engine','ejs')

//Perintah Express js untuk menerima request alamat url mana yang mau di akses dan merender file html dengan mengirimkan data ke halaman html
app.get('/',(req, res)=> {
//   res.send('Hello World')
const name ="Arief Setyabudi"
const title ="Web Server Node Ejs"
const dataContact =[
  {name:'swd',email:'asd'} 
]
res.render('index',{name:name,title:title,dataContact})
})

//Perintah Express js untuk menerima request alamat url mana yang mau di akses dan merender file html
app.get('/about',(req, res)=> {
    // res.send('This about page')
    res.render('about')
  })

//Perintah Express js untuk menerima request alamat url mana yang mau di akses dan merender file html
app.get('/contact',(req, res)=> {
    // res.send('This about page')
    res.render('contact')
  })

  //Perintah Express js untuk menerima request alamat url mana yang mau di akses dan merender sesuatu mengirim input ke url menggunakan param dan query
  app.get('/product/:id',(req,res)=>{
    // res.send('product id :'+ req.params.id + '<br></br>'
    //  + 'category id :' + req.query.category)
    let id =req.params.id
    res.send(`product id : ${req.params.id} <br> cathegory id : ${req.query.category}`)
    
  })
//Error handler dengan menggunakan use
  app.use('/',(req,res)=>{
    res.status(404)
    res.send('Not Found : 404')
})

//Asign port server kita memakai port akses yang mana fungsi untuk menangkap request http dan mengembalikan respon http 
app.listen(port,()=>{
    console.log(`Server On Port ${port}`)
})




// //Membuat Fungsi Untuk Membaca File Yang Akan Ditampilkan Tanpa Espress.js
// const readFiles =(file,res)=>{

//     fs.readFile(file,(err,data)=>{
//         if(err){
//             res.writeHead(404)
//             res.write('Error : page not found')
//         }else{
//             res.write(data)
//         }
//         res.end()
//     })
// }

// //Inisiasi Membuat Server
// http
// //Node Create Server Module
// .createServer((req,res)=>{

//     const url =req.url
//     console.log(url)
//     res.writeHead(200,{
//         'Content-Type' : 'text/html'
//     })


// //Barikode Untuk Percabangan Site Address
//    if(url ==='/about'){
//     readFiles('./about.html',res)
//    }else if(url ==='/contact'){
//     readFiles('./contact.html',res)
//    }else{
//     readFiles('./index.html',res)
//    }
    
//   // res.write('Hello World!')
    
// })

// //Baris Kode Untuk Membuat Alamat Port Http Servernya
// .listen(3000,()=>{
//     console.log('Server is listening on port 3000')
// })



