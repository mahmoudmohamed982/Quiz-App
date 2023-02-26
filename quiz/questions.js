class Questions{

    constructor(questions){
        this.questionHeader=document.querySelector("#questions");
        this.questionsAnsweres=document.querySelectorAll(".ans-container");
        this.submitAnswer=document.querySelector("#next");
        this.question=questions.question;
        this.isCorrect=false;
        this.correctAnswer=questions.correct_answer;
        this.allAnswers=[questions.correct_answer,...questions.incorrect_answers];
    }

    answer= (ckeckElement)=>{
    this.isCorrect=ckeckElement[0].textContent===this.correctAnswer ? true : false;
    }

    render=()=>{
        this.questionHeader.innerHTML=this.question;
        this.questionsAnsweres.forEach((el,index)=>{
            el.innerHTML=`<input type="radio" name="radio" > ${this.allAnswers[index]}`
        })
    }
}
export default Questions;