var questions = [
    {
        question: "Какой язык программирования вы изучаете?",
        options: ['JavaScript', 'Python', 'Java', 'C++'],
        correctAnswer: 'JavaScript'
    },

    {
        question: "Что такое HTML?",
        options: ["Гипертекстовый язык разметки", "Язык программирования", "База данных", "Графический редактор"],
        correctAnswer: 'Гипертекстовый язык разметки'
    },
    {
        question: "Что такое CSS?",
        options: ["Каскадные таблицы стилей", "Язык программирования", "Система управления базами данных", "Фреймворк"],
        correctAnswer: "Каскадные таблицы стилей"
    }
]

var currentQuestion = 0;
var correctAnswers = 0;

//Перемешивание
shuffleArray = (array) => {
    for (var i = array.lenght - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//Переход к след. вопросу

nextQuestion = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestions();
    } else {
        displayResult();
    }
}

//Отображает следующий вопрос

displayQuestions = () => {
    var questionElement = document.getElementById("question");
    questionElement.textContent = "Вопрос " + (currentQuestion + 1) + ": " +
        questions[currentQuestion].question;
    var optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    var shuffledOptions = shuffleArray(questions[currentQuestion].options);

    for (var i = 0; i < shuffledOptions.length; i++) {
        var option = shuffledOptions[i];
        optionsElement.innerHTML += `<button 
        onclick="nextQuestion('${option}')">${option}</button>`;
    }
}

displayResult = () => {
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
    var resultElement = document.getElementById("result");

    questionElement.style.display = "none";
    optionsElement.style.display = "none";

    resultElement.textContent = `Правильных ответов ${correctAnswers} из ${questions.length}`;
    resultElement.style.display = "block";
}

displayQuestions();
