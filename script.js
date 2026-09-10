// ==========================================
// ХИМИЧЕСКИЕ РЕБУСЫ
// ==========================================

const riddles = [

    {
        // Части самого ребуса
        parts: [
            { text: "Na", type: "element" },
            { text: "+", type: "operator" },
            { text: "Cl", type: "element" }
        ],

        // Картинка
        image: "images/соль.jpg",

        // Подсказка
        hint: "Что получится если соединить натрий и хлор?",

        // Правильный ответ
        answer: ["соль" , "NaCl" , "nacl"],

        // Объяснение
        explanation:
            "Na — натрий, Cl — хлор. " +
            "При их соединении образуется NaCl — " +
            "хлорид натрия, то есть обычная поваренная соль."
    },

    {
        parts: [
            { text: "As", type: "element" },
            { text: "Ge", type: "element" },
            { text: "He", type: "element" },
            { text: "B", type: "element" },
            { text: "Po", type: "element" },
            { text: "Te", type: "element" }
        ],

        image: "images/неметалл.jpg",

        hint:
            "Какой из перечисленных химических элементов является неметаллом?",

        answer: ["Te, He", "Te ,He", "Te,He", "Te , He", "He, Te", "He ,Te", "He , Te", "He,Te", "te, he", "te ,he", "te,he", "te , he", "he, te", "he ,te", "he , te", "he,te", "He Te", "he te", "Te He", "te he"],

        explanation:
            "Гелий (He) и Теллур (Te) является неметаллами. Гелий - инертный газ, а Теллур - полуметалл." 
            
    },


    {
        parts: [
            { text: "C₂", type: "element" },
            { text: "H₂", type: "element" },
            { text: "O₂", type: "element" }
        ],

        image: "images/водород.jpg",

        hint:
            "Как называется самый древний и самый распростронённый химический элемент во Вселенной?",

        answer: ["водород" , "H₂" , "h₂", "H", "h"],

        explanation:
            "Водород — самый древний и самый распространённый элемент во Вселенной (около 88% всех атомов). Он появился в первые минуты после Большого взрыва." 
    },


    {
        parts: [
            { text: "Au", type: "element" },
            { text: "Mn", type: "element" },
            { text: "Ag", type: "element" },
            { text: "Hg", type: "element" },
            { text: "Zn", type: "element" }
        ],

        image: "images/серебро.jpg",

        hint:
            "Как называется химический элемент находящийся под номером 47?",

        answer: ["серебро" , "Ag" , "ag", "Серебро"],

        explanation:
            "Серебро обладает способностью обеззараживать воду. Оно использовалось в качестве антибактериального средства довольно продолжительное время до изобретения антибиотиков." 
    },

    {
        parts: [
            { text: "Некоторые кустарно изготовленные наркотики содержат ЭТОТ ЭЛЕМЕНТ, которым легко отравиться.", type: "operator" }
        ],

        image: "images/травка.jpg",

        hint:
            "Угадай химический элемент по описанию:",

        answer: ["марганец" , "Марганец", "Mn", "mn"],

        explanation:
            "В кустарной «химии» используется перманганат калия (обычная бытовая марганцовка). Он выполняет роль сильного окислителя в реакциях синтеза.С его помощью в подпольных условиях окисляют содержащие эфедрин или псевдоэфедрин лекарства (например, сиропы от кашля), чтобы получить суррогатный психостимулятор — эфедрон (меткатинон, на сленге «мулька» или «джеф»)." 

    },
    {
        parts: [
            { text: "да", type: "element" },
            { text: "нет", type: "element" }
            
        ],

        image: "images/золото.jpg",

        hint:
            "Как вы думаете, может ли космонавтам каким-либо образомпонадобиться в космосе золото?",

        answer: ["да" , "Да"],

        explanation:
            "Все скафандры космонавтов покрыты тончайшим слоем золота. Металл оберегает человека от воздействия космического излучения, яркого света и высоких температур." 
    },

    {
        parts: [
            { text: "Периоды", type: "element" },
            { text: "Группы", type: "element" },
            { text: "Роды", type: "element" },
            { text: "Металлы", type: "element" },
            { text: "Неметаллы", type: "element" }
        ],

        image: "images/группы.jpg",

        hint:
            "Как называются вертикальные ряды в периодической системе?",

        answer: ["группы" , "группа", "Группы"],

        explanation:
            "Группы — это вертикальные ряды в периодической системе химических элементов."
    },

    {
        parts: [
            { text: "Cl", type: "element" },
            { text: "Na", type: "element" },
            { text: "O", type: "element" },
            { text: "C", type: "element" },
            { text: "Ne", type: "element" }
        ],

        image: "images/кислород.jpg",

        hint:
            "Какой неметалл необходим для горения, дыхания и составляет основу жизни на Земле?",

        answer: ["кислород" , "Кислород", "O", "o"],

        explanation:
            "Кислород — это неметалл, необходимый для горения, дыхания и составляющий основу жизни на Земле."
    },

    {
        parts: [
            { text: "Cr", type: "element" },
            { text: "As", type: "element" },
            { text: "Pb", type: "element" },
            { text: "F", type: "element" },
            { text: "Li", type: "element" }
        ],

        image: "images/паста.jpg",

        hint:
            "Какой галоген добавляют в зубную пасту для защиты эмали от кариеса?",

        answer: ["фтор" , "фторид", "Фтор", "F", "f"],

        explanation:
            "Фтор — это галоген, который добавляют в зубную пасту для защиты эмали от кариеса."
    }

];


