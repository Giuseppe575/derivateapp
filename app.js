// ============================
// Dati esercizi e contenuti
// ============================

const exercises = {
    derivate: {
        label: "Derivate",
        simple: [
            {
                id: 1,
                question: "Deriva: \\( f(x) = 7x^4 - 2x + 1 \\)",
                answer: ["28x^3-2", "28x^{3}-2"],
                solution: "Si applicano la linearità e la regola della potenza: \\( f'(x) = 28x^3 - 2 \\)",
                hint: "La derivata di una costante è zero e la potenza scende di uno.",
                tag: "potenza"
            },
            {
                id: 2,
                question: "Deriva: \\( g(x) = 5e^x + \\ln(x) \\)",
                answer: ["5e^x+1/x", "5e^x+\\frac{1}{x}"],
                solution: "\\( g'(x) = 5e^x + \\frac{1}{x} \\)",
                hint: "Somma delle derivate: esponenziale e logaritmo.",
                tag: "base"
            },
            {
                id: 3,
                question: "Deriva: \\( h(x) = \\frac{1}{2}\\cos(x) - 3 \\sin(x) \\)",
                answer: ["-1/2sin(x)-3cos(x)", "-\\frac{1}{2}\\sin(x)-3\\cos(x)"],
                solution: "\\( h'(x) = -\\tfrac{1}{2}\\sin(x) - 3\\cos(x) \\)",
                hint: "Attento al segno negativo della derivata del coseno.",
                tag: "trigonometria"
            }
        ],
        medium: [
            {
                id: 101,
                question: "Deriva (Prodotto): \\( f(x) = x^3 \\cdot e^x \\)",
                answer: ["3x^2e^x+x^3e^x", "x^2e^x(3+x)"],
                solution: "Regola del prodotto: \\( f'(x) = 3x^2e^x + x^3e^x \\)",
                hint: "Identifica $u=x^3$ e $v=e^x$.",
                tag: "prodotto"
            },
            {
                id: 102,
                question: "Deriva (Quoziente): \\( g(x) = \\frac{\\ln(x)}{x} \\)",
                answer: ["(1-ln(x))/x^2", "\\frac{1-\\ln(x)}{x^2}"],
                solution: "\\( g'(x) = \\frac{1-\\ln(x)}{x^2} \\)",
                hint: "Usa la regola del quoziente oppure riscrivi $x^{-1}$.",
                tag: "quoziente"
            },
            {
                id: 103,
                question: "Deriva: \\( h(x) = (2x-5)^{10} \\)",
                answer: ["20(2x-5)^9", "20(2x-5)^{9}"],
                solution: "\\( h'(x) = 20(2x-5)^9 \\)",
                hint: "La derivata dell'interno $2x-5$ è 2.",
                tag: "catena"
            }
        ],
        complex: [
            {
                id: 201,
                question: "Deriva: \\( f(x) = \\sqrt{x^2 + 4x} \\)",
                answer: ["(x+2)/\\sqrt{x^2+4x}", "\\frac{x+2}{\\sqrt{x^2+4x}}"],
                solution: "Catena e radice: \\( f'(x) = \\frac{x+2}{\\sqrt{x^2+4x}} \\)",
                hint: "Scrivi $\\sqrt{u}$ come $u^{1/2}$.",
                tag: "catena"
            },
            {
                id: 202,
                question: "Deriva: \\( g(x) = e^{-x} \\cdot \\ln(x^2 + 1) \\)",
                answer: ["e^{-x}(2x/(x^2+1)-ln(x^2+1))", "e^{-x}((2x)/(x^2+1)-\\ln(x^2+1))"],
                solution: "\\( g'(x) = e^{-x} \\left[\\frac{2x}{x^2 + 1} - \\ln(x^2 + 1)\\right] \\)",
                hint: "Prodotto + catena.",
                tag: "prodotto"
            }
        ]
    },
    limiti: {
        label: "Limiti",
        simple: [
            {
                id: 1,
                question: "Calcola: \\( \\lim_{x \\o 0} \\frac{\\sin x}{x} \\)",
                answer: ["1"],
                solution: "Limite notevole: vale 1.",
                hint: "Ricorda il limite notevole del seno.",
                tag: "notevoli"
            },
            {
                id: 2,
                question: "Calcola: \\( \\lim_{x \\to +\\infty} \\frac{2x+1}{x} \\)",
                answer: ["2"],
                solution: "Dividi numeratore e denominatore per $x$.",
                hint: "Considera i termini di grado maggiore.",
                tag: "razionali"
            }
        ],
        medium: [
            {
                id: 101,
                question: "Calcola: \\( \\lim_{x \\to 1} \\frac{x^2-1}{x-1} \\)",
                answer: ["2"],
                solution: "Scomposizione: $x^2-1 = (x-1)(x+1)$, quindi il limite vale 2.",
                hint: "Scomponi in fattori e semplifica.",
                tag: "algebra"
            },
            {
                id: 102,
                question: "Calcola: \\( \\lim_{x \\to 0} \\frac{e^x - 1}{x} \\)",
                answer: ["1"],
                solution: "Limite notevole dell'esponenziale.",
                hint: "Espansione di Taylor del numeratore.",
                tag: "notevoli"
            }
        ],
        complex: [
            {
                id: 201,
                question: "Calcola: \\( \\lim_{x \\to 0} \\frac{\\ln(1+x) - \\sin x}{x^2} \\)",
                answer: ["-1/2", "-0.5", "-\\frac{1}{2}"],
                solution: "Sviluppi di Taylor: $\\ln(1+x) = x - x^2/2 + ...$, $\\sin x = x - x^3/6 + ...$, quindi risulta $-1/2$.",
                hint: "Usa gli sviluppi di Taylor fino al secondo ordine.",
                tag: "taylor"
            }
        ]
    },
    funzioni: {
        label: "Funzioni",
        simple: [
            {
                id: 1,
                question: "Determina il dominio di \\( f(x) = \\frac{1}{x-2} \\)",
                answer: ["x!=2", "x\\neq2", "\\mathbb{R}\\setminus\\{2\\}", "tutti tranne 2"],
                solution: "Il denominatore si annulla per $x=2$, quindi il dominio è $\\mathbb{R} \\setminus \\{2\\}$.",
                hint: "Escludi i valori che annullano il denominatore.",
                tag: "dominio"
            },
            {
                id: 2,
                question: "Indica dove \\( f(x) = x(x-3) \\) è positiva (usa U per unione).",
                answer: ["(-inf,0)u(3,inf)", "(-\\infty,0)u(3,\\infty)", "(-inf,0)\\cup(3,inf)", "(-\\infty,0)\\cup(3,\\infty)", "(-oo,0)u(3,oo)", "x<0 o x>3"],
                solution: "Gli zeri sono $0$ e $3$. La funzione è positiva per $x < 0$ e $x > 3$.",
                hint: "Analizza il segno dei fattori rispetto agli zeri 0 e 3.",
                tag: "segno"
            }
        ],
        medium: [
            {
                id: 101,
                question: "Indica dove \\( f(x) = x^3 - 3x \\) è crescente (usa U per unione).",
                answer: ["crescente su (-inf,-1)u(1,inf)", "(-inf,-1)u(1,inf)", "crescente:\\ (-inf,-1)u(1,inf)", "x<-1 o x>1"],
                solution: "Calcola la derivata $f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$: è positiva per $x<-1$ e $x>1$ (crescente) e negativa su (-1,1) (decrescente).",
                hint: "Studia il segno della derivata prima.",
                tag: "monotonia"
            },
            {
                id: 102,
                question: "Elenca gli asintoti di \\( f(x) = \\frac{x^2+1}{x-1} \\) separandoli con ';'.",
                answer: ["verticale x=1; obliquo y=x+1", "x=1; y=x+1"],
                solution: "Asintoto verticale in $x=1$; divisione: $f(x) = x+1 + \\frac{2}{x-1}$ produce l'obliquo $y = x + 1$.",
                hint: "Esegui la divisione polinomiale.",
                tag: "asintoti"
            }
        ],
        complex: [
            {
                id: 201,
                question: "Descrivi concavità e convessità di \\( f(x) = x^4 - 4x^2 \\) (usa ';' per separare).",
                answer: ["convessa su (-inf,-sqrt(2))u(0,sqrt(2))u(sqrt(2),inf); concava su (-sqrt(2),0)u(0,sqrt(2))", "convessa: (-inf,-sqrt(2))u(0,sqrt(2))u(sqrt(2),inf); concava: (-sqrt(2),0)u(0,sqrt(2))"],
                solution: "$f''(x) = 12x^2 - 8 = 4(3x^2-2)$. Gli zeri sono $x = \\pm\\sqrt{2/3}$: la funzione è convessa dove $f''>0$ e concava dove $f''<0$.",
                hint: "Studia il segno della derivata seconda.",
                tag: "concavita"
            }
        ]
    }
};

