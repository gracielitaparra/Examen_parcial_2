const questions = [
  {
    question: "¿Cuál es la capital de Francia?",
    answers: ["Londres", "Madrid", "Berlín", "París"],
    correct: 3
  },
  {
    question: "¿Quién pintó la Mona Lisa?",
    answers: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Claude Monet"],
    correct: 1
  },
  {
    question: "¿Cuál es el océano más grande del mundo?",
    answers: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"],
    correct: 2
  },
  {
    question: "¿Cuál es el planeta más cercano al sol?", 
    answers: ["Mercurio", "Venus", "Tierra", "Marte"],
    correct: 0
  },
  {
    question: "¿Quién escribió 'Don Quijote de la Mancha'?",
    answers: ["William Shakespeare", "Miguel de Cervantes", "Gabriel García Márquez", "Mario Vargas Llosa"],
    correct: 1
  },
  {
    question: "¿Cuál es el metal más ligero?",
    answers: ["Hierro", "Plomo", "Aluminio", "Litio"],
    correct: 3
  },
  {
    question: "¿Qué país tiene la mayor población del mundo?",
    answers: ["India", "China", "Estados Unidos", "Indonesia"],
    correct: 1
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    answers: ["Río Nilo", "Río Misisipi", "Río Amazonas", "Río Yangtsé"],
    correct: 2
  },
  {
    question: "¿Cuál es el animal terrestre más rápido?",
    answers: ["Guepardo", "León", "Tigre", "Canguro"],
    correct: 0
  },
  {
    question: "¿En qué año llegó el hombre a la Luna?",
    answers: ["1969", "1959", "1979", "1989"],
    correct: 0
  },
  {
    question: "¿Cuál es el país más grande del mundo?",
    answers: ["Rusia", "Canadá", "China", "Estados Unidos"],
    correct: 0
  },
  {
    question: "¿Cuál es el hueso más largo del cuerpo humano?",
    answers: ["Fémur", "Tibia", "Peroné", "Húmero"],
    correct: 0
  },
  {
    question: "¿Cuál es el país más pequeño del mundo?",
    answers: ["Ciudad del Vaticano", "Mónaco", "San Marino", "Liechtenstein"],
    correct: 0
  },
  {
    question: "¿Cuál es el idioma más hablado en el mundo?",
    answers: ["Chino mandarín", "Inglés", "Español", "Hindú"],
    correct: 0
  },
  {
    question: "¿Qué elemento químico tiene el símbolo 'O'?",
    answers: ["Oxígeno", "Oro", "Osmio", "Oganesón"],
    correct: 0
  },
  {
    question: "¿Qué país ganó la Copa del Mundo de Fútbol en 2018?",
    answers: ["Francia", "Brasil", "Alemania", "Argentina"],
    correct: 0
  },
  {
    question: "¿Cuál es la montaña más alta del mundo?",
    answers: ["Monte Everest", "K2", "Kangchenjunga", "Lhotse"],
    correct: 0
  },
  {
    question: "¿Qué día se celebra el Día de la Independencia de Estados Unidos?",
    answers: ["4 de julio", "1 de enero", "14 de julio", "25 de diciembre"],
    correct: 0
  },
  {
    question: "¿Cuál es la moneda oficial de Japón?",
    answers: ["Yen", "Dólar", "Euro", "Won"],
    correct: 0
  },
  {
    question: "¿Cuál es el órgano más grande del cuerpo humano?",
    answers: ["Piel", "Hígado", "Corazón", "Cerebro"],
    correct: 0
  },
  {
    question: "¿Qué científico propuso la teoría de la relatividad?",
    answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
    correct: 0
  },
  {
    question: "¿Cuál es el país con más medallas olímpicas?",
    answers: ["Estados Unidos", "China", "Rusia", "Alemania"],
    correct: 0
  },
  {
    question: "¿Qué ciudad es conocida como 'La Gran Manzana'?",
    answers: ["Nueva York", "Los Ángeles", "Chicago", "San Francisco"],
    correct: 0
  },
  {
    question: "¿Qué tipo de animal es la ballena?",
    answers: ["Mamífero", "Pez", "Anfibio", "Reptil"],
    correct: 0
  },
  {
    question: "¿En qué continente se encuentra el desierto del Sahara?",
    answers: ["África", "Asia", "América", "Australia"],
    correct: 0
  },
  {
    question: "¿Cuál es el libro sagrado del Islam?",
    answers: ["Corán", "Biblia", "Torá", "Vedas"],
    correct: 0
  },
  {
    question: "¿Cuál es el planeta más grande del sistema solar?",
    answers: ["Júpiter", "Saturno", "Urano", "Neptuno"],
    correct: 0
  },
  {
    question: "¿Qué artista es conocido como 'El Rey del Pop'?",
    answers: ["Michael Jackson", "Elvis Presley", "Freddie Mercury", "Madonna"],
    correct: 0
  },
  {
    question: "¿En qué país se encuentran las pirámides de Giza?",
    answers: ["Egipto", "México", "Perú", "China"],
    correct: 0
  },
  {
    question: "¿Cuál es el símbolo químico del oro?",
    answers: ["Au", "Ag", "Pb", "Fe"],
    correct: 0
  }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

document.getElementById('start-btn').addEventListener('click', () => {
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('rules-screen').classList.remove('hidden');
});

document.getElementById('start-exam-btn').addEventListener('click', () => {
  document.getElementById('rules-screen').classList.add('hidden');
  document.getElementById('exam-screen').classList.remove('hidden');
  startExam();
});

function startExam() {
  score = 0;
  currentQuestionIndex = 0;
  showNextQuestion();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function showNextQuestion() {
  clearTimeout(timer);

  if (currentQuestionIndex >= questions.length) {
    endExam();
    return;
  }

  const questionObj = questions[currentQuestionIndex];
  document.getElementById('question').textContent = questionObj.question;

  const answers = [...questionObj.answers];
  shuffleArray(answers);

  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = '';
  answers.forEach(answer => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.addEventListener('click', () => selectAnswer(answer));
    answersDiv.appendChild(button);
  });

  document.getElementById('timer').textContent = '15';
  document.getElementById('next-btn').classList.add('hidden');

  let timeLeft = 15;
  timer = setInterval(() => {
    timeLeft -= 1;
    document.getElementById('timer').textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      showCorrectAnswer();
      document.getElementById('next-btn').classList.remove('hidden');
    }
  }, 1000);
}

