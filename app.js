// Dati per gli esercizi - Usa KaTeX (\\( ... \\) ) per le formule

const simpleExercises = [
    {
        id: 1,
        question: "Deriva: \\( f(x) = 7x^4 - 2x + 1 \\)",
        solution: "Si applicano la linearità e la regola della potenza: \\( f'(x) = 7 \\cdot 4x^{4-1} - 2 \\cdot 1 + 0 = 28x^3 - 2 \\)",
        hint: "La derivata di $x$ è 1 e la derivata di una costante è 0."
    },
    {
        id: 2,
        question: "Deriva: \\( g(x) = 5e^x + \\ln(x) \\)",
        solution: "Si usano le derivate base: \\( g'(x) = 5e^x + \\frac{1}{x} \\)",
        hint: "Ricorda che $\\frac{d}{dx} e^x = e^x$ e $\\frac{d}{dx} \\ln(x) = 1/x$."
    },
    {
        id: 3,
        question: "Deriva: \\( h(x) = \\frac{1}{2}\\cos(x) - 3 \\sin(x) \\)",
        solution: "La derivata del coseno è $- \\sin(x)$ e del seno è $\\cos(x)$. \\( h'(x) = -\\frac{1}{2}\\sin(x) - 3\\cos(x) \\)",
        hint: "La derivata di $\\cos(x)$ introduce un segno negativo."
    },
    {
        id: 4,
        question: "Deriva: \\( k(x) = 10x^{1/2} + 5 \\)",
        solution: "Si applica la regola della potenza: \\( k'(x) = 10 \\cdot \\frac{1}{2} x^{1/2 - 1} = 5x^{-1/2} = \\frac{5}{\\sqrt{x}} \\)",
        hint: "Ricorda che $\\sqrt{x} = x^{1/2}$."
    },
    {
        id: 5,
        question: "Deriva: \\( l(x) = 2x^3 - \\frac{1}{x^2} \\)",
        solution: "Riscrivi come $2x^3 - x^{-2}$. \\( l'(x) = 6x^2 - (-2)x^{-3} = 6x^2 + 2x^{-3} = 6x^2 + \\frac{2}{x^3} \\)",
        hint: "Riscrivi $\\frac{1}{x^n}$ come $x^{-n}$."
    },
    {
        id: 6,
        question: "Deriva: \\( m(x) = 4\\tan(x) + \\pi \\)",
        solution: "La derivata di $\\tan(x)$ è $\\sec^2(x)$: \\( m'(x) = 4\\sec^2(x) \\)",
        hint: "$\\pi$ è una costante, la sua derivata è zero. $\\sec^2(x) = 1/\\cos^2(x)$."
    },
    {
        id: 7,
        question: "Deriva: \\( n(x) = x \\cdot (3x - 1) \\)",
        solution: "Espandi prima: $3x^2 - x$. \\( n'(x) = 6x - 1 \\)",
        hint: "A volte, è più facile espandere il polinomio prima di derivare."
    },
    {
        id: 8,
        question: "Deriva: \\( p(x) = 9x^{10} - \\sqrt{2}\\ln(x) \\)",
        solution: "Si applicano le regole base: \\( p'(x) = 90x^9 - \\frac{\\sqrt{2}}{x} \\)",
        hint: "$\\sqrt{2}$ è una costante moltiplicativa."
    }
];

