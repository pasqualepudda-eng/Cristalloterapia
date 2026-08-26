# Alchimia Interiore — mockup del sito

Mockup navigabile di **Alchimia Interiore**, costruito sulla struttura e sul design system
di yogaalliance.org e riscritto integralmente con i contenuti del catalogo sessioni e percorsi.
**49 pagine**, tutte in italiano.

Payoff: *Trasforma la tua energia. Trasforma la tua vita come la desideri.*

## Come mostrarlo

Il mockup gira sulla **porta 5500**.

**A. Live Server di VS Code** — con questa cartella aperta e "Go Live" acceso:

    http://127.0.0.1:5500/

**B. Server dedicato** — doppio clic su **`avvia.command`**.

Da terminale, dentro questa cartella:

    python3 -m http.server 5500 --bind 127.0.0.1

Il sito sta nella radice del progetto: l'indirizzo e' diretto, senza sottocartelle.

> Usa `127.0.0.1` e non `localhost`: se hai altri server sulla stessa porta, `localhost`
> puo' risolvere prima su IPv6 e finire su quelli.

## Architettura del sito

**Le Sessioni** (4 sessioni singole, circa 60 minuti, online)

| Voce | Prezzo | File |
|---|---|---|
| Reiki Energia dal Mare | € 99 | `/reiki-energia-dal-mare/` |
| Reiki Usui con Cristalli | € 99 | `/reiki-usui-con-cristalli/` |
| Fiori di Bach con Codici Lemuriani | € 99 | `/fiori-di-bach-con-codici/` |
| Cristalloterapia Eterica con 11 Intenti | da € 119 | `/cristalloterapia-eterica/` |
| Gli 11 Cristalli Intento (guida) | — | `/intenti/` |
| Come funziona a distanza | — | `/come-funziona-a-distanza/` |

**I Percorsi** (tutti a distanza, con colloquio iniziale di 60 minuti)

| Percorso | Composizione | Prezzo | File |
|---|---|---|---|
| Oceano | 5 sessioni Reiki Energia dal Mare | € 449 (€ 495) | `/percorso-oceano/` |
| Stella | 5 sessioni Reiki Usui + Cristalloterapia | € 449 (€ 495) | `/percorso-stella/` |
| Sole | 5 Fiori di Bach + 5 Reiki dal Mare | € 929 (€ 990) | `/percorso-sole/` |
| Arcobaleno | 5 Fiori + 5 Reiki Usui con Cristalli | € 929 (€ 990) | `/percorso-arcobaleno/` |
| Gold | 13 incontri + Sigillo Luce Diamantina | € 1.069 (€ 1.228) | `/percorso-gold/` |
| Premium | 14 sessioni + Sigillo Ritorno al Cuore | € 1.109 (€ 1.347) | `/percorso-premium/` |
| Five Stars | 14 sessioni, 11 Intenti + Sigillo Stella Cometa | € 1.149 (€ 1.429) | `/percorso-five-stars/` |
| Confronta i percorsi | tutti e sette a confronto | — | `/confronta-i-percorsi/` |

**Di più / footer**

| Voce | File |
|---|---|
| Prenota una sessione | `/prenota/` |
| Domande Frequenti | `/domande-frequenti/` |
| Area riservata | `/area-riservata/` |
| Prezzi (listino completo) | `/prezzi/` |
| Newsletter | `/newsletter/` |
| Testimonianze | `/testimonianze/` |
| Eventi in presenza | `/eventi-in-presenza/` |

**Approfondimenti** — un argomento, una pagina

| Argomento | File |
|---|---|
| I Sette Chakra | `/sette-chakra/` |
| I Codici Lemuriani | `/codici-lemuriani/` |
| I 38 Fiori di Bach | `/fiori-di-bach/` |
| La boccetta in erboristeria | `/boccetta-erboristeria/` |
| La musica di guarigione | `/musica-di-guarigione/` |
| La sfera di luce | `/sfera-di-luce/` |
| La griglia di cristalli | `/griglia-di-cristalli/` |
| I Sigilli | `/sigilli/` |
| La scheda cliente | `/scheda-cliente/` |

**Gli 11 Cristalli Intento** — una pagina ciascuno, indicizzate da `/intenti/`

`intento-abbondanza` · `intento-portale-lemuriano` · `intento-iside` ·
`intento-aura-angelo` · `intento-ponte-quarzo` · `intento-chiave-quarzo` ·
`intento-fantasma-quarzo` · `intento-apofillite` · `intento-guardiano-registri` ·
`intento-fiamma-gemella` · `intento-collegamenti-temporali`
| Chi sono | `/chi-sono/` |
| Formazione e metodo | `/formazione-e-metodo/` |
| Contatti | `/contatti/` |
| Note legali | `/note-legali/` |
| Privacy Policy | `/privacy-policy/` |
| Condizioni d'uso | `/condizioni-uso/` |
| Disclaimer | `/disclaimer/` |

I nomi dei file corrispondono al servizio contenuto in ogni pagina.

## Che cosa e' stato fatto

