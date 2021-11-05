 const myFlight=document.getElementById("flight")
 const myCheck=document.getElementById("check")
 const myBooking=document.getElementById("m-booking")
 const myStatus=document.getElementById("status")
 const myTable=document.getElementById("f-table")


//  inputs part
const flightPart=document.getElementById("flight-content")
const checkPart=document.getElementById("check-content")
const bookingPart=document.getElementById("booking-content")
const statusPart=document.getElementById("status-content")
const tablePart=document.getElementById("table-content")

const flightContent=document.getElementById("flights")


window.addEventListener("load",()=>{
loadFlights()


})

myCheck.addEventListener("click",(e)=>{


//alert("mose")
flightPart.style.display="none";
 checkPart.style.display="block";
 bookingPart.style.display="none";
 statusPart.style.display="none";
 tablePart.style.display="none";
myCheck.style.backgroundColor ="blue";
myCheck.style.color="white";
myStatus.style.backgroundColor ="white";
myStatus.style.color="black";
myTable.style.backgroundColor ="white";
myTable.style.color="black";

console.log(checkPart);



    
    
    })
    
   
    myStatus.addEventListener("click",()=>{
        // alert("mose")
         flightPart.style.display="none"
         checkPart.style.display="none"
         bookingPart.style.display="none"
         statusPart.style.display="block"
         tablePart.style.display="none"
         myStatus.style.backgroundColor ="blue";
         myStatus.style.color="white";
         myCheck.style.backgroundColor ="white";
myCheck.style.color="black";

myTable.style.backgroundColor ="white";
myTable.style.color="black";
        console.log(statusPart)
        
        
        })
        myTable.addEventListener("click",()=>{
            // alert("mose")
             flightPart.style.display="none"
             checkPart.style.display="none"
             bookingPart.style.display="none"
             statusPart.style.display="none"
             tablePart.style.display="block"
             myTable.style.backgroundColor ="blue";
             myTable.style.color="white";
             myStatus.style.backgroundColor ="white";
             myStatus.style.color="black";
             myCheck.style.backgroundColor ="white";
            myCheck.style.color="black";

            console.log(tablePart)
            
            
            })


            function loadFlights(){
const flightsArray=localStorage.getItem("flights");
const flights=JSON.parse(flightsArray);
flights.forEach(flight => {
    const myUl=document.createElement("ul");
    myUl.classList.add("arrange")
    const emptyDiv=document.createElement("div")
    
    const btn=document.createElement("button");
    btn.classList.add("booking")

  btn.textContent="Book Now";

    myUl.innerHTML=`<li>${flight.from}</li> <li>${flight.to}</li> <li>${flight.price}</li>`;
     myUl.appendChild(btn);
     emptyDiv.appendChild(btn);
     myUl.appendChild(emptyDiv);
    flightContent.appendChild(myUl);
    
});


            }



     





