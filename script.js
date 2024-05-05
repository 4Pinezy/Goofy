const quizData = [
    {
        question: "w ktorym wieku zyjemy?",
		a:"XXI",
		b:"XIX",
		c:"XX",
		d:"XVII",
		correct: "c",
    },
    {
        question: "jak inaczej powiedziec na bark?",
		a:"lokiec",
		b:"mozna powiedziec tylko bark",
		c:"kolano",
		d:"pieta",
		correct: "a",
    },
	{
        question: "kiedy zylo moje plemie?",
		a:"1939r.",
		b:"11.09.2001",
		c:"XXI w.",
		d:"XVII w.",
		correct: "d",
    },
	{
        question: "od kiedy istnieje czas?",
		a:"od wielkiego wybuchu",
		b:"od narodzin jezusa",
		c:"niewiadomo",
		d:"wtedy kiedy bylo moje plemie",
		correct: "b",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
	
	deselectAnswers()
	

	const currentQuizData = quizData[currentQuiz]
	
	questionEl.innerText = currentQuizData.question
	a_text.innerText = currentQuizData.a
	b_text.innerText = currentQuizData.b
	c_text.innerText = currentQuizData.c
	d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
	answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
	const answer = getSelected()
	if(answer) {
		if(answer === quizData[currentQuiz].correct) {
			score++
		}
		
		currentQuiz++
		
		if(currentQuiz < quizData.length) {
			loadQuiz()
		} else {
			quiz.innerHTML = `
			<h2>Odpowiedziales na ${score}/${quizData.length} pytan poprawnie</h2>
			
			<button onclick="location.reload()">Sprobuj ponownie</button>
			`
		}
	}
})