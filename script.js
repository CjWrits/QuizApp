const quizData = {
    physics: {
        10: [
            { q: "What is the SI unit of force?", options: ["Newton", "Joule", "Watt", "Pascal"], correct: 0 },
            { q: "The acceleration due to gravity on Earth is approximately:", options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "11 m/s²"], correct: 0 },
            { q: "Which law states that every action has an equal and opposite reaction?", options: ["First law", "Second law", "Third law", "Law of gravitation"], correct: 2 },
            { q: "What is the formula for kinetic energy?", options: ["mgh", "½mv²", "mv", "ma"], correct: 1 },
            { q: "Sound travels fastest in:", options: ["Air", "Water", "Steel", "Vacuum"], correct: 2 },
            { q: "The unit of electric current is:", options: ["Volt", "Ampere", "Ohm", "Coulomb"], correct: 1 },
            { q: "What type of lens is used to correct myopia?", options: ["Convex", "Concave", "Bifocal", "Cylindrical"], correct: 1 },
            { q: "The frequency of AC supply in India is:", options: ["50 Hz", "60 Hz", "40 Hz", "100 Hz"], correct: 0 },
            { q: "Which color has the longest wavelength?", options: ["Red", "Blue", "Green", "Violet"], correct: 0 },
            { q: "The SI unit of power is:", options: ["Joule", "Newton", "Watt", "Pascal"], correct: 2 }
        ],
        11: [
            { q: "What is the dimensional formula of force?", options: ["MLT⁻²", "MLT⁻¹", "ML²T⁻²", "MT⁻²"], correct: 0 },
            { q: "The escape velocity from Earth is approximately:", options: ["11.2 km/s", "7.9 km/s", "15 km/s", "9.8 km/s"], correct: 0 },
            { q: "In SHM, the acceleration is proportional to:", options: ["Velocity", "Displacement", "Time", "Frequency"], correct: 1 },
            { q: "The coefficient of restitution for a perfectly elastic collision is:", options: ["0", "1", "∞", "-1"], correct: 1 },
            { q: "Young's modulus is the ratio of:", options: ["Stress to strain", "Force to area", "Length to breadth", "Mass to volume"], correct: 0 },
            { q: "The first law of thermodynamics is based on:", options: ["Conservation of energy", "Conservation of momentum", "Conservation of mass", "Conservation of charge"], correct: 0 },
            { q: "In which process does a gas do maximum work?", options: ["Isothermal", "Adiabatic", "Isobaric", "Isochoric"], correct: 0 },
            { q: "The SI unit of angular momentum is:", options: ["kg⋅m²⋅s⁻¹", "kg⋅m⋅s⁻¹", "kg⋅m²⋅s⁻²", "kg⋅m⋅s⁻²"], correct: 0 },
            { q: "Doppler effect is observed in:", options: ["Light only", "Sound only", "Both light and sound", "Neither"], correct: 2 },
            { q: "The phase difference between displacement and velocity in SHM is:", options: ["0°", "90°", "180°", "270°"], correct: 1 }
        ],
        12: [
            { q: "The electric field inside a conductor is:", options: ["Maximum", "Minimum", "Zero", "Infinite"], correct: 2 },
            { q: "Lenz's law is a consequence of:", options: ["Conservation of energy", "Conservation of charge", "Ohm's law", "Kirchhoff's law"], correct: 0 },
            { q: "The de Broglie wavelength is inversely proportional to:", options: ["Mass", "Velocity", "Momentum", "Energy"], correct: 2 },
            { q: "In photoelectric effect, the stopping potential depends on:", options: ["Intensity", "Frequency", "Amplitude", "Wavelength"], correct: 1 },
            { q: "The binding energy per nucleon is maximum for:", options: ["Hydrogen", "Helium", "Iron", "Uranium"], correct: 2 },
            { q: "In a p-n junction, the depletion layer is formed due to:", options: ["Diffusion", "Drift", "Both", "Neither"], correct: 0 },
            { q: "The gain of a common emitter amplifier is:", options: ["α", "β", "γ", "δ"], correct: 1 },
            { q: "X-rays are produced when:", options: ["Electrons hit a metal target", "Protons are accelerated", "Neutrons decay", "Atoms are ionized"], correct: 0 },
            { q: "The critical angle for total internal reflection depends on:", options: ["Wavelength only", "Refractive index only", "Both wavelength and refractive index", "Neither"], correct: 1 },
            { q: "In AC circuits, the power factor is:", options: ["sin φ", "cos φ", "tan φ", "cot φ"], correct: 1 }
        ]
    },
    maths: {
        10: [
            { q: "The value of sin 90° is:", options: ["0", "1", "1/2", "√3/2"], correct: 1 },
            { q: "If the discriminant of a quadratic equation is zero, the roots are:", options: ["Real and distinct", "Real and equal", "Complex", "Irrational"], correct: 1 },
            { q: "The sum of first n natural numbers is:", options: ["n(n+1)", "n(n+1)/2", "n²", "2n+1"], correct: 1 },
            { q: "The area of a circle with radius r is:", options: ["2πr", "πr²", "πr", "4πr²"], correct: 1 },
            { q: "If log₁₀ 2 = 0.3010, then log₁₀ 20 is:", options: ["0.6020", "1.3010", "3.010", "0.3010"], correct: 1 },
            { q: "The probability of getting a head in a coin toss is:", options: ["0", "1/4", "1/2", "1"], correct: 2 },
            { q: "The median of 3, 5, 7, 9, 11 is:", options: ["5", "7", "8", "9"], correct: 1 },
            { q: "If tan θ = 1, then θ is:", options: ["30°", "45°", "60°", "90°"], correct: 1 },
            { q: "The HCF of 12 and 18 is:", options: ["2", "3", "6", "9"], correct: 2 },
            { q: "The distance between points (0,0) and (3,4) is:", options: ["5", "7", "12", "25"], correct: 0 }
        ],
        11: [
            { q: "The number of permutations of n objects taken r at a time is:", options: ["nCr", "nPr", "n!/r!", "(n-r)!"], correct: 1 },
            { q: "If ⁿC₃ = ⁿC₇, then n is:", options: ["10", "7", "3", "21"], correct: 0 },
            { q: "The derivative of sin x is:", options: ["cos x", "-cos x", "sin x", "-sin x"], correct: 0 },
            { q: "The sum of an infinite GP with first term a and common ratio r (|r|<1) is:", options: ["a/(1-r)", "a/(1+r)", "ar/(1-r)", "a(1-r)"], correct: 0 },
            { q: "The equation of a line with slope m and y-intercept c is:", options: ["y = mx + c", "x = my + c", "y = cx + m", "x + y = mc"], correct: 0 },
            { q: "If A and B are mutually exclusive events, then P(A∪B) is:", options: ["P(A) + P(B)", "P(A) × P(B)", "P(A) - P(B)", "0"], correct: 0 },
            { q: "The domain of f(x) = √(x-2) is:", options: ["x ≥ 2", "x ≤ 2", "x > 2", "All real numbers"], correct: 0 },
            { q: "The coefficient of x² in (1+x)⁵ is:", options: ["5", "10", "15", "20"], correct: 1 },
            { q: "If sin A = 3/5, then cos A is:", options: ["4/5", "3/4", "5/4", "5/3"], correct: 0 },
            { q: "The eccentricity of a circle is:", options: ["0", "1", "∞", "1/2"], correct: 0 }
        ],
        12: [
            { q: "The integral of 1/x dx is:", options: ["x²/2", "ln|x|", "1/x²", "e^x"], correct: 1 },
            { q: "If f(x) = x³, then f'(x) is:", options: ["3x²", "x²", "3x", "x³/3"], correct: 0 },
            { q: "The area under the curve y = x² from x = 0 to x = 2 is:", options: ["4/3", "8/3", "4", "8"], correct: 1 },
            { q: "The order of the differential equation d²y/dx² + dy/dx + y = 0 is:", options: ["1", "2", "3", "0"], correct: 1 },
            { q: "If |A| = 3×3 matrix and |A| = 2, then |2A| is:", options: ["2", "4", "8", "16"], correct: 3 },
            { q: "The rank of a 3×3 identity matrix is:", options: ["0", "1", "2", "3"], correct: 3 },
            { q: "If vectors a and b are perpendicular, then a·b is:", options: ["1", "0", "|a||b|", "-1"], correct: 1 },
            { q: "The equation of a plane passing through (1,2,3) with normal vector (1,1,1) is:", options: ["x+y+z=6", "x+y+z=3", "x+y+z=1", "x+y+z=0"], correct: 0 },
            { q: "The maximum value of sin x + cos x is:", options: ["1", "√2", "2", "1/√2"], correct: 1 },
            { q: "If P(A) = 0.3 and P(B) = 0.4, and A and B are independent, then P(A∩B) is:", options: ["0.7", "0.12", "0.1", "0"], correct: 1 }
        ]
    }
};

