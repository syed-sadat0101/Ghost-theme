
document.querySelector(".btnSubmit").addEventListener("click", registerPOPUP);

function registerPOPUP(){
    document.getElementById("myForm").style.display = "block";
    console.log("it worked!");

}
document.querySelector(".regSubmit").addEventListener("click", registerPOPUPClose);
function registerPOPUPClose(){
    document.getElementById("myForm").style.display = "none";
    console.log("it worked!");


}

document.querySelector(".btnLogSubmit").addEventListener("click", registerPOPUPLog);

function registerPOPUPLog(){
    
    document.getElementById("loginForm").style.display = "block";
    console.log("it worked!");

}


document.querySelector(".logSubmit").addEventListener("click", registerPOPUPLogClose);
function registerPOPUPLogClose(){

    document.getElementById("loginForm").style.display = "none";
    console.log("it worked!");


}