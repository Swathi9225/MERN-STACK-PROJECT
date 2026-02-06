const UserName = document.querySelector('#Username')
UserName.addEventListener(
    'click',()=>{
        console.log("Enter your UserName")
        if(UserName.value ==="Swathi"){
        console.log("Hello!."); 
    }
    },false
);

   
const Email = document.querySelector('#Email')
Email.addEventListener(
    'click',()=>{
        console.log("Enter your Email")
        if(Email.value ==="Swathi@gmail.com"){
        console.log("Email Verified!"); 
    }
    },false
)



const Password = document.querySelector('#Password')
Password.addEventListener(
    'click',()=>{
        console.log("Enter your Valied Password")
        if(Password.value ==="Swathi123"){
        console.log("Welcom!!."); 
    }
    },false
)

 let toggle = true;
 const check_button = document.querySelector('#Check');
 const label = document.querySelector("#agreeText");

 check_button.addEventListener(
    'click', () => {
    if (toggle) {
     label.id = "labelbtn";
      toggle = false;
    } else {
        label.id = 'agreeText'
        toggle = true
    }
})

