let names =['Keerthi','Swathi','Durga','Bhavani']
console.log(names);






const min_max=(array) =>{
    let min =array[0];
    let max =array[0];
    for(let i=1; i<array.length; i++){
        if(array[i]< min){
            min=array[i];
        }
        if(array[i]>max){
            max=array[i];
        }
    }
     console.log(`The minimum value is : ${min}`);
     console.log(`The maximun value is : ${max}`);
}
min_max([10,20, 435,76,97,466,9253]);




printValues = (arr)=>{
    for(let value of arr){
        console.log(value);
    }
}
printValues(['swathi','durga','keerthi','bhavani']);
    


const findEvenOdd= (nums) =>{
    let even =[];
    let odd=[];
        for(let value of nums){
            if(value%2===0){
                even.push(value);
            }
            else
            {
                odd.push(value);
            }
        }
        console.log(`even numbers : ${even}`);
        console.log(`odd numbes : ${odd}`);
}
findEvenOdd([1,2,3,4,5,6,7,8,9,10,11,12,1,31,43]);





