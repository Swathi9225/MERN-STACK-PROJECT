const user = function( Username, Mail, Password){
     return `Hello ${Username}   Your mail id and  Passwords are  ${Mail} ${Password} ` 
}
    let Username= prompt("Enter the Username") ;
        if(Username=== "swathi"){
            console.log("Welcome to the site ");
        }
        else{
            console.log("Reenter the Username");
        }
    let mail= prompt("enter the mail");
        if(mail==="swathi123gmail.come"){
            console.log("mail id is verifide!!");
         }
         else{
            console.log("Try Again!!..");
         }
            let chances = 0;
            while(chances < 3){
    let Password= prompt("Enter your password");
            if(Password==="Swathi12"){
                alert("Password is Saved");
                break;
            }
            else{
                chances++;
                console.log(`Recheck the Pasword ${chances}/3`);
            }
            if(chances=== 3)
                  {
                    console.log(" Too many attempts!!! So please wait for 30 second");
                  }
                 
         console.log("Thank You!!...");
        }
            let output = user("swathi", "Swathi123gmail.com")
console.log(output);

         

    
    
                
            
               