let My_car ={
    car_Company:"Swift",
    car_Model:"Alto",
    year:2022,
    color:"silver",
    price:550000
}
console.log(My_car);
console.log(My_car.car_Model);
console.log(My_car['car_Company']);
let color ="color";
My_car[color]="Black";
console.log(My_car['color']);
    color = "forsale";
    My_car[color]=true
    console.log(My_car[color]);
    console.log(My_car.price);
    console.log(My_car['year']);
    
    



    // Object in object

    let Students = {
       swathi:{
            s_name:"Swathi",
            roll_no: 101,
            course: "BCA",
            Mail_id:"swathi@gmail.com",
            Ph_no :9014727469
        },
       durga:{
            s_name:"Durga",
            roll_no: 102,
            course: "AI",
            Mail_id:"durga@gmail.com",
            Ph_no:939503198
        },
        keerthi:{
            s_name:"Keerthi",
            roll_no: 103,
            course: "ITTI",
            Mail_id:"keerthi@gmail.com",
            Ph_no:9389047407
        }

    }
    console.log(Students);
    console.log(Students.durga.s_name);
    console.log(Students.keerthi['Mail_id']);
    console.log(Students.swathi.Ph_no);
let Studentkey ="Bhavani";
    if(Studentkey=== "Swathi"){
        console.log(Students.swathi.s_name);
    }
    else if(Studentkey==="Keerthi"){
        console.log(Students.keerthi.s_name);
    }
    else if(Studentkey==="Durga"){
        console.log(Students.durga.s_name);
    }
    else{
        console.log("Not Found!!");
        
    }
    
    
    
    
    
    

    



