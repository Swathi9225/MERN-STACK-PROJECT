const h1_element = document.querySelector("#todo");
const list_input = document.querySelector("#list");
const button_to_Add = document.querySelector("#btn_1");
const list_element = document.querySelector("#ul");


//creating a addNew_liFunction
 const addNew_liFunction = ()=>{
    console.log(list_input.value);
    const li_element = document.createElement("li");
    li_element.textContent = list_input.value 
    list_element.appendChild(li_element);
    list_input.value ='' 

    //logic for delete btn
    const delete_btn = document.createElement("button")
    delete_btn.textContent ="Remove"
     li_element.appendChild(delete_btn);
    delete_btn.addEventListener("click",()=>{
    list_element.removeChild(li_element); 
       
    })

    //logic for Edit button 
    const edit_btn =document.createElement("button")
        edit_btn.textContent="Update"
        li_element.appendChild(edit_btn);
    const li = document.createElement("li")
        li.textContent =list_input.value
        li_element.appendChild(li);
        edit_btn.addEventListener("click",()=>{
    const new_text = prompt("Enter new Text");
            if(new_text !== "" && new_text !== null &&li.firstChild){
                li.firstChild.textContent=new_text;
            }

        }) 
 }

 //calling addNew_liFunctoin
 button_to_Add.addEventListener("click",()=>{
     addNew_liFunction()
})

//adding another(optional) event
list_input.addEventListener("keydown",(action)=>{
    if(action.key==="Enter"){
        addNew_liFunction()
    }
})





    
