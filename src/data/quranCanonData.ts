import { ScriptureChapter } from './holyBooksData';

/**
 * The Quranic Ethical Canon:
 * Major foundational Surahs detailing law, justice, civilizational governance,
 * and the complete canonical index of all 114 Surahs.
 */
export const QURAN_CANON_CHAPTERS: ScriptureChapter[] = [
  {
    id: 'quran-001-fatiha',
    title: 'Surah 01: Al-Fatiha (The Opening)',
    reference: 'Quran • Surah 1 (Meccan, 7 Verses)',
    theme: 'Divine Sovereignty, Mercy & The Straight Path of Guidance',
    summary: 'The mother of scripture, recited in daily prayer: affirms the infinite mercy and cosmic sovereignty of the Creator, seeking guidance along the path of righteousness and integrity.',
    verses: [
      { num: '1:1-2', text: 'In the name of God, the Entirely Merciful, the Especially Merciful. All praise is due to God, Lord of the worlds.' },
      { num: '1:5-6', text: 'It is You we worship and You we ask for help. Guide us to the straight path: the path of those upon whom You have bestowed favor.' }
    ],
    civilizationalContext: 'Unites over a billion people daily in an ethical orientation toward mercy, justice, and accountability.'
  },
  {
    id: 'quran-002-baqarah',
    title: 'Surah 02: Al-Baqarah (The Cornerstone of Civil Law)',
    reference: 'Quran • Surah 2 (Medinan, 286 Verses)',
    theme: 'Legal Governance, Debt Contracts, Ayat al-Kursi & Usury Prohibition',
    summary: 'The longest Surah: details constitutional statutes, the famous Throne Verse (2:255), commercial law requiring written contracts and witnesses (2:282), and prohibiting predatory usury.',
    verses: [
      { num: '2:255', text: 'God: there is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep.' },
      { num: '2:256', text: 'There shall be no compulsion in religion: truth stands out clearly from falsehood.' },
      { num: '2:282', text: 'When you contract a debt for a specified term, write it down. Let a scribe write between you in justice... and call to witness two reliable witnesses.' }
    ],
    civilizationalContext: 'Pioneered formal contract law, written mercantile instruments, and explicit constitutional protection against forced religious conversion.'
  },
  {
    id: 'quran-003-ali-imran',
    title: 'Surah 03: Aal-e-Imran (The Family of Imran)',
    reference: 'Quran • Surah 3 (Medinan, 200 Verses)',
    theme: 'Steadfastness, Inter-Faith Respect & Holding to the Rope of Unity',
    summary: 'Focuses on spiritual perseverance in the face of military setback, respectful dialogue with people of previous scriptures, and collective unity against sectarian factionalism.',
    verses: [
      { num: '3:103', text: 'And hold firmly to the rope of God all together and do not become divided. Remember the favor of God upon you — how you were enemies and He joined your hearts.' },
      { num: '3:159', text: 'By mercy from God you were lenient with them. If you had been rude in speech and harsh in heart, they would have disbanded. So pardon them and consult them in affairs.' }
    ],
    civilizationalContext: 'Established participatory decision-making (Shura) and prohibited abusive autocratic leadership.'
  },
  {
    id: 'quran-004-nisa',
    title: 'Surah 04: An-Nisa (Women & Social Justice)',
    reference: 'Quran • Surah 4 (Medinan, 176 Verses)',
    theme: 'Rights of Women, Orphan Protection, Fair Inheritance & Judicial Equity',
    summary: 'A revolutionary civil statute in 7th-century Arabia: codified independent property rights and inheritance for women, protected war orphans, and demanded absolute impartial testimony.',
    verses: [
      { num: '4:1', text: 'Revere your Lord, who created you from one single soul, and created from it its mate, and dispersed from both many men and women.' },
      { num: '4:135', text: 'O you who have believed, stand firmly for justice as witnesses to God, even if it be against yourselves or your parents or your relatives, whether rich or poor.' }
    ],
    civilizationalContext: 'Established women’s legal personhood, independent financial ownership, and strict judicial duty to testify against one’s own family if required by truth.'
  },
  {
    id: 'quran-005-maidah',
    title: 'Surah 05: Al-Ma’idah (The Table Spread & Sanctity of Life)',
    reference: 'Quran • Surah 5 (Medinan, 120 Verses)',
    theme: 'Sanctity of Human Life, Honoring Covenants & Cooperation in Good',
    summary: 'Details dietary laws, honoring international treaties, and the monumental declaration that whoever takes an innocent life has killed all humanity, while saving one saves all.',
    verses: [
      { num: '5:2', text: 'Cooperate with one another in righteousness and piety, but do not cooperate in sin and aggression.' },
      { num: '5:8', text: 'Do not let the hatred of a people prevent you from being just. Be just; that is nearer to righteousness.' },
      { num: '5:32', text: 'Whoever kills a soul unless for murder or corruption in the earth — it is as if he had slain all mankind. And whoever saves one — it is as if he had saved all mankind.' }
    ],
    civilizationalContext: 'The supreme Islamic declaration on the absolute sanctity of human life and judicial fairness toward adversaries.'
  },
  {
    id: 'quran-006-anam',
    title: 'Surah 06: Al-An’am (The Cattle & Cosmic Order)',
    reference: 'Quran • Surah 6 (Meccan, 165 Verses)',
    theme: 'Creation, Animal Communities & Environmental Stewardship',
    summary: 'Affirms that non-human animal species form distinct social communities like human beings, calling for rational observation of nature and reverence for ecological balance.',
    verses: [
      { num: '6:38', text: 'There is no animal that walks upon the earth nor bird that flies with its wings except that they are communities like you. We have not neglected in the Book anything.' },
      { num: '6:151', text: 'Come, I will recite what your Lord has prohibited: Do not kill your children out of poverty; We provide for you and them. Do not approach immoralities, and do not kill the soul.' }
    ],
    civilizationalContext: 'An early ecological charter recognizing animal communities as having intrinsic social existence and ethical standing.'
  },
  {
    id: 'quran-012-yusuf',
    title: 'Surah 12: Yusuf (Joseph & Crisis Economics)',
    reference: 'Quran • Surah 12 (Meccan, 111 Verses)',
    theme: 'Resilience Against Betrayal, Agrarian Grain Reserves & Forgiveness',
    summary: 'The story of Joseph: overcoming fraternal jealousy, false imprisonment, managing Egypt’s 7-year drought through strategic grain storage, and offering unconditional forgiveness.',
    verses: [
      { num: '12:47-48', text: 'You will plant for seven years as usual, and what you harvest leave in its ear, except a little of which you eat. Then will come seven difficult years which will consume what you stored.' },
      { num: '12:92', text: 'Joseph said: "No blame will there be upon you today. May God forgive you; and He is the most merciful of the merciful."' }
    ],
    civilizationalContext: 'The classic blueprint for macro-economic crisis planning, grain silo reserves, and restorative reconciliation.'
  },
  {
    id: 'quran-016-nahl',
    title: 'Surah 16: An-Nahl (The Honeybee & Biomimicry)',
    reference: 'Quran • Surah 16 (Meccan, 128 Verses)',
    theme: 'Engineering in Nature, Natural Medicines & Golden Ethics',
    summary: 'Explores how nature inspires human technology: honeybees engineering architectural hives and producing medicinal honey; commands justice, kindness, and keeping promises.',
    verses: [
      { num: '16:69', text: 'From their bellies comes a drink of varying colors in which there is healing for people. Indeed in that is a sign for a people who give thought.' },
      { num: '16:90', text: 'Indeed, God orders justice and good conduct and giving to relatives and forbids immorality and bad conduct and oppression. He admonishes you that perhaps you will be reminded.' },
      { num: '16:125', text: 'Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best.' }
    ],
    civilizationalContext: 'Encouraged observation of natural biological systems and diplomatic, respectful engagement in public debate.'
  },
  {
    id: 'quran-017-isra',
    title: 'Surah 17: Al-Isra (The Ethical Decalogue & Care for Elders)',
    reference: 'Quran • Surah 17 (Meccan, 111 Verses)',
    theme: 'Care for Aging Parents, Economic Balance & Truthful Speech',
    summary: 'Contains the comprehensive Quranic moral code: forbids arrogance, demands filial tenderness toward elderly parents, forbids wasteful squandering, and commands honest mercantile measures.',
    verses: [
      { num: '17:23-24', text: 'And your Lord has decreed that you worship not except Him, and to parents, good treatment. Whether one or both of them reach old age with you, say not to them so much as "uff" and do not repel them but speak to them a noble word.' },
      { num: '17:35', text: 'And give full measure when you measure, and weigh with an even balance. That is the best way and best in result.' },
      { num: '17:70', text: 'And We have certainly honored the children of Adam and carried them on land and sea... and preferred them over much of what We have created.' }
    ],
    civilizationalContext: 'Affirms the intrinsic dignity of all human beings (Bani Adam) regardless of race, establishing deep filial care for elders.'
  },
  {
    id: 'quran-018-kahf',
    title: 'Surah 18: Al-Kahf (The Cave & Trials of Power)',
    reference: 'Quran • Surah 18 (Meccan, 110 Verses)',
    theme: 'Endurance Against Tyranny, Science & The Limits of Human Knowledge',
    summary: 'Four parabolic narratives addressing four civilizational trials: the Sleepers in the cave (trial of faith under persecution), the two gardens (trial of wealth), Moses and Khidr (trial of intellect), and Dhul-Qarnayn (trial of political power building defensive infrastructure).',
    verses: [
      { num: '18:46', text: 'Wealth and children are but the adornment of worldly life. But the enduring righteous deeds are better to your Lord for reward and better for hope.' },
      { num: '18:95-96', text: 'Dhul-Qarnayn said: "What my Lord has established for me is better, but assist me with strength; I will make between you and them a barrier. Bring me sheets of iron... and pour over it molten copper."' }
    ],
    civilizationalContext: 'Combines civic defense engineering with philosophical warnings against materialist arrogance.'
  },
  {
    id: 'quran-031-luqman',
    title: 'Surah 31: Luqman (The Legacy of Wisdom)',
    reference: 'Quran • Surah 31 (Meccan, 34 Verses)',
    theme: 'Character Education, Modesty & Parental Guidance',
    summary: 'The sage Luqman instructs his son in essential character: maintaining grateful humility, speaking with moderate voice, walking without pomp, and enduring hardships patiently.',
    verses: [
      { num: '31:17', text: 'O my son, establish prayer, enjoin what is right, forbid what is wrong, and be patient over what befalls you. Indeed, that is of the matters requiring resolve.' },
      { num: '31:18-19', text: 'And do not turn your cheek in contempt toward people and do not walk through the earth exultantly. Indeed, God does not like everyone self-deluded and boastful. And be moderate in your pace and lower your voice.' }
    ],
    civilizationalContext: 'The premier pedagogic manual for cultivating modest, resilient, and considerate youth.'
  },
  {
    id: 'quran-042-shura',
    title: 'Surah 42: Ash-Shura (Democratic Consultation)',
    reference: 'Quran • Surah 42 (Meccan, 53 Verses)',
    theme: 'Collective Deliberation, Due Process & Forgiveness',
    summary: 'Affirms that healthy societies manage their public affairs through open mutual consultation (Shura), praising those who forgive wrongs rather than escalating conflict.',
    verses: [
      { num: '42:38', text: 'And those who have responded to their Lord and established prayer and whose affair is determined by consultation among themselves, and from what We have provided them, they spend.' },
      { num: '42:40', text: 'And the retribution for an evil act is an evil one like it, but whoever pardons and makes reconciliation — his reward is from God.' }
    ],
    civilizationalContext: 'The constitutional pillar of consensus-based community governance and restorative justice.'
  },
  {
    id: 'quran-049-hujurat',
    title: 'Surah 49: Al-Hujurat (Universal Human Brotherhood)',
    reference: 'Quran • Surah 49 (Medinan, 18 Verses)',
    theme: 'Eradication of Racism & Slander, Universal Equality',
    summary: 'A direct decree against ethnic chauvinism: humanity is created from a single pair and divided into diverse nations only to know and appreciate one another.',
    verses: [
      { num: '49:10', text: 'The believers are but brothers, so make settlement between your brothers and fear God that you may receive mercy.' },
      { num: '49:11-12', text: 'Let not a people ridicule another people... do not spy or backbite each other. Would one of you like to eat the flesh of his brother when dead?' },
      { num: '49:13', text: 'O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of God is the most righteous of you.' }
    ],
    civilizationalContext: 'Dismantled tribal caste hierarchies in 7th-century Arabia, establishing an egalitarian multi-ethnic civilization.'
  },
  {
    id: 'quran-055-rahman',
    title: 'Surah 55: Ar-Rahman (The Universal Balance)',
    reference: 'Quran • Surah 55 (Medinan, 78 Verses)',
    theme: 'Cosmic Order, Justice in the Balance & Ecology',
    summary: 'A rhythmic hymn repeating: "Which of the favors of your Lord will you deny?" Commands humans to maintain the universal ecological and ethical scale without defect.',
    verses: [
      { num: '55:7-9', text: 'And the heaven He raised and imposed the balance, that you not transgress within the balance. And establish weight in justice and do not make deficient the balance.' },
      { num: '55:60', text: 'Is the reward for good anything but good?' }
    ],
    civilizationalContext: 'Connects the cosmic balance of planetary physics with the micro-balance of human justice.'
  },
  {
    id: 'quran-057-hadid',
    title: 'Surah 57: Al-Hadid (Iron & Social Equilibrium)',
    reference: 'Quran • Surah 57 (Medinan, 29 Verses)',
    theme: 'Metallurgy, Technology & The Balance of Justice',
    summary: 'Points out that iron was sent down with great military and material strength for human benefit, paired with scriptures and the balance so humans may stand for justice.',
    verses: [
      { num: '57:25', text: 'We sent our messengers with clear proofs and sent down with them the Scripture and the balance that the people may maintain justice. And We sent down iron, wherein is great military might and benefits for the people.' }
    ],
    civilizationalContext: 'The explicit integration of heavy engineering, metallurgy, and material science with moral ethics.'
  },
  {
    id: 'quran-068-qalam',
    title: 'Surah 68: Al-Qalam (The Pen & Sacredness of Literacy)',
    reference: 'Quran • Surah 68 (Meccan, 52 Verses)',
    theme: 'The Written Word, Education & Noble Character',
    summary: 'Opens with an oath by the Pen and that which humans write, asserting that true nobility consists of sublime character and intellectual inquiry rather than hoarding wealth.',
    verses: [
      { num: '68:1', text: 'Nun. By the pen and what they write!' },
      { num: '68:4', text: 'And indeed, you are of a great moral character.' }
    ],
    civilizationalContext: 'Elevated writing, literacy, and record-keeping to a sacred civilizational duty.'
  },
  {
    id: 'quran-076-insan',
    title: 'Surah 76: Al-Insan (Humanity & Altruism)',
    reference: 'Quran • Surah 76 (Medinan, 31 Verses)',
    theme: 'Feeding the Vulnerable purely for Love of the Divine',
    summary: 'Praises those who feed the hungry orphan, the prisoner of war, and the destitute without desiring repayment or even a word of thanks.',
    verses: [
      { num: '76:8-9', text: 'And they give food in spite of love for it to the needy, the orphan, and the captive, saying: "We feed you only for the sake of God; we wish not from you reward or gratitude."' }
    ],
    civilizationalContext: 'The purest formulation of unconditional humanitarian aid without political or commercial strings.'
  },
  {
    id: 'quran-103-asr',
    title: 'Surah 103: Al-Asr (The Epoch & The Formula of Success)',
    reference: 'Quran • Surah 103 (Meccan, 3 Verses)',
    theme: 'Time, Human Loss & The Four Pillars of Endurance',
    summary: 'In three verses, summarizes the human condition: time is slipping away, and all humanity is in loss except those who hold four pillars: faith, good works, mutual truth, and patient perseverance.',
    verses: [
      { num: '103:1-3', text: 'By time! Indeed, mankind is in loss, except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.' }
    ],
    civilizationalContext: 'Considered by classical scholars as a complete synthesis of human flourishing in three compact lines.'
  },
  {
    id: 'quran-107-maun',
    title: 'Surah 107: Al-Ma’un (Small Acts of Neighborly Kindness)',
    reference: 'Quran • Surah 107 (Meccan, 7 Verses)',
    theme: 'Denunciation of Formal Religion Devoid of Compassion',
    summary: 'A fierce rebuke of those who pray conspicuously for show but turn away orphans and refuse to lend simple household necessities (a pot, an axe, salt) to neighbors.',
    verses: [
      { num: '107:1-3', text: 'Have you seen the one who denies the judgment? That is the one who repulses the orphan and does not encourage the feeding of the poor.' },
      { num: '107:4-7', text: 'So woe to those who pray but are heedless of their prayer — those who make show of their deeds and withhold simple acts of neighborly kindness!' }
    ],
    civilizationalContext: 'Proves that religious ritual is worthless if disconnected from active charity and neighborly solidarity.'
  },
  {
    id: 'quran-112-ikhlas',
    title: 'Surah 112: Al-Ikhlas (Pure Monotheistic Unity)',
    reference: 'Quran • Surah 112 (Meccan, 4 Verses)',
    theme: 'The Absolute Unity & Self-Sufficiency of God',
    summary: 'The definitive monotheistic creed: God is One, the Eternal Refuge, neither begetting nor begotten, with none comparable.',
    verses: [
      { num: '112:1-4', text: 'Say: He is God, the One. God, the Absolute Refuge. He neither begets nor is born, nor is there to Him any equivalent.' }
    ],
    civilizationalContext: 'Liberated human consciousness from superstitious idol worship and dynastic divine kingship.'
  },
  {
    id: 'quran-113-114-muawwidhatayn',
    title: 'Surahs 113 & 114: Al-Falaq & An-Nas (The Shelters of Refuge)',
    reference: 'Quran • Surahs 113 & 114 (Meccan, 11 Verses)',
    theme: 'Psychological Sanctuary from Malice, Envy & Fear',
    summary: 'The closing pair of scriptures: seeking refuge in the Lord of dawn and the King of humanity from the mischief of darkness, corrupt whisperers, and toxic envy.',
    verses: [
      { num: '113:1-5', text: 'Say: I seek refuge in the Lord of daybreak from the evil of that which He created... and from the evil of the envier when he envies.' },
      { num: '114:1-6', text: 'Say: I seek refuge in the Lord of mankind, the Sovereign of mankind, from the whisperer who withdraws — who whispers into the hearts of people.' }
    ],
    civilizationalContext: 'Provides psychological armor against paranoia, toxic envy, and malicious conspiracy in survival groups.'
  }
];
