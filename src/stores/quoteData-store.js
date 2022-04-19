import { readable } from 'svelte/store';

const quoteDataStore = readable(
  {
    gotama: [
      {      
        engquote: "The good renounce (attachment for) everything.\nThe virtuous do not prattle with a yearning for pleasures.\nThe wise show no elation or depression\nwhen touched by happiness or sorrow.",
        paliquote: "",
        attribution: "Gotama Buddha",
        attrdates: "(625 - 545 BCE)",
        attrsource: "Dhammapada 83",
        attrlink: "https://store.pariyatti.org/Buddha-and-His-Teaching_c_50.html"
      }
    ],
    disciples: [
      {
        engquote: "Hearing your voice, O sage supreme,\nmy heart is filled with joy.\nMy questions truly were not in vain,\nthe Brahmin did not deceive me.",
        paliquote: "Esa sutvā pasīdāmi\nvaco te isisattama\namoghaṃ kira me phutthaṃ\nna maṃ vañcesi brāhmano.",
        attribution: "",
        attrdates: "",
        attrsource: "Theragāthā, 1276",
        attrlink: "https://store.pariyatti.org/Elders-Verses-Vol-1--2_p_1990.html"
      }
    ],
    ledi: [
      {
        engquote: "The only way to overcome ...\n moral failures and inherent weaknesses,\n is to practice concentration (samatha)\n according to the teaching of the Buddha.\n With this mental discipline,\n the wavering mind and distracting thoughts are inhibited.\n Then the mind can be turned towards insight practice (vipassana),\n which reveals the universal characteristics of\n impermanence, unsatisfactoriness, and not-self.",
        paliquote: "",
        attribution: "Ven. Ledi Sayadaw",
        attrdates: "1846-1923",
        attrsource: "",
        attrlink: "https://store.pariyatti.org/Ledi-Sayadaw"
      }
    ],
    thetgyi: [
      {
        engquote: "Very fast, vibrating incessantly, helter-skelter, broken up, burnt down,\nthe destruction of the body - these are the signs of impermanence.",
        paliquote: "",
        attribution: "Saya Thetgyi",
        attrdates: "",
        attrsource: "The Clock of Vipassana has Struck (p. 226)",
        attrlink: "https://store.pariyatti.org/Saya-Thetgyi"
      }
    ],
    webu: [
      {
        engquote: "Do not get confused about the teachings. We don't have to know many techniques,\nonly one; but that, we should know clearly.\nIf we establish one technique with strong effort and get rid of all doubts,\nthen, without asking anyone else, we shall find the answers.",
        paliquote: "",
        attribution: "Venerable Webu Sayadaw",
        attrdates: "1896-1977",
        attrsource: "",
        attrlink: "https://store.pariyatti.org/Webu-Sayadaw"
      }
    ],
    subk: [
      {
        engquote: "Decay is inherent in all component things, but the Truth will remain forever.",
        paliquote: "",
        attribution: "Sayagyi U Ba Khin",
        attrdates: "1899-1971",
        attrsource: "",
        attrlink: "https://store.pariyatti.org/Sayagyi-U-Ba-Khin"
      }
    ],
    sng: [
      {
        engquote: "Sweet are the words of Dhamma,\neach phrase like honey,\nyielding welfare and happiness,\nsuffused with the taste of the deathless.\n",
        paliquote: "Mīṭhī vāṇī Dharama kī,\nmisarī ke se bola.\nkalyāṇī maṅgalamayī,\nbharā amritarasa ghola.\n",
        attribution: "Hindi Doha: S.N. Goenka",
        attrdates: "1924-2013",
        attrlink: "https://store.pariyatti.org/SN-Goenka"
      }
    ],
    misc: [
      {
        engquote: "King Priyadassi honours all sects; by gifts and offerings of kinds does he\nhonour them. But he does not value such gifts or honours so much as that the\nworthiness of all sects may increase.The increase of worthiness may be of\nseveral kinds, but its root lies in guarding one's speech, that is to say, the\npraising of one's own sect or the blaming of the other sects may not take place.\nIn fact, other sects ought to be honoured in various ways. By doing so, one\npromotes one's own sect and also benefits other sects; and by doing otherwise,\none hurts one's own sect and also harms other sects.",
        paliquote: "",
        attribution: "King Ashoka",
        attrdates: "c.268-232 BCE",
        attrsource: "Asokan Rock Edict X11",
        attrlink: "https://store.pariyatti.org/Edicts-of-King-Asoka-The-_p_1655.html"
      }
    ],
    dhammapada: [
      {
        engquote: "All the phenomena of existence have mind as their precursor, mind as their\nsupreme leader, and of mind are they made.\nIf with an impure mind one speaks or acts, suffering follows him in the same way\nas the wheel follows the foot of the drawer (of the chariot).",
        paliquote: "Manopubbaṅgamā dhammā,\nmanoseṭṭhā manomayā.\nManasā ce paduṭṭhena,\nbhāsati vā karoti vā.\nTato naṃ dukkhamanveti,\ncakkaṃva vahato padaṃ.",
        attribution: "Buddha",
        attrdates: "625 - 545 BCE",
        attrsource: "Dhammapada, I, (1)",
        attrlink: "https://store.pariyatti.org/Dhammapada_c_52.html"
      }
    ]
  }
);

export default quoteDataStore;