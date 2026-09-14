# Regole globali e bug strutturali

Sintesi ragionata di tutto ciò che **non** è una singola correzione puntuale.
Vale su **tutto il sito**, conviene applicarla prima di scorrere l'elenco dettagliato
in `02-MODIFICHE-DETTAGLIATE.md`. Ogni riga rimanda alla voce originale (`MOD-xxx`),
dove trovi il testo esatto della cliente e lo screenshot.

Periodo coperto: **da giovedì 27 agosto 2026 a domenica 6 settembre 2026**.

---

## A. Sostituzioni globali (find & replace su tutte le pagine)

| # | Cerca | Sostituisci con | Riferimento |
|---|-------|-----------------|-------------|
| A1 | `portale di legno` | `pannello di geometria sacra` | MOD-249, MOD-270 |
| A2 | `blocchi di lavoro` | `moduli di lavoro` (+ «tre moduli di lavoro più bonus finale») | MOD-246 |
| A3 | `colloquio iniziale … 50 min` | `60 min` (le sessioni successive restano 45–50 min) | MOD-250, MOD-044, MOD-053, MOD-184, MOD-209 |
| A4 | `1 grado` | `primo livello` | MOD-117 |
| A5 | `campo` (eterico) | `corpo eterico` | MOD-208 |
| A6 | `sessiioni` | `sessioni` (una sola "i") | MOD-118 |
| A7 | sede ed eventi | `Eventi in presenza a Fano e provincia principalmente, ma anche in tutta Italia` | MOD-007, 037, 045, 056, 058, 090, 099, 121, 180, 191 |
| A8 | `ancorano` | `amplificano` | MOD-206 |
| A9 | `ancoraggio` | `consolidamento` | MOD-243 |

> ⚠️ **Conflitto da risolvere su A1.** Il 28/08 (MOD-141) la cliente aveva chiesto
> `portale di legno` → `piastra di ricarica in legno`. Il 29/08 ha cambiato idea in
> `pannello di geometria sacra` e l'ha ripetuto più volte (MOD-249, MOD-270, e di nuovo
> il 30/08). **Vale l'ultima indicazione: "pannello di geometria sacra".**
> Attenzione: in MOD-226 compare anche «piastra di ricarica energetica».

---

## B. Prezzi — ⚠️ non toccare senza conferma

1. **27/08** — `€ 99` invece di `€ 120` sulle sessioni singole, «e così anche per i percorsi» (MOD-016).
   «Le promozioni ovunque siano segnalati i prezzi» (MOD-017).
2. **29/08** — `€ 929` invece di `€ 990` per il percorso interessato
   (prima sessione online da 60 min con colloquio iniziale + 9 sessioni da 50 min) — MOD-240.
3. **06/09 — ultima indicazione in ordine di tempo** (MOD-360): «mettere le sessioni singole
   **tutte a 119**, non solo la cristalloterapia eterica, quindi **119 € anziché 149 €**,
   e di conseguenza **aggiornare i prezzi dei pacchetti**».

Le tre indicazioni non sono coerenti fra loro (99 → 119, con prezzo di partenza che passa
da 120 a 149). La più recente è quella del 06/09. Meglio farsi confermare la tabella
prezzi completa dalla cliente prima di modificare qualsiasi importo.

---

## C. Struttura del menù / navigazione (MOD-195)

La cliente vede solo 4 percorsi nel menù e chiede questa organizzazione:

```
PERCORSI          → tutti i percorsi (erano 7, ora 9: vedi punto D)
SESSIONI          → le 4 sessioni singole
PRESENTAZIONE     → Chi sono
                    Formazione e metodo
                    Come funziona a distanza
                    Eventi in presenza
                    Prezzi
                    Testimonianze
                    Note legali
CONTATTI          → (già lineare, va bene così)
```

---

## D. Contenuti mancanti da aggiungere

- **PERCORSO LUNA** e **PERCORSO SILVER** — mai inviati nel materiale iniziale,
  arrivati il 03/09 (MOD-356). Testi pronti in `contenuti/PERCORSO LUNA.md` e
  `contenuti/PERCORSO SILVER.md`. Con questi i percorsi diventano **9**, non 7.