function selectAnswer(selectedAnswer) {
  clearTimeout(timer);
  const questionObj = questions[currentQuestionIndex];
  const correctAnswer = questionObj.answers[questionObj.correct];
  const answerButtons = document.querySelectorAll('#answers button');
  answerButtons.forEach(button => {
    if (button.textContent === correctAnswer) {
      button.classList.add('correct');
    }
    if (button.textContent === selectedAnswer && selectedAnswer !== correctAnswer) {
      button.classList.add('incorrect');
    }
    button.disabled = true;
  });

  if (selectedAnswer === correctAnswer) {
    score += 1;
  }

  document.getElementById('next-btn').classList.remove('hidden');
}

function showCorrectAnswer() {
  const questionObj = questions[currentQuestionIndex];
  const correctAnswer = questionObj.answers[questionObj.correct];
  const answerButtons = document.querySelectorAll('#answers button');
  answerButtons.forEach(button => {
    if (button.textContent === correctAnswer) {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
}

document.getElementById('next-btn').addEventListener('click', () => {
  currentQuestionIndex++;
  showNextQuestion();
});

function endExam() {
  document.getElementById('exam-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.remove('hidden');
  document.getElementById('score').textContent = `Puntuación: ${score}/${questions.length}`;
}

document.getElementById('retry-btn').addEventListener('click', () => {
  document.getElementById('result-screen').classList.add('hidden');
  document.getElementById('rules-screen').classList.remove('hidden');
});

document.getElementById('exit-btn').addEventListener('click', () => {
  document.getElementById('result-screen').classList.add('hidden');
  document.getElementById('start-screen').classList.remove('hidden');
});
