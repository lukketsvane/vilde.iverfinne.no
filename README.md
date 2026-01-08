# vilde.iverfinne.no

## Redigering av innhold

Alt innhold ligger i `content/`-mappen som MDX-filer.

### Mappestruktur

```
content/
├── hjem.mdx           # Forsiden
├── om-meg.mdx         # Om meg-siden
├── kontakt.mdx        # Kontaktside
├── site.mdx           # Globale innstillinger
└── tjenester/         # Tjenestesider
    ├── karakterveiledning.mdx
    └── oppgaveveiledning.mdx
```

### MDX-format

Hver fil har to deler:

1. **Frontmatter** (metadata mellom `---`):
```mdx
---
tittel: Sidetittel
kort_beskrivelse: En kort beskrivelse
---
```

2. **Innhold** (Markdown med støtte for React-komponenter):
```mdx
# Overskrift

Vanlig tekst med **fet** og *kursiv*.

- Punktliste
- Flere punkter

[Lenke](https://example.com)
```

### Eksempel

```mdx
---
tittel: Karakterveiledning
kort_beskrivelse: Få hjelp til å forbedre karakterene
---

# Karakterveiledning

Jeg tilbyr personlig veiledning.

## Hva inkluderes

- Gjennomgang av eksamener
- Strategier for studieteknikk
```

### Kjøre lokalt

```bash
npm install
npm run dev
```