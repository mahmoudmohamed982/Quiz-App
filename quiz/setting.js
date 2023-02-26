import Quiz from "./quiz.js"
class settings{

    constructor(){
        this.settingsDom=document.querySelector(".settings");
        this.quizDom=document.querySelector(".quiz");
        this.categoryDom=document.querySelector("#category");
        this.numQuestionsDom=document.querySelector("#numQuestions");
        this.difficultyDom=[
            document.querySelector("#easy"),
            document.querySelector("#medium"),
            document.querySelector("#hard"),
        ]
        
        this.startBtn=document.querySelector("#start");

        this.startBtn.addEventListener("click",this.startQuiz);

                 }

// start the quiz 
    startQuiz=async()=>{
        try{
        let amount=this.getAmountQ();
        let categoryId=this.categoryDom.value;
        let difficulty=this.difficulty();
        this.quiz={}
        const url=`https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}`
        // use distruction feature from Ecma6 rather than type result=response.result
        let {results} =await this.fetchData(url);
        this.quiz=new Quiz( this.quizDom,amount,results);
        this.togglePages();
    }
    catch(err){
        alert(err)
    }
    }

//fetch data from api 
    fetchData=async(url)=>{
   const response=  await fetch(url);
      const result= await response.json();
      return result;
      
    }

//get number of question which user insert
    getAmountQ=()=>{
        let amount=this.numQuestionsDom.value;
        if(amount>0 && amount<20){
            return amount;
        }
        else{
            alert("wrong data !!")
        }
    }

//get difficulty of question which user insert
    difficulty=()=>{
        let difficulty=this.difficultyDom.filter(el=>el.checked)
        if(difficulty.length===1){ //[element,length=1]
            return difficulty[0].id;
        }
        else{
            alert("please select data");
        }
    }

    togglePages=()=>{
        this.quizDom.style.display="block"
        this.settingsDom.style.display="none"
    }
}

export default settings;