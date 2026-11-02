# Sito web Best Life Assistance — guida per la consegna

Documento di passaggio del sito **bestlifeassistance.it**, pensato per chi ne prenderà in carico la gestione.
Ultimo aggiornamento: 2 novembre 2026.

> Questo documento non contiene password. Gli accessi (cPanel, dominio, GitHub, Meta) vanno consegnati a parte e cambiati dopo il passaggio.

---

## 1. Cos'è il sito

Un sito **statico** di una sola pagina più la privacy policy: solo HTML, CSS e JavaScript.
Non usa WordPress né altri CMS, non ha database e non richiede installazioni. Per modificarlo basta un editor di testo.

| File / cartella | Contenuto |
|---|---|
| `index.html` | Pagina principale: hero, «Perché sceglierci», Servizi, Operatori socio sanitari, Contatti |
| `privacy-policy.html` | Informativa privacy e cookie |
| `styles.css` | Tutti gli stili del sito |
| `script.js` | Menu mobile, animazioni delle linee e modulo di contatto |
| `assets/` | Logo, favicon e fotografie (`hero-photo.jpg`, `why-photo.jpg`, `mission-photo.webp`, `carla-avatar.jpg`) |
| `LEGGIMI.md` | Questa guida (non va caricata sul server) |

## 2. Dove si trova

- **Sito pubblicato:** hosting con **cPanel**. I file sono nella cartella del dominio (di solito `public_html`). Il server è protetto dal firewall BitNinja.
- **Dominio:** `bestlifeassistance.it`. Verificare presso quale registrar è intestato e a nome di chi.
- **Copia del codice:** repository GitHub `ricardodulcey3/best-life-assistance` (pubblico). Contiene la stessa versione di cPanel con lo storico di tutte le modifiche.
- **GitHub Pages non è usato:** il sito si pubblica solo da cPanel.

## 3. Come modificare e pubblicare

1. Modificare i file sul computer (o direttamente nella copia scaricata da GitHub).
2. Se si cambia `styles.css` o `script.js`, aumentare il numero di versione nei link di `index.html` e `privacy-policy.html` (oggi `styles.css?v=2` e `script.js?v=2` → `?v=3`), altrimenti i visitatori potrebbero continuare a vedere la versione vecchia dalla cache.
3. Caricare i file modificati su cPanel → **File Manager** → cartella del dominio, sovrascrivendo i precedenti.
4. Aggiornare anche la copia su GitHub, così le due versioni restano uguali.

**Importante:** non modificare i file solo su cPanel. Se poi si ricarica una copia vecchia dal computer o da GitHub, le modifiche fatte su cPanel si perdono (è il motivo per cui il Meta Pixel e il banner dei cookie sono stati copiati anche su GitHub).

## 4. Meta Pixel e consenso cookie

- **ID del Pixel:** `927826460027769`.
- Il codice è nell'`<head>` di `index.html` e `privacy-policy.html`, tra i commenti `Consenso cookie + Meta Pixel` e `Fine consenso cookie + Meta Pixel`.
- Il Pixel **si carica solo se il visitante clicca «Accetta»** nel banner (obbligatorio per il GDPR e le linee guida del Garante Privacy). Con «Rifiuta» o con la ✕ non si carica nulla.
- La scelta viene ricordata per 6 mesi nel browser del visitatore (chiave `bla_cookie_consent`). In fondo alla pagina c'è il link **«Preferenze cookie»** per cambiarla.
- **Eventi inviati a Meta** (solo con consenso):
  - `PageView` — ogni visita;
  - `Contact` — clic sul telefono (`Telefono`) o su WhatsApp (`WhatsApp`);
  - `Lead` — invio del modulo di contatto.
- È normale che Meta registri meno visite di quelle reali: conta solo chi ha accettato i cookie.
- Per cambiare Pixel basta sostituire l'ID nella riga `PIXEL = '927826460027769'` di entrambi i file.

## 5. Contatti presenti nel sito

- Cellulare / WhatsApp: **+39 371 116 0111**
- Telefono fisso: **+39 06 900 8448**
- Email: **info@bestlifeassistance.it**
- P.IVA indicata nel sito: 17158501001

Se cambia un numero, va aggiornato in tutti i punti di `index.html` (header, hero, sezione Contatti e pulsante WhatsApp).

## 6. Cose da completare

- **Privacy policy:** in fondo a `privacy-policy.html` c'è ancora la nota «Contenuto sostitutivo: da completare con il testo legale definitivo redatto dal vostro consulente privacy». Va sostituita con il testo definitivo del consulente.
- **Modulo di contatto:** non ha un server che invia i messaggi. Quando il visitatore preme «Invia», si apre il suo programma di posta con il messaggio già scritto per info@bestlifeassistance.it; se non lo invia, il messaggio non arriva. Se si vuole che arrivi sempre, bisogna collegare un servizio di invio moduli o uno script sul server.

## 7. Accessi da trasferire

| Servizio | Cosa fare |
|---|---|
| cPanel / hosting | Consegnare l'accesso e cambiare la password |
| Dominio | Verificare intestatario e scadenza del rinnovo |
| GitHub | Trasferire il repository a un account di Best Life Assistance (Settings → Transfer ownership) oppure scaricarlo come ZIP |
| Meta Business | Il Pixel, gli account pubblicitari (`7811161632280011` e `26528546256775929`, «Bestlifeassistance») e le pagine devono restare intestati a Best Life Assistance; rimuovere gli accessi di chi non segue più il progetto |

## 8. Storico

- **Luglio 2026:** realizzazione del sito.
- **Novembre 2026:** banner di consenso cookie, Meta Pixel con eventi di contatto, privacy policy aggiornata; copia allineata tra cPanel e GitHub; disattivato GitHub Pages.
