# ANIME

## Tecnologie utilizzate

### [store.js](./src/store.js)

- Considerando che ogni persona del Team lavorava attraverso il proprio component (che inizialmente era personale), il modo più efficente di lavorare era attraverso uno store in comune con tutti, questo per rendere possibile poi un futuro cambiamento degli assets (risultatasi poi la scelta vincente).

### [stile](./src/styles)

- La palette dei colori è stata inserita in [variable.scss](./src/styles/partials/_variable.scss), questo perchè rende più facile un futuro cambiamento del colore principale (che nel nostro caso è il rosso) e di tutti gli hover (grigi nel caso dei loghi social)
- In [general.scss](./src/styles/general.scss) abbiamo cambiato il font (sans-serif) e abbiamo modificato in "none" il list-style-type delle liste

### NPM

- [FontAwesome](https://fontawesome.com/)
    - avevamo la necessità di utlizzare le icone già pronte di FontAwesome attraverso la NPM
- [Bootstrap](https://getbootstrap.com/)
    - Bootstrap ci tornava utile per tutta una serie di elementi che si ripetevano anche se in modo non identico tra di loro come:
        1. Card
        2. Badge in overlay sulle card
        3. Bottone 
        4. NavBar
    - Applicare misure e stili predefiniti
    - Utilizzare script pronti per:
        1. Menù a tendina
        2. Offcanvas
- [Axios](https://www.npmjs.com/package/axios)
    - Necessario per eseguire la chiamata API
- [Sass](https://www.npmjs.com/package/sass)

### Struttura lavorativa del progetto

    .  
    ├── public  
    │   └── [index.html]  
    ├── src  
    │   ├── Assets  
    │   │   └── [Immagini]  
    │   ├── Components  
    │   │   └── [Componenti]  
    │   ├── Styles  
    │   │   ├── [General.scss]  
    │   │   └── partials  
    │   │       └── [Variabili]  
    │   ├── [App.vue]  
    │   ├── [Main.js]  
    │   └── [Store.js]  
    ├── [Readme.md]  
    └── [.gitignore]  

- Lo scaffholding di base è stato fatto direttamente in Main, questo per poi aprire dei brench "Ready&Go"
    - * I branch erano divisi in: 
        - [Header](https://github.com/CodeYouness/proj-html-vuejs/tree/1-work-on-header-component) -> [Marco Saccone](https://github.com/MarcoSac1)
        - Main 
            ├──[Caroselli](https://github.com/CodeYouness/proj-html-vuejs/tree/3-mainsmallcarousel)-> [Youness lijassi](https://github.com/CodeYouness)
            ├──[Post suggeriti](https://github.com/CodeYouness/proj-html-vuejs/tree/4-mainjumbotron)-> [Carla Lazzari](https://github.com/lazzaric92)
            └──[Player e card statiche](https://github.com/CodeYouness/proj-html-vuejs/tree/6-mainplayer)-> [Marco Pensabene](https://github.com/MarcoMpensabene)
        - [Footer](https://github.com/CodeYouness/proj-html-vuejs/tree/2-work-on-footer-component)-> [Lorenzo Paris](https://github.com/LorenzoParis1996)

- Ogni persona del team aveva a disposizione un proprio componente, con degli obiettivi già prefissati, in modo tale che ognuno potesse concentrarsi sul proprio lavoro, i propri problemi e dunque lavorare in focus

## [Header](https://github.com/CodeYouness/proj-html-vuejs/tree/1-work-on-header-component)
### Branch: 1-work-on-header-component di [Marco Saccone](https://github.com/MarcoSac1)
- dopo un analisi della pagina ho iniziato a lavorare per step andando a determinare le varie sezioni che compongono l'header al suo interno troviamo:
    - Un component dedicato al [carosello](./src/components/HeaderSmallCarousel.vue) fatto da [Carla Lazzari](https://github.com/lazzaric92)
    - la section dedicata al banner e al logo principale
    - Un component dedicato alla nav-bar che contiene anche un Hamburger menù dedicato all'apertura dell'offcanvas
- Tutti gli elementi clicccabili di questo componente hanno l'hover per richiamare questa funzionalità

## Main
### Branch: 3-mainsmallcarousel di [Youness lijassi](https://github.com/CodeYouness)
- Il punto principale del carosello era quello di rendere la funzione il più compatibile possibile con il diverso numero di oggetti presenti nel carosello, la struttura quindi si svolge in questo modo:
    1. In AppMain si svolge la chiamata all'API che riempie in store.js un array denominato apiList
        - nello stesso component è presente la funzione che riempie un array nuovo con il numero di oggetti necessari per il carosello (3 per il carosello inferiore e 4 per il carosello superiore), questo perchè era necessario che la funzione di riempimento dell'array dedicato al carosello venisse richiamato nella stessa funzione della chiamata API ALTRIMENTI la risposta alla chiamata api arrivava successivamente alla chiamata della funzione di riempimento dell' array, cio comportava il fatto di trovarsi con un array vuoto e dunque senza carosello
        - tramite props avveniva il passaggio dell'array utile al carosello
    2. In MainSmallCarousel arrivava la props con gli oggetti, da qui con un v-for si aveva il numero di card necessari all'interno del carosello
        - la funzione di avanzamento del carosello funziona cosi:
            1. elimina l oggetto 0 dell array
            2. aggiunge nell ultima posizione l oggetto al numero di una variabile
            3. aggiorna la variabile del numero dell oggetto (aggiunge 1 al numero e ritorna a 0 nel momento in cui arrivi al massimo)
            4. aggiorna la variabile dedicata allo scorrimento all indiettro (dalla variabile opposta tolgo 4 e aggiungo la lunghezza dell array in store, e ritorno a 0 nel momento in cui arrivi al massimo)
        - la funzione di scorrimento all indietro invece:
            1. elimina l oggetto all ultima posizione dell array 
            2. aggiunge alla posizione 0 (facendo scorrere alla posizione successiva gli altri oggetti)
            3. aggiorna la variabile dell'oggeto da includere (facendo -1 al numero iniziale e aggiungendo la lunghezza totale)
            4. aggiorna la variabile dedicata all avanzamento
    3. Lo scorrimento avviene con un timer di 5 secondi che però si interrompe quando ci si va sopra con il mouse
    4. L'ultima funzione è dedicata alla selezione del tipo di evento per i badge presenti in overlay sull immagine delle card, la funzione rimuove la dicitura "convention" (che non è una tipologia ma specifica solo la macro categoria) e suddivide ogni parola, dunque se una convention avesse 3 categorie (oltre alla dicitura convention), nell immagine si presenterebbero 3 badge con le 3 categorie diverse


### Branch: 4-mainjumbotron di [Carla Lazzari](https://github.com/lazzaric92)
- Nella sezione delle notizie di tendenza i post vengono filtrati tramite id e, sempre tramite id, si sceglie quale post avrà rilevanza maggiore e occuperà la porzione centrale.
- Ogni post è corredato di:
    - immagine
    - titolo
    - nome dell'autore
    - data
    - categorie di appartenenza (gli articoli sono popolati dinamicamente).
- Nella sezione successiva ci sono i post delle categorie lifestyle e stories: cliccando sui bottoni l'array in store.js viene filtrato, dall'array filtrato 4 oggetti randomici vengono inseriti nell'array degli elementi da mostrare in pagina  (ovviamente solo nel caso in cui l'array filtrato abbia lunghezza maggiore o uguale a 4, in caso contrario l'array filtrato e l'array degli elementi da mostrare in pagina coincideranno). 

### Branch: 6-mainplayer di [Marco Pensabene](https://github.com/MarcoMpensabene)
Per l'implementazione del player ho scelto di utilizzare la funzionalità condividi fornita da youtube per incorporare il video direttamente nella pagina per poi gestire a mano la parte della playlist.
- La playlist è stata gestita:
    - parte grafica tramite scss/css/boostrap
        - utilizzo di boostrap per il wrapper principale , utilizzo di scss per i dettagli come hover e dimensioni
    - gestione dei dati tramite Vue 3 
        - costruzione di un array di oggetti che tramite un v-for riempie gli elementi dell'html dinamicamente
    - funzionalità di base (cambio del video principale cliccando sull'elemento della playlist) direttamente in js
        - Funzionalità gestita creando una piccola funzione js che ha come argomento l'index dell'array e all'interno una     semplice assegnazione per gestire l'url corrente con un altro di indice diverso ed infine la funzione viene chiamata     tramite l'evento di @click tramite vue3 nell'elemento html.

### Branch: 2-work-on-footer-component di [Lorenzo Paris](https://github.com/LorenzoParis1996)
- Per la componente del footer ho creato nello script un array di oggetti che: 
    - una volta stilizzato il contenitore del componente, avrei richiamato con un v-for in modo da avere i dati renderizzati in pagina e ricreare le liste facenti da link.
- Successivamente mi sono occupato di aggiungere l'input col bottone,la linea separante e il logo e testo di copyright. 
- Una volta popolato il container con tutto il contenuto, mi sono occupato dei micro dettagli come gli hover sui link per richiamare il fatto che fosse un elemento cliccabile e il bottone, in modo da ricreare il piu' fedelmente possibile come dal sito demo.
- Infine, ho creato un metodo per simulare, al click del bottone, l'apparizione di un messaggio
