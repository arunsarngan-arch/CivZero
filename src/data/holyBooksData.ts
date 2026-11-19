export interface ScriptureChapter {
  id: string;
  title: string;
  reference: string;
  theme: string;
  summary: string;
  verses: {
    num: string;
    text: string;
  }[];
  civilizationalContext: string;
}

export interface HolyBook {
  id: string;
  title: string;
  subtitle: string;
  tradition: string;
  iconName: 'BookOpen' | 'BookMarked' | 'Sun' | 'Compass' | 'Wind' | 'Flame' | 'Scale';
  color: string;
  era: string;
  languageOrigin: string;
  overview: string;
  coreEthicalTenets: string[];
  chapters: ScriptureChapter[];
}

export const HOLY_BOOKS_CANON: HolyBook[] = [
  {
    id: 'holy-bible',
    title: 'The Holy Bible',
    subtitle: 'Old & New Testament Ethical Canon & Covenants',
    tradition: 'Judeo-Christian Heritage',
    iconName: 'BookOpen',
    color: '#38bdf8',
    era: '1500 BCE – 100 CE (Public Domain English Canon)',
    languageOrigin: 'Biblical Hebrew, Aramaic & Koine Greek',
    overview:
      'The foundational scriptural library underpinning global common law, human rights jurisprudence, weekly universal rest statutes (Sabbath), social covenants protecting the vulnerable, and the moral jurisprudence that shaped human civilization.',
    coreEthicalTenets: [
      'The Decalogue & Universal Rule of Law',
      'The Sabbath: Codification of Universal Labor Rest',
      'Protection of the Alien, Widow, Orphan & Impoverished',
      'The Golden Rule & Sacrificial Love of Neighbor',
      'Accountability of Rulers to Universal Moral Law',
    ],
    chapters: [
      {
        id: 'bible-exodus-20',
        title: 'The Decalogue (Ten Commandments)',
        reference: 'Exodus 20:1–17',
        theme: 'The Baseline Covenant of Moral Law',
        summary: 'The primary constitutional charter establishing the boundary between human tyranny and divine moral restraint.',
        verses: [
          { num: 'Ex 20:2', text: 'I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage.' },
          { num: 'Ex 20:3', text: 'Thou shalt have no other gods before me.' },
          { num: 'Ex 20:7', text: 'Thou shalt not take the name of the LORD thy God in vain; for the LORD will not hold him guiltless that taketh his name in vain.' },
          { num: 'Ex 20:8', text: 'Remember the sabbath day, to keep it holy. Six days shalt thou labour, and do all thy work:' },
          { num: 'Ex 20:10', text: 'But the seventh day is the sabbath of the LORD thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates.' },
          { num: 'Ex 20:12', text: 'Honour thy father and thy mother: that thy days may be long upon the land which the LORD thy God giveth thee.' },
          { num: 'Ex 20:13', text: 'Thou shalt not kill (commit murder).' },
          { num: 'Ex 20:14', text: 'Thou shalt not commit adultery.' },
          { num: 'Ex 20:15', text: 'Thou shalt not steal.' },
          { num: 'Ex 20:16', text: 'Thou shalt not bear false witness against thy neighbour.' },
          { num: 'Ex 20:17', text: 'Thou shalt not covet thy neighbour’s house, thou shalt not covet thy neighbour’s wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbour’s.' },
        ],
        civilizationalContext:
          'Prohibited totalitarian kings from claiming divine right. Transformed nomadic wanderers into an egalitarian commonwealth governed by universal written moral statutes.',
      },
      {
        id: 'bible-matthew-5',
        title: 'The Sermon on the Mount & The Beatitudes',
        reference: 'Matthew 5:1–16, 43–48',
        theme: 'Internalized Ethics & The Kingdom of Grace',
        summary: 'The manifesto of moral character: blessings on the meek, peacemakers, and seekers of righteousness.',
        verses: [
          { num: 'Matt 5:3', text: 'Blessed are the poor in spirit: for theirs is the kingdom of heaven.' },
          { num: 'Matt 5:4', text: 'Blessed are they that mourn: for they shall be comforted.' },
          { num: 'Matt 5:5', text: 'Blessed are the meek: for they shall inherit the earth.' },
          { num: 'Matt 5:6', text: 'Blessed are they which do hunger and thirst after righteousness: for they shall be filled.' },
          { num: 'Matt 5:7', text: 'Blessed are the merciful: for they shall obtain mercy.' },
          { num: 'Matt 5:8', text: 'Blessed are the pure in heart: for they shall see God.' },
          { num: 'Matt 5:9', text: 'Blessed are the peacemakers: for they shall be called the children of God.' },
          { num: 'Matt 5:14', text: 'Ye are the light of the world. A city that is set on an hill cannot be hid.' },
          { num: 'Matt 5:44', text: 'Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you.' },
        ],
        civilizationalContext:
          'Replaced cycle of blood feuds and violent retribution with restorative justice, mercy, and unconditional human dignity.',
      },
      {
        id: 'bible-psalm-23',
        title: 'The Shepherd Psalm & Fortitude in Adversity',
        reference: 'Psalm 23:1–6',
        theme: 'Spiritual Fortitude & Peace in Crisis',
        summary: 'The timeless hymn of refuge in catastrophe, starvation, and the valley of the shadow of death.',
        verses: [
          { num: 'Ps 23:1', text: 'The LORD is my shepherd; I shall not want.' },
          { num: 'Ps 23:2', text: 'He maketh me to lie down in green pastures: he leadeth me beside the still waters.' },
          { num: 'Ps 23:3', text: 'He restoreth my soul: he leadeth me in the paths of righteousness for his name’s sake.' },
          { num: 'Ps 23:4', text: 'Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.' },
          { num: 'Ps 23:5', text: 'Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.' },
          { num: 'Ps 23:6', text: 'Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever.' },
        ],
        civilizationalContext:
          'Provided psychological resilience to individuals facing existential grief, siege, famine, and medical trauma across 3,000 years.',
      },
      {
        id: 'bible-1cor-13',
        title: 'The Hymn of Love (Agape)',
        reference: '1 Corinthians 13:1–13',
        theme: 'The Supreme Virtue of Selfless Love',
        summary: 'Without benevolent self-sacrificial love, all scientific knowledge, eloquent speech, and heroic endurance are worthless.',
        verses: [
          { num: '1Cor 13:1', text: 'Though I speak with the tongues of men and of angels, and have not charity (love), I am become as sounding brass, or a tinkling cymbal.' },
          { num: '1Cor 13:2', text: 'And though I have the gift of prophecy, and understand all mysteries, and all knowledge; and though I have all faith, so that I could remove mountains, and have not charity, I am nothing.' },
          { num: '1Cor 13:4', text: 'Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up,' },
          { num: '1Cor 13:5', text: 'Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil;' },
          { num: '1Cor 13:7', text: 'Beareth all things, believeth all things, hopeth all things, endureth all things.' },
          { num: '1Cor 13:13', text: 'And now abideth faith, hope, charity, these three; but the greatest of these is charity.' },
        ],
        civilizationalContext:
          'Defined the highest moral virtue in Western philosophical and theological tradition, anchoring hospital networks and humanitarian aid.',
      },
    ],
  },
  {
    id: 'holy-quran',
    title: 'The Holy Quran',
    subtitle: 'The Divine Recitation, Justice & Social Equity',
    tradition: 'Islamic Heritage',
    iconName: 'BookMarked',
    color: '#10b981',
    era: '610 – 632 CE (Public Domain Classical Translation)',
    languageOrigin: 'Classical Arabic',
    overview:
      'The sacred scripture of Islam, delivering an uncompromising monotheistic covenant, rigorous mandates for social equity, economic fairness, systematic charity (Zakat), the protection of orphans and travelers, and absolute judicial impartiality.',
    coreEthicalTenets: [
      'Tawhid: Absolute Unity of the Creator',
      'Adl & Ihsan: Impartial Justice and Compassionate Excellence',
      'Zakat & Sadaqah: Eradication of Poverty via Shared Wealth',
      'Universal Brotherhood of Humanity across Races & Tribes',
      'Sanctity of Human Life: Saving one life is like saving all humanity',
    ],
    chapters: [
      {
        id: 'quran-al-fatiha',
        title: 'Surah Al-Fatiha (The Opening)',
        reference: 'Quran 1:1–7',
        theme: 'The Essence of Divine Mercy and Guidance',
        summary: 'The mother of the book, recited in every prayer, affirming divine sovereignty, infinite mercy, and the path of righteousness.',
        verses: [
          { num: '1:1', text: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.' },
          { num: '1:2', text: 'All praise is due to Allah, Lord of the worlds;' },
          { num: '1:3', text: 'The Entirely Merciful, the Especially Merciful;' },
          { num: '1:4', text: 'Sovereign of the Day of Recompense.' },
          { num: '1:5', text: 'It is You we worship and You we ask for help.' },
          { num: '1:6', text: 'Guide us to the straight path;' },
          { num: '1:7', text: 'The path of those upon whom You have bestowed favor, not of those who have evoked anger or of those who are astray.' },
        ],
        civilizationalContext:
          'Unites over one billion believers daily in prayer, orienting the human conscience toward divine accountability and ethical balance.',
      },
      {
        id: 'quran-ayat-al-kursi',
        title: 'Ayat al-Kursi (The Throne Verse)',
        reference: 'Quran 2:255',
        theme: 'The Transcendent Unity & Power of God',
        summary: 'The pinnacle declaration of divine sovereignty, omniscience, and vigilance over the cosmos.',
        verses: [
          { num: '2:255', text: 'Allah — there is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth.' },
          { num: '2:255b', text: 'Who is it that can intercede with Him except by His permission? He knows what is presently before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills.' },
          { num: '2:255c', text: 'His Kursi (Throne) extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.' },
        ],
        civilizationalContext:
          'Considered the greatest protective verse in Islamic theology, eliminating fear of superstition, dark magic, and despots.',
      },
      {
        id: 'quran-hujurat-equality',
        title: 'Surah Al-Hujurat (Universal Human Brotherhood)',
        reference: 'Quran 49:10–13',
        theme: 'Eradication of Racism & Tribalism',
        summary: 'Declares that all human beings are created from a single pair and differentiated into tribes only to know one another.',
        verses: [
          { num: '49:10', text: 'The believers are but brothers, so make settlement between your brothers. And fear Allah that you may receive mercy.' },
          { num: '49:11', text: 'O you who have believed, let not a people ridicule another people; perhaps they may be better than them; nor let women ridicule other women; perhaps they may be better than them. And do not insult one another and do not call each other by offensive nicknames.' },
          { num: '49:12', text: 'O you who have believed, avoid much suspicion; indeed, some suspicion is sin. And do not spy or backbite each other.' },
          { num: '49:13', text: 'O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you. Indeed, Allah is Knowing and Acquainted.' },
        ],
        civilizationalContext:
          'Dismantled ethnic supremacy and tribal caste hierarchies in 7th-century Arabia, creating the first multi-continental egalitarian civilization.',
      },
      {
        id: 'quran-al-asr',
        title: 'Surah Al-Asr (The Epoch & Human Destiny)',
        reference: 'Quran 103:1–3',
        theme: 'Time, Fortitude & Mutual Truth',
        summary: 'A three-verse synthesis of human triumph over tragedy through faith, righteous works, truth, and endurance.',
        verses: [
          { num: '103:1', text: 'By the declining day (time through the ages),' },
          { num: '103:2', text: 'Indeed, mankind is in loss,' },
          { num: '103:3', text: 'Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience and perseverance.' },
        ],
        civilizationalContext:
          'Imam Al-Shafi noted that if people only reflected on this single chapter, it would suffice them as complete moral guidance.',
      },
    ],
  },
  {
    id: 'bhagavad-gita',
    title: 'The Bhagavad Gita',
    subtitle: 'The Song of God, Selfless Duty & Spiritual Fortitude',
    tradition: 'Vedic & Hindu Heritage',
    iconName: 'Sun',
    color: '#f59e0b',
    era: 'c. 500 – 200 BCE (Public Domain Classical Sanskrit Translation)',
    languageOrigin: 'Classical Sanskrit',
    overview:
      'The sacred philosophical dialogue between Prince Arjuna and Lord Krishna on the battlefield of Kurukshetra, illuminating the path of selfless duty (Karma Yoga), mastery over fear and ego, the immortal nature of consciousness, and inner peace in the face of collapse.',
    coreEthicalTenets: [
      'Nishkama Karma: Action dedicated to duty without attachment to results',
      'The Immortality of the Soul (Atman) transcending the physical body',
      'Equanimity of Mind (Samatvam) in victory and defeat, joy and sorrow',
      'Dharma: Upholding universal righteousness and societal balance',
      'Freedom from Anger, Greed and Delusion via Self-Mastery',
    ],
    chapters: [
      {
        id: 'gita-chapter-2',
        title: 'Sankhya Yoga (The Eternal Soul & Equanimity)',
        reference: 'Bhagavad Gita 2:14, 2:20, 2:47–48',
        theme: 'Conquering Existential Despair',
        summary: 'Krishna instructs Arjuna that physical bodies perish but the soul is eternal, calling for unwavering duty.',
        verses: [
          { num: '2:14', text: 'O son of Kunti, the nonpermanent appearance of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons. They arise from sense perception, and one must learn to tolerate them without being disturbed.' },
          { num: '2:20', text: 'For the soul there is neither birth nor death at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing and primeval. It is not slain when the body is slain.' },
          { num: '2:47', text: 'You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.' },
          { num: '2:48', text: 'Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity is called Yoga.' },
          { num: '2:71', text: 'A person who has given up all desires for sense gratification, who lives free from desires, who has given up all sense of proprietorship and is devoid of false ego — he alone can attain real peace.' },
        ],
        civilizationalContext:
          'The doctrine of Nishkama Karma inspired centuries of civil duty, philosophical inquiry, and Mahatma Gandhi’s non-violent resistance.',
      },
      {
        id: 'gita-chapter-3',
        title: 'Karma Yoga (The Path of Selfless Service)',
        reference: 'Bhagavad Gita 3:19–21',
        theme: 'Action for the Welfare of the World (Lokasamgraha)',
        summary: 'Why leaders must act selflessly to set the benchmark for societal order and civilizational harmony.',
        verses: [
          { num: '3:19', text: 'Therefore, without being attached to the fruits of activities, one should act as a matter of duty, for by working without attachment one attains the Supreme.' },
          { num: '3:20', text: 'Kings such as Janaka attained perfection solely by performance of prescribed duties. Therefore, only for the sake of educating the people in general (welfare of the world), you should perform your work.' },
          { num: '3:21', text: 'Whatever action a great man performs, common men follow. And whatever standards he sets by exemplary acts, all the world pursues.' },
        ],
        civilizationalContext:
          'Establishes ethical leadership as a sacred public trust rather than an instrument of personal enrichment.',
      },
      {
        id: 'gita-chapter-6',
        title: 'Dhyana Yoga (Mastery of the Mind)',
        reference: 'Bhagavad Gita 6:5–6',
        theme: 'The Mind as Friend or Foe',
        summary: 'How self-discipline transforms the turbulent human mind into a loyal ally in survival.',
        verses: [
          { num: '6:5', text: 'One must elevate oneself by one’s own mind, not degrade oneself. The mind is the friend of the conditioned soul, and his enemy as well.' },
          { num: '6:6', text: 'For him who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his mind will remain the greatest enemy.' },
        ],
        civilizationalContext:
          'Anchored Eastern meditation, psychological resilience under extreme stress, and emotional equilibrium.',
      },
    ],
  },
  {
    id: 'the-dhammapada',
    title: 'The Dhammapada',
    subtitle: 'The Verses of Truth & The Noble Buddhist Path',
    tradition: 'Buddhist Heritage',
    iconName: 'Compass',
    color: '#eab308',
    era: 'c. 3rd Century BCE (Pali Canon Public Domain English Translation)',
    languageOrigin: 'Pali',
    overview:
      'The core ethical anthology of the Buddha’s teachings, containing 423 verses addressing mindfulness, non-violence (Ahimsa), mastery over anger, compassion for all sentient life, and the cessation of suffering.',
    coreEthicalTenets: [
      'Mind is the forerunner of all states: As you think, so you become',
      'Ahimsa: Absolute non-violence and reverent compassion for life',
      'Conquering anger with love, evil with good, greed with generosity',
      'The Four Noble Truths and the Eightfold Path of ethical living',
      'Vigilance (Appamada): The path to deathlessness and clarity',
    ],
    chapters: [
      {
        id: 'dhammapada-chapter-1',
        title: 'Yamaka-vagga (The Twin Verses)',
        reference: 'Dhammapada 1:1–5',
        theme: 'The Architecture of Thought & Karma',
        summary: 'How our intentions create our reality, and how hatred is never appeased by hatred.',
        verses: [
          { num: 'Dhp 1', text: 'Mind precedes all mental states. Mind is their chief; they are all mind-wrought. If with an impure mind a person speaks or acts, suffering follows him like the wheel that follows the foot of the ox.' },
          { num: 'Dhp 2', text: 'Mind precedes all mental states. Mind is their chief; they are all mind-wrought. If with a pure mind a person speaks or acts, happiness follows him like a never-departing shadow.' },
          { num: 'Dhp 5', text: 'Hatred is never appeased by hatred in this world. By non-hatred alone is hatred appeased. This is an eternal law.' },
          { num: 'Dhp 6', text: 'There are those who do not realize that one day we must all die. But those who do realize this settle their quarrels.' },
        ],
        civilizationalContext:
          'The definitive text on psychological etiology, proving that peace and violence both originate in human mental habits.',
      },
      {
        id: 'dhammapada-chapter-10',
        title: 'Danda-vagga (The Rod / Non-Violence)',
        reference: 'Dhammapada 10:129–130',
        theme: 'Empathy as the Root of Morality',
        summary: 'Recognizing that all beings tremble at punishment and cherish life.',
        verses: [
          { num: 'Dhp 129', text: 'All tremble at violence; all fear death. Putting oneself in the place of another, one should not kill nor cause another to kill.' },
          { num: 'Dhp 130', text: 'All tremble at violence; life is dear to all. Putting oneself in the place of another, one should not kill nor cause another to kill.' },
          { num: 'Dhp 223', text: 'Conquer anger by love. Conquer evil by good. Conquer the stingy by giving. Conquer the liar by truth.' },
        ],
        civilizationalContext:
          'Underpinned the reign of Emperor Ashoka, who renounced imperial conquest for public hospitals, animal sanctuaries, and tolerance.',
      },
    ],
  },
  {
    id: 'tao-te-ching',
    title: 'The Tao Te Ching',
    subtitle: 'The Classic of the Way & Virtue (Lao Tzu)',
    tradition: 'Taoist & Eastern Heritage',
    iconName: 'Wind',
    color: '#06b6d4',
    era: 'c. 6th – 4th Century BCE (Public Domain Translation by James Legge)',
    languageOrigin: 'Classical Chinese',
    overview:
      '81 profound verses on living in harmony with nature (the Tao), yielding without breaking (Wu Wei), leading without dominating, and maintaining humility and simplicity when human structures fail.',
    coreEthicalTenets: [
      'Wu Wei: Effortless action in harmony with natural laws',
      'The Three Treasures: Compassion, Frugality, and Humility',
      'Yielding Overcomes Rigid Force (The Way of Water)',
      'Simplicity & Contentment as the True Wealth',
      'Servant Leadership: Leading from behind without grasping power',
    ],
    chapters: [
      {
        id: 'tao-verse-8',
        title: 'The Quality of Water (Highest Good)',
        reference: 'Tao Te Ching Chapter 8',
        theme: 'Humility and Adaptability',
        summary: 'Water benefits all things without competing and occupies places despised by others.',
        verses: [
          { num: 'Ch 8:1', text: 'The highest goodness is like water. Water easily benefits all things without struggling.' },
          { num: 'Ch 8:2', text: 'It dwells in low places that all men disdain. Therefore it is near to the Tao.' },
          { num: 'Ch 8:3', text: 'In dwelling, be close to the land. In meditation, go deep in the heart. In dealing with others, be gentle and kind. In speech, be true. In ruling, be just. In business, be competent. In action, watch the timing.' },
          { num: 'Ch 8:4', text: 'Because water does not compete, it is free from blame.' },
        ],
        civilizationalContext:
          'Taught survivalists, engineers, and philosophers how to endure extreme disruption through flexible adaptation rather than brittle resistance.',
      },
      {
        id: 'tao-verse-67',
        title: 'The Three Treasures',
        reference: 'Tao Te Ching Chapter 67',
        theme: 'The Moral Capital of Society',
        summary: 'Compassion, frugality, and not daring to put oneself ahead of others.',
        verses: [
          { num: 'Ch 67:1', text: 'I have three treasures which I hold and prize: the first is compassion; the second is frugality; the third is not daring to put oneself ahead of others.' },
          { num: 'Ch 67:2', text: 'From compassion comes courage; from frugality comes generosity; from humility comes leadership.' },
          { num: 'Ch 67:3', text: 'If a man forsakes compassion and seeks only courage, or forsakes frugality and seeks only abundance, or forsakes humility and seeks only supremacy, he is surely on the road to death.' },
        ],
        civilizationalContext:
          'Essential resource conservation and community solidarity tenets during material scarcity and post-disaster rebuilding.',
      },
    ],
  },
  {
    id: 'guru-granth-sahib',
    title: 'The Guru Granth Sahib & Sikh Ethics',
    subtitle: 'Universal Equality, Divine Remembrance & Selfless Service',
    tradition: 'Sikh Heritage',
    iconName: 'Flame',
    color: '#8b5cf6',
    era: '1469 – 1708 CE (Public Domain Hymns of Guru Nanak & Sages)',
    languageOrigin: 'Gurmukhi & Sant Bhasha',
    overview:
      'The central holy scripture of Sikhism, composed of divine hymns by the Sikh Gurus and saints of diverse Hindu and Muslim backgrounds, affirming the equality of all humanity, the rejection of caste, and active defense of the oppressed (Seva & Deg Tegh Fateh).',
    coreEthicalTenets: [
      'Naam Japna: Remembrance of the One Creator in all actions',
      'Kirat Karo: Honest labor and righteous, truthful living',
      'Vand Chhako: Sharing earnings with the needy (The Langar Community Kitchen)',
      'Sarbat da Bhala: Praying for the peace and prosperity of ALL humanity',
      'Rejection of Caste, Gender Inequality, and Blind Ritualism',
    ],
    chapters: [
      {
        id: 'sikh-mool-mantar',
        title: 'The Mool Mantar & Japji Sahib',
        reference: 'Guru Granth Sahib, Page 1',
        theme: 'The Unified Creator & Path of Truth',
        summary: 'The primordial opening affirmation of monotheism and fearlessness.',
        verses: [
          { num: 'GGS 1:1', text: 'Ik Onkar — One Universal Creator God. The Name is Truth. Creative Being Personified. No Fear. No Hatred. Image of the Undying, Beyond Birth, Self-Existent. By Guru’s Grace.' },
          { num: 'GGS 1:2', text: 'True in the Primal Beginning. True Throughout the Ages. True Here and Now. O Nanak, Forever and Ever True.' },
          { num: 'GGS 1:3', text: 'Truth is the highest virtue, but higher still is truthful living.' },
        ],
        civilizationalContext:
          'Created the legendary community kitchen (Langar) tradition where king and beggar sit side-by-side on the ground to eat as equal human beings.',
      },
    ],
  },
  {
    id: 'universal-golden-rule',
    title: 'The Universal Golden Rule Matrix',
    subtitle: 'The Moral Invariant Across All World Civilizations',
    tradition: 'Comparative Global Heritage',
    iconName: 'Scale',
    color: '#ec4899',
    era: 'Universal Human Consciousness (All Eras)',
    languageOrigin: 'Comparative Multilingual Epigraphy',
    overview:
      'The single universal moral invariant that has emerged independently in every sustainable human civilization: the mandate of mutual reciprocity and empathy.',
    coreEthicalTenets: [
      'Treat others as you wish to be treated',
      'What is hateful to you, do not do to your neighbor',
      'Empathy as the fundamental mathematical axiom of civil peace',
    ],
    chapters: [
      {
        id: 'golden-rule-matrix',
        title: 'The 12-Tradition Reciprocity Concordance',
        reference: 'Global Epigraphic Synthesis',
        theme: 'Universal Consensus on Empathy',
        summary: 'How every major civilization formulated the identical golden rule of mutual respect.',
        verses: [
          { num: 'Christianity', text: '“All things whatsoever ye would that men should do to you, do ye even so to them: for this is the law and the prophets.” — Matthew 7:12' },
          { num: 'Islam', text: '“None of you truly believes until he loves for his brother what he loves for himself.” — Hadith an-Nawawi 13' },
          { num: 'Judaism', text: '“What is hateful to you, do not do to your fellow man. This is the entire Law; all the rest is explanation.” — Talmud, Shabbat 31a' },
          { num: 'Hinduism', text: '“This is the sum of duty: do naught unto others which would cause you pain if done to you.” — Mahabharata 5:1517' },
          { num: 'Buddhism', text: '“Hurt not others in ways that you yourself would find hurtful.” — Udanavarga 5:18' },
          { num: 'Confucianism', text: '“Do not do to others what you would not wish done to yourself.” — Analects 15:23' },
          { num: 'Taoism', text: '“Regard your neighbor’s gain as your own gain, and your neighbor’s loss as your own loss.” — Tai Shang Kan Ying Pien' },
          { num: 'Sikhism', text: '“I am a stranger to no one; and no one is a stranger to me! Indeed, I am a friend to all!” — Guru Granth Sahib p. 1299' },
          { num: 'Zoroastrianism', text: '“That nature alone is good which refrains from doing another what is not good for itself.” — Dadestan-i-Denig 94:5' },
          { num: 'Ancient Greece', text: '“Do not to your neighbor what you would take ill from him.” — Pittacus of Mytilene' },
          { num: 'Ubuntu (Africa)', text: '“Umuntu ngumuntu ngabantu — A person is a person through other persons.” — Bantu Proverb' },
        ],
        civilizationalContext:
          'Proves mathematically and philosophically that no human civilization can survive without mutual reciprocity and collective empathy.',
      },
    ],
  },
];
