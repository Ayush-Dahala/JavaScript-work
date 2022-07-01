// console.log("Project 4")
const Name=document.getElementById("Name")
const email=document.getElementById("email")
const phone=document.getElementById("phone");
const btn=document.getElementById("btn")

let emailcheck=false
let phonecheck=false
let namecheck=false

Name.addEventListener("blur",()=>{
// console.log("name is blurred")
let regex=/^([A-Za-z]+)([\w\s]+){2,10}$/
let str=Name.value
// console.log(regex,str)
if(regex.test(str)){
    // console.log("ok")
    let namevalid=document.getElementById("namevalid")
    namevalid.innerHTML=""
    namecheck=true
}
else{
    // console.log("false")
    let namevalid=document.getElementById("namevalid")
    namevalid.innerHTML="Your name should start with an alphabet"
    namecheck=false
}
})

email.addEventListener("blur",()=>{
// console.log("email is blurred")
let regex=/^([A-Za-z0-9]+)@([A-Za-z]+)\.([a-z]){3,6}$/
let str=email.value
// console.log(regex,str)
if(regex.test(str)){
    // console.log("ok")
    let emailvalid=document.getElementById("emailvalid")
    emailvalid.innerHTML=""
    emailcheck=true
}
else{
    // console.log("false")
    let emailvalid=document.getElementById("emailvalid")
    emailvalid.innerHTML="Your email should be valid"
    emailcheck=false
}
})

phone.addEventListener("blur",()=>{
// console.log("phone is blurred")
let regex=/^(91)?([0-9]){10}$/
let str=phone.value
// console.log(regex,str)
if(regex.test(str)){
    // console.log("ok")
    let phonevalid=document.getElementById("phonevalid")
    phonevalid.innerHTML=""
    phonecheck=true
}
else{
    // console.log("false")
    let phonevalid=document.getElementById("phonevalid")
    phonevalid.innerHTML="Your Phone number should be of 10 digit"
    phonecheck=false
}
})

btn.addEventListener("click",()=>{
    if(emailcheck && namecheck && phonecheck){
        console.log("correct")
        let alert1=document.getElementById("alert")
        let str=`<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Your form is being submitted</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
      alert1.innerHTML=str
    }
    else{
        console.log("incorrect")
        let alert1=document.getElementById("alert")
        let str=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Enter Valid Input</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
      alert1.innerHTML=str
}
})
