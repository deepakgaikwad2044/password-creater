
let btn = document.querySelector(".btn");

let passres  = document.querySelector("#passres");


let upperset  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let lowerset ="abcdefghijklmnopqrstuvwxyz";

let numberset = "0123456789";

let symbolset = "!@#$/^&*()_~";


//selection 

const upperInput = document.querySelector("#uppercase");

const lowerInput = document.querySelector("#lowercase");

const numberInput = document.querySelector("#numaric");

const symbolInput = document.querySelector("#symbolic");


//copy button 

let copybtn = document.querySelector(".copybtn");

const getrandompass = (data)=>{
   return  data[Math.floor(Math.random() * data.length)];
     
    
}

let totalcharlength = document.querySelector("#passlength");



  


  
const getpassword = (password="")=>{
    let ischeck = false;
    
    if(upperInput.checked){
        ischeck = true;
       password += getrandompass(upperset);
    }if(lowerInput.checked){
        ischeck = true;
        password+= getrandompass(lowerset);
    }
    
    if(numberInput.checked){
        ischeck = true;
        password+= getrandompass(numberset)
    }
    
    if(symbolInput.checked){
        ischeck = true;
        password+= getrandompass(symbolset)
    }
    
 
   
    if(!ischeck){
    

 return " please select  1 set";
    }else if(totalcharlength.value==""){
        return "please add password length";
    }else{
    
    
    if(password.length <= totalcharlength.value){
        
        return getpassword(password);
    }
    
   passres.disabled=false;
   return  truncatestring(password , totalcharlength.value);
    
    }
    
   
   
  
   

}


function truncatestring(str , num){
if(str.length > num){
var substr = str.substring(0,num);
 return substr;
}else{
    return substr;
}
}

  getpassword();
 
 
btn.addEventListener("click", (e)=>{
 e.preventDefault();  
     
    passres.value =   getpassword();
});



passres.addEventListener("click", ()=>{
    alert("copy to clipboard");
    
    passres.select();
    document.execCommand('copy');
});