let currentQuiz = null;
let currentQuestion = 0;
let score = 0;
let timer = null;
let timeLeft = 30;

const screens = {
    home: document.getElementById('home-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen')
};

const elements = {
    subjectCards: document.querySelectorAll('.subject-card'),
    gradeSelect: document.getElementById('grade-select'),
    questionCounter: document.getElementById('question-counter'),
    subjectTitle: document.getElementById('subject-title'),
    timerDisplay: document.getElementById('timer'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    nextBtn: document.getElementById('next-btn'),
    scoreDisplay: document.getElementById('score'),
    correctAnswers: document.getElementById('correct-answers'),
    totalQuestions: document.getElementById('total-questions'),
    restartBtn: document.getElementById('restart-btn')
};

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function startQuiz(subject, grade) {
    currentQuiz = quizData[subject][grade];
    currentQuestion = 0;
    score = 0;
    
    elements.subjectTitle.textContent = subject.charAt(0).toUpperCase() + subject.slice(1);
    showScreen('quiz');
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= currentQuiz.length) {
        showResults();
        return;
    }

    const question = currentQuiz[currentQuestion];
    elements.questionCounter.textContent = `${currentQuestion + 1}/${currentQuiz.length}`;
    elements.questionText.textContent = question.q;
    
    elements.optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index);
        elements.optionsContainer.appendChild(optionDiv);
    });

    elements.nextBtn.disabled = true;
    startTimer();
}