- **P.IVA** della cliente, da inserire — MOD-122 (nell'immagine allegata).
- **Logo Movimento delle Libere Discipline Naturali** (è socio benemerito, lo considera
  un valore aggiunto): chiede dove sia finito — MOD-123, ripetuto in MOD-336 e MOD-355.
- **Accreditamento FENOP** da indicare esplicitamente — MOD-116.
- **Locandine dei 3 eventi** (27/09, 11/10, ponte dei Santi) da inserire nella newsletter
  e nel sito — MOD-192, MOD-328. Le immagini sono allegate a quelle voci.
  I tre PDF inviati il 31/08 risultano `documento omesso` nell'export di WhatsApp,
  ma le stesse locandine erano già arrivate come JPG.
- «Tutti i percorsi, dai più piccoli ai più grandi, hanno un sigillo»: da esplicitare — MOD-242.

---

## E. Bug funzionali segnalati — priorità alta secondo la cliente

Li ha ripetuti tre volte (29/08 mattina, MOD-231, MOD-355) definendoli la cosa più urgente.

**E1. Link che portano a pagine sbagliate**

| Elemento cliccato | Dove porta | Rif. |
|---|---|---|
| Atlantide | pagina errata | MOD-063, MOD-064 |
| Delfini | pagina errata | MOD-065 |
| Codici lemuriani | pagina errata | MOD-067 |
| Corpo eterico | pagina errata | MOD-068, MOD-069 |
| I chakra | pagina errata | MOD-070 |
| Campo aurico | pagina errata, «sono tutti da invertire» | MOD-071 |
| "Chi sono" | schermata del Reiki | MOD-173, MOD-174 |
| "Come lavora" | schermata sbagliata | MOD-198 |
| "Confronta percorsi" | "Come funziona la sessione a distanza" | MOD-197, MOD-218 |
| "Percorso oceano" | Reiki Usui | MOD-200 |
| Riga "Percorsi" | non porta da nessuna parte | MOD-205 |
| "Percorso sole" | sessione di cristalloterapia eterica | MOD-217 |
| Terza card | schermata scorrelata | MOD-220 |
| "Inizia qui" | **404 – pagina non trovata** | MOD-190 |
| "Le quattro sessioni" | "Condizioni d'uso" | MOD-231 |

**E2. Residui di template non personalizzato** (MOD-231)

- meta description che parlano di *"yoga teachers"*
- titoli di pagina *"Policies, Priorities & Progress"* e *"Research & Insights"*
- nome estraneo al progetto: **"Tracie Keesee — RYT 200"** nella sezione *"Il Vocabolario"*
- alcuni link reindirizzano al progetto di **un'altra cliente** (confermato da Pasquale in chat)

**E3. Layout**

- frasi sovrapposte e illeggibili (segnalato il 29/08)
- «5 sessioni fiori di bach e 5 sessioni di reiki usui **escono fuori dal rettangolo viola**» — MOD-225
- blocchi «scompagnati, da riordinare» cliccando sulla freccetta — MOD-109
- carosello di 5 frasi che non scorre: non si capisce come farle avanzare — MOD-194
- freccette mancanti sui sigilli "ritorno al cuore" e "stella cometa" — MOD-043, MOD-323

**E4. Testi scambiati fra card** (MOD-303)

Nella griglia delle sessioni solo la card centrale è corretta: la prima e la terza hanno
titolo e testo sbagliati. La cliente ha scritto il contenuto corretto card per card.

---

## F. Immagini — regola ricorrente

La maggior parte delle voci è «sostituisci questa foto con quest'altra»: la cliente ha
rifatto quasi tutto il corredo fotografico (sigilli, chakra, corpo eterico, campo aurico,
delfini, balene, Atlantide, codici lemuriani, foto dei percorsi, foto personali).

- Le foto ritratto vanno usate **con lo sfondo** abbinato — MOD-038.
- Foto personali: tenerne **una sola** fra le due "solo viso", eliminare quella in bianco e
  nero e aggiungere il titolo **"IL VOLTO DIETRO L'ALCHIMIA"** — MOD-292, MOD-293, MOD-294.
- Percorso gold: usare sempre la foto con l'oro e la meditazione — MOD-244, MOD-301.

---

## G. Social e contatti

- Mantenere **Facebook, Instagram, TikTok**.
- **Rimuovere YouTube e LinkedIn** — MOD-289, MOD-291, MOD-352.
- Email: **laralaprova@gmail.com** — MOD-290.

---

## H. Scadenze e dominio

- Consegna richiesta **entro il 20 settembre 2026** — MOD-360, MOD-361.
- **Primo evento il 27 settembre**: serve l'URL definitivo per far stampare volantini
  e locandine dal tipografo.
- Dominio indicato da Pasquale il 29/08: **alchimiainteriorediluce.it**
  (staging attuale: `cristalloterapia.vercel.app`).
  ⚠️ In MOD-002 la cliente ipotizzava `www.alchimiainteriore.com`: verificare quale sia
  quello definitivo prima di mandare qualsiasi cosa in stampa.
