const questionText = document.querySelector("h1")
let questionList = document.querySelector("span")
const choice1 = document.querySelectorAll("button")[0]
const choice2 = document.querySelectorAll("button")[1]
const choice3 = document.querySelectorAll("button")[2]
const choice4 = document.querySelectorAll("button")[3]

class Game {
    constructor(text, choices, answer){
        this.text = text
        this.choices = choices
        this.answer = answer
    }

    Question(){
        questionText.innerText = this.text
        choice1.innerText = this.choices[0]
        choice2.innerText = this.choices[1]
        choice3.innerText = this.choices[2]
        choice4.innerText = this.choices[3]
    }

    checkAnswer(selected){
        return selected === this.answer
    }
    moveToNextQuestion() {
        currentQuestions++
        questionList.innerText = currentQuestions + 1
        if (currentQuestions < questions.length){
            currentQuestion.text = questions[currentQuestions].text
            currentQuestion.choices = questions[currentQuestions].choices
            currentQuestion.answer = questions[currentQuestions].answer
            currentQuestion.Question()
        }else{
            choice1.classList.add("remove")
            choice2.classList.add("remove")
            choice3.classList.add("remove")
            choice4.classList.add("remove")
            questionText.innerText = `Teisingai atsakyta: ${correct}`
            questionList.innerText = 5
        }
    }
}

const questions = [
    {
        text: "Kam naudingos morkos?",
        choices: ["Niekam", "Hitleriui", "Kepenims", "Odai"],
        answer: "Odai"
    },
    {
        text: "Kam naudingi obuoliai?",
        choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
        answer: "Virškinimui"
    },
    {
        text: "Kokias ligas padeda gydyti agrastai?",
        choices: ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
        answer: "Cukrini diabetą"
    },
    {
        text: "Kokio vitamino gausu apelsinuose?",
        choices: ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
        answer: "Vitamino C"
    },
    {
        text: "Kokiais dalykais yra turtingi arbūzai?",
        choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
        answer: "Visi teisingi"
    }
]

let currentQuestions = 0
let correct = 0
const currentQuestion = new Game(questions[currentQuestions].text, questions[currentQuestions].choices, questions[currentQuestions].answer)
currentQuestion.Question()

choice1.addEventListener("click", function(){
    if (currentQuestion.checkAnswer(currentQuestion.choices[0])){
        correct++
    }
    currentQuestion.moveToNextQuestion()
})

choice2.addEventListener("click", function(){
    if (currentQuestion.checkAnswer(currentQuestion.choices[1])){
        correct++
    }
    currentQuestion.moveToNextQuestion()
})

choice3.addEventListener("click", function(){
    if (currentQuestion.checkAnswer(currentQuestion.choices[2])){
        correct++
    }
    currentQuestion.moveToNextQuestion()
})

choice4.addEventListener("click", function(){
    if (currentQuestion.checkAnswer(currentQuestion.choices[3])){
        correct++
    }
    currentQuestion.moveToNextQuestion()
})
