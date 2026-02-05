const UserName = document.querySelector('#Username')
UserName.addEventListener(
    'mouseenter',()=>{
        console.log("Enter your UserName")
        if(UserName.value ==="Swathi"){
        console.log("Hello!."); 
    }
    },false
);

   
const Email = document.querySelector('#Email')
Email.addEventListener(
    'mouseenter',()=>{
        console.log("Enter your Email")
        if(Email.value ==="Swathi@gmail.com"){
        console.log("Email Verified!"); 
    }
    },false
);

   




const PhoneNO = document.querySelector('#phone_no')
 PhoneNO.addEventListener(
    'mouseenter',()=>{
        console.log("Enter your Phone No")
        if(PhoneNO.value.length === 10){
        console.log("PhoneNo Saved!"); 
    }
    },false
);

const Password = document.querySelector('#Password')
Password.addEventListener(
    'mouseenter',()=>{
        console.log("Enter your Valied Password")
        if(Password.value ==="Swathi123"){
        console.log("Welcom!!."); 
    }
    },false
);