const mediumExercises = [
    {
        id: 101,
        question: "Deriva (Prodotto): \\( f(x) = x^3 \\cdot e^x \\)",
        solution: "Si usa la regola del prodotto $(u'v + uv')$: \\( f'(x) = 3x^2 \\cdot e^x + x^3 \\cdot e^x = x^2e^x(3 + x) \\)",
        hint: "Identifica $u=x^3$ e $v=e^x$."
    },
    {
        id: 102,
        question: "Deriva (Quoziente): \\( g(x) = \\frac{\\ln(x)}{x} \\)",
        solution: "Si usa la regola del quoziente: \\( g'(x) = \\frac{\\frac{1}{x} \\cdot x - \\ln(x) \\cdot 1}{x^2} = \\frac{1 - \\ln(x)}{x^2} \\)",
        hint: "Ricorda: $\\frac{u'v - uv'}{v^2}$."
    },
    {
        id: 103,
        question: "Deriva (Catena Semplice): \\( h(x) = \\sin(3x) \\)",
        solution: "Si usa la regola della catena: \\( h'(x) = \\cos(3x) \\cdot \\frac{d}{dx}(3x) = 3 \\cos(3x) \\)",
        hint: "Deriva l'esterno ($\\sin$) e moltiplica per la derivata dell'interno ($3x$)."
    },
    {
        id: 104,
        question: "Deriva: \\( k(x) = (2x - 5)^{10} \\)",
        solution: "Catena con potenza: \\( k'(x) = 10(2x - 5)^9 \\cdot \\frac{d}{dx}(2x - 5) = 10(2x - 5)^9 \\cdot 2 = 20(2x - 5)^9 \\)",
        hint: "La derivata di $2x-5$ è $2$."
    },
    {
        id: 105,
        question: "Deriva: \\( l(x) = x^2 \\cos(x) \\)",
        solution: "Regola del Prodotto: \\( l'(x) = 2x \\cos(x) + x^2 (-\\sin(x)) = 2x \\cos(x) - x^2 \\sin(x) \\)",
        hint: "Attenzione al segno negativo della derivata del coseno."
    },
    {
        id: 106,
        question: "Deriva: \\( m(x) = e^{x^2} \\)",
        solution: "Regola della Catena: \\( m'(x) = e^{x^2} \\cdot \\frac{d}{dx}(x^2) = 2x e^{x^2} \\)",
        hint: "Derivata di $e^u$ è $e^u \\cdot u'$."
    },
    {
        id: 107,
        question: "Deriva: \\( n(x) = \\frac{x^3 - 1}{x^2} \\)",
        solution: "Metodo più semplice: dividi prima: $x - x^{-2}$. \\( n'(x) = 1 - (-2)x^{-3} = 1 + \\frac{2}{x^3} \\)",
        hint: "Riscrivere la funzione spesso semplifica i calcoli."
    }
];

const complexExercises = [
    {
        id: 201,
        question: "Deriva: \\( f(x) = \\sqrt{x^2 + 4x} \\)",
        solution: "Si usa la Regola della Catena e la Derivata della Radice: \\( f'(x) = \\frac{1}{2\\sqrt{x^2 + 4x}} \\cdot (2x + 4) = \\frac{2(x + 2)}{2\\sqrt{x^2 + 4x}} = \\frac{x + 2}{\\sqrt{x^2 + 4x}} \\)",
        hint: "Scrivi $\\sqrt{u}$ come $u^{1/2}$ e applica la Catena."
    },
    {
        id: 202,
        question: "Deriva: \\( g(x) = e^{-x} \\cdot \\ln(x^2 + 1) \\)",
        solution: "Prodotto + Catena: \\( g'(x) = (-e^{-x}) \\ln(x^2 + 1) + e^{-x} \\cdot \\left(\\frac{1}{x^2 + 1} \\cdot 2x\\right) = e^{-x} \\left[\\frac{2x}{x^2 + 1} - \\ln(x^2 + 1)\\right] \\)",
        hint: "La derivata di $e^{-x}$ è $-e^{-x}$ (per Catena)."
    },
    {
        id: 203,
        question: "Deriva: \\( h(x) = \\frac{\\cos(2x)}{x^2 + 1} \\)",
        solution: "Quoziente + Catena: \\( h'(x) = \\frac{(-\\sin(2x) \\cdot 2)(x^2 + 1) - \\cos(2x)(2x)}{(x^2 + 1)^2} = -\\frac{2( (x^2 + 1)\\sin(2x) + x\\cos(2x) )}{(x^2 + 1)^2} \\)",
        hint: "Il numeratore ($\\cos(2x)$) richiede la Regola della Catena."
    },
    {
        id: 204,
        question: "Deriva: \\( k(x) = \\sin(\\sqrt{x^2 + 1}) \\)",
        solution: "Doppia Catena: \\( k'(x) = \\cos(\\sqrt{x^2 + 1}) \\cdot \\frac{1}{2\\sqrt{x^2 + 1}} \\cdot 2x = \\frac{x \\cos(\\sqrt{x^2 + 1})}{\\sqrt{x^2 + 1}} \\)",
        hint: "Le funzioni sono: $\\sin(\\dots)$, $\\sqrt{\\dots}$, $x^2+1$. Deriva dall'esterno verso l'interno."
    },
    {
        id: 205,
        question: "Deriva: \\( l(x) = \\ln\\left(\\frac{x}{x - 1}\\right) \\)",
        solution: "Usa la proprietà dei logaritmi prima: $\\ln(x) - \\ln(x-1)$. \\( l'(x) = \\frac{1}{x} - \\frac{1}{x-1} \\cdot 1 = \\frac{x-1 - x}{x(x-1)} = \\frac{-1}{x(x-1)} \\)",
        hint: "Semplifica con $\\ln(a/b) = \\ln(a) - \\ln(b)$ per evitare la regola della Catena sul Quoziente."
    }
];

