const questions = [
    // Informática (13 perguntas)
    { question: "Qual é a função principal da CPU?", options: ["Armazenar dados", "Processar instruções", "Exibir gráficos", "Conectar à internet"], correct: 1 },
    { question: "O que significa HTML?", options: ["Hyper Text Markup Language", "High Tech Machine Language", "Hyper Transfer Markup Language", "Home Tool Management Language"], correct: 0 },
    { question: "Qual protocolo transfere páginas web?", options: ["FTP", "HTTP", "SMTP", "TCP"], correct: 1 },
    { question: "O que é um sistema operacional?", options: ["Hardware", "Editor de texto", "Gerencia recursos do computador", "Protocolo de rede"], correct: 2 },
    { question: "Qual é a função da RAM?", options: ["Armazenamento permanente", "Memória temporária", "Processamento gráfico", "Conexão de rede"], correct: 1 },
    { question: "O que é um firewall?", options: ["Antivírus", "Barreira de segurança de rede", "Software de edição", "Hardware de armazenamento"], correct: 1 },
    { question: "Qual linguagem é usada para estilizar páginas web?", options: ["HTML", "CSS", "JavaScript", "Python"], correct: 1 },
    { question: "O que é um byte?", options: ["8 bits", "4 bits", "16 bits", "32 bits"], correct: 0 },
    { question: "Qual é o principal componente de entrada de um computador?", options: ["Monitor", "Teclado", "Impressora", "Caixa de som"], correct: 1 },
    { question: "O que significa URL?", options: ["Universal Resource Locator", "Uniform Resource Language", "Unique Resource Link", "Universal Reference Library"], correct: 0 },
    { question: "Qual é a função do DNS?", options: ["Armazenar dados", "Traduzir nomes de domínio em IPs", "Proteger contra vírus", "Aumentar a velocidade da internet"], correct: 1 },
    { question: "O que é um algoritmo?", options: ["Linguagem de programação", "Conjunto de instruções", "Hardware", "Sistema operacional"], correct: 1 },
    { question: "Qual dispositivo armazena dados permanentemente?", options: ["RAM", "CPU", "HD/SSD", "GPU"], correct: 2 },
    // Matemática (13 perguntas)
    { question: "Qual é o resultado de 2³ + 5?", options: ["10", "13", "15", "8"], correct: 1 },
    { question: "Qual é a soma de 5 números com média 10?", options: ["40", "50", "60", "45"], correct: 1 },
    { question: "Qual é o valor de x em 2x + 3 = 11?", options: ["2", "3", "4", "5"], correct: 2 },
    { question: "Qual é a área de um quadrado com lado 4?", options: ["12", "16", "20", "8"], correct: 1 },
    { question: "Qual é 20% de 50?", options: ["5", "10", "15", "20"], correct: 1 },
    { question: "Qual é o resultado de 15 ÷ 3 × 2?", options: ["10", "5", "30", "15"], correct: 0 },
    { question: "Qual é a raiz quadrada de 16?", options: ["2", "4", "8", "16"], correct: 1 },
    { question: "Qual é o valor de 3! (fatorial)?", options: ["3", "6", "9", "12"], correct: 1 },
    { question: "Qual é a soma dos ângulos internos de um triângulo?", options: ["90°", "180°", "270°", "360°"], correct: 1 },
    { question: "Qual é o resultado de (2 + 3)²?", options: ["10", "25", "15", "20"], correct: 1 },
    { question: "Qual é o MDC de 12 e 18?", options: ["3", "6", "9", "12"], correct: 1 },
    { question: "Qual é o resultado de 7 mod 3?", options: ["1", "2", "3", "4"], correct: 1 },
    { question: "Qual é a hipotenusa de um triângulo retângulo com catetos 3 e 4?", options: ["5", "6", "7", "8"], correct: 0 },
    // Lógica de Programação (14 perguntas)
    { question: "Qual estrutura repete enquanto uma condição é verdadeira?", options: ["if", "switch", "while", "function"], correct: 2 },
    { question: "O que faz o operador '&&'?", options: ["OU lógico", "E lógico", "NÃO lógico", "XOR lógico"], correct: 1 },
    { question: "Qual é a saída de `if (5 > 3 && 2 < 4)`?", options: ["true", "false", "null", "undefined"], correct: 0 },
    { question: "O que é uma variável?", options: ["Comando fixo", "Armazena valores", "Função", "Loop"], correct: 1 },
    { question: "Qual operador verifica igualdade estrita?", options: ["==", "===", "!=", "!=="], correct: 1 },
    { question: "O que faz um 'for' loop?", options: ["Executa uma vez", "Repete um número fixo de vezes", "Testa condições", "Define funções"], correct: 1 },
    { question: "Qual é a saída de `!true`?", options: ["true", "false", "null", "undefined"], correct: 1 },
    { question: "O que é um array?", options: ["Função", "Lista ordenada", "Condicional", "Operador"], correct: 1 },
    { question: "Qual comando interrompe um loop?", options: ["continue", "break", "return", "exit"], correct: 1 },
    { question: "O que faz `else` em um `if`?", options: ["Repete o bloco", "Executa se a condição for falsa", "Define uma função", "Ignora a condição"], correct: 1 },
    { question: "Qual é a saída de `5 % 2`?", options: ["1", "2", "3", "0"], correct: 0 },
    { question: "O que é uma função recursiva?", options: ["Chama a si mesma", "Executa em loop", "Retorna nulo", "Define variáveis"], correct: 0 },
    { question: "Qual estrutura escolhe entre várias opções?", options: ["if", "while", "switch", "for"], correct: 2 },
    { question: "O que faz `++` em uma variável?", options: ["Decrementa", "Incrementa", "Compara", "Atribui"], correct: 1 }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timerId = null;

document.addEventListener('DOMContentLoaded', () => {
    loadHighScore();
    loadQuestion();
});

function loadQuestion() {
    const questionEl = document.getElementById('question-text');
    const optionA = document.getElementById('option-a');
    const optionB = document.getElementById('option-b');
    const optionC = document.getElementById('option-c');
    const optionD = document.getElementById('option-d');
    const nextButton = document.getElementById('next-button');

    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        questionEl.textContent = q.question;
        optionA.textContent = `A: ${q.options[0]}`;
        optionB.textContent = `B: ${q.options[1]}`;
        optionC.textContent = `C: ${q.options[2]}`;
        optionD.textContent = `D: ${q.options[3]}`;

        // Resetar classes e habilitar botões
        [optionA, optionB, optionC, optionD].forEach(btn => {
            btn.classList.remove('correct', 'wrong');
            btn.disabled = false;
        });

        nextButton.disabled = true;
        timeLeft = 30;
        updateTimer();
        startTimer();
    } else {
        showResult();
    }
}