const theoryContent = {
    derivate: {
        intro: "Le derivate misurano la pendenza istantanea di una funzione.",
        rules: [
            "\\( \\frac{d}{dx} x^n = n x^{n-1} \\)",
            "\\( (f+g)' = f' + g' \\)",
            "\\( (fg)' = f'g + fg' \\)",
            "\\( (f \\circ g)' = (f' \\circ g) \\cdot g' \\)"
        ],
        example: "Esempio: per \\( f(x) = (3x^2+1)\\sin x \\) applica la regola del prodotto e la catena."
    },
    limiti: {
        intro: "I limiti descrivono il comportamento di una funzione quando la variabile si avvicina a un punto.",
        rules: [
            "\\( \\lim_{x\\to 0} \\frac{\\sin x}{x} = 1 \\)",
            "\\( \\lim_{x\\to 0} \\frac{e^x - 1}{x} = 1 \\)",
            "Se il numeratore ha grado minore del denominatore il limite all'infinito è 0"
        ],
        example: "Esempio: per \\( \\lim_{x\\to 0} \\frac{\\ln(1+x)}{x} \\) usa lo sviluppo di Taylor." 
    },
    funzioni: {
        intro: "Lo studio di funzione combina derivate, limiti e analisi del grafico.",
        rules: [
            "Il dominio determina dove la funzione è definita.",
            "Gli zeri della derivata prima separano intervalli di crescita e decrescita.",
            "L'analisi della derivata seconda distingue concavità e convessità."
        ],
        example: "Esempio: per \\( f(x) = \\frac{x^2+1}{x-1} \\) calcola dominio, limiti agli estremi e derivata per tracciare il grafico." 
    }
};

