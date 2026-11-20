import { ScriptureChapter } from './holyBooksData';

/**
 * Complete 66-Book Canon of the Holy Bible:
 * Covers all 39 Old Testament Books & all 27 New Testament Books.
 * Provides civilizational context, ethical principles, and structural summaries.
 */
export const BIBLE_66_BOOKS: ScriptureChapter[] = [
  // ==========================================
  // OLD TESTAMENT: THE PENTATEUCH / LAW (5)
  // ==========================================
  {
    id: 'bible-01-genesis',
    title: '01. Genesis — Book of Beginnings',
    reference: 'Old Testament • Pentateuch',
    theme: 'Cosmogony, Inherent Human Dignity & Patriarchal Covenants',
    summary: 'The cosmic narrative of creation, human moral freedom, the flood, and the foundational Abrahamic covenant of stewardship and blessing for all families of the earth.',
    verses: [
      { num: 'Gen 1:27', text: 'Human beings are created in the divine image, establishing inherent dignity and equality across all humankind.' },
      { num: 'Gen 8:22', text: 'While the earth remains, seedtime and harvest, cold and heat, summer and winter, day and night shall not cease.' },
      { num: 'Gen 50:20', text: 'You intended to harm me, but it was turned into good to accomplish the survival of many people.' }
    ],
    civilizationalContext: 'Origin of the concept of universal human sanctity (Imago Dei), environmental stewardship, and generational covenantal obligations.'
  },
  {
    id: 'bible-02-exodus',
    title: '02. Exodus — Liberation & The Moral Law',
    reference: 'Old Testament • Pentateuch',
    theme: 'Deliverance from Bondage, The Decalogue & The Rule of Law',
    summary: 'The liberation of enslaved people from imperial tyranny and the codification of the Ten Commandments at Sinai, establishing that even kings are bound to higher moral law.',
    verses: [
      { num: 'Ex 20:3-17', text: 'The Decalogue: Prohibits idolatry, perjury, murder, theft, adultery, and covetousness; institutes universal weekly rest.' },
      { num: 'Ex 22:21', text: 'You shall not wrong or oppress a resident alien, for you were strangers in the land of Egypt.' },
      { num: 'Ex 23:3', text: 'You shall not be partial to a poor person in a lawsuit, nor pervert justice against them.' }
    ],
    civilizationalContext: 'The bedrock of Western constitutionalism, civil rights movements, the anti-slavery movement, and weekly labor rest statutes (Sabbath).'
  },
  {
    id: 'bible-03-leviticus',
    title: '03. Leviticus — Holiness Code & Community Ethics',
    reference: 'Old Testament • Pentateuch',
    theme: 'Sanctity of Life, Restorative Justice & Social Cohesion',
    summary: 'A comprehensive civil, ethical, and hygienic code regulating public health, ethical trade, social justice, agricultural rest, and the 50-year Jubilee wealth reset.',
    verses: [
      { num: 'Lev 19:18', text: 'You shall love your neighbor as yourself: I am the Lord.' },
      { num: 'Lev 19:34', text: 'The foreigner residing among you must be treated as your native-born. Love them as yourself.' },
      { num: 'Lev 25:10', text: 'Proclaim liberty throughout all the land unto all the inhabitants thereof: The Jubilee Year of debt release.' }
    ],
    civilizationalContext: 'Pioneered early public sanitation, quarantine laws, debt relief mechanisms (Jubilee inscribed on the Liberty Bell), and the universal Golden Rule.'
  },
  {
    id: 'bible-04-numbers',
    title: '04. Numbers — Wilderness Order & Perseverance',
    reference: 'Old Testament • Pentateuch',
    theme: 'Demographic Organization, Logistics & Tested Resolve',
    summary: 'A record of military census, communal logistics, tribal camp layouts, and the psychological perils of collective despair during forty years in the desert.',
    verses: [
      { num: 'Num 6:24-26', text: 'The Lord bless you and keep you; make His face shine upon you, and give you peace.' },
      { num: 'Num 27:7', text: 'The daughters of Zelophehad speak right: you shall surely give them a hereditary possession among their father’s brothers.' }
    ],
    civilizationalContext: 'Demonstrated resource rationing, early female property inheritance jurisprudence, and community discipline in hostile biomes.'
  },
  {
    id: 'bible-05-deuteronomy',
    title: '05. Deuteronomy — Covenantal Renewal & Social Equity',
    reference: 'Old Testament • Pentateuch',
    theme: 'Constitutional Review, Welfare for Vulnerable & Judicial Fairness',
    summary: 'Moses’ final address summarizing civil law, demanding strict judicial impartiality, debt forgiveness every seven years, and welfare for widows, orphans, and immigrants.',
    verses: [
      { num: 'Deut 6:5', text: 'You shall love the Lord your God with all your heart and with all your soul and with all your might.' },
      { num: 'Deut 15:11', text: 'There will always be poor people in the land. Therefore open wide your hand to your impoverished neighbor.' },
      { num: 'Deut 16:20', text: 'Justice, and only justice, you shall follow, that you may live and inherit the land.' }
    ],
    civilizationalContext: 'Formulated the legal requirement for multiple independent witnesses in court trials and limited autocratic royal authority.'
  },

  // ==========================================
  // OLD TESTAMENT: HISTORICAL BOOKS (12)
  // ==========================================
  {
    id: 'bible-06-joshua',
    title: '06. Joshua — Settlement & Covenantal Fidelity',
    reference: 'Old Testament • Historical',
    theme: 'Courage, Strategic Organization & Cities of Refuge',
    summary: 'The entry into Canaan, territorial distribution among tribes, and the establishment of sanctuary cities to prevent cycles of blood vengeance.',
    verses: [
      { num: 'Josh 1:9', text: 'Be strong and courageous; do not be afraid, for the Lord your God is with you wherever you go.' },
      { num: 'Josh 20:2-3', text: 'Appoint cities of refuge, that anyone who kills a person unintentionally may flee there from the avenger.' }
    ],
    civilizationalContext: 'Early legal evolution from vigilante blood feuds to regulated asylum and institutional manslaughter trials.'
  },
  {
    id: 'bible-07-judges',
    title: '07. Judges — Cycles of Decay & Civic Duty',
    reference: 'Old Testament • Historical',
    theme: 'Anarchy, Leadership Crises & Ethical Vigilance',
    summary: 'A gritty chronicle of societal breakdown when moral consensus collapses, detailing episodic heroic liberators like Deborah, Gideon, and Samson.',
    verses: [
      { num: 'Judg 5:7', text: 'Villagers in Israel would not fight; they held back until I, Deborah, arose as a mother in Israel.' },
      { num: 'Judg 21:25', text: 'In those days there was no king in Israel; everyone did what was right in his own eyes.' }
    ],
    civilizationalContext: 'A case study on the dangers of institutional lawlessness, moral relativism, and the necessity of communal cohesion.'
  },
  {
    id: 'bible-08-ruth',
    title: '08. Ruth — Loyalty Across Borders',
    reference: 'Old Testament • Historical',
    theme: 'Fidelity, Inter-Ethnic Compassion & The Gleaning Law',
    summary: 'A timeless novella of a Moabite widow who remains loyal to her Judean mother-in-law, sustained by the ancient civilizational right of gleaning harvest corners.',
    verses: [
      { num: 'Ruth 1:16', text: 'Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.' },
      { num: 'Ruth 2:12', text: 'May you be richly rewarded under whose wings you have come to take refuge.' }
    ],
    civilizationalContext: 'Affirmed that character and mutual devotion transcend national and ethnic enmities; codified agricultural safety nets for the poor.'
  },
  {
    id: 'bible-09-1samuel',
    title: '09. 1 Samuel — Monarchy & The Price of Autocracy',
    reference: 'Old Testament • Historical',
    theme: 'Transition of Power, Character vs. Outward Appearance',
    summary: 'The shift from tribal commonwealth to kingdom under Saul and David, highlighting the prophet Samuel’s stark warning regarding royal taxation and conscription.',
    verses: [
      { num: '1Sam 8:11-18', text: 'Warning on kings: He will take your sons for war, tax your harvests, and take your fields for his courtiers.' },
      { num: '1Sam 16:7', text: 'People look at the outward appearance, but the Lord looks at the heart.' }
    ],
    civilizationalContext: 'A classical philosophical critique of autocratic central state power and standing imperial armies.'
  },
  {
    id: 'bible-10-2samuel',
    title: '10. 2 Samuel — David’s Reign & Moral Accountability',
    reference: 'Old Testament • Historical',
    theme: 'Statecraft, Moral Failure & The Prophet Confronting the King',
    summary: 'The unification of the nation, Jerusalem established as capital, followed by David’s abuse of power and the prophet Nathan’s fearless moral rebuke.',
    verses: [
      { num: '2Sam 12:7', text: 'Nathan said to David: "You are the man!" Confronting sovereign power with moral truth.' },
      { num: '2Sam 23:3', text: 'He that ruleth over men must be just, ruling in the fear of God.' }
    ],
    civilizationalContext: 'Pioneered the principle that no monarch or executive head of state is above moral law and public ethical accountability.'
  },
  {
    id: 'bible-11-1kings',
    title: '11. 1 Kings — Splendor, Hubris & National Division',
    reference: 'Old Testament • Historical',
    theme: 'Wisdom, Civil Engineering, Debt & Civil Schism',
    summary: 'Solomon’s diplomatic wisdom, judicial discernment, and temple construction, followed by crushing forced labor that splits the nation into Israel and Judah.',
    verses: [
      { num: '1Kgs 3:9', text: 'Give your servant an understanding heart to judge your people, to discern between good and evil.' },
      { num: '1Kgs 18:21', text: 'How long will you waver between two opinions? If the Lord is God, follow Him.' }
    ],
    civilizationalContext: 'Documents the economic hazards of unsustainable public debt, forced state labor, and ostentatious administrative overhead.'
  },
  {
    id: 'bible-12-2kings',
    title: '12. 2 Kings — Decline, Reform & Imperial Fall',
    reference: 'Old Testament • Historical',
    theme: 'Prophetic Warnings, Institutional Reform & Collapse',
    summary: 'The ministries of Elijah and Elisha, the fall of Samaria to Assyria, King Josiah’s discovery of the lost law book, and the eventual destruction of Jerusalem by Babylon.',
    verses: [
      { num: '2Kgs 22:11-13', text: 'Josiah tore his clothes upon hearing the forgotten moral statutes, launching deep civil reform.' },
      { num: '2Kgs 25:9-11', text: 'The destruction of Jerusalem and the beginning of the Babylonian exile.' }
    ],
    civilizationalContext: 'Illustrates how social injustice, moral corruption, and ignored intelligence lead directly to geopolitical ruin.'
  },
  {
    id: 'bible-13-1chronicles',
    title: '13. 1 Chronicles — Cultural Memory & Collective Identity',
    reference: 'Old Testament • Historical',
    theme: 'Genealogies, Heritage Preservation & Public Worship',
    summary: 'Written post-exile to reconnect survivors to their historical roots, legal identity, civic traditions, and communal architectural heritage.',
    verses: [
      { num: '1Chr 16:34', text: 'Give thanks to the Lord, for He is good; His love endures forever.' },
      { num: '1Chr 29:14', text: 'Everything comes from You, and we have given You only what comes from Your hand.' }
    ],
    civilizationalContext: 'Shows how maintaining ancestral records, cultural archives, and spiritual song preserves a displaced community’s survival.'
  },
  {
    id: 'bible-14-2chronicles',
    title: '14. 2 Chronicles — National Regeneration & Humility',
    reference: 'Old Testament • Historical',
    theme: 'Spiritual Renewal, Civic Leadership & Restoration',
    summary: 'A selective history of Judah emphasizing kings who enacted moral and fiscal reforms (Hezekiah, Josiah), concluding with Cyrus of Persia’s decree of return.',
    verses: [
      { num: '2Chr 7:14', text: 'If my people humble themselves, pray, seek my face, and turn from wicked ways, I will heal their land.' },
      { num: '2Chr 36:23', text: 'The decree of Cyrus permitting displaced peoples to return home and rebuild their temples.' }
    ],
    civilizationalContext: 'Cyrus’s decree recorded here mirrors the Cyrus Cylinder, hailed as an early charter of religious freedom and repatriation.'
  },
  {
    id: 'bible-15-ezra',
    title: '15. Ezra — Reconstruction of Institutions',
    reference: 'Old Testament • Historical',
    theme: 'Post-Catastrophe Rebuilding, Literacy & The Rule of Law',
    summary: 'The return of exiled survivors to Jerusalem, the rebuilding of communal institutions, and the public re-education of citizens in constitutional law.',
    verses: [
      { num: 'Ezra 7:10', text: 'For Ezra had devoted himself to the study and observance of the Law, and to teaching its decrees in Israel.' },
      { num: 'Ezra 3:11', text: 'With praise and thanksgiving they sang as the new foundation was laid amidst tears and joy.' }
    ],
    civilizationalContext: 'Demonstrates how post-collapse civilization requires reviving legal literacy and educational institutions to prevent relapse.'
  },
  {
    id: 'bible-16-nehemiah',
    title: '16. Nehemiah — Civic Reconstruction & Debt Abolition',
    reference: 'Old Testament • Historical',
    theme: 'Urban Infrastructure, Defense Logistics & Anti-Usury Reform',
    summary: 'Nehemiah leads the rebuilding of Jerusalem’s defensive walls in 52 days, while simultaneously forcing wealthy lenders to cancel debts and return seized lands.',
    verses: [
      { num: 'Neh 4:17', text: 'Those who built on the wall with one hand labored at work, and with the other held a weapon.' },
      { num: 'Neh 5:11-12', text: 'Restore to them their lands, vineyards, and cancel the usury interest charged against your brothers!' }
    ],
    civilizationalContext: 'A masterclass in crisis project management, dual-use civic defense, and averting civil insurrection via debt jubilees.'
  },
  {
    id: 'bible-17-esther',
    title: '17. Esther — Courage Against Genocide',
    reference: 'Old Testament • Historical',
    theme: 'Civic Activism, Minority Rights & Overcoming Oppression',
    summary: 'Set in the Persian empire, Queen Esther and Mordecai risk their lives to outmaneuver a state-sponsored conspiracy to annihilate an ethnic minority.',
    verses: [
      { num: 'Esth 4:14', text: 'Who knows whether you have come to royal position for such a time as this?' },
      { num: 'Esth 8:11', text: 'The royal decree granting threatened citizens the fundamental right to assemble and defend their lives.' }
    ],
    civilizationalContext: 'Informed legal traditions of self-defense, resistance to ethnic cleansing, and civic intervention on behalf of the vulnerable.'
  },

  // ==========================================
  // OLD TESTAMENT: POETRY & WISDOM (5)
  // ==========================================
  {
    id: 'bible-18-job',
    title: '18. Job — The Mystery of Suffering & Fortitude',
    reference: 'Old Testament • Wisdom Literature',
    theme: 'Undeserved Trauma, Intellectual Humility & Resilience',
    summary: 'A dramatic philosophical dialogue addressing why the righteous suffer, exposing the shallowness of dogmatic blame and honoring Job’s defiant integrity.',
    verses: [
      { num: 'Job 1:21', text: 'The Lord gave, and the Lord has taken away; blessed be the name of the Lord.' },
      { num: 'Job 19:25', text: 'I know that my Redeemer lives, and at the last He will stand upon the earth.' },
      { num: 'Job 38:4', text: 'Where were you when I laid the foundations of the earth? Declare, if you have understanding.' }
    ],
    civilizationalContext: 'Foundational critique of victim-blaming, exploring existential fortitude and philosophical epistemology under extreme trauma.'
  },
  {
    id: 'bible-19-psalms',
    title: '19. Psalms — The Human Soul in Crisis & Triumph',
    reference: 'Old Testament • Poetry & Hymnody',
    theme: 'Emotional Authenticity, Lament, Hope & Social Justice',
    summary: '150 Hebrew poems encompassing the entire spectrum of human experience: grief, terror, righteous anger against oppressors, repentance, and transcendent praise.',
    verses: [
      { num: 'Ps 23:1-4', text: 'The Lord is my shepherd... Yea, though I walk through the valley of the shadow of death, I will fear no evil.' },
      { num: 'Ps 46:1', text: 'God is our refuge and strength, a very present help in trouble.' },
      { num: 'Ps 82:3-4', text: 'Defend the poor and fatherless: do justice to the afflicted and needy. Deliver the poor and rid them of the wicked.' }
    ],
    civilizationalContext: 'The most recited hymnal in human history, providing psychological resilience during sieges, pandemics, migrations, and mourning.'
  },
  {
    id: 'bible-20-proverbs',
    title: '20. Proverbs — Practical Wisdom & Civil Diligence',
    reference: 'Old Testament • Wisdom Literature',
    theme: 'Industry, Integrity in Commerce & Restraint of Speech',
    summary: 'Compact aphorisms distilling daily life wisdom: honesty in weights and measures, the value of hard work, dangers of gossip, and honoring elders.',
    verses: [
      { num: 'Prov 3:5-6', text: 'Trust in the Lord with all your heart, and lean not on your own understanding; in all your ways acknowledge Him.' },
      { num: 'Prov 11:1', text: 'Dishonest scales are an abomination to the Lord, but an accurate weight is His delight.' },
      { num: 'Prov 31:8-9', text: 'Speak up for those who have no voice, for the justice of all who are destitute.' }
    ],
    civilizationalContext: 'Formed the baseline of mercantile ethics, vocational apprenticeship, honest accounting, and character education.'
  },
  {
    id: 'bible-21-ecclesiastes',
    title: '21. Ecclesiastes — Meaning & The Rhythm of Life',
    reference: 'Old Testament • Wisdom Literature',
    theme: 'Existential Realism, Transience & Honest Joy',
    summary: 'An unflinching inquiry into the fleeting nature of worldly wealth, career acclaim, and imperial power, urging gratitude for honest labor and simple meals.',
    verses: [
      { num: 'Eccl 3:1-2', text: 'To everything there is a season, a time for every matter under heaven: a time to be born, and a time to die.' },
      { num: 'Eccl 4:9-10', text: 'Two are better than one, because they have a good return for their labor: If either falls, one can help the other up.' },
      { num: 'Eccl 12:13', text: 'The conclusion of the whole matter: Fear God and keep His commandments, for this is the duty of all mankind.' }
    ],
    civilizationalContext: 'A profound antidote to careerist hubris, burnout, and political fanaticism, teaching mindful stewardship of finite time.'
  },
  {
    id: 'bible-22-songofsolomon',
    title: '22. Song of Solomon — Mutual Dignity & Love',
    reference: 'Old Testament • Poetry & Song',
    theme: 'Romantic Devotion, Nature & Unconquerable Affection',
    summary: 'Lyrical celebration of intimate human love, mutual consent, egalitarian affection, and the beauty of the natural agrarian world.',
    verses: [
      { num: 'Song 2:10-12', text: 'Rise up, my love, my fair one, and come away. For lo, the winter is past, the rain is over and gone; flowers appear on the earth.' },
      { num: 'Song 8:6-7', text: 'Love is strong as death... Many waters cannot quench love, neither can floods drown it.' }
    ],
    civilizationalContext: 'Affirmed the inherent dignity of human marital companionship and mutual emotional respect without coercion.'
  },

  // ==========================================
  // OLD TESTAMENT: MAJOR PROPHETS (5)
  // ==========================================
  {
    id: 'bible-23-isaiah',
    title: '23. Isaiah — Swords into Plowshares & Universal Peace',
    reference: 'Old Testament • Major Prophets',
    theme: 'Social Justice, The Suffering Servant & Cosmic Peace',
    summary: 'A monumental prophetic vision condemning religious hypocrisy while demanding economic justice; foretells a servant who heals through suffering.',
    verses: [
      { num: 'Isa 1:17', text: 'Learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow’s cause.' },
      { num: 'Isa 2:4', text: 'They shall beat their swords into plowshares, and their spears into pruning hooks: nation shall not lift sword against nation.' },
      { num: 'Isa 58:6-7', text: 'Is not this the fast I choose: to loose the bonds of wickedness, undo heavy burdens, and share your bread with the hungry?' }
    ],
    civilizationalContext: 'Inspired the United Nations peace sculpture, Martin Luther King Jr., and the global abolitionist and human rights movements.'
  },
  {
    id: 'bible-24-jeremiah',
    title: '24. Jeremiah — Fortitude in Collapse & The New Covenant',
    reference: 'Old Testament • Major Prophets',
    theme: 'Prophetic Dissent, Endurance Under Siege & The Heart Covenant',
    summary: 'The "weeping prophet" warns a corrupt political elite of imminent catastrophe, endures imprisonment, and offers hope through an internalized moral covenant.',
    verses: [
      { num: 'Jer 22:3', text: 'Execute justice and righteousness, deliver the spoiled out of the hand of the oppressor, and do no wrong to the stranger or orphan.' },
      { num: 'Jer 29:7', text: 'Seek the peace and welfare of the city where I have sent you into exile, and pray for it, for in its peace you will find peace.' },
      { num: 'Jer 31:33', text: 'I will put my law within them, and I will write it upon their hearts; and I will be their God, and they shall be my people.' }
    ],
    civilizationalContext: 'Taught diaspora communities how to constructively contribute to foreign societies without losing ethical integrity.'
  },
  {
    id: 'bible-25-lamentations',
    title: '25. Lamentations — Grieving Amidst Ruin',
    reference: 'Old Testament • Major Prophets',
    theme: 'Catastrophe, Communal Mourning & Unfailing Compassion',
    summary: 'Five poignant acrostic dirges mourning the burning of Jerusalem, validating the necessity of collective grief before rebuilding can begin.',
    verses: [
      { num: 'Lam 3:22-23', text: 'Because of the Lord’s great love we are not consumed, for His compassions never fail. They are new every morning: great is Your faithfulness.' },
      { num: 'Lam 3:26', text: 'It is good that one should wait quietly for the salvation of the Lord.' }
    ],
    civilizationalContext: 'Provides psychological catharsis and ritual expression for survivors of war, structural famine, and refugee displacement.'
  },
  {
    id: 'bible-26-ezekiel',
    title: '26. Ezekiel — Personal Responsibility & The Valley of Bones',
    reference: 'Old Testament • Major Prophets',
    theme: 'Individual Accountability, Visionary Hope & Renewal',
    summary: 'Written in Babylonian exile, Ezekiel dismantles generational guilt, emphasizing individual moral accountability, and sees a vision of dry bones revivified.',
    verses: [
      { num: 'Ezek 18:20', text: 'The soul that sins shall die. The son shall not bear the guilt of the father, nor the father bear the guilt of the son.' },
      { num: 'Ezek 37:4-5', text: 'Prophesy to these dry bones: "Behold, I will cause breath to enter into you, and you shall live."' }
    ],
    civilizationalContext: 'Established modern jurisprudence of individual culpability rather than collective punishment of families or clans.'
  },
  {
    id: 'bible-27-daniel',
    title: '27. Daniel — Moral Integrity Under Empire',
    reference: 'Old Testament • Major Prophets',
    theme: 'Civil Disobedience, Ethical Dietary Choice & Transcendent Truth',
    summary: 'Youthful captives in Babylon refuse imperial dietary mandates and tyrant worship, surviving the furnace and lions’ den through nonviolent steadfastness.',
    verses: [
      { num: 'Dan 1:8', text: 'Daniel resolved that he would not defile himself with the royal rations of food and wine.' },
      { num: 'Dan 3:17-18', text: 'Our God is able to deliver us; but even if He does not, know this, O king, we will not serve your gods or bow to your statue.' },
      { num: 'Dan 12:3', text: 'Those who are wise shall shine like the brightness of the heavens; and those who turn many to righteousness like the stars forever.' }
    ],
    civilizationalContext: 'A cornerstone of principled nonviolent resistance to totalitarian mandates and freedom of individual conscience.'
  },

  // ==========================================
  // OLD TESTAMENT: MINOR PROPHETS (12)
  // ==========================================
  {
    id: 'bible-28-hosea',
    title: '28. Hosea — Relentless Love & Social Repair',
    reference: 'Old Testament • Minor Prophets',
    theme: 'Fidelity, Compassion over Ritual & Healing',
    summary: 'Uses a painful marriage metaphor to depict unwavering divine love pursuing an unfaithful nation, decrying economic inequality and lack of mercy.',
    verses: [
      { num: 'Hos 6:6', text: 'For I desire steadfast love and not sacrifice, the knowledge of God rather than burnt offerings.' },
      { num: 'Hos 10:12', text: 'Sow righteousness for yourselves, reap the fruit of unfailing love, and break up your unplowed ground.' }
    ],
    civilizationalContext: 'Prioritized genuine restorative mercy and ethical behavior over formal religious outward ritual.'
  },
  {
    id: 'bible-29-joel',
    title: '29. Joel — Ecological Disaster & Universal Renewal',
    reference: 'Old Testament • Minor Prophets',
    theme: 'Locust Devastation, Crisis Mobilization & Universal Spirit',
    summary: 'Responds to a devastating ecological swarm by calling for communal solidarity, promising restoration and the outpouring of the spirit on all sons and daughters.',
    verses: [
      { num: 'Joel 2:13', text: 'Rend your heart and not your garments, and return to the Lord your God, for He is gracious and merciful.' },
      { num: 'Joel 2:28', text: 'I will pour out my Spirit on all people: your sons and daughters will prophesy, your old men will dream dreams.' }
    ],
    civilizationalContext: 'Codified democratic spiritual empowerment across gender, age, and social barriers.'
  },
  {
    id: 'bible-30-amos',
    title: '30. Amos — Let Justice Roll Down Like Waters',
    reference: 'Old Testament • Minor Prophets',
    theme: 'Economic Exploitation, Rigged Markets & Moral Law',
    summary: 'A rugged Judean herdsman denounces wealthy elites who trample on the poor, falsify grain measures, and live in opulent luxury while society rots.',
    verses: [
      { num: 'Amos 5:24', text: 'Let justice roll down like waters, and righteousness like an ever-flowing stream.' },
      { num: 'Amos 8:5', text: 'Condemning those who say: "When will the market open that we may skimp on the measure, boost the price, and cheat with dishonest scales?"' }
    ],
    civilizationalContext: 'The premier biblical manifesto against predatory financial deregulation, monopolies, and the neglect of impoverished laborers.'
  },
  {
    id: 'bible-31-obadiah',
    title: '31. Obadiah — Warning Against Betraying Neighbors',
    reference: 'Old Testament • Minor Prophets',
    theme: 'Anti-Pride, Solidarity & Retribution for Treachery',
    summary: 'A short, fierce prophecy against Edom for standing aloof and looting neighbors during Jerusalem’s destruction instead of aiding them.',
    verses: [
      { num: 'Obad 1:12', text: 'You should not gloat over your brother in the day of his misfortune, nor rejoice over the people in the day of their destruction.' },
      { num: 'Obad 1:15', text: 'As you have done, it shall be done to you: your deed shall return upon your own head.' }
    ],
    civilizationalContext: 'The ethical condemnation of bystander apathy, war profiteering, and exploitation of disaster refugees.'
  },
  {
    id: 'bible-32-jonah',
    title: '32. Jonah — Universal Mercy Beyond Boundaries',
    reference: 'Old Testament • Minor Prophets',
    theme: 'Overcoming Xenophobia & Compassion for Enemy Cities',
    summary: 'A reluctant prophet tries to flee his mission to Nineveh, learning through a storm, sea beast, and sheltering vine that divine mercy encompasses all peoples and animals.',
    verses: [
      { num: 'Jonah 4:2', text: 'I knew that you are a gracious and compassionate God, slow to anger and abounding in love, a God who relents from sending calamity.' },
      { num: 'Jonah 4:11', text: 'And should I not have concern for that great city, in which there are more than a hundred and twenty thousand people... and also many animals?' }
    ],
    civilizationalContext: 'A masterwork against tribal supremacy, validating empathy even for foreign adversaries and animal welfare.'
  },
  {
    id: 'bible-33-micah',
    title: '33. Micah — Do Justice, Love Mercy, Walk Humbly',
    reference: 'Old Testament • Minor Prophets',
    theme: 'Courthouse Corruption, Urban Speculation & Moral Essentials',
    summary: 'A contemporary of Isaiah who exposes predatory real estate syndicates, boiling down all human moral duty into three concise active mandates.',
    verses: [
      { num: 'Mic 2:2', text: 'They covet fields and seize them, and houses and take them away: they oppress a man and his home.' },
      { num: 'Mic 6:8', text: 'He has told you, O mortal, what is good: and what does the Lord require of you but to do justice, to love mercy, and to walk humbly with your God?' }
    ],
    civilizationalContext: 'Micah 6:8 is universally recognized as the definitive three-point compass of ethical civilization.'
  },
  {
    id: 'bible-34-nahum',
    title: '34. Nahum — The Fall of Violent Empires',
    reference: 'Old Testament • Minor Prophets',
    theme: 'The Inevitable Demise of Cruelty & Imperial Plunder',
    summary: 'A poetic celebration of the collapse of Nineveh, the brutal Assyrian capital, illustrating that regimes built upon plunder and slaughter eventually crumble.',
    verses: [
      { num: 'Nah 1:3', text: 'The Lord is slow to anger but great in power; the Lord will not leave the guilty unpunished.' },
      { num: 'Nah 3:1', text: 'Woe to the bloody city! It is all full of lies and robbery; the prey does not depart.' }
    ],
    civilizationalContext: 'Historical testimony that empires relying on terror and military atrocities sow the seeds of their own collapse.'
  },
  {
    id: 'bible-35-habakkuk',
    title: '35. Habakkuk — Wrestling with Moral Injustice',
    reference: 'Old Testament • Minor Prophets',
    theme: 'Questioning Divine Silence & The Just Living by Faith',
    summary: 'A prophet stands on his watchtower boldly interrogating why ruthless empires prosper, concluding with a hymn of absolute trust even if crops fail entirely.',
    verses: [
      { num: 'Hab 2:4', text: 'Behold, his soul which is lifted up is not upright in him: but the just shall live by his faith.' },
      { num: 'Hab 3:17-18', text: 'Though the fig tree does not bud and there are no grapes on the vines, yet I will rejoice in the Lord, I will be joyful in God my Savior.' }
    ],
    civilizationalContext: 'Legitimized intellectual questioning of injustice while maintaining psychological resolve amidst total agricultural loss.'
  },
  {
    id: 'bible-36-zephaniah',
    title: '36. Zephaniah — Humility vs. Arrogant Power',
    reference: 'Old Testament • Minor Prophets',
    theme: 'Purification of Greed & Shelter for the Humble',
    summary: 'Warns of global cleansing of corruption, predicting that the remnant of society will be characterized not by military weapons but by truth and gentle humility.',
    verses: [
      { num: 'Zeph 2:3', text: 'Seek the Lord, all you humble of the land, you who do what He commands. Seek righteousness, seek humility.' },
      { num: 'Zeph 3:13', text: 'The remnant shall do no iniquity, nor speak lies; neither shall a deceitful tongue be found in their mouth.' }
    ],
    civilizationalContext: 'Demonstrated that enduring societal rebuilding requires honest speech, moral restraint, and elimination of deceit.'
  },
  {
    id: 'bible-37-haggai',
    title: '37. Haggai — Rebuilding Communal Foundations',
    reference: 'Old Testament • Minor Prophets',
    theme: 'Priorities, Ending Civic Apathy & Resource Stewardship',
    summary: 'Chides returned exiles who spend all their resources paneled in private luxury while common public institutions and the civic sanctuary lie in ruins.',
    verses: [
      { num: 'Hag 1:4-6', text: 'Is it time for you to live in paneled houses while this house lies in ruins? Consider your ways! You sow much, but harvest little.' },
      { num: 'Hag 2:9', text: 'The glory of this present house will be greater than the former, and in this place I will grant peace.' }
    ],
    civilizationalContext: 'Focuses on the public goods problem: a society cannot flourish if individuals hoard wealth while public infrastructure decays.'
  },
  {
    id: 'bible-38-zechariah',
    title: '38. Zechariah — Not by Might, but by Spirit',
    reference: 'Old Testament • Minor Prophets',
    theme: 'Messianic Peace, Humble Rulers & City Reconstruction',
    summary: 'Visions of urban renewal where elderly sit safely in town squares and children play freely in streets; foretells a king arriving humbly on a donkey.',
    verses: [
      { num: 'Zech 4:6', text: 'Not by might, nor by power, but by my Spirit, says the Lord of hosts.' },
      { num: 'Zech 7:9-10', text: 'Administer true justice; show mercy and compassion to one another. Do not oppress the widow or fatherless, the alien or the poor.' },
      { num: 'Zech 8:4-5', text: 'Old men and women shall again sit in the streets of Jerusalem... and the city streets shall be full of boys and girls playing.' }
    ],
    civilizationalContext: 'The peaceful city benchmark: measuring civic health not by military monuments, but by the safety of children and elders.'
  },
  {
    id: 'bible-39-malachi',
    title: '39. Malachi — Civic Integrity & Faithful Commitments',
    reference: 'Old Testament • Minor Prophets',
    theme: 'Contractual Faithfulness, Generosity & Anti-Exploitation',
    summary: 'The final book of the Old Testament canon rebukes leaders who cheat laborers of wages, break family covenants, and offer defective goods in public service.',
    verses: [
      { num: 'Mal 2:10', text: 'Do we not all have one Father? Did not one God create us? Why do we break faith with one another?' },
      { num: 'Mal 3:5', text: 'I will be quick to testify against those who defraud laborers of their wages, and who oppress widows and fatherless and turn away the alien.' },
      { num: 'Mal 4:2', text: 'For you who revere my name, the sun of righteousness will rise with healing in its rays.' }
    ],
    civilizationalContext: 'Closes the Old Testament with strong defenses of wage labor fairness, marital fidelity, and racial equity.'
  },

  // ==========================================
  // NEW TESTAMENT: THE GOSPELS (4)
  // ==========================================
  {
    id: 'bible-40-matthew',
    title: '40. Matthew — The Sermon on the Mount & The Kingdom',
    reference: 'New Testament • Gospels',
    theme: 'The Beatitudes, The Golden Rule & The Ethical Manifesto',
    summary: 'Presents Jesus as the supreme ethical teacher: blessed are the meek and peacemakers; love enemies, give silently, and judge not lest you be judged.',
    verses: [
      { num: 'Matt 5:3-9', text: 'The Beatitudes: Blessed are the poor in spirit, the meek, those who hunger for righteousness, the merciful, and peacemakers.' },
      { num: 'Matt 7:12', text: 'Therefore all things whatsoever you would that men should do to you, do you even so to them: for this is the law and the prophets.' },
      { num: 'Matt 25:35-40', text: 'I was hungry and you gave me food, thirsty and you gave me drink, a stranger and you welcomed me... Inasmuch as you did it to the least, you did it to me.' }
    ],
    civilizationalContext: 'The cornerstone of modern human rights, civil disobedience, and institutional networks of charity, hospitals, and disaster relief.'
  },
  {
    id: 'bible-41-mark',
    title: '41. Mark — The Servant Leader in Action',
    reference: 'New Testament • Gospels',
    theme: 'Urgent Service, Overcoming Demonic Chaos & Humility',
    summary: 'The earliest, fast-paced Gospel portraying power redefined as sacrificial service: the greatest leader is the servant of all.',
    verses: [
      { num: 'Mark 8:36', text: 'For what shall it profit a man, if he shall gain the whole world, and lose his own soul?' },
      { num: 'Mark 10:44-45', text: 'Whoever wants to be first among you must be slave of all. For even the Son of Man did not come to be served, but to serve.' },
      { num: 'Mark 12:31', text: 'The second commandment is this: You shall love your neighbor as yourself. There is no other commandment greater than these.' }
    ],
    civilizationalContext: 'Redefined governance worldwide from monarchical entitlement to servant-leadership and accountability.'
  },
  {
    id: 'bible-42-luke',
    title: '42. Luke — Compassion for the Outcast & Upliftment',
    reference: 'New Testament • Gospels',
    theme: 'The Good Samaritan, The Prodigal Son & Gender Dignity',
    summary: 'Written by a physician with acute sensitivity to the impoverished, women, tax collectors, and ethnic minorities, recording the most famous parables of mercy.',
    verses: [
      { num: 'Luke 4:18-19', text: 'The Spirit is upon me to proclaim good news to the poor, freedom for the prisoners, recovery of sight for the blind, and release for the oppressed.' },
      { num: 'Luke 10:33-37', text: 'The Parable of the Good Samaritan: An ethnic outsider shows compassion when religious authorities pass by.' },
      { num: 'Luke 15:20-24', text: 'The Parable of the Prodigal Son: Radical paternal forgiveness and restoration without punitive retribution.' }
    ],
    civilizationalContext: 'Transformed global healthcare ethics, hospice care, humanitarian neutrality, and criminal justice reform.'
  },
  {
    id: 'bible-43-john',
    title: '43. John — The Cosmic Word & Sacrificial Love',
    reference: 'New Testament • Gospels',
    theme: 'The Logos, Light Overcoming Darkness & The Good Shepherd',
    summary: 'A contemplative theological Gospel: the eternal divine Reason (Logos) became flesh, revealing divine nature as self-giving light and truth.',
    verses: [
      { num: 'John 1:5', text: 'The light shines in the darkness, and the darkness has not overcome it.' },
      { num: 'John 8:32', text: 'And you shall know the truth, and the truth shall set you free.' },
      { num: 'John 13:34-35', text: 'A new commandment I give to you: Love one another. As I have loved you, so you must love one another. By this everyone will know you are my disciples.' },
      { num: 'John 15:13', text: 'Greater love has no one than this: to lay down one’s life for one’s friends.' }
    ],
    civilizationalContext: 'Anchored the philosophical concept of truth as liberating, fueling scientific inquiry and academic freedom.'
  },

  // ==========================================
  // NEW TESTAMENT: APOSTOLIC HISTORY (1)
  // ==========================================
  {
    id: 'bible-44-acts',
    title: '44. Acts of the Apostles — The Communal Commonwealth',
    reference: 'New Testament • History',
    theme: 'Cross-Cultural Mission, Shared Wealth & Universal Brotherhood',
    summary: 'Chronicles the explosive growth of the early movement across the Roman Empire, practicing radical economic sharing and abolishing cultural ethnic barriers.',
    verses: [
      { num: 'Acts 2:44-45', text: 'All the believers were together and had everything in common. They sold property and possessions to give to anyone who had need.' },
      { num: 'Acts 10:34-35', text: 'I truly understand that God shows no partiality, but in every nation anyone who fears Him and does what is right is acceptable.' },
      { num: 'Acts 17:26', text: 'From one human being He made every nation of humanity to inhabit the whole face of the earth.' }
    ],
    civilizationalContext: 'Demonstrated mutual aid cooperatives, voluntary wealth sharing, and early internationalism transcending ethnic borders.'
  },

  // ==========================================
  // NEW TESTAMENT: PAULINE EPISTLES (13)
  // ==========================================
  {
    id: 'bible-45-romans',
    title: '45. Romans — Grace, Equality & Civic Harmony',
    reference: 'New Testament • Pauline Epistles',
    theme: 'Universal Justification, Human Equality & Overcoming Evil',
    summary: 'A theological treatise proving that all humans stand on equal footing before divine justice, commanding citizens to overcome evil with active good.',
    verses: [
      { num: 'Rom 8:28', text: 'And we know that in all things God works for the good of those who love Him.' },
      { num: 'Rom 12:18-21', text: 'If possible, so far as it depends on you, live peaceably with all... Do not be overcome by evil, but overcome evil with good.' },
      { num: 'Rom 13:10', text: 'Love does no wrong to a neighbor; therefore love is the fulfilling of the law.' }
    ],
    civilizationalContext: 'The foundational text for the European Protestant Reformation, the rule of law, and ethics of non-retaliation.'
  },
  {
    id: 'bible-46-1corinthians',
    title: '46. 1 Corinthians — The Supremacy of Love (Agape)',
    reference: 'New Testament • Pauline Epistles',
    theme: 'The Body with Many Parts & The Hymn of Love',
    summary: 'Addresses a factious community, arguing that all talents and intellect are worthless without patient, selfless love (1 Cor 13).',
    verses: [
      { num: '1Cor 12:25-26', text: 'That there should be no division in the body, but that the members should have mutual care for one another. If one suffers, all suffer with it.' },
      { num: '1Cor 13:4-7', text: 'Love is patient, love is kind; it does not envy, it does not boast, it is not proud... it bears all things, hopes all things, endures all things.' },
      { num: '1Cor 13:13', text: 'And now abide faith, hope, and love, these three; but the greatest of these is love.' }
    ],
    civilizationalContext: 'The definitive philosophical definition of benevolent altruism, anchoring hospice and philanthropic institutions.'
  },
  {
    id: 'bible-47-2corinthians',
    title: '47. 2 Corinthians — Strength in Vulnerability & Generosity',
    reference: 'New Testament • Pauline Epistles',
    theme: 'Comfort in Suffering, Transparent Integrity & Cheerful Giving',
    summary: 'Reflects on personal exhaustion, triumph over adversity, and the ethics of voluntary humanitarian disaster relief for distant famine victims.',
    verses: [
      { num: '2Cor 1:3-4', text: 'The God of all comfort, who comforts us in all our affliction so that we may comfort those in any trouble.' },
      { num: '2Cor 9:7', text: 'Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.' },
      { num: '2Cor 12:9', text: 'My grace is sufficient for you, for my power is made perfect in weakness.' }
    ],
    civilizationalContext: 'Created the template for international disaster relief and mutual aid networks between cities.'
  },
  {
    id: 'bible-48-galatians',
    title: '48. Galatians — The Magna Carta of Spiritual Liberty',
    reference: 'New Testament • Pauline Epistles',
    theme: 'Liberation from Legalism & The Fruit of the Spirit',
    summary: 'Defends spiritual freedom against authoritarian gatekeepers, declaring that in Christ all societal divisions of race, caste, and sex are superseded.',
    verses: [
      { num: 'Gal 3:28', text: 'There is neither Jew nor Greek, there is neither slave nor free, there is no male and female; for you are all one in Christ Jesus.' },
      { num: 'Gal 5:13-14', text: 'You were called to freedom; only do not use your freedom as an opportunity for self-indulgence, but through love serve one another.' },
      { num: 'Gal 5:22-23', text: 'The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.' }
    ],
    civilizationalContext: 'Referred to by historians as the fundamental intellectual blow against ancient slavery and gender inequality.'
  },
  {
    id: 'bible-49-ephesians',
    title: '49. Ephesians — Dismantling Dividing Walls of Hostility',
    reference: 'New Testament • Pauline Epistles',
    theme: 'Cosmic Reconciliation, Unity & The Armor of Light',
    summary: 'Celebrates the destruction of hostile cultural barriers between historic enemies, outlining domestic and communal ethics of mutual respect.',
    verses: [
      { num: 'Eph 2:14', text: 'For He Himself is our peace, who has made both groups one and has broken down the dividing wall of hostility.' },
      { num: 'Eph 4:2-3', text: 'Be completely humble and gentle; be patient, bearing with one another in love. Make every effort to keep the unity of the Spirit in the bond of peace.' },
      { num: 'Eph 4:28', text: 'Anyone who has been stealing must steal no longer, but must work, doing something useful with their hands, that they may have something to share with those in need.' }
    ],
    civilizationalContext: 'Taught societies to dismantle ethnic apartheid and transform former bandits into contributing productive community members.'
  },
  {
    id: 'bible-50-philippians',
    title: '50. Philippians — Joy in Adversity & Intellectual Virtue',
    reference: 'New Testament • Pauline Epistles',
    theme: 'Prison Fortitude, Emptying the Ego & Noble Thinking',
    summary: 'Written from a Roman dungeon, radiating unconquerable joy, urging readers to adopt selfless humility and dwell upon whatever is noble and true.',
    verses: [
      { num: 'Phil 2:3-4', text: 'Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, looking out for the interests of others.' },
      { num: 'Phil 4:8', text: 'Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely... think on these things.' },
      { num: 'Phil 4:13', text: 'I can do all things through Him who gives me strength.' }
    ],
    civilizationalContext: 'An essential guide to cognitive hygiene, mental focus, and maintaining optimism while surviving unjust imprisonment.'
  },
  {
    id: 'bible-51-colossians',
    title: '51. Colossians — Cosmic Renewal & Peaceful Living',
    reference: 'New Testament • Pauline Epistles',
    theme: 'Supremacy of Wisdom, Compassion & Harmonious Speech',
    summary: 'Encourages believers to put away slander, wrath, and malice, putting on clothes of heartfelt compassion, kindness, and forgiving grievances.',
    verses: [
      { num: 'Col 3:12-13', text: 'Clothe yourselves with compassion, kindness, humility, gentleness and patience. Bear with each other and forgive one another.' },
      { num: 'Col 4:6', text: 'Let your speech always be with grace, seasoned with salt, so that you may know how you ought to answer each one.' }
    ],
    civilizationalContext: 'Prescribed de-escalation tactics and thoughtful communication etiquette in tense, multi-cultural frontier towns.'
  },
  {
    id: 'bible-52-1thessalonians',
    title: '52. 1 Thessalonians — Hope in Grief & Quiet Industry',
    reference: 'New Testament • Pauline Epistles',
    theme: 'Encouraging the Grieving & Honest Daily Work',
    summary: 'Written to comfort survivors mourning dead comrades, advising people to lead quiet, productive lives without becoming dependent on others.',
    verses: [
      { num: '1Thess 4:11-12', text: 'Make it your ambition to lead a quiet life, to mind your own business and to work with your hands, so that your daily life may win the respect of outsiders.' },
      { num: '1Thess 5:14-15', text: 'Warn those who are idle, encourage the disheartened, help the weak, be patient with everyone. Do not repay wrong for wrong.' }
    ],
    civilizationalContext: 'Promoted the dignity of manual labor and honest self-sufficiency during societal upheaval.'
  },
  {
    id: 'bible-53-2thessalonians',
    title: '53. 2 Thessalonians — Countering Panic & Promoting Industry',
    reference: 'New Testament • Pauline Epistles',
    theme: 'Steadfastness Against Deception & Responsibility to Work',
    summary: 'Calms apocalyptic panic caused by fraudulent letters, establishing the principle that community members who can work must contribute.',
    verses: [
      { num: '2Thess 2:15', text: 'Stand firm and hold to the teachings passed on to you.' },
      { num: '2Thess 3:10-13', text: 'The rule we gave you: If anyone will not work, neither shall he eat. Never tire of doing what is good.' }
    ],
    civilizationalContext: 'Prevented end-of-the-world paralysis and economic parasitism in frontier collective settlements.'
  },
  {
    id: 'bible-54-1timothy',
    title: '54. 1 Timothy — Institutional Health & Greed Warning',
    reference: 'New Testament • Pauline Epistles',
    theme: 'Leadership Ethics, Care of Elders & The Trap of Wealth',
    summary: 'Pastoral instructions for appointing honest leaders without criminal records or domestic abuse, warning that the love of money is a root of all kinds of evil.',
    verses: [
      { num: '1Tim 5:8', text: 'Anyone who does not provide for their relatives, and especially for their own household, has denied the faith and is worse than an unbeliever.' },
      { num: '1Tim 6:10', text: 'For the love of money is a root of all kinds of evil. Some people, eager for money, have pierced themselves with many griefs.' },
      { num: '1Tim 6:18', text: 'Command them to do good, to be rich in good deeds, and to be generous and willing to share.' }
    ],
    civilizationalContext: 'Established accountability criteria for public officials and early communal pension systems for elderly widows.'
  },
  {
    id: 'bible-55-2timothy',
    title: '55. 2 Timothy — Passing the Torch & Endurance',
    reference: 'New Testament • Pauline Epistles',
    theme: 'Mentorship, A Sound Mind & Facing Execution Calmly',
    summary: 'Paul’s final letter from a Roman death cell, urging Timothy to preserve core knowledge faithfully, overcome fear, and finish the race with honor.',
    verses: [
      { num: '2Tim 1:7', text: 'For God has not given us a spirit of fear, but of power, of love, and of a sound mind.' },
      { num: '2Tim 2:2', text: 'And the things you have heard from me, entrust to reliable people who will also be qualified to teach others.' },
      { num: '2Tim 4:7', text: 'I have fought the good fight, I have finished the race, I have kept the faith.' }
    ],
    civilizationalContext: 'The canonical formula for intergenerational apprenticeship, knowledge preservation, and courage facing martyrdom.'
  },
  {
    id: 'bible-56-titus',
    title: '56. Titus — Public Character & Civil Order',
    reference: 'New Testament • Pauline Epistles',
    theme: 'Integrity in Leadership, Restraint & Good Civic Works',
    summary: 'Guidelines for establishing civic integrity in Crete, demanding that leaders be hospitable, self-controlled, honest in speech, and known for public works.',
    verses: [
      { num: 'Titus 2:7-8', text: 'In everything set an example by doing what is good. In your teaching show integrity, seriousness and soundness of speech that cannot be condemned.' },
      { num: 'Titus 3:1-2', text: 'Remind the people to be subject to rulers and authorities, to be obedient, to be ready to do whatever is good, to slander no one, to be peaceable and considerate.' }
    ],
    civilizationalContext: 'Trained early Christian communities to be constructive, peaceful participants in civic town maintenance.'
  },
  {
    id: 'bible-57-philemon',
    title: '57. Philemon — Human Dignity Above Chattel Slavery',
    reference: 'New Testament • Pauline Epistles',
    theme: 'Reconciliation, Abolishing Enslavement & Voluntary Mercy',
    summary: 'A short personal letter appealing for the runaway slave Onesimus to be welcomed back not as property, but as a beloved equal brother in human dignity.',
    verses: [
      { num: 'Phlm 1:15-16', text: 'No longer as a slave, but better than a slave, as a dear brother... welcome him as you would welcome me.' },
      { num: 'Phlm 1:18', text: 'If he has done you any wrong or owes you anything, charge it to me.' }
    ],
    civilizationalContext: 'A subversion of Roman chattel property law, demonstrating how interpersonal affection dismantles institutional slavery.'
  },

  // ==========================================
  // NEW TESTAMENT: GENERAL EPISTLES (8)
  // ==========================================
  {
    id: 'bible-58-hebrews',
    title: '58. Hebrews — Endurance & The Hall of Faith',
    reference: 'New Testament • General Epistles',
    theme: 'Faith as Substance, Welcoming Strangers & Unshakable Kingdom',
    summary: 'A magnificent rhetorical discourse encouraging weary believers to persevere through persecution, defining faith as active conviction and honoring heroic endurance.',
    verses: [
      { num: 'Heb 11:1', text: 'Now faith is confidence in what we hope for and assurance about what we do not see.' },
      { num: 'Heb 12:1', text: 'Let us run with endurance the race set out before us, stripping off every weight that hinders.' },
      { num: 'Heb 13:2-3', text: 'Do not forget to show hospitality to strangers, for by so doing some have entertained angels unawares. Remember those in prison as if you were with them.' }
    ],
    civilizationalContext: 'Cultivated moral fortitude under political persecution and the universal duty of prisoner support and refugee hospitality.'
  },
  {
    id: 'bible-59-james',
    title: '59. James — Faith Without Works is Dead',
    reference: 'New Testament • General Epistles',
    theme: 'Active Social Justice, Taming the Tongue & Anti-Classism',
    summary: 'The most intensely practical ethical letter in the New Testament: forbids flattering the rich while dishonoring the poor, warns employers against wage withholding, and demands active care for orphans.',
    verses: [
      { num: 'Jas 1:27', text: 'Religion that is pure and undefiled before God is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world.' },
      { num: 'Jas 2:14-17', text: 'What good is it if someone claims to have faith but has no deeds? Faith by itself, if it is not accompanied by action, is dead.' },
      { num: 'Jas 5:4', text: 'Behold, the wages of the laborers who mowed your fields, which you kept back by fraud, are crying out against you!' }
    ],
    civilizationalContext: 'Direct precursor to modern social action, trade unionist defenses of wage payments, and orphan care networks.'
  },
  {
    id: 'bible-60-1peter',
    title: '60. 1 Peter — Hope in the Crucible of Suffering',
    reference: 'New Testament • General Epistles',
    theme: 'Refined Fortitude, Civic Grace & Respectful Answers',
    summary: 'Addresses displaced exiles scattered across Asia Minor, showing how to endure slander and persecution with calm dignity, responding with gentle reason.',
    verses: [
      { num: '1Pet 3:9', text: 'Do not repay evil with evil or insult with insult. On the contrary, repay evil with blessing.' },
      { num: '1Pet 3:15', text: 'Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect.' },
      { num: '1Pet 4:8', text: 'Above all, love each other deeply, because love covers over a multitude of sins. Offer hospitality without grumbling.' }
    ],
    civilizationalContext: 'Established standards for reasoned diplomatic dialogue and maintaining inner equilibrium during ideological hostility.'
  },
  {
    id: 'bible-61-2peter',
    title: '61. 2 Peter — Growth in Virtue & Moral Discernment',
    reference: 'New Testament • General Epistles',
    theme: 'The Ladder of Character & Unmasking Charlatans',
    summary: 'Urges moral diligence by stacking virtue upon faith, knowledge, self-control, and love, warning against exploitative religious charlatans who prey on people.',
    verses: [
      { num: '2Pet 1:5-7', text: 'Make every effort to supplement your faith with virtue, virtue with knowledge, knowledge with self-control, self-control with steadfastness, and steadfastness with godliness, mutual affection, and love.' },
      { num: '2Pet 3:9', text: 'The Lord is not slow in keeping His promise... He is patient with you, not wanting anyone to perish, but everyone to come to repentance.' }
    ],
    civilizationalContext: 'A roadmap for progressive character building and cognitive defense against deceptive demagogues.'
  },
  {
    id: 'bible-62-1john',
    title: '62. 1 John — God is Love & Overcoming Fear',
    reference: 'New Testament • General Epistles',
    theme: 'Walking in the Light, Radical Love & Perfect Love Casting Out Fear',
    summary: 'A warm epistolary manifesto stating that true relationship with the divine is proven solely by whether we love fellow humans in tangible deed and truth.',
    verses: [
      { num: '1Jn 3:17-18', text: 'If anyone has material possessions and sees a brother in need but has no pity on them, how can the love of God be in that person? Let us not love with words or speech but with actions and in truth.' },
      { num: '1Jn 4:8', text: 'Whoever does not love does not know God, because God is love.' },
      { num: '1Jn 4:18', text: 'There is no fear in love. But perfect love drives out fear, because fear has to do with punishment.' }
    ],
    civilizationalContext: 'The definitive philosophical identity of love as the supreme metaphysical reality and emotional antidote to terror.'
  },
  {
    id: 'bible-63-2john',
    title: '63. 2 John — Walking in Truth and Boundaries',
    reference: 'New Testament • General Epistles',
    theme: 'Truth, Ethical Boundaries & Discernment in Hospitality',
    summary: 'A short note to a community reminding them that loving one another means walking in truth, while advising them not to finance deceitful traveling preachers.',
    verses: [
      { num: '2Jn 1:5-6', text: 'I write to you not as though I were writing a new commandment, but one we have had from the beginning: that we love one another.' },
      { num: '2Jn 1:8', text: 'Watch out that you do not lose what we have worked so hard to achieve.' }
    ],
    civilizationalContext: 'Emphasized the necessity of balance between welcoming generosity and protecting vulnerable groups from predatory frauds.'
  },
  {
    id: 'bible-64-3john',
    title: '64. 3 John — Hospitable Support for Truth Seekers',
    reference: 'New Testament • General Epistles',
    theme: 'Hospitality to Travelers & Opposing Authoritarian Dictators',
    summary: 'Praises Gaius for generously housing traveling teachers, while condemning Diotrephes, an autocratic church boss who gossiped malicious words and expelled people.',
    verses: [
      { num: '3Jn 1:8', text: 'We ought therefore to show hospitality to such people so that we may work together for the truth.' },
      { num: '3Jn 1:11', text: 'Beloved, do not imitate what is evil, but what is good. Whoever does good is of God.' }
    ],
    civilizationalContext: 'Early case study in opposing authoritarian power-mongers in volunteer associations while supporting open scholarly inquiry.'
  },
  {
    id: 'bible-65-jude',
    title: '65. Jude — Defending Moral Truth Against Corruption',
    reference: 'New Testament • General Epistles',
    theme: 'Vigilance, Rescuing the Doubting & Mercy',
    summary: 'A fiery epistle urging citizens to contend for foundational ethics against lawless infiltrators who turn freedom into an excuse for self-indulgence.',
    verses: [
      { num: 'Jude 1:20-21', text: 'Build yourselves up in your most holy faith and pray in the Spirit, keeping yourselves in God’s love.' },
      { num: 'Jude 1:22-23', text: 'Be merciful to those who doubt; save others by snatching them from the fire.' }
    ],
    civilizationalContext: 'Urged compassionate intervention to rescue disillusioned or doubtful peers rather than excommunicating them.'
  },

  // ==========================================
  // NEW TESTAMENT: APOCALYPSE / PROPHECY (1)
  // ==========================================
  {
    id: 'bible-66-revelation',
    title: '66. Revelation — Ultimate Triumph of Justice & Renewal',
    reference: 'New Testament • Prophecy & Apocalypse',
    theme: 'The Defeat of Tyranny, The New Heaven and Earth & All Tears Wiped Away',
    summary: 'The climactic vision of world history: oppressive beast-like imperial systems fall, death and suffering are eradicated, and humanity dwells in a garden-city of light with rivers of life for healing nations.',
    verses: [
      { num: 'Rev 19:16', text: 'King of kings and Lord of lords: Higher moral truth triumphs over corrupt worldly empires.' },
      { num: 'Rev 21:3-4', text: 'God will wipe away every tear from their eyes; there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain.' },
      { num: 'Rev 22:2', text: 'On each side of the river stood the tree of life, bearing twelve crops of fruit... and the leaves of the tree are for the healing of the nations.' }
    ],
    civilizationalContext: 'Provides oppressed and traumatized populations with the ultimate civilizational teleology: that tyranny and cruelty are temporary, while peace, justice, and renewed creation are the ultimate destiny of humanity.'
  }
];
