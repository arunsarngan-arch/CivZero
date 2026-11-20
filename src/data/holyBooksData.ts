import { BIBLE_66_BOOKS } from './bibleCanonData';
import { GITA_18_CHAPTERS } from './gitaCanonData';
import { DHAMMAPADA_26_VAGGAS } from './dhammapadaCanonData';
import { QURAN_CANON_CHAPTERS } from './quranCanonData';

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
  // 1. THE HOLY BIBLE (ALL 66 CANONICAL BOOKS)
  {
    id: 'holy-bible',
    title: 'The Holy Bible (66 Books)',
    subtitle: 'Complete Old & New Testament Canon & Covenants',
    tradition: 'Judeo-Christian Heritage',
    iconName: 'BookOpen',
    color: '#38bdf8',
    era: '1500 BCE – 100 CE (All 66 Canonical Books)',
    languageOrigin: 'Biblical Hebrew, Aramaic & Koine Greek',
    overview:
      'The complete 66-book scriptural library underpinning global common law, constitutional governance, universal human sanctity (Imago Dei), weekly labor rest statutes (Sabbath), defense of the poor and vulnerable, and civilizational jurisprudence across 39 Old Testament and 27 New Testament books.',
    coreEthicalTenets: [
      'The Decalogue & Universal Rule of Law',
      'The Sabbath: Codification of Universal Labor Rest',
      'Protection of the Alien, Widow, Orphan & Impoverished',
      'The Golden Rule & Sacrificial Love of Neighbor',
      'Accountability of Rulers to Universal Moral Law',
    ],
    chapters: BIBLE_66_BOOKS,
  },

  // 2. THE HOLY QURAN
  {
    id: 'holy-quran',
    title: 'The Holy Quran',
    subtitle: 'The Divine Recitation, Justice & Social Equity',
    tradition: 'Islamic Heritage',
    iconName: 'BookMarked',
    color: '#10b981',
    era: '610 – 632 CE (Canonical Surah Teachings)',
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
    chapters: QURAN_CANON_CHAPTERS,
  },

  // 3. THE BHAGAVAD GITA (ALL 18 CHAPTERS)
  {
    id: 'bhagavad-gita',
    title: 'The Bhagavad Gita (18 Chapters)',
    subtitle: 'The Song of God, Selfless Duty & Spiritual Fortitude',
    tradition: 'Vedic & Hindu Heritage',
    iconName: 'Sun',
    color: '#f59e0b',
    era: 'c. 500 – 200 BCE (All 18 Philosophical Yogas)',
    languageOrigin: 'Classical Sanskrit',
    overview:
      'The complete 18-chapter philosophical dialogue on the battlefield of Kurukshetra between Prince Arjuna and Lord Krishna, illuminating selfless action (Karma Yoga), the immortal nature of consciousness, mastery over fear and ego, and equanimity in the face of collapse.',
    coreEthicalTenets: [
      'Nishkama Karma: Action dedicated to duty without attachment to results',
      'The Immortality of the Soul (Atman) transcending the physical body',
      'Equanimity of Mind (Samatvam) in victory and defeat, joy and sorrow',
      'Dharma: Upholding universal righteousness and societal balance',
      'Freedom from Anger, Greed and Delusion via Self-Mastery',
    ],
    chapters: GITA_18_CHAPTERS,
  },

  // 4. THE DHAMMAPADA (ALL 26 VAGGAS)
  {
    id: 'the-dhammapada',
    title: 'The Dhammapada (26 Vaggas)',
    subtitle: 'The Verses of Truth & The Noble Buddhist Path',
    tradition: 'Buddhist Heritage',
    iconName: 'Compass',
    color: '#eab308',
    era: 'c. 3rd Century BCE (All 26 Chapters of the Pali Canon)',
    languageOrigin: 'Pali',
    overview:
      'The complete 26-chapter ethical anthology of Buddhist wisdom: 423 verses addressing the psychology of thought, non-violence (Ahimsa), conquering anger with love, mindfulness (Appamada), and the overthrow of hereditary caste in favor of noble character.',
    coreEthicalTenets: [
      'Mind is the forerunner of all states: As you think, so you become',
      'Ahimsa: Absolute non-violence and reverent compassion for life',
      'Conquering anger with love, evil with good, greed with generosity',
      'The Four Noble Truths and the Eightfold Path of ethical living',
      'True Nobility defined by moral character, not birth or caste',
    ],
    chapters: DHAMMAPADA_26_VAGGAS,
  },

  // 5. THE TAO TE CHING
  {
    id: 'tao-te-ching',
    title: 'The Tao Te Ching',
    subtitle: 'The Classic of the Way & Virtue (Lao Tzu)',
    tradition: 'Taoist & Eastern Heritage',
    iconName: 'Wind',
    color: '#06b6d4',
    era: 'c. 6th – 4th Century BCE (Book 1: Dao Jing & Book 2: De Jing)',
    languageOrigin: 'Classical Chinese',
    overview:
      '81 profound verses on living in harmony with nature (the Tao), yielding without breaking (Wu Wei), leading from behind without dominating, and maintaining humility and frugality when artificial systems fail.',
    coreEthicalTenets: [
      'Wu Wei: Effortless action in harmony with natural laws',
      'The Three Treasures: Compassion, Frugality, and Humility',
      'Yielding Overcomes Rigid Force (The Way of Water)',
      'Simplicity & Contentment as the True Wealth',
      'Servant Leadership: Leading from behind without grasping power',
    ],
    chapters: [
      {
        id: 'tao-verse-1',
        title: 'Chapter 01: The Nameless Beginning (Book 1: Dao Jing)',
        reference: 'Tao Te Ching • Chapter 1',
        theme: 'The Mystery of the Cosmic Source & Humility of Speech',
        summary: 'The Tao that can be spoken is not the eternal Tao. The nameless is the beginning of heaven and earth; the named is the mother of all things.',
        verses: [
          { num: 'Ch 1:1', text: 'The Tao that can be trodden is not the enduring and unchanging Tao. The name that can be named is not the enduring and unchanging name.' },
          { num: 'Ch 1:2', text: 'Conceived of as having no name, it is the Originator of heaven and earth; conceived of as having a name, it is the Mother of all things.' }
        ],
        civilizationalContext: 'Inculcated intellectual humility, reminding scholars that natural reality always exceeds verbal definitions.'
      },
      {
        id: 'tao-verse-8',
        title: 'Chapter 08: The Quality of Water (Highest Good)',
        reference: 'Tao Te Ching • Chapter 8',
        theme: 'Humility, Adaptability & Non-Contention',
        summary: 'Water benefits all things without competing and occupies low places despised by others. Because it does not contend, it cannot be defeated.',
        verses: [
          { num: 'Ch 8:1', text: 'The highest excellence is like that of water. The excellence of water appears in its benefiting all things, and in its occupying without striving the low place which all men dislike.' },
          { num: 'Ch 8:2', text: 'In dwelling, be close to the ground. In thought, be deep. In giving, be generous. In speaking, be truthful. In governing, be just. In work, be competent. In action, watch the timing.' }
        ],
        civilizationalContext: 'Taught survivalists and engineers to endure disruption through flexible adaptation rather than brittle resistance.'
      },
      {
        id: 'tao-verse-17',
        title: 'Chapter 17: The Art of Invisible Leadership',
        reference: 'Tao Te Ching • Chapter 17',
        theme: 'Governance Without Domination',
        summary: 'With the greatest leader, people barely know he exists. When his work is accomplished, the people say: "We did it ourselves."',
        verses: [
          { num: 'Ch 17:1', text: 'As to the best rulers, the people only know that they exist. The next best they love and praise; the next they fear; the next they despise.' },
          { num: 'Ch 17:2', text: 'When the leader’s task is accomplished and the work is done, all the people remark: "We have done it ourselves naturally."' }
        ],
        civilizationalContext: 'The premier philosophy of non-authoritarian, decentralized community leadership.'
      },
      {
        id: 'tao-verse-38',
        title: 'Chapter 38: Real Virtue vs. Outward Show (Book 2: De Jing)',
        reference: 'Tao Te Ching • Chapter 38',
        theme: 'Organic Virtue versus Artificial Protocol',
        summary: 'Opens the Book of Virtue (De Jing): true virtue is spontaneous and unassuming, while superficial etiquette arises when genuine empathy is lost.',
        verses: [
          { num: 'Ch 38:1', text: 'Those who possess highest virtue are not conscious of their virtue, and therefore they truly possess it.' },
          { num: 'Ch 38:2', text: 'When the great Tao is lost, there is formal goodness; when formal goodness is lost, there is rigid law; when rigid law is lost, there is chaos.' }
        ],
        civilizationalContext: 'A warning against substituting excessive bureaucratic red tape for genuine communal care.'
      },
      {
        id: 'tao-verse-67',
        title: 'Chapter 67: The Three Treasures',
        reference: 'Tao Te Ching • Chapter 67',
        theme: 'Compassion, Frugality & Not Putting Oneself First',
        summary: 'The three irreplaceable moral assets of civilization: from compassion comes courage; from frugality comes generosity; from humility comes leadership.',
        verses: [
          { num: 'Ch 67:1', text: 'I have three treasures which I hold and prize: the first is compassion; the second is frugality; the third is not daring to put myself ahead of others.' },
          { num: 'Ch 67:2', text: 'From compassion comes courage; from frugality comes wide generosity; from humility comes leadership of the community.' }
        ],
        civilizationalContext: 'Essential resource conservation and community solidarity principles during material scarcity.'
      },
      {
        id: 'tao-verse-81',
        title: 'Chapter 81: Truthful Words & Giving Away',
        reference: 'Tao Te Ching • Chapter 81',
        theme: 'The Paradox of Generosity & Concluding Wisdom',
        summary: 'The final verse of the Tao Te Ching: truthful words are not flashy; flashy words are not truthful. The more the sage gives to others, the more he has.',
        verses: [
          { num: 'Ch 81:1', text: 'Sincere words are not fine; fine words are not sincere. Those who are skilled do not dispute; the disputatious are not skilled.' },
          { num: 'Ch 81:2', text: 'The sage does not hoard. Having used what he had for the good of others, he has more himself; having given what he had to others, he has still greater abundance.' }
        ],
        civilizationalContext: 'Closes the Taoist canon with the universal truth that societal abundance is generated through mutual generosity.'
      }
    ],
  },

  // 6. GURU GRANTH SAHIB & SIKH WISDOM
  {
    id: 'guru-granth-sahib',
    title: 'The Guru Granth Sahib & Sikh Ethics',
    subtitle: 'Universal Equality, Divine Remembrance & Selfless Service',
    tradition: 'Sikh Heritage',
    iconName: 'Flame',
    color: '#8b5cf6',
    era: '1469 – 1708 CE (Foundational Baanis & Teachings of the Gurus)',
    languageOrigin: 'Gurmukhi & Sant Bhasha',
    overview:
      'The central holy scripture of Sikhism, composed of divine hymns by the Sikh Gurus and saints of diverse Hindu and Muslim backgrounds, affirming the absolute equality of all humanity, the complete rejection of caste and gender inequality, and active defense of the oppressed (Seva & Deg Tegh Fateh).',
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
        reference: 'Guru Granth Sahib • Page 1',
        theme: 'The Unified Creator, Fearlessness & Truthful Living',
        summary: 'The primordial opening affirmation of monotheism: One Creator, Truth as Name, without fear, without hatred, beyond birth, self-existent.',
        verses: [
          { num: 'GGS 1:1', text: 'Ik Onkar — One Universal Creator God. The Name is Truth. Creative Being Personified. No Fear. No Hatred. Undying, Unborn, Self-Existent. By Guru’s Grace.' },
          { num: 'GGS 1:2', text: 'True in the Primal Beginning. True Throughout the Ages. True Here and Now. O Nanak, Forever and Ever True.' },
          { num: 'GGS 62', text: 'Truth is the highest virtue, but higher still is truthful living.' }
        ],
        civilizationalContext: 'Created the community kitchen (Langar) where king and beggar sit side-by-side on the floor as equals.'
      },
      {
        id: 'sikh-anand-sahib',
        title: 'Anand Sahib — The Song of Bliss',
        reference: 'Guru Granth Sahib • Raga Ramkali',
        theme: 'Inner Spiritual Equilibrium & Transcendental Joy',
        summary: 'Composed by Guru Amar Das, exploring how mind, eyes, ears, and speech are consecrated to harmony, generating unshakable contentment amidst worldly turmoil.',
        verses: [
          { num: 'Anand 1', text: 'Joy has welled up within my soul, O mother, for I have found the True Divine Guide.' },
          { num: 'Anand 35', text: 'O my eyes, the Lord has infused His light into you; see none other than the Lord in all beings!' }
        ],
        civilizationalContext: 'Recited at every milestone of life (births, marriages, victories, funerals) to sustain psychological balance.'
      },
      {
        id: 'sikh-rehras-sahib',
        title: 'Rehras Sahib — The Evening Prayer of Gratitude',
        reference: 'Guru Granth Sahib • Evening Canon',
        theme: 'Gratitude for Daily Sustenance & Compassion for the Vulnerable',
        summary: 'The daily sunset prayer reviewing the day’s labor, thanking the Creator who provides sustenance even to creatures living inside stone and soil.',
        verses: [
          { num: 'Rehras 2', text: 'Why, O mind, do you fret and worry when the Divine provides for all? Even inside the stone He placed living creatures, and there He provides their food.' },
          { num: 'Rehras 4', text: 'You are the Ocean of Mercy, the Giver of all peace; may all beings be blessed with contentment.' }
        ],
        civilizationalContext: 'Relieved acute anxiety regarding daily survival and food scarcity.'
      },
      {
        id: 'sikh-sukhmani-sahib',
        title: 'Sukhmani Sahib — The Jewel of Peace',
        reference: 'Guru Granth Sahib • Raga Gauri',
        theme: 'Healing the Heart, Eradicating Pride & The Saintly Character',
        summary: 'Composed by Guru Arjan: a soothing therapeutic symphony of 24 cantos meditating on humility, conquering ego, and maintaining tranquil benevolence.',
        verses: [
          { num: 'Sukhmani 1:1', text: 'Sukhmani — Peace of Mind, the Nectar of the Divine Name; it brings tranquil joy to the hearts of the faithful.' },
          { num: 'Sukhmani 3:6', text: 'Of all religions, the best religion is to meditate on the Divine and maintain pure, compassionate conduct.' },
          { num: 'Sukhmani 8:1', text: 'The humble servant of God is the highest of all; one who deems oneself the lowest among the lowly is blessed.' }
        ],
        civilizationalContext: 'Widely recognized as a profound therapeutic text for clinical mental grief, physical pain, and existential distress.'
      },
      {
        id: 'sikh-kirtan-sohila',
        title: 'Kirtan Sohila — The Night Song of Peace',
        reference: 'Guru Granth Sahib • Night Canon',
        theme: 'Reconciliation, Nightly Peace & Contemplation of Life',
        summary: 'The bedtime prayer recited before sleep and at cremations, reflecting on the brevity of human existence and the peace of resting in cosmic unity.',
        verses: [
          { num: 'Sohila 1', text: 'In that house where the praise of the Divine is sung, there contemplate and remember the Creator.' },
          { num: 'Sohila 5', text: 'The day has passed, the night has arrived; gather your thoughts and prepare for peaceful slumber.' }
        ],
        civilizationalContext: 'Ensured that daily conflicts are put to rest every evening without carrying grudges into tomorrow.'
      }
    ],
  },

  // 7. UNIVERSAL MORAL LAW & GOLDEN RULE
  {
    id: 'universal-golden-rule',
    title: 'The Universal Moral Law Matrix',
    subtitle: 'The Moral Invariant Across All World Civilizations',
    tradition: 'Comparative Global Heritage',
    iconName: 'Scale',
    color: '#ec4899',
    era: 'Universal Human Consciousness (All Eras)',
    languageOrigin: 'Comparative Multilingual Epigraphy',
    overview:
      'The single universal moral invariant that has emerged independently in every sustainable human civilization: mutual reciprocity, universal human dignity, protection of contracts, and empathy as the mathematical axiom of civil peace.',
    coreEthicalTenets: [
      'Treat others as you wish to be treated (The Golden Rule)',
      'What is hateful to you, do not do to your neighbor',
      'Empathy as the fundamental mathematical axiom of civil peace',
      'The Rule of Law: Justice must apply equally to rulers and citizens',
      'Protection of the universal rights of the human person',
    ],
    chapters: [
      {
        id: 'golden-rule-matrix',
        title: 'The 12-Tradition Reciprocity Concordance',
        reference: 'Global Epigraphic Synthesis',
        theme: 'Universal Consensus on Empathy',
        summary: 'How twelve distinct global civilizations formulated the identical rule of mutual empathy independently across 3,000 years.',
        verses: [
          { num: 'Christianity', text: '“All things whatsoever you would that men should do to you, do you even so to them: for this is the law and the prophets.” — Matthew 7:12' },
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
          { num: 'Indigenous America', text: '“Respect for all life is the foundation of human survival.” — Great Law of Peace (Iroquois)' }
        ],
        civilizationalContext: 'Proves mathematically and philosophically that no human society can survive without mutual reciprocity and collective empathy.'
      },
      {
        id: 'code-of-hammurabi',
        title: 'The Code of Hammurabi (Earliest Codified Law)',
        reference: 'Mesopotamia • c. 1750 BCE',
        theme: 'Written Legal Statutes, Consumer Protection & Presumption of Innocence',
        summary: 'One of history’s earliest deciphered legal codes: established written public law inscribed on stone stele so that strong may not oppress the weak; pioneered early building safety liability.',
        verses: [
          { num: 'Preamble', text: 'That the strong might not oppress the weak, that the orphan and widow might have justice, I set up my precious words inscribed upon my stele.' },
          { num: 'Law 229', text: 'If a builder construct a house for someone, and do not make his construction firm, and the house collapse and cause the death of the owner, that builder shall be held accountable.' }
        ],
        civilizationalContext: 'Transitioned human governance from the capricious whim of tribal chiefs to publicly visible, predictable statutory law.'
      },
      {
        id: 'meditations-marcus-aurelius',
        title: 'Meditations of Marcus Aurelius (Stoic Fortitude)',
        reference: 'Roman Empire • 180 CE',
        theme: 'Civic Responsibility, Duty & Emotional Self-Mastery',
        summary: 'Private journal of the Roman Emperor written on military campaign: enduring difficult personalities, serving the common good, and mastering inner thoughts.',
        verses: [
          { num: 'Book 2:1', text: 'When you wake in the morning, tell yourself: The people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly. But I cannot be injured by any of them, for no one can fix on me what is ugly.' },
          { num: 'Book 4:3', text: 'Men seek retreats for themselves in houses in the country, seashores, and mountains... But there is nowhere that a person can find a more tranquil and trouble-free retreat than in their own mind.' },
          { num: 'Book 8:59', text: 'Human beings are made for each other: either instruct them or put up with them.' }
        ],
        civilizationalContext: 'The supreme classic of cognitive behavioral resilience, civic duty under fatigue, and emotional stability in leadership.'
      },
      {
        id: 'udhr-1948',
        title: 'Universal Declaration of Human Rights (UDHR)',
        reference: 'United Nations • Paris 1948',
        theme: 'Universal Human Dignity, Liberty & Equality',
        summary: 'Drafted in the wake of World War II by philosophers, jurists, and diplomats representing all continents: enshrines the inherent dignity and equal, inalienable rights of all members of the human family.',
        verses: [
          { num: 'Article 1', text: 'All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.' },
          { num: 'Article 3', text: 'Everyone has the right to life, liberty and security of person.' },
          { num: 'Article 19', text: 'Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas.' }
        ],
        civilizationalContext: 'The modern global consensus charter protecting human persons against totalitarian state violence and oppression.'
      }
    ],
  },
];
