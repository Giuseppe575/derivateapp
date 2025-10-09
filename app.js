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
            },
            {
                id: 4,
                question: "Deriva: \\( f(x) = 3x^5 + 4x^2 - 7 \\)",
                answer: ["15x^4+8x", "15x^{4}+8x"],
                solution: "\\( f'(x) = 15x^4 + 8x \\)",
                hint: "Deriva ogni termine separatamente.",
                tag: "potenza"
            },
            {
                id: 5,
                question: "Deriva: \\( g(x) = \\sqrt{x} \\)",
                answer: ["1/(2\\sqrt{x})", "\\frac{1}{2\\sqrt{x}}", "1/(2x^{1/2})"],
                solution: "Scrivi $x^{1/2}$ e usa la regola della potenza: \\( g'(x) = \\frac{1}{2\\sqrt{x}} \\)",
                hint: "Ricorda che $\\sqrt{x} = x^{1/2}$.",
                tag: "radice"
            },
            {
                id: 6,
                question: "Deriva: \\( h(x) = \\ln(5x) \\)",
                answer: ["1/x", "\\frac{1}{x}"],
                solution: "\\( h'(x) = \\frac{1}{x} \\)",
                hint: "Usa la proprietà $\\ln(5x) = \\ln 5 + \\ln x$.",
                tag: "logaritmo"
            },
            {
                id: 7,
                question: "Deriva: \\( f(x) = e^{2x} \\)",
                answer: ["2e^{2x}", "2e^(2x)"],
                solution: "Regola della catena: \\( f'(x) = 2e^{2x} \\)",
                hint: "La derivata di $e^{ax}$ è $a e^{ax}$.",
                tag: "esponenziale"
            },
            {
                id: 8,
                question: "Deriva: \\( g(x) = \\sin(3x) \\)",
                answer: ["3cos(3x)", "3\\cos(3x)"],
                solution: "\\( g'(x) = 3\\cos(3x) \\)",
                hint: "Applica la catena: derivata di $\\sin(u)$ è $\\cos(u)u'$.",
                tag: "trigonometria"
            },
            {
                id: 9,
                question: "Deriva: \\( h(x) = x^{-3} \\)",
                answer: ["-3x^{-4}", "-3/x^4", "-\\frac{3}{x^4}"],
                solution: "Regola della potenza con esponente negativo: \\( h'(x) = -3x^{-4} \\)",
                hint: "Moltiplica per l'esponente e sottrai uno.",
                tag: "potenza"
            },
            {
                id: 10,
                question: "Deriva: \\( f(x) = \\frac{1}{x} + 2x \\)",
                answer: ["-1/x^2+2", "2-1/x^2", "2-\\frac{1}{x^2}"],
                solution: "\\( f'(x) = -\\frac{1}{x^2} + 2 \\)",
                hint: "Trasforma $1/x$ in $x^{-1}$.",
                tag: "razionale"
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
            },
            {
                id: 104,
                question: "Deriva: \\( f(x) = x^2 \\ln(x) \\)",
                answer: ["2xln(x)+x", "2x\\ln(x)+x"],
                solution: "Prodotto tra $x^2$ e $\\ln x$: \\( f'(x) = 2x\\ln(x) + x \\)",
                hint: "Scrivi $u=x^2$ e $v=\\ln x$.",
                tag: "prodotto"
            },
            {
                id: 105,
                question: "Deriva: \\( g(x) = \\frac{\\sin x}{x} \\)",
                answer: ["(xcos(x)-sin(x))/x^2", "\\frac{x\\cos(x)-\\sin(x)}{x^2}"],
                solution: "Quoziente: \\( g'(x) = \\frac{x\\cos x - \\sin x}{x^2} \\)",
                hint: "Riscrivi come $\\sin x \cdot x^{-1}$ se preferisci.",
                tag: "quoziente"
            },
            {
                id: 106,
                question: "Deriva: \\( h(x) = x e^{x^2} \\)",
                answer: ["e^{x^2}+2x^2e^{x^2}", "e^{x^2}(1+2x^2)"],
                solution: "Prodotto + catena: \\( h'(x) = e^{x^2} + 2x^2 e^{x^2} \\)",
                hint: "Deriva $e^{x^2}$ usando la catena.",
                tag: "prodotto"
            },
            {
                id: 107,
                question: "Deriva: \\( f(x) = \\ln(x^2 + 1) \\)",
                answer: ["2x/(x^2+1)", "\\frac{2x}{x^2+1}"],
                solution: "Catena su logaritmo: \\( f'(x) = \\frac{2x}{x^2 + 1} \\)",
                hint: "Deriva l'interno $x^2+1$.",
                tag: "catena"
            },
            {
                id: 108,
                question: "Deriva: \\( g(x) = \\frac{3x-1}{x+2} \\)",
                answer: ["7/(x+2)^2", "\\frac{7}{(x+2)^2}"],
                solution: "Quoziente con semplificazione: \\( g'(x) = \\frac{7}{(x+2)^2} \\)",
                hint: "Applica $\\frac{u'v - uv'}{v^2}$.",
                tag: "quoziente"
            },
            {
                id: 109,
                question: "Deriva: \\( h(x) = x^4 \\sin x \\)",
                answer: ["4x^3sin(x)+x^4cos(x)", "x^3(4\\sin x + x\\cos x)"],
                solution: "Prodotto: \\( h'(x) = 4x^3\\sin x + x^4\\cos x \\)",
                hint: "Deriva $x^4$ e $\\sin x$ separatamente.",
                tag: "prodotto"
            },
            {
                id: 110,
                question: "Deriva: \\( f(x) = e^{3x} \\cos x \\)",
                answer: ["e^{3x}(3cos(x)-sin(x))", "e^{3x}(3\\cos x-\\sin x)"],
                solution: "Prodotto e catena: \\( f'(x) = e^{3x}(3\\cos x - \\sin x) \\)",
                hint: "Deriva l'esponenziale con la catena e il coseno.",
                tag: "prodotto"
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
            },
            {
                id: 203,
                question: "Deriva: \\( f(x) = (x^2 + 1)^{3/2} \\)",
                answer: ["3x*\\sqrt{x^2+1}", "3x\\sqrt{x^2+1}", "3x(x^2+1)^{1/2}"],
                solution: "Potenza frazionaria: \\( f'(x) = 3x\\sqrt{x^2+1} \\)",
                hint: "Scrivi $(x^2+1)^{3/2}$ e applica la catena.",
                tag: "catena"
            },
            {
                id: 204,
                question: "Deriva: \\( g(x) = \\ln\\left(\\frac{x^2+1}{x-1}\\right) \\)",
                answer: ["2x/(x^2+1)-1/(x-1)", "\\frac{2x}{x^2+1}-\\frac{1}{x-1}"],
                solution: "Differenza di logaritmi: \\( g'(x) = \\frac{2x}{x^2+1} - \\frac{1}{x-1} \\)",
                hint: "Usa $\\ln(a/b) = \\ln a - \\ln b$.",
                tag: "logaritmo"
            },
            {
                id: 205,
                question: "Deriva: \\( h(x) = \\frac{\\sin(x^2)}{x} \\)",
                answer: ["2cos(x^2)-sin(x^2)/x^2", "2\\cos(x^2)-\\frac{\\sin(x^2)}{x^2}"],
                solution: "Prodotto con $x^{-1}$: \\( h'(x) = 2\\cos(x^2) - \\frac{\\sin(x^2)}{x^2} \\)",
                hint: "Riscrivi come $\\sin(x^2) x^{-1}$.",
                tag: "quoziente"
            },
            {
                id: 206,
                question: "Deriva: \\( f(x) = e^{x} \\sqrt{x^2+1} \\)",
                answer: ["e^x(\\sqrt{x^2+1}+x/\\sqrt{x^2+1})", "e^x*(\\sqrt{x^2+1}+x/\\sqrt{x^2+1})"],
                solution: "Prodotto + catena: \\( f'(x) = e^{x}\\left(\\sqrt{x^2+1} + \\frac{x}{\\sqrt{x^2+1}}\\right) \\)",
                hint: "Deriva separatamente $e^x$ e la radice.",
                tag: "prodotto"
            },
            {
                id: 207,
                question: "Deriva: \\( g(x) = (x^2 + 3x)e^{1/x} \\)",
                answer: ["e^{1/x}((2x+3)-(x^2+3x)/x^2)", "e^{1/x}(2x+3-1-3/x)"],
                solution: "Prodotto + catena: \\( g'(x) = e^{1/x}\\left((2x+3) - \\frac{x^2+3x}{x^2}\\right) \\)",
                hint: "La derivata di $e^{1/x}$ è $e^{1/x}(-1/x^2)$.",
                tag: "prodotto"
            },
            {
                id: 208,
                question: "Deriva: \\( h(x) = \\ln(\\sin x) \\)",
                answer: ["cot(x)", "\\cot x", "\\frac{\\cos x}{\\sin x}"],
                solution: "Catena su logaritmo: \\( h'(x) = \\cot x \\)",
                hint: "Ricorda che $\\frac{d}{dx}\\ln u = u'/u$.",
                tag: "logaritmo"
            },
            {
                id: 209,
                question: "Deriva: \\( f(x) = x^x \\)",
                answer: ["x^x(\\ln x+1)", "x^x*(\\ln x+1)", "x^x(ln(x)+1)"],
                solution: "Riscrivi $x^x = e^{x\\ln x}$: \\( f'(x) = x^x(\\ln x + 1) \\)",
                hint: "Usa la derivata di $e^{u(x)}$ con $u = x\\ln x$.",
                tag: "esponenziale"
            },
            {
                id: 210,
                question: "Deriva: \\( g(x) = \\frac{\\arctan x}{x} \\)",
                answer: ["(x/(1+x^2)-\\arctan(x))/x^2", "\\frac{\\frac{x}{1+x^2}-\\arctan(x)}{x^2}"],
                solution: "Quoziente: \\( g'(x) = \\frac{\\frac{x}{1+x^2} - \\arctan x}{x^2} \\)",
                hint: "Applica $\\frac{u'v - uv'}{v^2}$ con $u=\\arctan x$.",
                tag: "quoziente"
            }
        ]
    },
    limiti: {
        label: "Limiti",
        simple: [
            {
                id: 1,
                question: "Calcola: \\( \\lim_{x \\to 0} \\frac{\\sin x}{x} \\)",
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
            },
            {
                id: 3,
                question: "Calcola: \\( \\lim_{x \\to 0} \\frac{1-\\cos x}{x^2} \\)",
                answer: ["1/2", "0.5", "\\frac{1}{2}"],
                solution: "Limite notevole ricavato dalla serie del coseno: vale $1/2$.",
                hint: "Usa $1-\\cos x \\sim x^2/2$.",
                tag: "notevoli"
            },
            {
                id: 4,
                question: "Calcola: \\( \\lim_{x \\to +\\infty} \\frac{3x^2 - x + 1}{x^2} \\)",
                answer: ["3"],
                solution: "Rapporto tra polinomi: conta solo il termine di grado massimo.",
                hint: "Dividi tutto per $x^2$.",
                tag: "razionali"
            },
            {
                id: 5,
                question: "Calcola: \\( \\lim_{x \\to -\\infty} \\frac{5x^3 + 2}{x^3} \\)",
                answer: ["5"],
                solution: "I termini di grado inferiore sono trascurabili: resta 5.",
                hint: "Fattorizza $x^3$.",
                tag: "razionali"
            },
            {
                id: 6,
                question: "Calcola: \\( \\lim_{x \\to 0} \\frac{\\tan x}{x} \\)",
                answer: ["1"],
                solution: "Limite notevole legato alla derivata del seno.",
                hint: "Scrivi $\\tan x = \\frac{\\sin x}{\\cos x}$.",
                tag: "notevoli"
            },
            {
                id: 7,
                question: "Calcola: \\( \\lim_{x \\to 0} \\frac{\\sqrt{1+x}-1}{x} \\)",
                answer: ["1/2", "0.5", "\\frac{1}{2}"],
                solution: "Razionalezza o usa lo sviluppo: vale $1/2$.",
                hint: "Moltiplica per la coniugata $\\sqrt{1+x}+1$.",
                tag: "radicali"
            },
            {
                id: 8,
                question: "Calcola: \\( \\lim_{x \\to +\\infty} \\frac{\\ln x}{x} \\)",
                answer: ["0"],
                solution: "Il logaritmo cresce più lentamente di una potenza positiva.",
                hint: "Confronta ordini di infinito.",
                tag: "logaritmi"
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
            },
            {
                id: 103,
                question: "Calcola: \\( \\lim_{x \\to 0} \\frac{\\sin(2x)}{x} \\)",
                answer: ["2"],
                solution: "Usa il limite notevole $\\sin u / u$ con $u = 2x$.",
                hint: "Moltiplica e dividi per 2.",
                tag: "notevoli"
            },
            {
                id: 104,
                question: "Calcola: \\( \\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} \\)",
                answer: ["1"],
                solution: "Serie di Taylor del logaritmo: $\\ln(1+x) \\sim x$.",
                hint: "Ricorda lo sviluppo di $\\ln(1+x)$.",
                tag: "logaritmi"
            },
            {
                id: 105,
                question: "Calcola: \\( \\lim_{x \\to 0} \\frac{(1+x)^5 - 1}{x} \\)",
                answer: ["5"],
                solution: "Espansione binomiale o derivata in zero: risulta 5.",
                hint: "Sviluppa $(1+x)^5$ fino al termine lineare.",
                tag: "binomio"
            },
            {
                id: 106,
                question: "Calcola: \\( \\lim_{x \\to 0} \\frac{e^{2x} - 1 - 2x}{x^2} \\)",
                answer: ["2"],
                solution: "Serie di Taylor: $e^{2x} = 1 + 2x + 2x^2 + ...$, quindi il limite vale 2.",
                hint: "Isola i primi tre termini dello sviluppo.",
                tag: "taylor"
            },
            {
                id: 107,
                question: "Calcola: \\( \\lim_{x \\to +\\infty} \\left(1 + \\frac{2}{x}\\right)^x \\)",
                answer: ["e^2", "e^{2}"],
                solution: "Limite esponenziale: tende a $e^{2}$.",
                hint: "Scrivi l'espressione come $e^{x\\ln(1+2/x)}$.",
                tag: "esponenziali"
            },
            {
                id: 108,
                question: "Calcola: \\( \\lim_{x \\to 0} \\frac{\\sqrt{1+3x} - 1}{x} \\)",
                answer: ["3/2", "1.5", "\\frac{3}{2}"],
                solution: "Razionalezza o usa lo sviluppo della radice: risultato $3/2$.",
                hint: "Moltiplica per la coniugata $\\sqrt{1+3x}+1$.",
                tag: "radicali"
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
            },
            {
                id: 202,
                question: "Calcola: \\( \\lim_{x \\to 0} \\frac{e^x - 1 - x - x^2/2}{x^3} \\)",
                answer: ["1/6", "0.1666", "\\frac{1}{6}"],
                solution: "Serie di Taylor di $e^x$: il termine dominante è $x^3/6$.",
                hint: "Espandi $e^x$ fino al terzo ordine.",
                tag: "taylor"
            },
            {
                id: 203,
                question: "Calcola: \\( \\lim_{x \\to 0} \\frac{\\tan x - x}{x^3} \\)",
                answer: ["1/3", "0.333", "\\frac{1}{3}"],
                solution: "$\\tan x = x + x^3/3 + ...$, quindi il limite vale $1/3$.",
                hint: "Ricorri allo sviluppo di $\\tan x$.",
                tag: "taylor"
            },
            {
                id: 204,
                question: "Calcola: \\( \\lim_{x \\to 0^+} x\\ln x \\)",
                answer: ["0"],
                solution: "Il logaritmo va a $-\\infty$ ma il prodotto con $x$ tende a 0.",
                hint: "Applica l'Hôpital o ricorda che $x^a\\ln x \\to 0$.",
                tag: "logaritmi"
            },
            {
                id: 205,
                question: "Calcola: \\( \\lim_{x \\to +\\infty} x(\\sqrt{x^2+1} - x) \\)",
                answer: ["1/2", "0.5", "\\frac{1}{2}"],
                solution: "Moltiplica e dividi per la coniugata per ottenere $\\frac{1}{\\sqrt{x^2+1}+x}$.",
                hint: "Usa la coniugata della radice.",
                tag: "radicali"
            },
            {
                id: 206,
                question: "Calcola: \\( \\lim_{x \\to 0} \\frac{\\ln(1+x) - x + x^2/2}{x^3} \\)",
                answer: ["1/3", "0.333", "\\frac{1}{3}"],
                solution: "Serie del logaritmo: il termine successivo vale $x^3/3$.",
                hint: "Espandi fino al terzo ordine.",
                tag: "taylor"
            },
            {
                id: 207,
                question: "Calcola: \\( \\lim_{x \\to 0} \\frac{\\sqrt{1+x} - 1 - x/2}{x^2} \\)",
                answer: ["-1/8", "-0.125", "-\\frac{1}{8}"],
                solution: "Espansione della radice: $\\sqrt{1+x} = 1 + x/2 - x^2/8 + ...$.",
                hint: "Usa la serie binomiale.",
                tag: "radicali"
            },
            {
                id: 208,
                question: "Calcola: \\( \\lim_{x \\to 0} \\frac{\\arctan x - x}{x^3} \\)",
                answer: ["-1/3", "-0.333", "-\\frac{1}{3}"],
                solution: "$\\arctan x = x - x^3/3 + ...$, quindi il limite vale $-1/3$.",
                hint: "Ricorda lo sviluppo di $\\arctan x$.",
                tag: "taylor"
            },
            {
                id: 209,
                question: "Calcola: \\( \\lim_{x \\to 0} \\frac{e^{x} - e^{-x} - 2x}{x^3} \\)",
                answer: ["1/3", "0.333", "\\frac{1}{3}"],
                solution: "Differenza di esponenziali: restano i termini $x^3/3$.",
                hint: "Espandi $e^x$ ed $e^{-x}$.",
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
            },
            {
                id: 3,
                question: "Determina il dominio di \\( f(x) = \\sqrt{2x-5} \\)",
                answer: ["x>=5/2", "x>=2.5", "x\\geq\\frac{5}{2}", "[5/2,+inf)", "[\\frac{5}{2},+\\infty)"],
                solution: "Serve $2x-5 \ge 0$: quindi $x \ge 5/2$.",
                hint: "Imponi che l'argomento della radice sia non negativo.",
                tag: "dominio"
            },
            {
                id: 4,
                question: "Determina il dominio di \\( f(x) = \\ln(x-1) \\)",
                answer: ["x>1", "(1,+inf)", "(1,+\\infty)", "x\\in(1,+\\infty)"],
                solution: "Il logaritmo naturale richiede $x-1>0$, quindi $x>1$.",
                hint: "Ricorda che l'argomento del logaritmo deve essere positivo.",
                tag: "dominio"
            },
            {
                id: 5,
                question: "Individua gli zeri di \\( f(x) = x^2 - 9 \\) (usa ';' per separare).",
                answer: ["x=3; x=-3", "3; -3", "x=\\pm3"],
                solution: "Risolvi $x^2-9=0$: ottieni $x=\\pm3$.",
                hint: "Scomponi come $(x-3)(x+3)=0$.",
                tag: "zeri"
            },
            {
                id: 6,
                question: "Indica dove \\( f(x) = -x + 4 \\) è positiva.",
                answer: ["x<4", "(-inf,4)", "(-\\infty,4)", "positiva per x<4"],
                solution: "Risolvi $-x + 4 > 0$: ottieni $x < 4$.",
                hint: "Isola $x$ nell'inequazione lineare.",
                tag: "segno"
            },
            {
                id: 7,
                question: "Determina il dominio di \\( f(x) = \\frac{1}{x^2-4} \\)",
                answer: ["x\\neq\\pm2", "x\\neq2 e x\\neq-2", "\\mathbb{R}\\setminus\\{-2,2\\}", "tutti tranne ±2"],
                solution: "Il denominatore si annulla per $x=\\pm2$.",
                hint: "Poni $x^2-4 \\neq 0$.",
                tag: "dominio"
            },
            {
                id: 8,
                question: "Indica dove \\( f(x) = (x+1)(x-2) \\) è negativa (usa U per unione).",
                answer: ["(-1,2)", "(-1,2)", "-1<x<2"],
                solution: "Gli zeri sono $-1$ e $2$. Il prodotto è negativo tra gli zeri.",
                hint: "Studia il segno di ciascun fattore lungo la retta reale.",
                tag: "segno"
            }
        ],
        medium: [
            {
                id: 101,
                question: "Indica dove \\( f(x) = x^3 - 3x \\) è crescente (usa U per unione).",
                answer: ["crescente su (-inf,-1)u(1,inf)", "(-\\infty,-1)u(1,\\infty)", "crescente:\\ (-inf,-1)u(1,inf)", "x<-1 o x>1"],
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
            },
            {
                id: 103,
                question: "Trova i punti stazionari di \\( f(x) = x^3 - 6x \\) (usa ';' per separare).",
                answer: ["x=-\\sqrt{2}; x=\\sqrt{2}", "x=\\pm\\sqrt{2}", "-sqrt(2); sqrt(2)"],
                solution: "$f'(x) = 3x^2 - 6 = 3(x^2-2)$: gli zeri sono $x = \\pm\\sqrt{2}$.",
                hint: "Calcola la derivata prima e imponi $f'(x)=0$.",
                tag: "critici"
            },
            {
                id: 104,
                question: "Determina il dominio di \\( f(x) = \\frac{\\sqrt{x-1}}{x-4} \\)",
                answer: ["x>=1 e x!=4", "x\\geq1, x\\neq4", "[1,+inf)\\setminus\\{4\\}"],
                solution: "Serve $x-1 \ge 0$ e $x-4 \neq 0$: quindi $x \ge 1$ con esclusione di $x=4$.",
                hint: "Interseca le condizioni di radice e denominatore.",
                tag: "dominio"
            },
            {
                id: 105,
                question: "Indica dove \\( f(x) = \\frac{x^2-9}{x-1} \\) è positiva (usa U per unione).",
                answer: ["(-inf,-3)u(1,3)u(3,inf)", "(-\\infty,-3)u(1,3)u(3,\\infty)", "x<-3 o 1<x<3 o x>3"],
                solution: "Studia il segno dei fattori $(x-3)(x+3)$ e del denominatore $x-1$.",
                hint: "Traccia una tabella dei segni considerando gli zeri -3, 1, 3.",
                tag: "segno"
            },
            {
                id: 106,
                question: "Indica dove \\( f(x) = \\frac{x}{x^2+1} \\) è crescente (usa U per unione).",
                answer: ["(-1,1)", "crescente su (-1,1)", "-1<x<1"],
                solution: "Deriva: $f'(x) = \\frac{1-x^2}{(x^2+1)^2}$, positiva per $|x|<1$.",
                hint: "Deriva e analizza il segno di $f'$.",
                tag: "monotonia"
            },
            {
                id: 107,
                question: "Elenca gli asintoti di \\( f(x) = \\frac{2x^2+1}{x^2+1} \\) separandoli con ';'.",
                answer: ["nessun verticale; orizzontale y=2", "orizzontale y=2; nessun verticale"],
                solution: "Il dominio è tutto $\\mathbb{R}$, quindi nessun asintoto verticale; per $x \to \pm\\infty$ la funzione tende a 2.",
                hint: "Confronta i gradi di numeratore e denominatore.",
                tag: "asintoti"
            },
            {
                id: 108,
                question: "Trova le intersezioni con gli assi di \\( f(x) = e^x - 1 \\) (usa ';').",
                answer: ["asse x: x=0; asse y: y=0", "x=0; y=0"],
                solution: "$f(x)=0$ solo per $x=0$ e $f(0)=0$, quindi l'intersezione coincide con l'origine.",
                hint: "Imponi $f(x)=0$ e calcola $f(0)$.",
                tag: "intersezioni"
            },
            {
                id: 109,
                question: "Determina il dominio di \\( f(x) = \\ln(x^2-4) \\)",
                answer: ["(-inf,-2)u(2,inf)", "(-\\infty,-2)u(2,\\infty)", "x<-2 o x>2"],
                solution: "Il logaritmo richiede $x^2-4>0$: quindi $x<-2$ oppure $x>2$.",
                hint: "Studia il segno di $x^2-4$.",
                tag: "dominio"
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
            },
            {
                id: 202,
                question: "Trova i punti di flesso di \\( f(x) = x^3 - 3x \\) (indica le ascisse).",
                answer: ["x=0", "0"],
                solution: "$f''(x) = 6x$ cambia segno solo in $x=0$, quindi lì c'è un flesso.",
                hint: "Calcola $f''$ e verifica il cambio di concavità.",
                tag: "flessi"
            },
            {
                id: 203,
                question: "Elenca gli asintoti di \\( f(x) = \\frac{x^3}{x^2-1} \\) separandoli con ';'.",
                answer: ["verticali x=-1,x=1; obliquo y=x", "x=-1; x=1; y=x"],
                solution: "Il denominatore si annulla in $x=\\pm1$ (asintoti verticali); la divisione mostra un asintoto obliquo $y = x$.",
                hint: "Esegui la divisione tra polinomi.",
                tag: "asintoti"
            },
            {
                id: 204,
                question: "Indica dove \\( f(x) = \\frac{x^2-1}{x^2+1} \\) è crescente (usa U per unione).",
                answer: ["(0,inf)", "crescente su (0,inf)", "x>0"],
                solution: "Deriva: $f'(x) = \\frac{4x}{(x^2+1)^2}$, positiva per $x>0$ e negativa per $x<0$.",
                hint: "Studia il segno della derivata prima.",
                tag: "monotonia"
            },
            {
                id: 205,
                question: "Classifica i punti critici di \\( f(x) = x^4 - 4x^2 + 1 \\) (usa ';').",
                answer: ["x=0 massimo locale; x=-\\sqrt{2} minimo locale; x=\\sqrt{2} minimo locale", "max a x=0; min a x=\\pm\\sqrt{2}"],
                solution: "$f'(x) = 4x(x^2-2)$ fornisce $x=0,\\pm\\sqrt{2}$. La derivata seconda vale $f''(0)=-8<0$ (massimo) e $f''(\\pm\\sqrt{2})=16>0$ (minimi).",
                hint: "Usa il test della derivata seconda.",
                tag: "ottimizzazione"
            },
            {
                id: 206,
                question: "Indica dominio e asintoti verticali di \\( f(x) = \\ln(x^2-1) \\) (usa ';').",
                answer: ["dominio: (-inf,-1)u(1,inf); verticali x=-1,x=1", "(-\\infty,-1)u(1,\\infty); x=-1; x=1"],
                solution: "Serve $x^2-1>0$ quindi $x<-1$ o $x>1$; ai bordi compaiono asintoti verticali.",
                hint: "Imponi l'argomento del logaritmo positivo.",
                tag: "dominio"
            },
            {
                id: 207,
                question: "Descrivi concavità e convessità di \\( f(x) = \\frac{1}{x^2-1} \\) (usa ';').",
                answer: ["convessa su (-inf,-1)u(1,inf); concava su (-1,1)", "convessa: (-inf,-1)u(1,inf); concava: (-1,1)"],
                solution: "$f''(x) = \\frac{2(3x^2+1)}{(x^2-1)^3}$ ha segno come $(x^2-1)$, quindi concava su (-1,1) e convessa fuori.",
                hint: "Calcola $f''$ e analizza il denominatore.",
                tag: "concavita"
            },
            {
                id: 208,
                question: "Trova il massimo assoluto di \\( f(x) = x e^{-x} \\) per $x>0$ (rispondi con 'x=...; f=...').",
                answer: ["x=1; f=1/e", "x=1; f=\\frac{1}{e}"],
                solution: "$f'(x) = e^{-x}(1-x)$ si annulla a $x=1$ e $f''(1)=-e^{-1}<0$: massimo con valore $1/e$.",
                hint: "Deriva e utilizza il test della derivata seconda.",
                tag: "ottimizzazione"
            }
        ]
    },