function startTimer() {
    if (timerId !== null) clearInterval(timerId);
    timeLeft = 30;
    updateTimer();
    timerId = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timerId);
            timerId = null;
            navigator.vibrate(200); // Vibração quando o tempo acaba
            checkAnswer(-1); // Tempo esgotado
        }
    }, 1000);
}

function updateTimer() {
    const timerEl = document.getElementById('timer');
    timerEl.textContent = `${Math.max(0, timeLeft)}s`; // Evita números negativos
    if (timeLeft <= 5) {
        timerEl.classList.add('warning');
    } else {
        timerEl.classList.remove('warning');
    }
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestion].correct;
    const optionButtons = [
        document.getElementById('option-a'),
        document.getElementById('option-b'),
        document.getElementById('option-c'),
        document.getElementById('option-d')
    ];

    // Desabilitar botões após resposta
    optionButtons.forEach(btn => btn.disabled = true);

    // Aplicar feedback visual
    optionButtons[correctIndex].classList.add('correct');
    if (selectedIndex !== -1 && selectedIndex !== correctIndex) {
        optionButtons[selectedIndex].classList.add('wrong');
        navigator.vibrate(200); // Vibração na resposta errada
    }

    // Atualizar pontuação e avançar
    if (selectedIndex === correctIndex) {
        score += 0.5;
        clearInterval(timerId);
        timerId = null;
        setTimeout(nextQuestion, 1000); // Avança automaticamente após 1 segundo
    } else {
        clearInterval(timerId);
        timerId = null;
        document.getElementById('next-button').disabled = false;
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.remove('hidden');
    document.getElementById('score-text').textContent = `Sua pontuação: ${score} de 20`;

    // Salvar maior pontuação
    const highScore = parseFloat(localStorage.getItem('highScore') || 0);
    if (score > highScore) {
        localStorage.setItem('highScore', score);
        resultContainer.innerHTML += `<p>Nova maior pontuação: ${score}!</p>`;
    } else {
        resultContainer.innerHTML += `<p>Maior pontuação anterior: ${highScore}</p>`;
    }
}

function loadHighScore() {
    const highScore = localStorage.getItem('highScore');
    if (highScore) {
        document.getElementById('result-container').innerHTML += `<p>Maior pontuação: ${highScore}</p>`;
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('result-container').classList.add('hidden');
    loadQuestion();
}

// Adicionar eventos
document.getElementById('option-a').addEventListener('click', () => checkAnswer(0));
document.getElementById('option-b').addEventListener('click', () => checkAnswer(1));
document.getElementById('option-c').addEventListener('click', () => checkAnswer(2));
document.getElementById('option-d').addEventListener('click', () => checkAnswer(3));