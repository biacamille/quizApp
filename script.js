const quizData = [
    {
        question: 'How old is Justin Bieber?',
        a: '25',
        b: '23',
        c: '22',
        d: '26',
        correct: 'd'
    }, {
        question: 'What continent is Brazil?',
        a: 'Africa',
        b: 'Asia',
        c: 'America',
        d: 'Antarctica',
        correct: 'c'
    }, {
        question: 'Who is the President of US in 2020?',
        a: 'Obama',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b',
    }, {
        question: 'What does HTML stands for?',
        a: 'Hyper Text Markup Language',
        b: 'Cascading style sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a',
    }, {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'd',
    }
];



const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");


const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    
    
    const currentQuizData = quizData
    [currentQuiz];
    
    
    questionEl.innerText = currentQuizData.question;
    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}


function getSelected() {
    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    


    return answer;

}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
       answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {

         if (answer === quizData[currentQuiz].correct) {
             score++;
         }
        
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
           quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>`;
        }


    }



});




