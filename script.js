const form=document.querySelector("#form");
const email=document.querySelector("#email");
const username=document.querySelector("#username");
const password=document.querySelector("#password");
const cpassword=document.querySelector("#cpassword");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
});

function validateInputs(){
    const usernameval=username.value.trim();
    const emailval=email.value.trim();
    const passwordval=password.value.trim();
    const cpasswordval=cpassword.value.trim();



    

if(usernameval===''){
    seterror(username,'username is required');
}
else{
    setsuccess(username);
}
if(emailval===''){
    seterror(email,'email is required');
}
else if(!validateEmail()===(emailval)){
    seterror(email,'please enter a valid email');
}
else{
    setsuccess(email)
}
if(passwordval===''){
    seterror(password,'password is required');
}
else if(passwordval.length<8){
    seterror(password,'password must be atleat 8 characters');
    
}
else{
    setsuccess(password);
}
if(cpasswordval===''){
    seterror(cpassword,'required password');
}
else if(cpasswordval!==passwordval){
    seterror(cpassword,'password not same');

}
else{
    setsuccess(cpassword);
}
}


function seterror(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');

    errorElement.innerText=message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setsuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');

    errorElement.innerText='';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

function validateEmail(email) {
  // Regular expression for basic email validation
  return String(email)
  .toLowerCase()
  .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  return re.test(email);
};
