var a = prompt("vul een getaal in graag")

function tafelsuitvoeren(){
 
  for (var i = 1; i <= a ; i++){
        
        document.write("de tafel van " + i +"<br>"); 
     
     for (var b = 1; b <= 10; b++){

       var d = i * b;
       

       document.write( b + "*" + i + "=" + d +"<br>");

     }
    
  }   

}

tafelsuitvoeren();

