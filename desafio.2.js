const fs = require("fs")
const express = require(`express`);
const app = express()

app.listen(8080,()=>console.log("server up"));

let products = [];
class productManager{
   constructor(productName){
      this.productName = productName
   }
   createProduct = (title,description,price,thumbnail)=>{
      products.push({
         id : (Math.random()*100).toString(36).slice(9) ,
         title , 
         description,
         price, 
         thumbnail
      })

      fs.writeFileSync(this.productName, JSON.stringify(products, null , 2))
   }

   readProduct = (obj)=>{
    this.productName = fs.readFileSync("./product.JSON", "utf-8")
    obj = JSON.stringify(this.productName)
    return obj;
   }

   // appen = ()=>{
   //    this.readProduct().then(data=>{
   //       let json = JSON.parse(data)
   //       console.log(json)
   //    })
   // }
}

 async function desafio(){
   const product = new productManager(`product.JSON`);
    product.createProduct(`funko maria`,`funko de coleccion`,500,`https//www.funko.coleccion.com`)
    product.createProduct(`funko franco` , `funko de coleccion unico` , 500 , `http//www.funko.coleccion.com` )
    product.createProduct(`elefante`, `animal`, 100 , `http//:animal.com`)
}


 function mostrar() {
   const readd = new productManager(products)
   readd.readProduct()
      console.log(readd)
}
mostrar()


app.get(`/products`, (req,res)=>{
   const nuevo = new productManager();
   nuevo.readProduct()
   res.send(nuevo)
})
app.get(`/limit`, (req , res)=>{
   const {id,title} = req.query
   const nuevo = new productManager();
   nuevo.readProduct()
   const valores = Object.values(nuevo.readProduct())
    let valor = valores.find(item => item.id === id)

   res.send({user: valor.title , query: req.query })
})

app.get(`/limit`, (req , res)=>{
   const {id,title} = req.query
   const nuevo = new productManager();
   const valores = Object.values(nuevo.readProduct())
    let valor = valores.find(item => item.id === id)

   res.send({user: valor.title , query: req.query })
})
function main() {
    desafio()
    mostrar()
}

