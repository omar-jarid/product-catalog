# Product Catalog

Questo progetto è una semplice web app di un e-commerce, con catalogo prodotti e carrello, realizzata in HTML, CSS e JavaScript vanilla.

## Funzionalità principali

- **Visualizzazione prodotti:** I prodotti vengono mostrati in una griglia responsive, ognuno con immagine, nome, prezzo e pulsante "Add to Cart".
- **Ricerca prodotti:** È presente una barra di ricerca che permette di filtrare i prodotti per nome o categoria.
- **Carrello:** Puoi aggiungere prodotti al carrello, visualizzare il contenuto, vedere il totale e svuotare il carrello.
- **Navigazione a sezioni:** Il menu in alto permette di navigare tra le sezioni della pagina (prodotti, informazioni, contatti) con scroll animato.
- **Responsive design:** Il layout si adatta a tutte le dimensioni di schermo. Il progetto è stato concepito come mobile-first.

## Come funziona

1. **Catalogo dinamico:**  
   I prodotti sono gestiti tramite un array JavaScript (`productCatalog`). La funzione `showCatalog()` guarda il numero di elementi del catalogo e per ogni elemento crea dinamicamente una card prodotto, visualizzando un messaggio se il catalogo è vuoto.

2. **Ricerca:**  
   L’utente può digitare nella barra di ricerca e cliccare il pulsante "Search" per filtrare i prodotti. La funzione `filterProducts()` aggiorna la griglia mostrando solo le card dei prodotti che corrispondono al testo inserito, mostrando un messaggio se non ci sono corrispondenze.

3. **Gestione carrello:**  
   Cliccando "Add to Cart" su un prodotto, questo viene aggiunto al carrello (array `cart`). Se il prodotto è già presente, ne aumenta la quantità, aggiornando il subtotale per ogni prodotto e il totale complessivo. L'utente può inoltre rimuovere uno o più elementi dal carrello (se l'elemento è presente più di una volta, ne viene rimosso uno, altrimenti viene proprio rimosso totalmente, e subtotale e totale vengono ricalcolati) e svuotare il carrello con il pulsante "Clear Cart".

4. **Navigazione:**  
   Il menu di navigazione usa ancore HTML (`#products`, `#cart`, `#about`, `#contact`) e lo scroll è animato tramite la regola CSS `scroll-behavior: smooth`.

## Struttura dei file

- `index.html` — Struttura della pagina e delle sezioni.
- `css/style.css` — Stili, layout responsive e animazioni.
- `script.js` — Gestione dinamica di prodotti, carrello e ricerca.