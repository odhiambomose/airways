

      

      // add flights
      const myDepature=document.getElementById("depature")
      const myArrival=document.getElementById("arrival")
      const myPricelist=document.getElementById("pricelist")
      const myBtn=document.getElementById("btn-add")
      
 const flightData=document.getElementById("items")

function Flights(to,from,price){
this.to=to;
this.from=from;
this.price=price;

}

Flights.prototype.addFlight=function(flight){

  /*
  const myUl=document.createElement("ul");
  const btn=document.createElement("button");
  btn.textContent="Book Now";


myUl.innerHTML=`<li>${flight.from}</li> <li>${flight.to}</li> <li>${flight.price}</li><li>${btn}</li>`;

flightContent.appendChild(myUl);

console.log(flightContent);



 myUl.appendChild(btn)
 */

 let flightArray;

 if(localStorage.getItem("flights")==null){
   flightArray=[];
   flightArray.push(flight);
   localStorage.setItem("flights",JSON.stringify(flightArray));
 }else{
   const storedFlights=localStorage.getItem("flights");
   flightArray=JSON.parse(storedFlights);
   flightArray.push(flight);
   localStorage.setItem("flights",JSON.stringify(flightArray))
 }




}




      
      
      myBtn.addEventListener("click",(e)=>{

        e.preventDefault()
      const flight=new Flights(myDepature.value,myArrival.value,myPricelist.value);

        flight.addFlight(flight);
    
        // console.log(inputs[0])

  

    
      })

      

      
    
      