const defaultSuggestions = [
    "Rileggi le regole fondamentali prima di affrontare gli esercizi complessi.",
    "Utilizza carta e penna per annotare i passaggi intermedi.",
    "Controlla sempre le ipotesi di dominio prima di applicare formule."
];

// ============================
// Stato dell'applicazione
// ============================

let currentTopic = "derivate";
let exerciseCounterToday = 0;
let mistakeTracker = {};

const difficulties = ["simple", "medium", "complex"];

function createEmptyProgress() {
    const structure = {};
    Object.keys(exercises).forEach(topic => {
        structure[topic] = {};
        difficulties.forEach(diff => {
            structure[topic][diff] = { attempts: 0, correct: 0 };
        });
    });
    return structure;
}

const progress = JSON.parse(localStorage.getItem("derivapp-progress") || JSON.stringify(createEmptyProgress()));
const settings = JSON.parse(localStorage.getItem("derivapp-settings") || JSON.stringify({
    theme: "light",
    font: "font-medium",
    notifications: false,
    difficultyVisibility: "all"
}));

// ============================
// Navigazione tra sezioni
// ============================

function showSection(sectionId) {
    document.querySelectorAll('.app-section').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });

    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        section.classList.add('active');
    }

    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.target === sectionId);
    });

    if (window.renderMathInElement) {
        renderMathInElement(document.body);
    }
}

// ============================
// Rendering esercizi
// ============================