// ==========================================
// ПЕРЕМЕННЫЕ
// ==========================================

let currentQuestion = 0;

let score = 0;

let answered = false;


// ==========================================
// НАЧАТЬ ИГРУ
// ==========================================

function startGame() {

    currentQuestion = 0;

    score = 0;

    answered = false;

    document.getElementById("menu").style.display = "none";

    document.getElementById("finish").style.display = "none";

    document.getElementById("game").style.display = "block";

    document.getElementById("score").textContent = "⭐ 0";

    showQuestion();
}


// ==========================================
// ПОКАЗАТЬ ВОПРОС
// ==========================================

function showQuestion() {

    answered = false;

    const question = riddles[currentQuestion];


    // Номер вопроса

    document.getElementById("questionNumber").textContent =
        `Ребус ${currentQuestion + 1} / ${riddles.length}`;


    // Счёт

    document.getElementById("score").textContent =
        `⭐ ${score}`;


    // ======================================
    // КАРТИНКА
    // ======================================

    const imageContainer =
        document.getElementById("questionImageContainer");

    const image =
        document.getElementById("questionImage");


    if (question.image) {

        image.src = question.image;

        imageContainer.style.display = "flex";

    } else {

        image.src = "";

        imageContainer.style.display = "none";

    }


    // ======================================
    // РЕБУС
    // ======================================

    const riddleElement =
        document.getElementById("riddle");

    riddleElement.innerHTML = "";


    question.parts.forEach(part => {

        const element =
            document.createElement("span");

        element.textContent = part.text;

        element.classList.add("riddle-part");


        if (part.type === "element") {

            element.classList.add(
                "chemical-element"
            );

        }


        if (part.type === "operator") {

            element.classList.add(
                "operator"
            );

        }


        if (part.type === "picture") {

            element.classList.add(
                "picture"
            );

        }


        riddleElement.appendChild(element);

    });


    // ======================================
    // ПОДСКАЗКА
    // ======================================

    document.getElementById("hint").textContent =
        question.hint;


    // ======================================
    // ОЧИЩАЕМ ПОЛЕ ОТВЕТА
    // ======================================

    document.getElementById("answer").value = "";

    document.getElementById("answer").disabled = false;


    // ======================================
    // ОЧИЩАЕМ СТАРЫЙ РЕЗУЛЬТАТ
    // ======================================

    document.getElementById("result").innerHTML = "";


    // ======================================
    // КНОПКИ
    // ======================================

    document.getElementById("checkButton").style.display =
        "block";

    document.getElementById("nextButton").style.display =
        "none";


    // Ставим курсор в поле ответа

    document.getElementById("answer").focus();
}


// ==========================================
// ПРОВЕРИТЬ ОТВЕТ
// ==========================================

function checkAnswer() {

    if (answered) {
        return;
    }

    const input = document.getElementById("answer");

    const userAnswer =
        input.value.trim().toLowerCase();

    // Получаем все правильные варианты ответа
    const correctAnswers =
        riddles[currentQuestion].answer.map(answer =>
            answer.toLowerCase()
        );

    // Если пользователь ничего не написал
    if (userAnswer === "") {

        document.getElementById("result").innerHTML =
            "✏️ Сначала напиши ответ!";

        return;
    }

    answered = true;
    input.disabled = true;

    const result =
        document.getElementById("result");


    // ======================================
    // ПРАВИЛЬНО
    // ======================================

    if (correctAnswers.includes(userAnswer)) {

        score += 10;

        document.getElementById("score").textContent =
            `⭐ ${score}`;

        result.innerHTML = `

            <div class="correct">
                🎉 Правильно! +10 очков
            </div>

            <div class="explanation">
                💡 ${riddles[currentQuestion].explanation}
            </div>

        `;

    }


    // ======================================
    // НЕПРАВИЛЬНО
    // ======================================

    else {

        result.innerHTML = `

            <div class="wrong">
                ❌ Неправильно
            </div>

            <div class="correct-answer">
                Правильный ответ:
                <strong>
                    ${riddles[currentQuestion].answer[0]}
                </strong>
            </div>

            <div class="explanation">
                💡 ${riddles[currentQuestion].explanation}
            </div>

        `;

    }


    // Прячем кнопку проверки
    document.getElementById("checkButton").style.display =
        "none";


    // Показываем кнопку следующего вопроса
    document.getElementById("nextButton").style.display =
        "block";
}


// ==========================================
// СЛЕДУЮЩИЙ ВОПРОС
// ==========================================

function nextQuestion() {

    currentQuestion++;


    if (currentQuestion < riddles.length) {

        showQuestion();

    } else {

        finishGame();

    }
}


// ==========================================
// КОНЕЦ ИГРЫ
// ==========================================

function finishGame() {

    document.getElementById("menu").style.display =
        "none";

    document.getElementById("game").style.display =
        "none";

    document.getElementById("finish").style.display =
        "block";


    document.getElementById("finalScore").textContent =
        `Ты набрал ${score} из ${riddles.length * 10} очков!`;
}


// ==========================================
// КАК ИГРАТЬ
// ==========================================

function showRules() {

    document.getElementById("rules").style.display =
        "flex";
}


function closeRules() {

    document.getElementById("rules").style.display =
        "none";
}


// ==========================================
// ВЕРНУТЬСЯ В МЕНЮ
// ==========================================

function backToMenu() {

    document.getElementById("game").style.display =
        "none";

    document.getElementById("finish").style.display =
        "none";

    document.getElementById("menu").style.display =
        "block";
}