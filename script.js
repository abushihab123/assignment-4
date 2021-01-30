function increament() {
 document.getElementById("first-ticket").value++;
 calcluate ();
}


function dicreament() {
  
    if(document.getElementById("first-ticket").value>0){
        document.getElementById("first-ticket").value--;
        calcluate ();
        
    }
}


function increament2() {
    document.getElementById("economy-ticket").value++;
    calcluate ();
   }
   
   
   function dicreament2() {
     
       if(document.getElementById("economy-ticket").value>0){
           document.getElementById("economy-ticket").value--;
           calcluate ();
       }
   }


calcluate = () =>{

    let firstClass =  document.getElementById("first-ticket").value;
    let EchonomyClass =  document.getElementById("economy-ticket").value;

    let sub_price =  firstClass* 150 + EchonomyClass * 100;

    let vat = sub_price*.01;

    let final_price =  sub_price*.01 + sub_price;
    document.getElementById("sub-price").innerText= sub_price;
    document.getElementById("vat").innerText= vat;

    document.getElementById("final-price").innerText= final_price;
}