class Final {
    constructor (correctAnswers,totalAmount){
        this.score=document.querySelector(".score");
        this.agianBtn=document.querySelector("#again");
        this.render(correctAnswers,totalAmount);
        this.agianBtn.addEventListener("click",this.reload)
    }
    reload=()=>{
        location.reload();
    }
    
    render=(correctAnswers,totalAmount)=>{
        this.score.innerHTML=`you answered ${correctAnswers} from ${totalAmount}`
    }
}

export default Final;