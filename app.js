import express from "express"
import dotenv from "dotenv"
import conn from "./db.js";

dotenv.config(); //.env içerisinde oluşturduğumuz değişkenlere ulaşabiliriz.

// connection to the DB
conn();

const app =express(); // express modülünü değişkene atarak başlatıyoruz
const port=process.env.PORT;



// ejs template engine --> views dosyası içerisindeki html dosyaları içerisinde js kodları çalıştırabileceğiz.
app.set("view engine","ejs");

// static files middleware(arayazılımlar) 
app.use(express.static('public'));




app.get('/',(req,res)=>{
    // res.send("İndex sayfası"); Yazı yazdırdık
    res.render('index');
})
app.get('/index',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about');
})









app.listen(port, ()=>{
    console.log(`Application running on:${port}`);
})