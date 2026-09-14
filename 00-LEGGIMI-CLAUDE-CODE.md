# Sito Alchimia Interiore — pacchetto revisioni cliente

Tutti i messaggi della cliente (Lara) **da giovedì 27 agosto 2026 a domenica 6 settembre 2026**,
estratti dall'export WhatsApp e riorganizzati per essere lavorati con Claude Code.
Il primo elemento della lista è il **vocale delle 10:47 del 27 agosto**.

- Sito in staging: `cristalloterapia.vercel.app`
- Dominio previsto: `alchimiainteriorediluce.it`
- **361 voci in totale**: 323 modifiche, 20 vocali, 16 note di contesto, 2 documenti
- **379 immagini** allegate

---

## Come è organizzato

| File / cartella | Cosa contiene |
|---|---|
| `01-REGOLE-GLOBALI.md` | Sostituzioni valide su tutto il sito, prezzi, struttura del menù, bug e link rotti. **Partire da qui.** |
| `02-MODIFICHE-DETTAGLIATE.md` | Le 361 voci in ordine cronologico, con testo integrale e file allegati. |
| `04-CHECKLIST.md` | Una riga per voce, con casella da spuntare. |
| `immagini/` | Le 379 immagini, nominate `MOD-165_1_00000371.jpg` = voce MOD-165, primo file. |
| `audio/` | I 20 vocali della cliente, **non trascritti**. |
| `contenuti/` | Testi sorgente dei 9 percorsi e delle 4 sessioni, decodificati dalle .eml. |
| `documenti/` | Percorso Luna e Percorso Silver (arrivati il 03/09). |

---

## Come leggere una voce

```
### MOD-165 — 28/08 18:08

> Questa da sostituire con questa di seguito

**File (ordine cronologico di invio):**
1. `immagini/MOD-165_1_00000371.jpg`  (inviato 28/08 18:08)
2. `immagini/MOD-165_2_00000372.jpg`  (inviato 28/08 18:09)
```

Convenzioni:

- Il testo tra `>` è **letterale della cliente**. Non è stato riscritto né corretto:
  contiene refusi ("srguente" = seguente, "a posto di" = al posto di, "spicologico" =
  psicologico) e accenti scritti con l'apostrofo. Quando detta un testo nuovo va preso
  così com'è nel senso, ma **conviene sistemare l'ortografia** prima di pubblicarlo.
- Le immagini sono quasi sempre **foto dello schermo scattate col telefono**: in alto
  si vede spesso **l'URL della pagina**, ed è il modo più rapido per capire dove intervenire.
- Con più immagini, l'ordine è quello di invio. Il testo dice quale è quale: **"sopra"** =
  inviata prima, **"seguente / di seguito / a seguire / questa"** = inviata dopo.
  Di norma una è lo screenshot del punto da correggere, l'altra la nuova foto da inserire.
- 🎧 = messaggio vocale da ascoltare. ℹ️ = messaggio di servizio, tenuto per completezza,
  non richiede interventi sul sito. 📎 = documento allegato.

---

## Ordine di lavoro suggerito

1. Leggere `01-REGOLE-GLOBALI.md` e risolvere con la cliente i **tre punti in sospeso**
   (prezzi, dicitura "pannello di geometria sacra", dominio definitivo).
2. Sistemare prima i **bug funzionali** (sezione E): link rotti, residui di template,
   404, layout. Sono la cosa che la cliente ha segnalato come più urgente.
3. Applicare le **sostituzioni globali** (sezione A) con find & replace.
4. Scorrere `02-MODIFICHE-DETTAGLIATE.md` dall'alto, spuntando `04-CHECKLIST.md`.
5. Aggiungere i contenuti mancanti (Percorso Luna, Percorso Silver, P.IVA, logo,
   locandine eventi).
6. Ascoltare i 20 vocali in `audio/` prima della consegna: alcuni contengono istruzioni
   che non sono state ripetute per iscritto.

---

## Avvertenze

- **Le voci sono cronologiche, non deduplicate.** La cliente ha rivisto il sito per cinque
  giorni e in più punti ha cambiato idea o ripetuto la stessa cosa. In caso di contrasto
  **vale sempre l'indicazione più recente**. I conflitti che ho individuato sono segnalati
  in `01-REGOLE-GLOBALI.md`; potrebbero non essere gli unici.
- **I vocali non sono trascritti**: in questo ambiente non è disponibile un motore di
  trascrizione. Vanno ascoltati a mano.
- Alcuni messaggi risultano eliminati nell'export: in un paio di punti un'istruzione
  fa riferimento a un'immagine che non c'è più.
- I tre PDF delle locandine inviati il 31/08 compaiono come `documento omesso`
  nell'export di WhatsApp, ma le stesse locandine erano già arrivate come JPG.
- I testi sorgente in `contenuti/` erano stati inviati il 21/08, quindi **prima** del
  periodo coperto da questa lista: sono inclusi solo come riferimento, perché sono la
  base su cui poggiano quasi tutte le correzioni.

---

## Prompt di partenza per Claude Code

```
Leggi 00-LEGGIMI-CLAUDE-CODE.md e 01-REGOLE-GLOBALI.md.
Poi lavora su 02-MODIFICHE-DETTAGLIATE.md a blocchi di 20 voci per volta.
Per ogni voce: apri le immagini indicate, identifica la pagina dall'URL visibile
nello screenshot, trova il punto corrispondente nel codice, applica la correzione
e spunta la riga in 04-CHECKLIST.md.
Salta le voci marcate ℹ️ e segnalami quelle marcate 🎧, che devo ascoltare io.
Se una voce è ambigua o l'immagine non basta a capire dove intervenire,
fermati e chiedimelo invece di indovinare.
```
