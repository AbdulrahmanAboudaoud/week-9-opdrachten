

      

     function askDetails(){
        
        var age;
        var name;
        
      	
        do{
        

		         age = prompt("Hoe oud bent u?");
		         name = prompt("Wat is u naam ?");
		         confirm = prompt("kloppen deze gegevens ?");
		        document.write(" Hallo " + name + " ,je leeftijd is " + age + " jaar " + " <br/> " );  
       
        
        
        } while(confirm == "nee")
        
    } 
        
     askDetails();



     

    






    