function renderExercisesForTopic(topicKey) {
    const topic = exercises[topicKey];
    if (!topic) return;

    difficulties.forEach(diff => {
        const container = document.getElementById(`${diff}-exercises`);
        container.innerHTML = '';

        const list = topic[diff] || [];
        if (list.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'difficulty-description';
            empty.textContent = 'Nuovi esercizi in arrivo!';
            container.appendChild(empty);
            return;
        }

        list.forEach(ex => {
            const uniqueId = `${topicKey}-${diff}-${ex.id}`;
            const card = document.createElement('article');
            card.className = 'exercise-card';
            card.innerHTML = `
                <h3>${topic.label} • Esercizio ${ex.id}</h3>
                <p class="question-text">${ex.question}</p>
                <div class="answer-area">
                    <label for="answer-${uniqueId}">La tua risposta</label>
                    <input id="answer-${uniqueId}" type="text" placeholder="Inserisci la soluzione..." data-topic="${topicKey}" data-difficulty="${diff}" data-exercise="${ex.id}">
                    <button type="button" class="primary-button" onclick="checkAnswer('${topicKey}','${diff}',${ex.id})">Verifica</button>
                    <div id="feedback-${uniqueId}" class="result-box hidden"></div>
                </div>
                <div class="buttons-container">
                    <button type="button" onclick="toggleSolution('${topicKey}','${diff}',${ex.id},'hint')">Suggerimento</button>
                    <button type="button" onclick="toggleSolution('${topicKey}','${diff}',${ex.id},'solution')">Mostra soluzione</button>
                </div>
                <div id="solution-${uniqueId}" class="solution-box hidden" data-content-type=""></div>
            `;
            container.appendChild(card);
        });
    });

    applyDifficultyFilter(settings.difficultyVisibility);

    if (window.renderMathInElement) {
        renderMathInElement(document.body);
    }
}

function toggleSolution(topicKey, difficulty, id, type) {
    const uniqueId = `${topicKey}-${difficulty}-${id}`;
    const box = document.getElementById(`solution-${uniqueId}`);
    const ex = exercises[topicKey][difficulty].find(e => e.id === id);
    if (!box || !ex) return;

    const content = type === 'solution' ? ex.solution : ex.hint;
    const prefix = type === 'solution' ? 'Soluzione:' : 'Suggerimento:';

    if (box.classList.contains('hidden') || box.dataset.contentType !== type) {
        box.innerHTML = `<strong>${prefix}</strong> ${content}`;
        box.classList.remove('hidden');
        box.dataset.contentType = type;
    } else {
        box.classList.add('hidden');
        box.dataset.contentType = '';
    }

    if (!box.classList.contains('hidden') && window.renderMathInElement) {
        renderMathInElement(box);
    }
}

function normalizeAnswer(answer) {
    return answer
        .toString()
        .trim()
        .replace(/\\s+/g, '')
        .replace(/−/g, '-')
        .replace(/∞/g, 'inf')
        .replace(/oo/g, 'inf')
        .replace(/\\infty/g, 'inf')
        .replace(/\\mathbb{r}/gi, 'r')
        .replace(/mathbb{r}/gi, 'r')
        .replace(/[{}]/g, '')
        .replace(/·/g, '*')
        .replace(/,/g, '.')
        .toLowerCase();
}

function checkAnswer(topicKey, difficulty, id) {
    const input = document.getElementById(`answer-${topicKey}-${difficulty}-${id}`);
    const feedbackBox = document.getElementById(`feedback-${topicKey}-${difficulty}-${id}`);
    if (!input || !feedbackBox) return;

    const userValue = normalizeAnswer(input.value);
    const ex = exercises[topicKey][difficulty].find(e => e.id === id);
    if (!ex) return;

    progress[topicKey][difficulty].attempts += 1;

    if (!userValue) {
        showFeedback(feedbackBox, 'Inserisci una risposta per poterla correggere.', 'info');
        saveProgress();
        return;
    }

    const expected = Array.isArray(ex.answer) ? ex.answer : [ex.answer];
    const isCorrect = expected.some(ans => normalizeAnswer(ans) === userValue);

    if (isCorrect) {
        progress[topicKey][difficulty].correct += 1;
        exerciseCounterToday += 1;
        showFeedback(feedbackBox, 'Ottimo! La risposta è corretta 🎉', 'success');
        mistakeTracker[ex.tag] = Math.max((mistakeTracker[ex.tag] || 1) - 1, 0);
    } else {
        showFeedback(feedbackBox, 'Quasi! Controlla i passaggi intermedi o il segno.', 'error');
        mistakeTracker[ex.tag] = (mistakeTracker[ex.tag] || 0) + 1;
    }

    updateSuggestionsPanel();
    updateProgressUI();
    updateExerciseCounter();
    saveProgress();
}

