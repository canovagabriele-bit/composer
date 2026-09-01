window.PORTFOLIO = {
  meta: {
    name: "Gabriele Canova",
    role: "Electronic music · sound art · sound design · interactive systems",
    email: "canovagabriele@gmail.com",
    year: "2026",
    statement: "La mia ricerca attraversa composizione elettronica, spazio, gesto, immagine, voce e sistemi interattivi. Il portfolio è pensato come archivio vivo: una selezione di lavori, processi e strumenti che può essere aggiornata nel tempo senza modificare la struttura visiva del sito."
  },

  /*
    MEDIA ESTERNI
    Per mantenere leggera la repository GitHub Pages, audio e video non vengono caricati nel sito.
    Gli ascolti restano su SoundCloud in forma privata/non pubblica e i video su YouTube non in elenco.
    I link con href vuoto non vengono mostrati nel sito.

    Per aggiungere un nuovo ascolto:
    links: [
      { label: "SoundCloud", href: "https://soundcloud.com/..." }
    ]

    Per aggiungere un video YouTube in anteprima nel modale:
    videoEmbeds: [
      { label: "Guarda video", embed: "https://www.youtube-nocookie.com/embed/VIDEO_ID", external: "https://youtu.be/VIDEO_ID" }
    ]
  */

  projects: [
    {
      slug: "permanente-inizio",
      title: "Permanente Inizio",
      year: "2026",
      category: "Composition · Live electronics",
      format: "Harp, prepared harp & live electronics",
      image: "assets/img/permanente_score.jpg",
      summary: "Composizione per arpa, arpa preparata e live electronics: il gesto acustico viene catturato, analizzato, trasformato e restituito come memoria elettronica instabile.",
      tags: ["Max/MSP", "prepared harp", "granular synthesis", "Ableton Push 2"],
      links: [
        { label: "Ascolto SoundCloud", href: "https://soundcloud.com/bmashmusic/permanente-inizio-harp/s-ijgcQBZen1e?si=4ebb537ce0c24214a3b6fa46e0255e74&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { label: "Partitura", href: "assets/docs/permanente-inizio-partitura.pdf" },
        { label: "Legenda", href: "assets/docs/permanente-inizio-legenda.pdf" },
        { label: "Documentazione", href: "assets/docs/permanente-inizio-documentazione.pdf" },
        { label: "Max patch", href: "assets/docs/permanente-inizio.maxpat", download: true }
      ]
    },
    {
      slug: "campo-aperto",
      title: "Campo Aperto",
      year: "2022–23",
      category: "Electroacoustic composition",
      format: "Stereo · 6'29\"",
      image: "assets/img/campo.jpg",
      summary: "Prima composizione elettroacustica: processi, texture, droni, logogrammi e sintesi analogica come materiali per costruire la forma attraverso l'ascolto.",
      tags: ["logograms", "analog synthesis", "DAW montage"],
      links: [
        { label: "Ascolto SoundCloud", href: "https://soundcloud.com/bmashmusic/campo-aperto-1/s-MnRU8Irkqc0?si=f897c25d41d249e49f1ce876d5fc6d4c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
      ]
    },
    {
      slug: "superfluous",
      title: "Superfluous",
      year: "2022–23",
      category: "Concrete sound study",
      format: "Stereo · 2'42\"",
      image: "assets/img/studies.jpg",
      summary: "Il suono superfluo dello studio — porte, ticchettii, frizioni e residui — diventa materiale centrale della composizione.",
      tags: ["concrete sound", "sound design", "residual listening"],
      links: [
        { label: "Ascolto SoundCloud", href: "https://soundcloud.com/bmashmusic/superfluous-2/s-iQa45eCBkSK?si=0d435a3a3df84667b8695731fb5441cc&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
      ]
    },
    {
      slug: "vox-mea-sum",
      title: "Vox Mea Sum",
      year: "2022–23",
      category: "Vocal study",
      format: "Stereo · 4'38\"",
      image: "assets/img/studies.jpg",
      summary: "Vocali e vocalizzi sono l'unica sorgente del brano: la voce diventa ambiente, corpo timbrico e materiale elettroacustico.",
      tags: ["voice", "post-production", "electroacoustic"],
      links: [
        { label: "Ascolto SoundCloud", href: "https://soundcloud.com/bmashmusic/vox-mea-sum-4/s-ROFHERDeffo?si=c9c78af4f10e4b6dbef85da5328035e3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
      ]
    },
    {
      slug: "nubivagus",
      title: "Nubivagus",
      year: "2022–23",
      category: "Synthetic sound study",
      format: "Stereo · 6'14\"",
      image: "assets/img/studies.jpg",
      summary: "Un viaggio tra sogni sintetici costruito esclusivamente con sintetizzatori e sound design digitale, senza registrazioni concrete.",
      tags: ["synthesis", "digital sound design", "synthetic landscape"],
      links: [
        { label: "Ascolto SoundCloud", href: "https://soundcloud.com/bmashmusic/nubivagus-3/s-2nu2FolotDY?si=c9c78af4f10e4b6dbef85da5328035e3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
      ]
    },
    {
      slug: "wasalo",
      title: "Wasalo — l'anima vibrante",
      year: "2022–23",
      category: "Soundscape · Spatial composition",
      format: "Quadraphonic · 5'15\"",
      image: "assets/img/studies.jpg",
      summary: "Field recording dalla ricerca di Steven Feld in Papua Nuova Guinea, riorganizzati come paesaggio quadrifonico tra fronte e retro.",
      tags: ["quadraphony", "field recording", "soundscape"],
      links: [
        { label: "Ascolto SoundCloud", href: "https://soundcloud.com/bmashmusic/wasalo-stereo-version-5/s-jBe4apPMlK7?si=4ebb537ce0c24214a3b6fa46e0255e74&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
      ]
    },
    {
      slug: "acid-reign",
      title: "Acid Reign",
      year: "2025–26",
      category: "Immersive composition",
      format: "Electronic composition · spatial performance",
      image: "assets/img/acid.jpg",
      summary: "Materia elettronica instabile, movimento spaziale e controllo gestuale convergono in una composizione performativa.",
      tags: ["immersive audio", "gesture", "Ableton Live"],
      links: [
        { label: "Ascolto SoundCloud", href: "https://soundcloud.com/bmashmusic/acid-reign-ambisonics-3oa/s-6pjbJWwMr26?si=4ebb537ce0c24214a3b6fa46e0255e74&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
      ]
    },
    {
      slug: "air-controller",
      title: "Air Controller",
      year: "2025–26",
      category: "Interactive system",
      format: "Hand tracking · OSC · Max/MSP",
      image: "assets/img/air.jpg",
      summary: "Interfaccia gestuale che traduce distanze, posizione e velocità delle mani in dati musicali normalizzati e mappabili in tempo reale.",
      tags: ["MediaPipe", "Python", "OSC", "Max for Live"],
      links: []
    },
    {
      slug: "sonic-shuffle",
      title: "Sonic Shuffle",
      year: "2023–24",
      category: "Live spatialization",
      format: "Multichannel performance",
      image: "assets/img/sonic.jpg",
      summary: "Una regia sonora performativa: logogrammi, routing multicanale e spazializzazione live interpretano in tempo reale i materiali dell'ensemble.",
      tags: ["SPAT", "LBAP", "Max/MSP", "Dante"],
      links: [
        { label: "Ascolto SoundCloud", href: "https://soundcloud.com/bmashmusic/sonic-shuffle-binaural-version/s-VN04gIFsyNe?si=4ebb537ce0c24214a3b6fa46e0255e74&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { label: "Relazione", href: "assets/docs/sonic-shuffle-relazione.pdf" }
      ]
    },
    {
      slug: "arwe",
      title: "ARWE",
      year: "2025–26",
      category: "Performance · Fashion design",
      format: "Live electronic set",
      image: "assets/img/arwe.jpg",
      summary: "Musica elettronica dal vivo per una sfilata: corpo, abito, spazio scenico e controllo gestuale diventano parte dello stesso sistema performativo.",
      tags: ["fashion", "live electronics", "Air Controller"],
      links: []
    },
    {
      slug: "pinacoteca",
      title: "Pinacoteca Albertina",
      year: "2025–26",
      category: "Sound · Exhibition",
      format: "Site-specific sound",
      image: "assets/img/pinacoteca.jpg",
      summary: "Un progetto sonoro pensato per lo spazio espositivo: il suono agisce sul tempo di permanenza, sull'ambiente e sulla percezione degli abiti.",
      tags: ["exhibition", "design", "space"],
      links: []
    },
    {
      slug: "margherita-data",
      title: "Materia",
      year: "2025–26",
      category: "Fashion film · Sound design",
      format: "Fixed-media audiovisual works",
      image: "https://img.youtube.com/vi/a3-ffmo0hto/hqdefault.jpg",
      summary: "Composizioni audio-visive per fashion design. I lavori su materia, corpo e tessuto costruiscono una relazione tra superficie visiva, ritualità, montaggio e ascolto.",
      tags: ["fashion film", "fixed media", "sound design"],
      videoEmbeds: [
        { label: "Materia I", embed: "https://www.youtube-nocookie.com/embed/a3-ffmo0hto", external: "https://youtu.be/a3-ffmo0hto" },
        { label: "Materia II", embed: "https://www.youtube-nocookie.com/embed/JBcslOZFG6U", external: "https://youtu.be/JBcslOZFG6U" },
        { label: "Materia III", embed: "https://www.youtube-nocookie.com/embed/tO_wFDFCJF8", external: "https://youtu.be/tO_wFDFCJF8" }
      ],
      links: [
        { label: "Materia I", href: "https://youtu.be/a3-ffmo0hto" },
        { label: "Materia II", href: "https://youtu.be/JBcslOZFG6U" },
        { label: "Materia III", href: "https://youtu.be/tO_wFDFCJF8" }
      ]
    },
    {
      slug: "la-caduta-di-troia",
      title: "La caduta di Troia",
      year: "2024",
      category: "Music for image",
      format: "Silent film · stereo 2.1 / multichannel 8.1",
      image: "https://img.youtube.com/vi/Qh6TaDW7ADM/hqdefault.jpg",
      summary: "Risonorizzazione contemporanea di un film muto: montaggio, foley, palette timbrica e spazializzazione come strumenti narrativi.",
      tags: ["silent film", "foley", "spatialization"],
      videoEmbeds: [
        { label: "Guarda il video", embed: "https://www.youtube-nocookie.com/embed/Qh6TaDW7ADM", external: "https://youtu.be/Qh6TaDW7ADM" }
      ],
      links: [
        { label: "Video", href: "https://youtu.be/Qh6TaDW7ADM" }
      ]
    },
    {
      slug: "pinvision",
      title: "PinVision",
      year: "2025–26",
      category: "Audiovisual sound design",
      format: "Brief-based work",
      image: "https://img.youtube.com/vi/gJzSJBROwwE/hqdefault.jpg",
      summary: "Sound design su brief audiovisivo: sintesi comunicativa, identità sonora, ritmo visivo, transizioni, texture e precisione del dettaglio.",
      tags: ["sound identity", "audiovisual", "brief"],
      videoEmbeds: [
        { label: "Guarda il video", embed: "https://www.youtube-nocookie.com/embed/gJzSJBROwwE", external: "https://youtu.be/gJzSJBROwwE" }
      ],
      links: [
        { label: "Video", href: "https://youtu.be/gJzSJBROwwE" }
      ]
    },
    {
      slug: "tide",
      title: "Tide",
      year: "2025",
      category: "Music production",
      format: "Production for Nari · 5'06\"",
      image: "assets/img/tide.jpg",
      summary: "Brano composto, registrato e prodotto insieme a Nari: voce pulita e sospesa, bassi ipnotici, Hydrasynth, Modal Cobalt e materiali elettronici legati all'immagine della marea.",
      tags: ["production", "voice", "Ableton Live", "Hydrasynth"],
      links: [
        { label: "Spotify", href: "https://open.spotify.com/intl-it/track/1OpyOAYxYsS2Ar6Lic5yT1" }
      ]
    },
    {
      slug: "poesia",
      title: "Musica per poesia",
      year: "2025–26",
      category: "Voice · Text · Electronics",
      format: "Applied composition",
      image: "assets/img/poesia.jpg",
      summary: "Il ritmo interno della parola, la voce e l'ambiente elettronico diventano materiali di una composizione applicata al testo poetico.",
      tags: ["poetry", "voice", "electronics"],
      links: []
    },
    {
      slug: "dancing-motion",
      title: "Dancing Motion",
      year: "2022–23",
      category: "Preparatory research",
      format: "Video tracking · OSC · Max/MSP",
      image: "assets/img/dancing.jpg",
      summary: "Ricerca preparatoria sul rapporto tra movimento, video tracking e generazione sonora in tempo reale.",
      tags: ["TouchDesigner", "OSC", "Max/MSP"],
      links: [
        { label: "Documentazione", href: "assets/docs/dancing-motion.pdf" },
        { label: "Max patch", href: "assets/docs/dancing-motion.maxpat", download: true }
      ]
    },
    {
      slug: "archi",
      title: "Studio per strumenti ad arco",
      year: "2023–24",
      category: "Preparatory research",
      format: "Open notation",
      image: "assets/img/archi.jpg",
      summary: "Scrittura aperta, logogrammi e processi grafici come dispositivi per orientare gesto e comportamento sonoro.",
      tags: ["open score", "strings", "graphic notation"],
      links: []
    }
  ],

  releases: [
    {
      slug: "tide-release",
      artist: "Nari",
      title: "Tide",
      year: "2025",
      type: "Single",
      roles: ["composition", "recording", "production", "arrangement", "sound design"],
      credits: "Composed, recorded and produced with Nari. Built in Ableton Live with vocal demos, fixed media and recordings of Hydrasynth and Modal Cobalt.",
      image: "assets/img/tide.jpg",
      links: [
        { label: "Spotify", href: "https://open.spotify.com/intl-it/track/1OpyOAYxYsS2Ar6Lic5yT1" }
      ]
    }
  ]
};
