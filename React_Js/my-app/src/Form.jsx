const Form = () => {
    return (
        <section>
            <h3>Application Form</h3>
        <label> Name:</label>
        <input type="text" id="name" onClick={(e)=>{
                console.log("Enter your name")
        
            if(e.target.value ==="Swathi"){
                console.log("Hello Swathi");
            }
            
        }}></input>
        <br></br>
        <br></br>
        <label>E-mail:</label>
        <input type="text" id="email"onClick={(e)=>{
            console.log("Enter your e-mail")
            if(e.target.value ==="Swathi@gmail.com"){
                console.log("your a human");
            }
            
            }}></input>
        <br></br>
        <br></br>
        <label>Phone No:</label>
        <input type="text" id="phone_no"onClick={(e)=>{
            console.log("Enter your Phone.No")
            if(e.target.value ==="9014945675"){
                console.log("phone number saved");
            }
            
            }}></input>
        <br></br>
        <br></br>
        <input type="submit" value="submit"onClick={()=>{
            console.log("Your submittion is complete")
            }}></input>
        </section>
    )
}

export default Form