function showFeedback(element, message, type) {
    element.textContent = message;
    element.classList.remove('hidden', 'success', 'error', 'info');
    element.classList.add(type);
}

function updateExerciseCounter() {
    const counter = document.getElementById('exercise-counter');
    if (counter) {
        counter.textContent = exerciseCounterToday;
    }
}

// ============================
// Suggerimenti e feedback
// ============================

function updateSuggestionsPanel() {
    const list = document.getElementById('suggestions-list');
    if (!list) return;

    list.innerHTML = '';

    const suggestions = [...defaultSuggestions];

    Object.entries(mistakeTracker)
        .filter(([, count]) => count > 0)
        .sort((a, b) => b[1] - a[1])
        .forEach(([tag]) => {
            const message = suggestionByTag(tag);
            if (message) {
                suggestions.unshift(message);
            }
        });

    suggestions.slice(0, 6).forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        list.appendChild(li);
    });
}

function suggestionByTag(tag) {
    const tips = {
        potenza: 'Ripassa la regola della potenza: porta in basso l\'esponente e riducilo di 1.',
        base: 'Assicurati di ricordare le derivate fondamentali: esponenziale, logaritmo, seno e coseno.',
        trigonometria: 'Attenzione ai segni nelle derivate di seno e coseno: controlla sempre il risultato finale.',
        prodotto: 'Separa bene $u$ e $v$ nella regola del prodotto e calcola le derivate singolarmente.',
        quoziente: 'Per i quozienti conviene scrivere la formula $\\frac{u\'v - uv\'}{v^2}$ in modo ordinato.',
        catena: 'Procedi dall\'esterno verso l\'interno applicando la regola della catena passo-passo.',
        notevoli: 'Memorizza i limiti notevoli per riconoscerli rapidamente durante gli esercizi.',
        razionali: 'Confronta i gradi di numeratore e denominatore prima di prendere il limite all\'infinito.',
        algebra: 'Scomponi in fattori e semplifica per eliminare le forme indeterminate.',
        taylor: 'Gli sviluppi di Taylor aiutano a isolare il primo termine non nullo.',
        dominio: 'Escludi i valori che rendono nullo il denominatore o l\'argomento di radici pari/logaritmi.',
        segno: 'Individua gli zeri e costruisci una tabella dei segni per capire dove la funzione è positiva.',
        monotonia: 'Usa il segno della derivata prima per stabilire crescita e decrescita.',
        asintoti: 'Ricorri alla divisione polinomiale per trovare eventuali asintoti obliqui.',
        concavita: 'Calcola la derivata seconda e analizza il suo segno per concavità e convessità.'
    };
    return tips[tag];
}

function handleFeedbackSubmit(event) {
    event.preventDefault();
    const textarea = document.getElementById('user-feedback');
    const message = document.getElementById('feedback-message');
    if (!textarea || !message) return;

    if (!textarea.value.trim()) {
        message.textContent = 'Inserisci un messaggio prima di inviare.';
        message.classList.remove('hidden');
        message.classList.remove('success');
        message.classList.add('error');
        return;
    }

    message.textContent = 'Grazie per il tuo feedback! Lo useremo per migliorare gli esercizi.';
    message.classList.remove('hidden', 'error');
    message.classList.add('success');
    textarea.value = '';
}

// ============================
// Progressi e badge
// ============================

