
class ticketManager {
   constructor(){
      this.events = [
      ];
   }
   idDinamic = ()=>{
      (Math.random()*100).toString(36).slice(3)  
   }

   getEvent = ()=>{
      return this.events
   }

   addEvent = (title,descriptions,price,thumbnail,code,stock)=>{
      const id  = this.idDinamic()
      if (this.events.find(elem => elem.code === code)) {
         throw new error("el producto ya existe");
      }
      this.events.push({
         id,
         title,
         descriptions,
         price,
         thumbnail,
         code,
         stock
      })
   }

}

const ticketManagerr = new ticketManager()
ticketManagerr.addEvent(`smart tv`, `smart tv de 50 pulgadas marca samsung`, 500 ,`https://http2.mlstatic.com/D_NQ_NP_887081-MLA42141360831_062020-O.jpg`, `101010`,100)

console.log(ticketManagerr.getEvent())