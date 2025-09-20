let screen=document.querySelector(".screen")

function display(num){
    if(screen.innerText==='0' || screen.innerText==='Error'
        || screen.innerText==='Infinity')
        {
        screen.innerText=num
        return;
    }
    screen.innerText=`${screen.innerText}${num}`;
}

function clearScreen(){
    screen.innerText='0'
}

function calculate(){
    try{
         screen.innerText=eval(screen.innerText)
    }catch (error){
        screen.innerText='Error'
    }
   
}