const theoryContent = {
    derivate: {
        overview: [
            `La derivata misura la rapidità con cui una funzione cambia. È come guardare la pendenza di una strada: se \( f(x) \) rappresenta l'altitudine, allora \( f'(x) \) indica quanto ripida è la salita in ogni punto.`,
            `Dal punto di vista geometrico la derivata corrisponde al coefficiente angolare della retta tangente al grafico in un punto. Osservando intervalli sempre più piccoli, il rapporto incrementale \( \frac{f(x+h)-f(x)}{h} \) si avvicina al valore della derivata.`,
            `Le derivate nascono anche come modello dei fenomeni reali: in fisica descrivono la velocità istantanea, in economia la variazione marginale di un costo o di un ricavo, in biologia il ritmo di crescita di una popolazione.`,
            `Imparare a calcolare le derivate significa padroneggiare alcune regole fondamentali (lineare, prodotto, quoziente, catena) e riconoscere le derivate elementari di polinomi, esponenziali, logaritmi e funzioni trigonometriche.`,
            `Oltre al calcolo, l'interpretazione della derivata guida l'analisi qualitativa: individuiamo massimi, minimi, monotonia e concavità combinando derivata prima e seconda.`
        ],
        sections: [
            {
                title: "Significato geometrico e applicazioni",
                paragraphs: [
                    `Il limite del rapporto incrementale \( \lim_{h \to 0} \frac{f(x+h)-f(x)}{h} \) definisce la derivata. Geometricamente indica la pendenza della tangente. Quando il limite esiste, il grafico appare localmente come una retta che tocca la curva senza attraversarla.`,
                    `In fisica, se \( s(t) \) è la posizione di un punto mobile, \( s'(t) \) rappresenta la velocità istantanea. In economia la derivata del costo totale rispetto alla produzione fornisce il costo marginale. Comprendere questi legami rende più intuitivo ogni calcolo.`
                ],
                list: [
                    `Un segno positivo di \( f'(x) \) indica crescita, uno negativo decrescita.`,
                    `Derivata nulla significa tangente orizzontale: possibili massimi, minimi o flessi a tangente orizzontale.`,
                    `Derivate laterali diverse segnalano cuspidi o angoli e quindi non derivabilità.`
                ]
            },
            {
                title: "Regole di derivazione essenziali",
                paragraphs: [
                    `Per calcolare rapidamente le derivate è utile tenere a portata di mano una tabella con le formule base. La linearità permette di derivare termine per termine, mentre le regole di prodotto, quoziente e catena gestiscono combinazioni più elaborate.`
                ],
                tables: [
                    {
                        title: `Derivate fondamentali`,
                        headers: [`Funzione`, `Derivata`],
                        rows: [
                            [`\\( x^n \\)`, `\\( nx^{n-1} \\)`],
                            [`\\( e^{ax} \\)`, `\\( ae^{ax} \\)`],
                            [`\\( \\ln x \\)`, `\\( \\frac{1}{x} \\)`],
                            [`\\( \\sin x \\)`, `\\( \\cos x \\)`],
                            [`\\( \\cos x \\)`, `\\( -\\sin x \\)`]
                        ],
                        note: `Ricorda anche le derivate di \( \\tan x \\), \( \\arcsin x \\) e delle funzioni inverse più comuni.`
                    },
                    {
                        title: `Regole operative`,
                        headers: [`Situazione`, `Formula`],
                        rows: [
                            [`Linearità`, `\\( (af + bg)' = a f' + b g' \\)`],
                            [`Prodotto`, `\\( (fg)' = f'g + fg' \\)`],
                            [`Quoziente`, `\\( \\left( \\frac{f}{g} \\right)' = \\frac{f'g - fg'}{g^2} \\)`],
                            [`Catena`, `\\( (f(g(x)))' = f'(g(x)) \\cdot g'(x) \\)`]
                        ]
                    }
                ]
            },
            {
                title: "Strategie per funzioni composte",
                paragraphs: [
                    `Quando la funzione contiene radici, logaritmi o potenze con esponente variabile è fondamentale saper scomporre l'espressione. Identifica un "interno" e un "esterno" per applicare correttamente la catena, oppure trasforma il problema con logaritmi o proprietà algebriche prima di derivare.`,
                    `Per esempio, per \( y = (3x^2 - 1)^5 \) riconosciamo l'esterno \( u^5 \) e l'interno \( u = 3x^2 - 1 \): la derivata è \( 5(3x^2 - 1)^4 \cdot 6x \). In modo analogo, per prodotti o quozienti conviene scegliere quale parte derivare per prima in base alla semplicità.`
                ],
                list: [
                    `Semplifica l'espressione prima di derivare (fattorizza, porta potenze al numeratore o denominatore).`,
                    `Per potenze del tipo \( x^{x} \) usa il logaritmo: scrivi \( x^{x} = e^{x \ln x} \).`,
                    `Combina le regole: un prodotto può contenere a sua volta una funzione composta.`
                ]
            }
        ],
        keyTakeaways: [
            `La derivata nasce come limite e descrive localmente la pendenza di una funzione.`,
            `Regole e derivate elementari permettono di affrontare espressioni complesse in modo sistematico.`,
            `Interpretare il segno e gli zeri di \( f'(x) \) guida l'analisi di massimi, minimi e monotonia.`,
            `Le trasformazioni algebriche facilitano la derivazione di potenze, logaritmi ed esponenziali composti.`,
            `Derivata prima e seconda, lette insieme, offrono un quadro dinamico del comportamento della funzione.`
        ]
    },
    limiti: {
        overview: [
            `I limiti rispondono a una domanda apparentemente semplice: "Cosa succede a una funzione quando ci avviciniamo a un certo punto?". Non sempre possiamo sostituire direttamente il valore nella funzione: potremmo incontrare zero al denominatore, espressioni non definite o comportamenti che esplodono. Il limite ci consente di guardare il comportamento della funzione senza fermarci davanti agli ostacoli, come se potessimo spiare oltre un muro.`,
            `Immagina di osservare un fiume che si avvicina a una cascata. Non possiamo vedere cosa succede nel punto esatto dove l'acqua cade, ma possiamo osservare come scorre sempre più velocemente mentre ci avviciniamo al bordo. Il limite descrive proprio questa tendenza: anche se il valore finale non è raggiungibile, possiamo capire a cosa tende la funzione.`,
            `Dal punto di vista formale scriviamo \( \lim_{x \to a} f(x) = L \) quando i valori di \( f(x) \) si avvicinano arbitrariamente a \( L \) man mano che \( x \) si avvicina ad \( a \). È come dire che possiamo rendere la differenza tra \( f(x) \) e \( L \) piccola quanto vogliamo, purché scegliamo \( x \) sufficientemente vicino ad \( a \). Questo concetto di "vicinanza controllata" è alla base dell'analisi matematica.`,
            `I limiti permettono di classificare le discontinuità. Se la funzione tende a valori diversi da sinistra e da destra abbiamo una discontinuità di prima specie; se tende all'infinito incontriamo una discontinuità di seconda specie. Comprendere la natura di questi salti è essenziale per sapere come proseguire con lo studio di funzione o con l'integrazione.`,
            `Molte strategie pratiche ci aiutano a calcolare i limiti: scomporre i polinomi, razionalizzare espressioni con radici, riconoscere forme notevoli come \( \frac{\sin x}{x} \) o \( (1+x)^{1/x} \). Quando la forma rimane indeterminata, possiamo ricorrere a sviluppi di Taylor o alla regola di de l'Hospital, che sfrutta le derivate per trasformare un problema difficile in uno più semplice.`,
            `Pensare ai limiti come a un'arte dell'avvicinamento ci aiuta a creare metafore efficaci: siamo esploratori che desiderano conoscere la temperatura alla soglia di un vulcano, architetti che valutano lo sforzo su una trave in un punto critico, programmatori che verificano la stabilità numerica di un algoritmo. Il limite è la risposta raffinata a tutte queste curiosità.`
        ],
        sections: [
            {
                title: "Comprendere le forme indeterminate",
                paragraphs: [
                    `Le forme indeterminate nascono quando sostituendo direttamente otteniamo espressioni come \( \frac{0}{0} \), \( \frac{\infty}{\infty} \), \( 0 \cdot \infty \) o \( 1^{\infty} \). Sono segnali che la funzione nasconde una struttura più fine che dobbiamo svelare. È come guardare un'ombra: senza luce aggiuntiva non distinguiamo la figura sottostante, ma con un nuovo punto di vista tutto diventa chiaro.`,
                    `Per esempio, nel limite \( \lim_{x \to 0} \frac{\sin x}{x} \) appare la forma \( \frac{0}{0} \). Usando lo sviluppo di Taylor \( \sin x = x - \frac{x^3}{6} + o(x^3) \) vediamo che il primo termine non nullo nel numeratore è proprio \( x \), che si semplifica con il denominatore. Il risultato finale è 1. Questo approccio funziona per molte funzioni elementari e ci insegna a guardare oltre la superficie.`
                ],
                list: [
                    `Scomposizione algebrica e fattorizzazione` ,
                    `Razionalizzazione di radici e denominatori` ,
                    `Uso di sviluppi di Taylor per isolare il termine dominante` ,
                    `Applicazione della regola di de l'Hospital quando è presente la forma \( \frac{0}{0} \) o \( \frac{\infty}{\infty} \)`
                ]
            },
            {
                title: "Regole e limiti notevoli a colpo d'occhio",
                paragraphs: [
                    `Avere sott'occhio le principali proprietà permette di riconoscere rapidamente la strategia da adottare. La tabella che segue riassume le regole algebriche di base, i limiti notevoli più usati e come trasformare le forme indeterminate più comuni.`
                ],
                tables: [
                    {
                        title: `Proprietà algebriche dei limiti`,
                        headers: [`Operazione`, `Regola`],
                        rows: [
                            [`Somma`, `\\( \\lim_{x \\to a} [f(x) + g(x)] = \\lim_{x \\to a} f(x) + \\lim_{x \\to a} g(x) \\)`],
                            [`Prodotto`, `\\( \\lim_{x \\to a} f(x)g(x) = (\\lim_{x \\to a} f(x))(\\lim_{x \\to a} g(x)) \\)`],
                            [`Quoziente`, `\\( \\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim f}{\\lim g} \\) con \\( \\lim_{x \\to a} g(x) \\neq 0 \\)`],
                            [`Potenza`, `\\( \\lim_{x \\to a} [f(x)]^n = (\\lim_{x \\to a} f(x))^n \\)`],
                            [`Composizione`, `Se \\( g(x) \\to L \\) e \\( f \\) è continua in \\( L \\) allora \\( \\lim_{x \\to a} f(g(x)) = f(L) \\)`]
                        ],
                        note: `Le proprietà valgono quando i limiti coinvolti esistono ed eventualmente sono finiti.`
                    },
                    {
                        title: `Limiti notevoli da ricordare`,
                        headers: [`Espressione`, `Valore`],
                        rows: [
                            [`\\( \\lim_{x \\to 0} \\frac{\\sin x}{x} \\)`, `\\( 1 \\)`],
                            [`\\( \\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} \\)`, `\\( \\tfrac{1}{2} \\)`],
                            [`\\( \\lim_{x \\to 0} \\frac{\\tan x}{x} \\)`, `\\( 1 \\)`],
                            [`\\( \\lim_{x \\to 0} \\frac{e^x - 1}{x} \\)`, `\\( 1 \\)`],
                            [`\\( \\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} \\)`, `\\( 1 \\)`],
                            [`\\( \\lim_{x \\to +\\infty} \\(1 + \\frac{1}{x}\\)^x \\)`, `\\( e \\)`],
                            [`\\( \\lim_{x \\to 0} (1+x)^{1/x} \\)`, `\\( e \\)`]
                        ]
                    },
                    {
                        title: `Strategie per forme indeterminate`,
                        headers: [`Situazione`, `Trasformazione utile`],
                        rows: [
                            [`\\( \\frac{0}{0} \\) o \\( \\frac{\\infty}{\\infty} \\)`, `Fattorizza, semplifica o applica de l'Hospital`],
                            [`\\( 0 \\cdot \\infty \\)`, `Raccogli o riscrivi come quoziente per applicare le regole precedenti`],
                            [`\\( \\infty - \\infty \\)`, `Razionalizza, porta a comune denominatore o sfrutta gerarchie di crescita`],
                            [`\\( 0^0, 1^{\\infty}, \\infty^0 \\)`, `Prendi il logaritmo, usa l'esponenziale e converti in prodotto/quoziente`],
                            [`Radicali`, `Moltiplica per la coniugata per eliminare la radice dal numeratore o dal denominatore`]
                        ]
                    }
                ]
            },
            {
                title: "Limiti all'infinito e comportamento asintotico",
                paragraphs: [
                    `Quando \( x \) cresce senza limiti vogliamo conoscere la tendenza della funzione. Polinomi e razionali si analizzano confrontando i gradi: se il grado del numeratore è minore di quello del denominatore il limite è zero, se è maggiore tende a infinito (positivo o negativo a seconda dei coefficienti), mentre se sono uguali il limite è il rapporto dei coefficienti principali. Questa analisi ci permette di identificare eventuali asintoti orizzontali o obliqui.`,
                    `Funzioni esponenziali e logaritmiche introducono scenari diversi. L'esponenziale domina i polinomi: \( \lim_{x \to +\infty} \frac{e^x}{x^n} = +\infty \). Il logaritmo cresce più lentamente di qualsiasi potenza: \( \lim_{x \to +\infty} \frac{\ln x}{x^\alpha} = 0 \) per \( \alpha > 0 \). Ricordare queste gerarchie è come avere una classifica delle velocità di crescita: ci dice quale termine "vince" quando \( x \) diventa enorme.`
                ],
                list: [
                    `Asintoti orizzontali: \( y = L \) se \( \lim_{x \to \pm\infty} f(x) = L \)` ,
                    `Asintoti obliqui: \( y = mx + q \) trovati calcolando \( m = \lim_{x \to \pm\infty} \frac{f(x)}{x} \)` ,
                    `Classifica delle crescite: logaritmi < potenze < esponenziali` ,
                    `Attenzione ai limiti oscillanti (ad esempio \( \sin x \) all'infinito) dove il limite non esiste`
                ]
            },
            {
                title: "Applicazioni dei limiti",
                paragraphs: [
                    `I limiti sono il fondamento del calcolo differenziale e integrale. Definiscono la continuità, le derivate e gli integrali. Ad esempio, l'integrale definito \( \int_a^b f(x)\,dx \) nasce come limite di somme di Riemann: approssimiamo l'area con rettangoli sempre più stretti finché la somma converge al valore esatto. Senza limiti non potremmo formalizzare queste idee intuitive.`,
                    `Nelle scienze applicate i limiti descrivono comportamenti di equilibrio o condizioni di stabilità. Un ingegnere li usa per capire come risponde una struttura a sollecitazioni estreme, un economista per studiare l'andamento di un mercato nel lungo periodo, un informatico per analizzare la complessità di un algoritmo quando i dati crescono. Il limite diventa così un binocolo per osservare il futuro o il comportamento in condizioni estreme.`
                ],
                list: [
                    `Definizione di continuità: \( f \) è continua in \( a \) se \( \lim_{x \to a} f(x) = f(a) \)` ,
                    `Fondamento di derivate e integrali` ,
                    `Studio degli asintoti nello studio di funzione` ,
                    `Analisi di stabilità e comportamento a lungo termine` ,
                    `Controllo di convergenza in serie e successioni`
                ]
            }
        ],
        keyTakeaways: [
            `Il limite descrive la tendenza di una funzione avvicinandosi a un punto o all'infinito.`,
            `Le forme indeterminate richiedono manipolazioni algebriche o strumenti come Taylor e de l'Hospital.`,
            `Comprendere la crescita relativa delle funzioni aiuta a studiare i limiti all'infinito.`,
            `I limiti classificano le discontinuità e guidano lo studio completo di una funzione.`,
            `Senza limiti non esisterebbero derivate, integrali e molte applicazioni quantitative.`
        ]
    },
    funzioni: {
        overview: [
            `Studiare una funzione significa raccontare la sua storia completa: dove vive, come si muove, quali picchi raggiunge, come si comporta all'infinito. È un viaggio che combina limiti, derivate e osservazione del grafico per ottenere una fotografia fedele del fenomeno modellato. Ogni funzione è come un personaggio con le sue caratteristiche: dominio, segno, crescenza, concavità.`,
            `Il dominio rappresenta il territorio in cui la funzione può essere valutata. Per \( f(x) = \frac{1}{x-2} \) dobbiamo escludere il valore 2 per evitare la divisione per zero; per \( g(x) = \sqrt{x-1} \) consideriamo solo \( x \ge 1 \). È come stabilire dove una strada è percorribile: alcuni tratti potrebbero essere chiusi per lavori o franati.`,
            `Una volta fissato il dominio analizziamo il segno per capire dove la funzione assume valori positivi o negativi. Questo passaggio è utile per interpretare soluzioni di equazioni o per comprendere fenomeni reali, ad esempio quando una quantità rappresenta un guadagno (positivo) o una perdita (negativo). La tabella dei segni è uno strumento visuale che mette in relazione gli zeri della funzione con il comportamento negli intervalli adiacenti.`,
            `Le derivate entrano in scena per descrivere la dinamica. La derivata prima \( f'(x) \) indica gli intervalli di crescita (quando è positiva) e di decrescita (quando è negativa). Gli zeri di \( f'(x) \) sono candidati a massimi e minimi relativi, proprio come colline e valli di un paesaggio. La derivata seconda \( f''(x) \) rivela concavità e convessità, informandoci se la curva "sorride" o "aggrotta le sopracciglia" in un dato intervallo.`,
            `Analizzare i limiti agli estremi del dominio o all'infinito ci aiuta a trovare asintoti e a prevedere il comportamento lontano dall'origine. Se \( f(x) \) tende a un valore finito, avremo un asintoto orizzontale; se si avvicina a una retta obliqua, calcoliamo \( m \) e \( q \) per descriverla. In presenza di punti esclusi dal dominio valutiamo i limiti laterali per capire se la funzione diverge o se possiamo estenderla per continuità.`,
            `Infine, sintetizziamo tutte le informazioni in un grafico qualitativo. È come montare un film a partire da diverse scene: mettiamo insieme dominio, segno, derivata, derivata seconda, asintoti e punti notevoli per ottenere un quadro coerente. Questo processo non solo permette di disegnare la funzione, ma anche di interpretarla nel contesto applicativo da cui nasce.`
        ],
        sections: [
            {
                title: "Dalla tabella del segno al grafico",
                paragraphs: [
                    `La tabella del segno è uno strumento potente. Per costruirla individuiamo gli zeri della funzione e i punti che rendono nullo il denominatore o l'argomento di una radice. Dividiamo il dominio in intervalli e scegliamo un valore di test per ciascuno. Il segno del risultato ci dice se il grafico sta sopra o sotto l'asse delle ascisse. È come accendere luci verdi dove la funzione è positiva e rosse dove è negativa.`,
                    `Questa analisi prepara il terreno per la derivata prima. Quando \( f'(x) > 0 \) la funzione sale, quando \( f'(x) < 0 \) scende. In corrispondenza di un cambio di segno da positivo a negativo troviamo un massimo relativo; da negativo a positivo un minimo relativo. Annotando questi passaggi costruiamo una vera e propria mappa dei rilievi del grafico.`
                ],
                list: [
                    `Trova zeri e punti critici del dominio` ,
                    `Dividi il dominio in intervalli e valuta il segno della funzione` ,
                    `Analizza il segno della derivata prima per determinare crescita e decrescita` ,
                    `Combina le informazioni per prevedere la forma del grafico`
                ],
                tables: [
                    {
                        title: `Schema operativo per lo studio di funzione`,
                        headers: [`Passaggio`, `Cosa controllare`],
                        rows: [
                            [`Dominio`, `Escludi denominatori nulli, argomenti negativi di radici pari, logaritmi con argomento non positivo.`],
                            [`Intersezioni`, `Calcola \( f(0) \) e risolvi \( f(x) = 0 \) per trovare eventuali incroci con gli assi.`],
                            [`Segno`, `Costruisci la tabella dei segni usando zeri e punti critici del dominio per capire dove \( f(x) \) è positiva o negativa.`],
                            [`Derivata prima`, `Trova \( f'(x) \), studiane il segno e individua massimi/minimi relativi e punti stazionari.`],
                            [`Derivata seconda`, `Analizza \( f''(x) \) per concavità e flessi, verificando eventuali cambi di segno.`],
                            [`Limiti`, `Valuta i limiti ai bordi del dominio e all'infinito per trovare asintoti e comportamenti estremi.`],
                            [`Sintesi grafica`, `Riassumi le informazioni in un grafico qualitativo indicando punti notevoli, tratti crescenti/decrescenti e concavità.`]
                        ]
                    }
                ]
            },
            {
                title: "Concavità, flessi e interpretazioni geometriche",
                paragraphs: [
                    `La derivata seconda racconta come cambia la pendenza. Se \( f''(x) > 0 \) la funzione è convessa: il grafico sembra una ciotola che raccoglie acqua. Se \( f''(x) < 0 \) è concava: appare come un arco. Quando \( f''(x) = 0 \) e cambia segno siamo davanti a un punto di flesso, un tratto in cui la curva cambia curvatura. È come passare da una salita a una discesa dolce, come se la strada cambiasse inclinazione.`,
                    `Interpretare la concavità è utile anche in ottimizzazione: una funzione concava con derivata prima nulla rappresenta un massimo globale, mentre una convessa indica un minimo globale. Questi concetti sono fondamentali in economia, dove il grafico del profitto o dei costi marginali dipende dalla curvatura, e in fisica, dove la forma delle traiettorie rivela la presenza di forze acceleranti o deceleranti.`
                ],
                list: [
                    `Calcola \( f''(x) \) e analizza il segno sugli intervalli del dominio` ,
                    `Individua i punti in cui \( f''(x) = 0 \) o non esiste e verifica il cambio di concavità` ,
                    `Classifica massimi, minimi e flessi combinando \( f' \) e \( f'' \)` ,
                    `Traccia qualitativamente il grafico annotando concavità e tangenti`
                ]
            },
            {
                title: "Mettere tutto insieme: un esempio completo",
                paragraphs: [
                    `Consideriamo \( f(x) = \frac{x^2+1}{x-1} \). Il dominio esclude \( x = 1 \). Gli zeri si trovano risolvendo \( x^2 + 1 = 0 \): non esistono reali, quindi la funzione non interseca l'asse delle ascisse. Calcoliamo la derivata prima \( f'(x) = \frac{x^2 - 2x - 1}{(x-1)^2} \). Ponendola uguale a zero otteniamo i punti critici \( x = 1 \pm \sqrt{2} \). Studiamo il segno di \( f' \) per capire dove cresce o decresce.`,
                    `I limiti per \( x \to 1^- \) e \( x \to 1^+ \) rivelano un asintoto verticale: il valore tende a \( -\infty \) da sinistra e a \( +\infty \) da destra. Per \( x \to \pm\infty \) eseguiamo la divisione tra polinomi e troviamo l'asintoto obliquo \( y = x + 1 \). Combinando queste informazioni possiamo disegnare un grafico coerente, riconoscere le zone di crescita, identificare il flesso e discutere il comportamento complessivo della funzione.`
                ],
                list: [
                    `Dominio: \( \mathbb{R} \setminus \{1\} \)` ,
                    `Derivata prima e punti critici: \( x = 1 \pm \sqrt{2} \)` ,
                    `Asintoto verticale: \( x = 1 \) con limiti di segno opposto` ,
                    `Asintoto obliquo: \( y = x + 1 \)` ,
                    `Nessun punto di intersezione con l'asse \( x \)`
                ]
            }
        ],
        keyTakeaways: [
            `Lo studio di funzione è un processo integrato che combina dominio, segno, limiti e derivate.`,
            `La derivata prima e la seconda offrono una lettura dinamica della crescita e della curvatura.`,
            `Gli asintoti descrivono il comportamento lontano dai punti regolari o esclusi.`,
            `Tabelle dei segni e analisi dei punti critici guidano la rappresentazione grafica.`,
            `Integrare le informazioni numeriche con interpretazioni concrete rende la teoria più memorabile.`
        ]
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

    const overview = (content.overview || []).map(paragraph => `<p>${paragraph}</p>`).join('');
    const sections = (content.sections || []).map(section => `
        <section class="theory-subsection">
            <h4>${section.title}</h4>
            ${(section.paragraphs || []).map(text => `<p>${text}</p>`).join('')}
            ${section.list ? `<ul>${section.list.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
            ${(section.tables || []).map(table => `
                <div class="theory-table">
                    ${table.title ? `<h5>${table.title}</h5>` : ''}
                    <table>
                        ${table.headers ? `<thead><tr>${table.headers.map(header => `<th>${header}</th>`).join('')}</tr></thead>` : ''}
                        <tbody>
                            ${(table.rows || []).map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
                        </tbody>
                    </table>
                    ${table.note ? `<p class="table-note">${table.note}</p>` : ''}
                </div>
            `).join('')}
        </section>
    `).join('');
    const takeaways = (content.keyTakeaways || []).map(point => `<li>${point}</li>`).join('');

    container.innerHTML = `
        <article class="theory-card">
            <h3>${exercises[topicKey].label}</h3>
            ${overview}
            ${sections}
            ${takeaways ? `<h4>Idee chiave da ricordare</h4><ul>${takeaways}</ul>` : ''}
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
    if (!question) {
        const reminder = document.createElement('div');
        reminder.className = 'chat-bubble';
        reminder.innerHTML = `
            <h4>Assistente GPT</h4>
            <p>Scrivi il tuo dubbio o una parola chiave, ad esempio "limiti" o "studio di funzione", e ti risponderò subito.</p>
        `;
        responses.prepend(reminder);
        return;
    }

    const reply = buildChatbotReply(question);

    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble user';
    userBubble.innerHTML = `
        <h4>Tu</h4>
        <p>${question}</p>
    `;

    const assistantBubble = document.createElement('div');
    assistantBubble.className = 'chat-bubble';
    assistantBubble.innerHTML = `
        <h4>Assistente GPT</h4>
        <p>${reply}</p>
    `;

    responses.prepend(assistantBubble);
    responses.prepend(userBubble);
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