function updateProgressUI() {
    const container = document.getElementById('progress-stats');
    if (!container) return;

    container.innerHTML = '';

    Object.entries(progress).forEach(([topicKey, data]) => {
        let attempts = 0;
        let correct = 0;

        difficulties.forEach(diff => {
            attempts += data[diff].attempts;
            correct += data[diff].correct;
        });

        const accuracy = attempts ? Math.round((correct / attempts) * 100) : 0;

        const card = document.createElement('div');
        card.className = 'progress-card';
        card.innerHTML = `
            <h3>${exercises[topicKey].label}</h3>
            <div class="progress-ratio">${accuracy}%</div>
            <p>Corrette: ${correct} / Tentativi: ${attempts}</p>
            <ul>
                ${difficulties.map(diff => `<li>${labelForDifficulty(diff)}: ${data[diff].correct}/${data[diff].attempts}</li>`).join('')}
            </ul>
        `;

        if (accuracy >= 80 && attempts >= 3) {
            const badge = document.createElement('div');
            badge.className = 'badge';
            badge.innerHTML = '🏅 Badge: Maestro di ' + exercises[topicKey].label;
            card.appendChild(badge);
        } else if (attempts >= 5 && accuracy < 50) {
            const badge = document.createElement('div');
            badge.className = 'badge';
            badge.innerHTML = '🔄 Consiglio: rivedi la teoria prima di riprovare.';
            card.appendChild(badge);
        }

        container.appendChild(card);
    });
}

function labelForDifficulty(diff) {
    switch (diff) {
        case 'simple': return 'Semplici';
        case 'medium': return 'Medi';
        case 'complex': return 'Complessi';
        default: return diff;
    }
}

function resetProgress() {
    Object.assign(progress, createEmptyProgress());
    exerciseCounterToday = 0;
    mistakeTracker = {};
    updateExerciseCounter();
    updateProgressUI();
    updateSuggestionsPanel();
    saveProgress();
}

function saveProgress() {
    localStorage.setItem('derivapp-progress', JSON.stringify(progress));
}

// ============================
// Teoria
// ============================

function renderTheory(topicKey) {
    const content = theoryContent[topicKey];
    const container = document.getElementById('theory-content');
    if (!content || !container) return;

    container.innerHTML = `
        <article class="theory-card">
            <h3>${exercises[topicKey].label}</h3>
            <p>${content.intro}</p>
            <h4>Regole essenziali</h4>
            <ul>${content.rules.map(rule => `<li>${rule}</li>`).join('')}</ul>
            <h4>Esempio guidato</h4>
            <p>${content.example}</p>
        </article>
    `;

    if (window.renderMathInElement) {
        renderMathInElement(container);
    }
}

// ============================
// Chatbot simulato
// ============================

function handleChatSubmit(event) {
    event.preventDefault();
    const input = document.getElementById('chat-question');
    const responses = document.getElementById('chat-responses');
    if (!input || !responses) return;

    const question = input.value.trim();
    if (!question) return;

    const reply = buildChatbotReply(question);

    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.innerHTML = `
        <h4>Assistente GPT</h4>
        <p>${reply}</p>
    `;

    responses.prepend(bubble);
    input.value = '';
}

function buildChatbotReply(question) {
    const lower = question.toLowerCase();
    const focus = Object.entries(mistakeTracker)
        .filter(([, count]) => count > 0)
        .sort((a, b) => b[1] - a[1])
        .map(([tag]) => tag);

    const hints = focus.map(tag => suggestionByTag(tag)).filter(Boolean);
    const baseAdvice = hints.length ? hints.slice(0, 2).join(' ') : 'Posso guidarti passo-passo: indica quale passaggio ti crea più difficoltà.';

    if (lower.includes('catena')) {
        return 'Per la regola della catena, deriva prima la funzione esterna e poi moltiplica per la derivata della parte interna. ' + baseAdvice;
    }
    if (lower.includes('limite')) {
        return 'Quando affronti i limiti controlla se puoi riconoscere forme notevoli o applicare sviluppi di Taylor. ' + baseAdvice;
    }
    if (lower.includes('funzione')) {
        return 'Per lo studio di funzione parti sempre dal dominio e poi analizza derivata prima e seconda. ' + baseAdvice;
    }
    return 'Analizziamo insieme: prova a riscrivere il problema passo per passo. ' + baseAdvice;
}

// ============================
// Impostazioni e preferenze
// ============================

function applyTheme(theme) {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    document.body.classList.toggle('theme-light', theme === 'light');
    const label = document.getElementById('theme-label');
    if (label) {
        label.textContent = theme === 'dark' ? 'Tema scuro' : 'Tema chiaro';
    }
}

function applyFontSize(fontClass) {
    document.body.classList.remove('font-small', 'font-medium', 'font-large');
    document.body.classList.add(fontClass);
}

