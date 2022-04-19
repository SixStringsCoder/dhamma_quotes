const disciples = [
    {
        paliquote: "Esa sutvā pasīdāmi\nvaco te isisattama\namoghaṃ kira me phutthaṃ\nna maṃ vañcesi brāhmano. ",
        engquote: "Hearing your voice, O sage supreme,\nmy heart is filled with joy.\nMy questions truly were not in vain,\nthe Brahmin did not deceive me. ",
        attribution: "Theragāthā, 1276",
        attrlink: ""
    },
    {
        paliquote: "Mahāsamuddo pathavī\npabbato anilo pi ca\nupamāya na yujjanti\nsatthu varavimuttiyā. ",
        engquote: "The mighty ocean, the earth so broad,\nthe mountain peak or the wind are not adequate similes to describe the awesom\nfreedom of the Teacher. ",
        attribution: "Theragāthā, 1013",
        attrlink: ""
    },
    {
        paliquote: "Upasanto uparato\nmantabhāni anuddhato\ndunāti pāpake dhamme\ndumapattaṃ va māluto. ",
        engquote: "Peaceful, quiet and restrained,\nspeaking little, without conceit\n-- such a one shakes off evil\nas wind shakes leaves off a tree. ",
        attribution: "Theragāthā, 2",
        attrlink: ""
    },
    {
        paliquote: "Susukhaṃ vata nibbānaṃ\nsammāsambuddhadesitaṃ\nasokaṃ virajaṃ khemaṃ\nyattha dukkhaṃ nirujjhati. ",
        engquote: "The fully perfected Buddha has taught Nibbāna as the highest happiness,\nwithout grief, immaculate, secure,\n-- the state where all suffering ceases. ",
        attribution: "Theragāthā, 227",
        attrlink: ""
    },
    {
        paliquote: "Pāmujjabahulo bhikkhu\ndhamme buddhappavedite\nadhigacche padam santaṃ\nsankhārūpasamaṃ sukhaṃ. ",
        engquote: "A monk who has abundant joy in the Dhamma taught by the Buddha,\nwill attain peace and happiness, with the eradication of the saṅkhāras. ",
        attribution: "Theragāthā, 11",
        attrlink: ""
    },
    {
        paliquote: "Na hiraññasuvannena\nparikkhīyanti āsavā\namittā vadhakā kāmā\nsapattā sallabandhanā. ",
        engquote: "Neither gold nor minted coins\ncan make the defilement's disappear.\nSense desires are enemies and killers,\nhostile darts, rigid bonds. ",
        attribution: "Therīgāthā, 347",
        attrlink: ""
    },
    {
        paliquote: "Ummādanā ullapanā\nkāmā cittapamathino\nsattānaṃ saṃkilesāya\nkhippaṃ mārena odditaṃ. ",
        engquote: "Desire is agitating and deceiving,\na source of mental pain,\na net cast out by Mara\nto entangle and defile beings. ",
        attribution: "Therīgāthā, 357",
        attrlink: ""
    },
    {
        paliquote: "Sīlaṃ ev'idha sikkhetha\nasmiṃ loke susikkhitaṃ\nsīlaṃ hi sabbasampattiṃ\nupānameti sevitaṃ. ",
        engquote: "Here in the world one should train\ncarefully to purify virtue;\nfor virtue when well cultivated\nbrings all success to hand. ",
        attribution: "Theragāthā, 608",
        attrlink: ""
    },
    {
        paliquote: "Ādi sīlaṃ patitthā ca\nkalyānānañ ca mātukaṃ\npāmuk haṃ sabbadhammānam\ntasmā sīlaṃ visodhaye. ",
        engquote: "Virtue is the foundation,\nthe forerunner and origin\nof all that is good and beautiful;\ntherefore one should purify virtue. ",
        attribution: "Theragāthā, 612",
        attrlink: ""
    },
    {
        paliquote: "Sīlaṃ balaṃ appatimaṃ\nsīlaṃ āvudham uttamaṃ\nsīlaṃ ābharanaṃ setthaṃ\nsīlaṃ kavacaṃ abbhutaṃ. ",
        engquote: "Virtue is a mighty power,\nVirtue is a mighty weapon,\nVirtue is the supreme adornment,\nVirtue is a wonderful armour. ",
        attribution: "Theragāthā, 614",
        attrlink: ""
    },
    {
        paliquote: "Anaṅganassa posassa\nniccaṃ sucigavesino\nvālaggamattaṃ pāpassa\nabbhāmattaṃ va khāyati. ",
        engquote: "To one who is without evil,\nalways striving for purity,\na wrong the size of a hair tip\nseems as big as a rain cloud. ",
        attribution: "Theragāthā, 1001",
        attrlink: ""
    },
    {
        paliquote: "Jīvatevāpi sappañño\napi vittaparikkhayā\npaññāya ca alābhena\nvittavāpi na jīvati. ",
        engquote: "The wise man continues to live even if he should lose his wealth.\nBut the rich man without wisdom is not alive even now. ",
        attribution: "Theragāthā, 499",
        attrlink: ""
    },
    {
        paliquote: "Yathāpi udake jātam\npundarīkam pavaddhati\nnopalippati toyena\nsucigandhaṃ manoramaṃ.\nTath'eva ca loke jāto\nbuddho loke viharati\nnopalippati lokena\ntoyena padumaṃ yathā. ",
        engquote: "As the lotus is born in the water and grows up beneath the water, yet remain\nundefiled by the water, fragrant and beautiful.\nJust so the Buddha is born in the world, grows up and dwells in the world, bu\nlike the lotus unstained by water he is not defiled by the world. ",
        attribution: "Theragāthā, 700, 701",
        attrlink: ""
    },
    {
        paliquote: "Asokaṃ virajaṃ kehmaṃ\nariyaṭṭhangikaṃ ujuṃ\ntaṃ maggaṃ anugacchāmi\nyena tiṇṇā mahesino. ",
        engquote: "I shall follow the eightfold path,\ngriefless, immaculate, secure,\nthe straight way by following which,\nthe great sages have crossed the flood. ",
        attribution: "Therīgāthā, 361",
        attrlink: ""
    },
    {
        paliquote: "Abbhatītasahāyassa\natītagatasatthuno\nn'atthi etādisam mittam\nyathā kāyagatā sati. ",
        engquote: "For one whose friend has passed away,\nfor one whose teacher no more lives,\nthere is no other friend in this world\nlike mindfulness of the body. ",
        attribution: "Theragāthā, 1035",
        attrlink: ""
    },
    {
        paliquote: "Sussusā sutavaḍḍhanī\nsutaṃ pannāya vaddhanaṃ\npannāya atthaṃ jānāti\nnāto attho sukhāvaho. ",
        engquote: "Desire to learn increases learning;\nlearning makes wisdom increase.\nBy wisdom is the goal known;\nknowing the goal brings happiness. ",
        attribution: "Theragāthā, 141",
        attrlink: ""
    },
    {
        paliquote: "Bahussutaṃ upāseyya\nsutan ca na vināsaye\ntaṃ mūlaṃ brahmacariyassa\ntasmā dhammadharo siyā. ",
        engquote: "One should follow the learned man,\nand should not neglect learning,\nfor that is the foundation of the holy life.\nTherefore be well versed in Dhamma. ",
        attribution: "Theragāthā, 1027",
        attrlink: ""
    },
    {
        paliquote: "Bahussuto appasutaṃ\nyo sutenātimannati\nandho padīpadhāro'va\ntath'eva patibhāti maṃ. ",
        engquote: "A learned man who, because of his learning,\ndespises one with little learning,\nseems to me like a stone-blind man\nwalking around with a lamp in hand. ",
        attribution: "Theragāthā, 1026",
        attrlink: ""
    },
    {
        paliquote: "Yassa sabrahmacārīsu\ngāravo n'ūpalabbhati\nārakā hoti saddhammā\nnabhaṃ puthaviyā yathā. ",
        engquote: "One who has no respect for those\nwho live the holy life with him,\nis as far from this good Dhamma\nas the sky is from the earth. ",
        attribution: "Theragāthā, 278",
        attrlink: ""
    },
    {
        paliquote: "Yassa sabrahmacārīsu\ngāravo upalabbhati\nso virūhati saddhamme\nkhette bījam'va bhaddakaṃ. ",
        engquote: "One who has respect for those\nwho live the holy life with him,\ncomes to growth in this good Dhamma\nlike a healthy seed in the field. ",
        attribution: "Theragāthā, 391",
        attrlink: ""
    },
    {
        paliquote: "Dummedhehi pasaṃsā ca\nviññūhi garahā ca yā\ngarahā'va seyyo viññūhi\nyañ ce bālappasaṃsanā. ",
        engquote: "The fools offer praise\nand the wise offer blame.\nTruly the blame of the wise\nis much better than the praise of the fool. ",
        attribution: "Theragāthā, 668",
        attrlink: ""
    },
    {
        paliquote: "Mama selūpamaṃ cittaṃ\nthitaṃ nānupakampati\nvirattaṃ rajanīyesu\nkuppanīye na kuppati\nmam'eaṃ bhāvitaṃ cittaṃ\nkuto maṃ dukkhaṃ essatī. ",
        engquote: "My mind is firm like a rock,\nunattached to sensual things,\nnot shaking in the midst\nof a world where all is shaking.\nMy mind has thus been well-developed,\nso how can suffering come to me? ",
        attribution: "Theragāthā, 192",
        attrlink: ""
    },
    {
        paliquote: "Viriyasātaccasampanno\nyuttayogo sadā siyā\nna ca appatvā dukkhantaṃ\nvissāsam eyya pandito. ",
        engquote: "Possessed of energy and perseverance,\nbe always earnest in applying yourself.\nThe wise one should not be confident\nuntil the end of suffering is reached. ",
        attribution: "Theragāthā, 585",
        attrlink: ""
    },
    {
        paliquote: "Upemi buddhaṃ saranaṃ\ndhammam sanghañ ca tādinaṃ\nsamādiyāmi sīlāni\ntaṃ me atthāya hehiti. ",
        engquote: "I go for refuge to the Buddha,\nto the Dhamma and to the Sangha.\nI undertake the rules of conduct\nwhich will be for my true welfare. ",
        attribution: "Therīgāthā, 250",
        attrlink: ""
    },
    {
        paliquote: "Ānāpānasatī yassa\nparipunnā subhāvita\nanupubbaṃ paricitā\nyathā buddhena desitā\nso'mam lokaṃ pabhāseti\nabbhā muto va candimā. ",
        engquote: "One who has gradually practised,\ndeveloped and brought to perfection\nmindfulness of the in-and-out breath\nas taught by the Enlightened One,\nilluminates the entire world\nlike the moon when freed from clouds. ",
        attribution: "Theragāthā, 548",
        attrlink: ""
    },
    {
        paliquote: "Amoghaṃ divasaṃ kayira\nappena bahukena vā\nyaṃ yaṃ vijahate rattiṃ\ntadūnan tassa jīvitaṃ. ",
        engquote: "Make your day productive\nwhether by little or by much.\nEvery day and night that passes,\nyour life is that much less. ",
        attribution: "Theragāthā, 451",
        attrlink: ""
    },
    {
        paliquote: "Yo dandhakāle dandheti\ntaranīye ca tāraye\nyoniso saṃvidhānena\nsukhaṃ pappoti pandito. ",
        engquote: "The wise one who hurries when hurrying is needed and who slows down whe\nslowness is needed, is happy because his priorities are right. ",
        attribution: "Theragāthā, 293",
        attrlink: ""
    },
    {
        paliquote: "Āraddhaviriye pahitatte\nniccaṃ dalhaparakkame\nsamagge sāvake passa\nesā buddhāna vandanā. ",
        engquote: "See the disciples in perfect harmony,\nresolute and making effort,\nalways firm in their progress\n-- this is the best worship of the Buddha. ",
        attribution: "Therīgāthā, 161",
        attrlink: ""
    },
    {
        paliquote: "Ujumaggamhi akkhāte\ngacchatha mā nivattatha\nattanā coday'attānaṃ\nnibbānam abhihāraye. ",
        engquote: "The straight path has been clearly shown:\nwalk forward and don't turn back.\nUrge yourself onwards by yourself;\nin that way attain Nibbāna. ",
        attribution: "Theragāthā, 637",
        attrlink: ""
    },
    {
        paliquote: "Sace dhāvati te cittaṃ\nkāmesu ca bhavesu ca\nkhippaṃ nigganha satiyā\nkitthādam viya duppasuṃ. ",
        engquote: "If your mind runs wild among sensual pleasures and things that arise, quickl\nrestrain it with mindfulness as one pulls the cow from the corn. ",
        attribution: "Theragāthā, 446",
        attrlink: ""
    },
    {
        paliquote: "Na so rajjati dhammesu\ndhammaṃ ñatvā patissato\nvirattacitto vedeti tañ\nca n'ajjhosāya titthati. ",
        engquote: "Not excited by mental phenomena,\none knows them through mindfulness;\nthus with a mind well detached one understands and does not cling. ",
        attribution: "Theragāthā, 816",
        attrlink: ""
    },
    {
        paliquote: "Sammappadhānasampanno\nsatipatthañagocaro\nvimuttikusumasañchanno\nparinibbāty anāsavo. ",
        engquote: "Possessed of persevering energy,\npractising the foundations of mindfulness,\nbedecked with the blossoms of freedom,\nyou will be cooled and undefiled. ",
        attribution: "Theragāthā, 100",
        attrlink: ""
    },
    {
        paliquote: "Mettacittā kārunikā\nhotha sīlesu saṃvutā\naraddhaviriyā pahitattā\nniccaṃ dalhaparakkamā. ",
        engquote: "Develop a mind full of love;\nbe compassionate and virtuous;\narouse your energy, be resolute,\nalways firm in making progress. ",
        attribution: "Theragāthā, 979",
        attrlink: ""
    },
    {
        paliquote: "Yathāpi ekaputtasmiṃ\npiyasmiṃ kusalī siyā\nevaṃ sabbesu pānesu\nsabbattha kusalo siyā. ",
        engquote: "Just as a loving mother would guard her only dearly beloved child,\nso towards creatures everywhere one should always wish for their good. ",
        attribution: "Theragāthā, 33",
        attrlink: ""
    },
    {
        paliquote: "Anusāsi maṃ ariyavatā\nanukampī anuggahi\namogho tuyham ovādo\nantevāsi'mhi sikkhito. ",
        engquote: "You have taught me the noble practice,\nyou were compassionate and helpful to me.\nYour exhortation was not in vain for I am now your trained disciple. ",
        attribution: "Theragāthā, 334",
        attrlink: ""
    },
    {
        paliquote: "Sabbamitto sabbasakho\nsabbabhūtānukampako\nmettaṃ cittañ ca bhāvemi\nabyāpajjharato sadā.\nAsaṃhīram asaṃkuppaṃ\ncittaṃ āmodāyām'ahaṃ\nbrahmavihāraṃ bhāvemi\nakāpurisasevitaṃ.",
        engquote: "I am a friend and helper to all, \nI am sympathetic to all living beings. \nI develop a mind full of mettā\nand always delight in harmlessness.\nI gladden my mind, fill it with joy,\nmake it immovable and unshakeable. \nI develop the divine states of mind not cultivated by evil men. ",
        attribution: "Theragāthā, 648, 649",
        attrlink: ""
    },
    {
        paliquote: "Yo pubbe karanīyāni\npacchā so kātum icchati\nsukhā so dhaṃsate thānā\npacchā ca m-anutappati. ",
        engquote: "One who later wishes to do the things he should have done before,\nfalls away from happiness and long afterwards repents. ",
        attribution: "Theragāthā, 2",
        attrlink: ""
    },
    {
        paliquote: "Cittam upatthapetvāna\nekaggaṃ susamāhitaṃ\npaccavekkhatha saṅkhāre\nparato no ca attato. ",
        engquote: "Establish the mind, set it up in one-pointed stability;\nlook upon all formations as alien and as not self. ",
        attribution: "Therīgāthā, 177",
        attrlink: ""
    },
    {
        paliquote: "Pañcaṅgikena turiyena\nna rati hoti tādisī\nyathā ekaggacittassa\nsammā dhammaṃ vipassato. ",
        engquote: "Music from a five-piece ensemble\ncannot produce as much delight\nas that of a one pointed mind\nwith perfect insight. ",
        attribution: "Theragāthā, 398",
        attrlink: ""
    },
    {
        paliquote: "Vihavihābhinadite\nsippikābhirutehi ca\nna me taṃ phandati cittaṃ\nekattanirataṃ hi me. ",
        engquote: "Amidst the chirping and twittering of the birds in the woods,\nthis mind of mine does not waver for I am devoted to solitude. ",
        attribution: "Theragāthā, 49",
        attrlink: ""
    },
    {
        paliquote: "Avitakkaṃ samāpanno\nsammāsambuddhasāvako\nariyena tunhībhāvena\nupeto hoti tāvade. ",
        engquote: "Having attained the meditative stage where all thoughts come to a stop,\nthe disciple of the perfected Buddha thereby possesses the noble silence. ",
        attribution: "Theragāthā, 650",
        attrlink: ""
    },
    {
        paliquote: "Cakkhumassa yathā andho,\nsotvā badhiro yathā\npaññāv'assa yathā mūgo\nbalavā dubbalor iva. ",
        engquote: "Let one with sight be as though blind,\nand one who hears be as though deaf,\nlet one with tongue be as though dumb,\nlet one who is strong be as though weak. ",
        attribution: "Theragāthā, 501",
        attrlink: ""
    }
]