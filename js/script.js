const triggerPlay = document.getElementById("button-play");
const form = document.getElementById("answers-form");
const numberList= document.getElementById("numbers-list");
let remainingMs = 5000;

const stop = () => {
    form.className= "d-flex";
    numberList.className= "d-none";
    triggerPlay.className= "d-none";

} 

const handleCountDown = () =>{
    remainingMs -= 1000;
    if (remainingMs > 0) {
    console.log(`Rimangono solo ${ remainingMs / 1000} secondi!`);
    } else {
        stop();
    }
    
}
const triggerStop = () =>{
    setTimeout(handleCountDown, 1000);
}
triggerPlay.addEventListener("click", triggerStop);






    
    





 
 




 
