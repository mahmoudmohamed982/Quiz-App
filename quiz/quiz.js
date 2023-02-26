import Final from "./final.js";
import Questions from "./questions.js";
class Quiz{
    
constructor(quizElemet,amount,questions){
    this.quizElemet=quizElemet;
    this.totalAmount=amount;
    this.answeredAmount=0;
    this.currentElement=document.querySelector(".current");
    this.totalElement=document.querySelector(".total");
    this.finalElement=document.querySelector(".final");
    this.nextBtn=document.querySelector("#next");
    this.questions=this.setQuiestions(questions);
    this.renderQuestion();
    this.nextBtn.addEventListener("click",this.nextQuestion)
}
setQuiestions=(questions)=>{
    return questions.map((question)=>{
        new Questions(question);
    })
}

renderQuestion=(questions)=>{
    this.currentElement.innerHTML= this.answeredAmount;
    this.totalElement.innerHTML=this.totalAmount;
    this.questions[this.answeredAmount].render();
}
nextQuestion=()=>{
const checkElement=this.questions[this.answeredAmount]
.questionsAnsweres.filter(ele=>ele.firstChild.checked);
if(checkElement.length==0){
    alert("please choose answer")
}
else
this.questions[this.answeredAmount].answer(checkElement);
this.answeredAmount++;
this.answeredAmount< this.totalAmount ? this.renderQuestion() : this.endQuiz();
}

endQuiz=()=>{
    this.quizElemet.style.display="none";
    this.finalElement.style.display="block";
    const correct=this.countCorrectAnswers();
    new Final(correct,this.answeredAmount)
}
countCorrectAnswers=()=>{
    let count=0;
    this.questions.forEach(element => {
        if(element.isCorrect){
            count++;
        }

    });
}
}

export default Quiz;