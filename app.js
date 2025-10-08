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
        overview: [
            `Le derivate sono come una lente d'ingrandimento che ci permette di osservare il comportamento di una funzione in un punto preciso. Se una funzione descrive un fenomeno – l'altezza di un razzo, la temperatura di un metallo o il costo di produzione di un'azienda – la derivata ci dice come quel fenomeno sta cambiando proprio in quell'istante. È il ritmo del cambiamento, la velocità con cui il grafico sale o scende, il modo in cui una curva si piega mentre la osserviamo.`,
            `Per immaginare una derivata pensa a una strada di montagna. La funzione è il percorso che stiamo seguendo, mentre la derivata è l'inclinazione della strada sotto le nostre ruote. Una pendenza positiva indica che stiamo salendo, una negativa che stiamo scendendo. Se la derivata vale zero, la strada è in piano: siamo arrivati su un valico o in un punto di svolta. Questa visione geometrica lega le derivate alla tangente, la retta che tocca il grafico senza attraversarlo: la sua inclinazione coincide con il valore della derivata.`,
            `Dal punto di vista analitico la derivata nasce dal limite del rapporto incrementale. Consideriamo due punti vicini della funzione, distanti di un piccolissimo \( h \). Il rapporto \( \frac{f(x+h) - f(x)}{h} \) misura quanto cambia il valore della funzione rispetto alla variazione di input. Facendo tendere \( h \) a zero chiediamo: "Qual è la variazione istantanea?". Se il limite esiste otteniamo \( f'(x) \), la derivata di \( f \) nel punto \( x \). È come passare da una fotografia sfocata a una nitidissima, eliminando tutti i movimenti superflui.`,
            `La derivata non esiste sempre. Spigoli, cuspidi o buchi nel grafico rompono la continuità necessaria. Pensiamo al valore assoluto \( f(x) = |x| \): la pendenza a sinistra dello zero è -1, quella a destra è +1, ma al centro non esiste un unico valore di pendenza. Questo ricorda che la derivata è uno strumento delicato: prima di usarla dobbiamo verificare che la funzione sia abbastanza liscia e che il limite sia definito.`,
            `Una volta che la derivata è definita possiamo interpretarla in mille modi. In fisica è la velocità (derivata dello spostamento), poi l'accelerazione (derivata della velocità). In economia indica il margine di guadagno quando produciamo una unità in più. In biologia descrive la crescita istantanea di una popolazione batterica. In tutti i casi, la derivata racconta come una quantità reagisce a una piccola perturbazione.`,
            `Ricordiamo anche che le derivate funzionano come un linguaggio: attraverso loro possiamo risolvere equazioni, trovare massimi e minimi, costruire approssimazioni locali tramite polinomi di Taylor. È il ponte che unisce l'analisi dei grafici alla comprensione profonda dei processi dinamici, permettendoci di prevedere e controllare ciò che accade.`
        ],
        sections: [
            {
                title: "Dal rapporto incrementale alla tangente",
                paragraphs: [
                    `Per capire perché il limite \( \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} \) è così importante immagina di voler misurare la velocità di un'auto senza un tachimetro. Potresti segnare su un taccuino le distanze percorse ogni secondo e calcolare quanto spazio hai coperto in un intervallo \( h \). Più restringi l'intervallo, più il tuo valore si avvicina alla velocità reale. Questo processo di raffinamento è esattamente ciò che fa il limite nella definizione di derivata.`,
                    `Dal punto di vista geometrico il limite crea la tangente alla curva. Prendiamo due punti \( A(x, f(x)) \) e \( B(x+h, f(x+h)) \). La retta secante che li congiunge ha pendenza pari al rapporto incrementale. Quando \( h \) diventa sempre più piccolo, il punto B scivola verso A e la secante ruota fino a diventare tangente. La derivata è la pendenza di quella tangente, la migliore approssimazione lineare della funzione vicino al punto considerato.`
                ],
                list: [
                    `Scrivi il rapporto incrementale \( \frac{f(x+h) - f(x)}{h} \)` ,
                    `Semplifica se possibile, sfruttando la struttura della funzione` ,
                    `Calcola il limite per \( h \to 0 \) per ottenere \( f'(x) \)` ,
                    `Interpreta il risultato come pendenza della tangente o velocità istantanea`
                ]
            },
            {
                title: "Regole operative e strategie",
                paragraphs: [
                    `Sebbene la definizione di derivata passi dai limiti, nella pratica quotidiana utilizziamo un set di regole che rende i calcoli rapidi. Sono come gli attrezzi di una cassetta: ognuno serve a risolvere un tipo di problema e spesso li usiamo in combinazione. Ricordando poche formule fondamentali possiamo derivare polinomi, funzioni trigonometriche, esponenziali, logaritmi e loro composizioni.`,
                    `Le regole si basano sulle proprietà del limite e dell'algebra delle funzioni. Ad esempio la derivata della somma è la somma delle derivate, la derivata del prodotto \( (fg)' = f'g + fg' \) segue la logica della distribuzione delle variazioni tra i due fattori, mentre la regola della catena \( (f \circ g)'(x) = f'(g(x)) \cdot g'(x) \) ci ricorda che quando un processo è composto da più fasi dobbiamo moltiplicare le velocità di ciascun passaggio.`
                ],
                list: [
                    `Regola della potenza: \( \frac{d}{dx} x^n = n x^{n-1} \)` ,
                    `Derivate fondamentali: \( (e^x)' = e^x \), \( (\ln x)' = \frac{1}{x} \), \( (\sin x)' = \cos x \), \( (\cos x)' = -\sin x \)` ,
                    `Regola del prodotto e del quoziente per combinare funzioni` ,
                    `Regola della catena per funzioni composte` ,
                    `Uso di trasformazioni (ad esempio logaritmi) per semplificare casi complessi`
                ]
            },
            {
                title: "Applicazioni e interpretazioni",
                paragraphs: [
                    `Le derivate ci guidano nell'identificazione di massimi e minimi: punti in cui la funzione cambia direzione. Analizzando \( f'(x) = 0 \) e studiandone il segno possiamo capire se un punto è un picco, una valle o un flesso. Con la derivata seconda \( f''(x) \) valutiamo quanto la curva si incurva, distinguendo concavità e convessità e prevedendo la stabilità di un sistema.`,
                    `Oltre alla geometria, la derivata appare quando vogliamo ottimizzare. In economia significa trovare il prezzo che massimizza il profitto; in ingegneria scegliere la forma di un componente che riduce la resistenza; in informatica addestrare una rete neurale aggiornando i pesi lungo la direzione del gradiente. Ogni volta che cerchiamo "la migliore scelta locale", le derivate sono lo strumento che ci indica la direzione.`
                ],
                list: [
                    `Ottimizzazione di funzioni: analisi di \( f'(x) = 0 \) e studio del segno di \( f''(x) \)` ,
                    `Approssimazioni locali tramite polinomi di Taylor` ,
                    `Studio del moto: posizione, velocità, accelerazione` ,
                    `Analisi di sensibilità: come cambia un risultato al variare di un parametro` ,
                    `Controllo di sistemi dinamici e previsione di trend`
                ]
            }
        ],
        keyTakeaways: [
            `La derivata è il limite del rapporto incrementale e misura il cambiamento istantaneo.`,
            `La pendenza della tangente al grafico nel punto \( x \) coincide con \( f'(x) \).`,
            `Le regole operative (somma, prodotto, catena) permettono di derivare funzioni complesse.`,
            `La derivata seconda descrive la curvatura e aiuta a classificare massimi, minimi e flessi.`,
            `Comprendere le derivate significa saper leggere e controllare fenomeni dinamici del mondo reale.`
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