// Funzione per mostrare/nascondere le sezioni (navigazione)
function showSection(sectionId) {
    document.querySelectorAll('.app-section').forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.add('active');
    document.getElementById(sectionId).classList.remove('hidden');
    // Rirendere KaTeX ad ogni cambio di sezione per assicurare il rendering
    // Questa funzione è fornita dalla libreria KaTeX auto-render
    if (window.renderMathInElement) {
        renderMathInElement(document.body);
    }
}

// Funzione per creare e inserire gli esercizi nell'HTML
function renderExercises(exercises, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Pulisce il contenitore

    exercises.forEach(ex => {
        const div = document.createElement('div');
        div.className = 'exercise-card';
        
        // Inserimento della domanda e dei bottoni
        div.innerHTML = `<h3>Domanda ${ex.id}</h3>
                         <p class="question-text">${ex.question}</p>
                         <div class="buttons-container">
                             <button onclick="toggleSolution(${ex.id}, '${containerId}', 'hint')">Suggerimento</button>
                             <button onclick="toggleSolution(${ex.id}, '${containerId}', 'solution')">Mostra Soluzione</button>
                         </div>
                         <div id="sol-${ex.id}-${containerId}" class="solution-box hidden" data-content-type=""></div>`;
                         
        container.appendChild(div);
    });
}

// Funzione per mostrare il suggerimento o la soluzione
function toggleSolution(id, containerId, type) {
    const box = document.getElementById(`sol-${id}-${containerId}`);
    
    // Identifica l'array corretto
    let exerciseArray;
    if (containerId === 'simple-exercises') {
        exerciseArray = simpleExercises;
    } else if (containerId === 'medium-exercises') {
        exerciseArray = mediumExercises;
    } else if (containerId === 'complex-exercises') {
        exerciseArray = complexExercises;
    }
    
    const ex = exerciseArray.find(e => e.id === id);
    const content = type === 'solution' ? ex.solution : ex.hint;
    const prefix = type === 'solution' ? 'Soluzione:' : 'Suggerimento:';

    // Logica per mostrare/nascondere e cambiare contenuto
    if (box.classList.contains('hidden') || box.getAttribute('data-content-type') !== type) {
        box.innerHTML = `<strong>${prefix}</strong> ${content}`;
        box.classList.remove('hidden');
        box.setAttribute('data-content-type', type);
    } else {
        box.classList.add('hidden');
        box.setAttribute('data-content-type', '');
    }
    
    // Rirendere KaTeX dopo aver inserito il testo
    if (!box.classList.contains('hidden') && window.renderMathInElement) {
        renderMathInElement(box); 
    }
}


// Inizializzazione all'avvio dell'app
document.addEventListener('DOMContentLoaded', () => {
    // Carica gli esercizi nelle rispettive sezioni
    renderExercises(simpleExercises, 'simple-exercises');
    renderExercises(mediumExercises, 'medium-exercises');
    renderExercises(complexExercises, 'complex-exercises');
    
    // Mostra la sezione delle regole all'inizio
    showSection('rules'); 
});