- **Copy**: tutte le sessioni, i sette percorsi, i prezzi (pieni e scontati), gli 11 Cristalli
  Intento, la formazione e il disclaimer sono presi **dal catalogo PDF**, non inventati.
- **Marchio**: wordmark "ALCHIMIA INTERIORE" in SVG con font Outfit incorporato
  (`assets/logo-sibilo-*.svg`, chiaro e scuro).
- **Palette**: convertita dal verde-petrolio originale al **viola e oro** del catalogo,
  via override delle variabili Bricks (`<style id="palette-alchimia">` in ogni pagina).
- **Foto**: 25 immagini in `assets/img/`, tutte **CC0 / pubblico dominio** da Openverse,
  assegnate per argomento (balena e mare per l'Energia dal Mare, ametista e cristalli per la
  Cristalloterapia, fiori di campo per Bach, arcobaleno per il percorso omonimo).
  Elenco e fonti in [CREDITI.md](CREDITI.md).
- **Video hero**: `assets/132764-754897587_small.mp4`, il file che hai fornito.
- **Tracciamento**: Google Tag Manager, GA4 e MonsterInsights rimossi.

## Da completare prima di andare online

- **Contatti**: WhatsApp, email, Instagram e Facebook sono **segnaposto** ("da inserire"),
  perche' nel catalogo i campi sono vuoti. Vanno compilati in `/contatti/`.
- **Dati fiscali**: ragione sociale, indirizzo e P.IVA sono da inserire nelle pagine legali.
  Il catalogo non riporta una sede: il sito indica "in tutta Italia" per gli eventi in presenza.
- **Nome della titolare**: non compare nel catalogo, quindi il sito parla in prima persona
  senza firma. Se va aggiunto, e' un search/replace.
- **Testimonianze**: non ce ne sono nel catalogo, quindi non esiste una pagina dedicata.
  Se ne raccogli, la struttura piu' adatta e' `/intenti/`.
- **Privacy e condizioni d'uso**: testi generici su modello GDPR, **da far validare**.
  Il Disclaimer, invece, riporta il testo del catalogo.
- **Foto**: sono di repertorio. Sostituendo i file in `assets/img/` con gli stessi nomi,
  il sito si aggiorna da solo senza toccare l'HTML.

## Prenotazione con calendario

`/prenota/` ospita un sistema di prenotazione in quattro passaggi, scritto in JavaScript
puro (nessuna libreria, funziona offline):

1. **Servizio** — le 4 sessioni singole e i 7 percorsi, con il prezzo di ciascuno.
2. **Modalita'** — online oppure in presenza. Le opzioni si filtrano da sole: i percorsi
   lunghi non propongono la presenza.
3. **Giorno e ora** — calendario navigabile mese per mese, con i giorni passati e le
   domeniche disabilitati, oggi evidenziato in oro, e fasce orarie diverse fra online
   (6 slot) e presenza (5 slot).
4. **Dati** — nome, email, telefono, messaggio e consenso privacy obbligatorio.

Un riepilogo laterale sticky si aggiorna a ogni scelta e mostra l'investimento. Al termine
il testo della richiesta viene composto e offerto su tre canali: **WhatsApp**, **email**
(mailto) o **copia negli appunti**. Non c'e' invio automatico: senza backend sarebbe finto,
e la pagina lo dice.

## La galleria di Chi sono

`/chi-sono/` ospita i sette ritratti di studio forniti dal cliente, in una griglia
asimmetrica a 12 colonne con didascalie in hover e zoom morbido. Responsive a tre soglie
(12 colonne, 6 colonne, colonna singola). I file sono in `assets/img/ritratto-*.jpg`.

## Collegamenti

**Nessun link punta piu' a yogaalliance.org**, ne' ai suoi sottodomini (app, help, r,
procpy, wpprod, CDN). Rimossi anche i metadati WordPress residui (feed RSS, wp-json,
oEmbed, xmlrpc, canonical) e i riferimenti a servizi di terze parti (Google Maps,
profili social, siti di organizzazioni partner, testate giornalistiche).

Ogni pulsante che prima usciva dal sito ora porta a una pagina interna:

| Pulsante | Destinazione |
|---|---|
| Inizia qui | `/prenota/` (Prenota una sessione) |
| Accedi / Manage Account | `/area-riservata/` **(nuova)** |
| Scrivimi / Contact Support | `/contatti/` (Contatti) |
| Domande Frequenti / Help Center | `/domande-frequenti/` **(nuova)** |
| Guide e Standards (PDF) | la pagina della sessione o del percorso corrispondente |
| Code of Conduct, Scope of Practice, Ethical Commitment | `...accessibility-statement.html` (Disclaimer) |
| Scientific Research (22 voci) | `/intenti/` (Gli 11 Cristalli Intento) |
| Social del footer | `/contatti/` (Contatti) |

L'unico dominio esterno rimasto e' `www.w3.org`, che compare solo come namespace `xmlns`
degli SVG: non e' un collegamento.

## Che cosa non funziona (e non puo' funzionare)

Ricerca, login, form e carrello richiedono un backend: sono inerti. `/area-riservata/`
e' un segnaposto e lo dichiara esplicitamente nella pagina.