function applyNotifications(enabled) {
    const label = document.getElementById('notifications-label');
    if (label) {
        label.textContent = enabled ? 'Notifiche attivate' : 'Notifiche disattivate';
    }
}

function applyDifficultyFilter(filter) {
    document.querySelectorAll('.difficulty-column').forEach(column => {
        const diff = column.dataset.difficulty;
        column.style.display = filter === 'all' || filter === diff ? '' : 'none';
    });
}

function saveSettings() {
    localStorage.setItem('derivapp-settings', JSON.stringify(settings));
}

// ============================
// Event listeners e inizializzazione
// ============================

document.addEventListener('DOMContentLoaded', () => {
    // Navigazione principale
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', () => {
            showSection(button.dataset.target);
        });
    });

    // Accesso rapido dalla home
    document.querySelectorAll('.quick-card').forEach(card => {
        card.addEventListener('click', () => {
            const targetSection = card.dataset.targetSection;
            const topic = card.dataset.topic;
            if (topic) {
                setActiveTopic(topic);
            }
            if (targetSection) {
                showSection(targetSection);
            }
        });
    });

    // Selettori di argomento esercizi
    document.querySelectorAll('.topic-button').forEach(button => {
        button.addEventListener('click', () => {
            setActiveTopic(button.dataset.topic);
        });
    });

    // Teoria tabs
    document.querySelectorAll('.theory-button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.theory-button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderTheory(button.dataset.topic);
        });
    });

    // Chatbot
    const chatForm = document.getElementById('chat-form');
    if (chatForm) {
        chatForm.addEventListener('submit', handleChatSubmit);
    }

    // Feedback
    const feedbackForm = document.getElementById('user-feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', handleFeedbackSubmit);
    }

    // Reset progress
    const resetButton = document.getElementById('reset-progress');
    if (resetButton) {
        resetButton.addEventListener('click', resetProgress);
    }

    // Impostazioni
    const themeToggle = document.getElementById('theme-toggle');
    const fontSelect = document.getElementById('font-size');
    const notificationsToggle = document.getElementById('notifications-toggle');
    const difficultySelect = document.getElementById('difficulty-visibility');

    if (themeToggle) {
        themeToggle.checked = settings.theme === 'dark';
        themeToggle.addEventListener('change', () => {
            settings.theme = themeToggle.checked ? 'dark' : 'light';
            applyTheme(settings.theme);
            saveSettings();
        });
    }

    if (fontSelect) {
        fontSelect.value = settings.font;
        fontSelect.addEventListener('change', () => {
            settings.font = fontSelect.value;
            applyFontSize(settings.font);
            saveSettings();
        });
    }

    if (notificationsToggle) {
        notificationsToggle.checked = settings.notifications;
        notificationsToggle.addEventListener('change', () => {
            settings.notifications = notificationsToggle.checked;
            applyNotifications(settings.notifications);
            saveSettings();
        });
    }

    if (difficultySelect) {
        difficultySelect.value = settings.difficultyVisibility;
        difficultySelect.addEventListener('change', () => {
            settings.difficultyVisibility = difficultySelect.value;
            applyDifficultyFilter(settings.difficultyVisibility);
            saveSettings();
        });
    }

    // Stato iniziale
    applyTheme(settings.theme);
    applyFontSize(settings.font);
    applyNotifications(settings.notifications);
    applyDifficultyFilter(settings.difficultyVisibility);

    document.querySelector(`.topic-button[data-topic="${currentTopic}"]`)?.classList.add('active');
    document.querySelector(`.theory-button[data-topic="${currentTopic}"]`)?.classList.add('active');

    renderExercisesForTopic(currentTopic);
    renderTheory(currentTopic);
    updateProgressUI();
    updateSuggestionsPanel();
    updateExerciseCounter();

    if (window.renderMathInElement) {
        renderMathInElement(document.body);
    }
});

function setActiveTopic(topicKey) {
    currentTopic = topicKey;
    document.querySelectorAll('.topic-button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.topic === topicKey);
    });
    renderExercisesForTopic(topicKey);
    renderTheory(topicKey);
}
