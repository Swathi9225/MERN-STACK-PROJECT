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


 const button_element = document.querySelector('#btn')

button_element.addEventListener(
         'click',  () => {
        console.log("Uploded!")
        
    },
     false
 )
 click_button.addEventListener('click', () => {
    if (toggle) {
     h2_element.id = 'color'
      toggle = false
    } else {
        h2_element.id = ''
        toggle = true
    }
})