function selectOption(selectedIndex) {
    const options = document.querySelectorAll('.option');
    const question = currentQuiz[currentQuestion];
    
    clearInterval(timer);
    
    options.forEach((option, index) => {
        option.onclick = null;
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex) {
            option.classList.add('incorrect');
        }
    });

    if (selectedIndex === question.correct) {
        score++;
    }

    elements.nextBtn.disabled = false;
}

function startTimer() {
    timeLeft = 30;
    elements.timerDisplay.textContent = `${timeLeft}s`;
    
    timer = setInterval(() => {
        timeLeft--;
        elements.timerDisplay.textContent = `${timeLeft}s`;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            selectOption(-1); // Auto-select wrong answer
        }
    }, 1000);
}

function showResults() {
    const percentage = Math.round((score / currentQuiz.length) * 100);
    elements.scoreDisplay.textContent = `${percentage}%`;
    elements.correctAnswers.textContent = score;
    elements.totalQuestions.textContent = currentQuiz.length;
    showScreen('result');
}

// Event Listeners
elements.subjectCards.forEach(card => {
    card.addEventListener('click', () => {
        const subject = card.dataset.subject;
        const grade = elements.gradeSelect.value;
        startQuiz(subject, grade);
    });
});

elements.nextBtn.addEventListener('click', () => {
    currentQuestion++;
    loadQuestion();
});

elements.restartBtn.addEventListener('click', () => {
    showScreen('home');
});

// Initialize
showScreen('home');