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
    -  * I branch erano divisi in: 
        - [Header](https://github.com/CodeYouness/proj-html-vuejs/tree/1-work-on-header-component) -> [Marco Saccone](https://github.com/MarcoSac1)
        - Main 
            ├──[Caroselli](https://github.com/CodeYouness/proj-html-vuejs/tree/3-mainsmallcarousel)-> [Youness lijassi](https://github.com/CodeYouness)
            ├──[Post suggeriti](https://github.com/CodeYouness/proj-html-vuejs/tree/4-mainjumbotron)-> [Carla Lazzari](https://github.com/lazzaric92)
            └──[Player e card statiche](https://github.com/CodeYouness/proj-html-vuejs/tree/6-mainplayer)-> [Marco Pensabene](https://github.com/MarcoMpensabene)
        - [Footer](https://github.com/CodeYouness/proj-html-vuejs/tree/2-work-on-footer-component)

- Ogni persona del team aveva a disposizione un proprio componente, con degli obiettivi già prefissati

### 
