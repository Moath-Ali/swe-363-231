const head = document.getElementById("tic-header");
const fields = document.getElementsByClassName("card-body");
let play = "O";
let count = 0;
for(let field of fields){
    field.addEventListener("click", ()=>{
        if(!checkWinner()){
            if(field.innerText.length===0){
                head.innerText = play+ " turn";
                if(play!=="X"){
                    play = "X";
                }
                else{
                    play="O";
                }
                field.innerText = play;
                count++;
            }
            if(checkWinner()){
                head.innerText = play + " Won!"
            }
        }

        
    } )
}



function checkWinner(){
    for (let i = 0; i <= 6; i=i+3) {
        
        if(fields[i].innerText===fields[i+1].innerText && fields[i].innerText===fields[i+2].innerText && fields[i].innerText.length!==0){
            return true
        }
    }
    for (let i = 0; i <= 2; i=i+1) {
        
        if(fields[i].innerText===fields[i+3].innerText && fields[i].innerText===fields[i+6].innerText && fields[i].innerText.length!==0){
            return true
        }
    }
    if(fields[0].innerText===fields[4].innerText && fields[0].innerText===fields[8].innerText && fields[0].innerText.length!==0){
        return true
    }
    if(fields[2].innerText===fields[4].innerText && fields[2].innerText===fields[6].innerText && fields[2].innerText.length!==0){
        return true
    }
    return false
}