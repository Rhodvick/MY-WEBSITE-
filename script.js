// Daily Content Data - Extensive collection of poems and quotes
const poemsDatabase = [
    {
        id: 1,
        title: "The Road Not Taken",
        author: "Robert Frost",
        nationality: "American",
        year: 1916,
        excerpt: [
            "Two roads diverged in a yellow wood,",
            "And sorry I could not travel both",
            "And be one traveler, long I stood",
            "And looked down one as far as I could",
            "To where it bent in the undergrowth..."
        ],
        fullPoem: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, as just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same,

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way,
I doubted if I should ever come back.

I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I—
I took the one less traveled by,
And that has made all the difference.`,
        category: "life",
        image: "https://static.photos/nature/400x400/10"
    },
    {
        id: 2,
        title: "Still I Rise",
        author: "Maya Angelou",
        nationality: "American",
        year: 1978,
        excerpt: [
            "You may write me down in history",
            "With your bitter, twisted lies,",
            "You may trod me in the very dirt",
            "But still, like dust, I'll rise..."
        ],
        fullPoem: `You may write me down in history
With your bitter, twisted lies,
You may trod me in the very dirt
But still, like dust, I'll rise.

Does my sassiness upset you?
Why are you beset with gloom?
'Cause I walk like I've got oil wells
Pumping in my living room.

Just like moons and like suns,
With the certainty of tides,
Just like hopes springing high,
Still I'll rise.

Did you want to see me broken?
Bowed head and lowered eyes?
Shoulders falling down like teardrops,
Weakened by my soulful cries?

Does my haughtiness offend you?
Don't you take it awful hard
'Cause I laugh like I've got gold mines
Diggin' in my own backyard.

You may shoot me with your words,
You may cut me with your eyes,
You may kill me with your hatefulness,
But still, like air, I'll rise.

Does my sexiness upset you?
Does it come as a surprise
That I dance like I've got diamonds
At the meeting of my thighs?

Out of the huts of history's shame
I rise
Up from a past that's rooted in pain
I rise
I'm a black ocean, leaping and wide,
Welling and swelling I bear in the tide.

Leaving behind nights of terror and fear
I rise
Into a daybreak that's wondrously clear
I rise
Bringing forth the bone of my ancestors
I rise
I rise
I rise.`,
        category: "hope",
        image: "https://static.photos/people/400x400/11"
    },
    {
        id: 3,
        title: "If—",
        author: "Rudyard Kipling",
        nationality: "British",
        year: 1895,
        excerpt: [
            "If you can keep your head when all about you",
            "Are losing theirs and blaming it on you,",
            "If you can trust yourself when all men doubt you,",
            "But make allowance for their doubting too..."
        ],
        fullPoem: `If you can keep your head when all about you   
    Are losing theirs and blaming it on you,   
If you can trust yourself when all men doubt you,
    But make allowance for their doubting too;   
If you can wait and not be tired by waiting,
    Or being lied about, don't deal in lies,
Or being hated, don't give way to hating,
    And yet don't look too good, nor talk too wise:

If you can dream—and not make dreams your master;   
    If you can think—and not make thoughts your aim;   
If you can meet with Triumph and Disaster
    And treat those two impostors just the same;   
If you can bear to hear the truth you've spoken
    Twisted by knaves to make a trap for fools,
Or watch the things you gave your life to, broken,
    And stoop and build 'em up with worn-out tools:

If you can make one heap of all your winnings
    And risk it on one turn of pitch-and-toss,
And lose, and start again at your beginnings
    And never breathe a word about your loss;
If you can force your heart and nerve and sinew
    To serve your turn long after they are gone,   
And so hold on when there is nothing in you
    Except the Will which says to them: 'Hold on!'

If you can talk with crowds and keep your virtue,   
    Or walk with Kings—nor lose the common touch,
If neither foes nor loving friends can hurt you,
    If all men count with you, but none too much;
If you can fill the unforgiving minute
    With sixty seconds' worth of distance run,   
Yours is the Earth and everything that's in it,   
    And—which is more—you'll be a Man, my son!`,
        category: "life",
        image: "https://static.photos/minimal/400x400/12"
    },
    {
        id: 4,
        title: "Sonnet 18",
        author: "William Shakespeare",
        nationality: "English",
        year: 1609,
        excerpt: [
            "Shall I compare thee to a summer's day?",
            "Thou art more lovely and more temperate:",
            "Rough winds do shake the darling buds of May,",
            "And summer's lease hath all too short a date..."
        ],
        fullPoem: `Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer's lease hath all too short a date;
Sometime too hot the eye of heaven shines,
And often is his gold complexion dimm'd;
And every fair from fair sometime declines,
By chance or nature's changing course untrimm'd;
But thy eternal summer shall not fade
Nor lose possession of that fair thou ow'st;
Nor shall Death brag thou wander'st in his shade,
When in eternal lines to time thou grow'st:
    So long as men can breathe or eyes can see,
    So long lives this, and this gives life to thee.`,
        category: "love",
        image: "https://static.photos/vintage/400x400/13"
    },
    {
        id: 5,
        title: "The Love Song of J. Alfred Prufrock",
        author: "T.S. Eliot",
        nationality: "American-British",
        year: 1915,
        excerpt: [
            "Let us go then, you and I,",
            "When the evening is spread out against the sky",
            "Like a patient etherized upon a table..."
        ],
        fullPoem: `Let us go then, you and I,
When the evening is spread out against the sky
Like a patient etherized upon a table;
Let us go, through certain half-deserted streets,
The muttering retreats
Of restless nights in one-night cheap hotels
And sawdust restaurants with oyster-shells:
Streets that follow like a tedious argument
Of insidious intent
To lead you to an overwhelming question ...
Oh, do not ask, "What is it?"
Let us go and make our visit.

In the room the women come and go
Talking of Michelangelo.

The yellow fog that rubs its back upon the window-panes,
The yellow smoke that rubs its muzzle on the window-panes,
Licked its tongue into the corners of the evening,
Lingered upon the pools that stand in drains,
Let fall upon its back the soot that falls from chimneys,
Slipped by the terrace, made a sudden leap,
And seeing that it was a soft October night,
Curled once about the house, and fell asleep.

And indeed there will be time
For the yellow smoke that slides along the street,
Rubbing its back upon the window-panes;
There will be time, there will be time
To prepare a face to meet the faces that you meet;
There will be time to murder and create,
And time for all the works and days of hands
That lift and drop a question on your plate;
Time for you and time for me,
And time yet for a hundred indecisions,
And for a hundred visions and revisions,
Before the taking of a toast and tea.`,
        category: "life",
        image: "https://static.photos/cityscape/400x400/14"
    },
    {
        id: 6,
        title: "Ozymandias",
        author: "Percy Bysshe Shelley",
        nationality: "English",
        year: 1818,
        excerpt: [
            "I met a traveller from an antique land,",
            "Who said—'Two vast and trunkless legs of stone",
            "Stand in the desert...'"
        ],
        fullPoem: `I met a traveller from an antique land,
Who said—"Two vast and trunkless legs of stone
Stand in the desert. . . . Near them, on the sand,
Half sunk a shattered visage lies, whose frown,
And wrinkled lip, and sneer of cold command,
Tell that its sculptor well those passions read
Which yet survive, stamped on these lifeless things,
The hand that mocked them, and the heart that fed;
And on the pedestal, these words appear:
My name is Ozymandias, King of Kings;
Look on my Works, ye Mighty, and despair!
Nothing beside remains. Round the decay
Of that colossal Wreck, boundless and bare
The lone and level sands stretch far away.`,
        category: "loss",
        image: "https://static.photos/desert/400x400/15"
    },
    {
        id: 7,
        title: "Do Not Go Gentle into That Good Night",
        author: "Dylan Thomas",
        nationality: "Welsh",
        year: 1947,
        excerpt: [
            "Do not go gentle into that good night,",
            "Old age should burn and rave at close of day;",
            "Rage, rage against the dying of the light..."
        ],
        fullPoem: `Do not go gentle into that good night,
Old age should burn and rave at close of day;
Rage, rage against the dying of the light.

Though wise men at their end know dark is right,
Because their words had forked no lightning they
Do not go gentle into that good night.

Good men, the last wave by, crying how bright
Their frail deeds might have danced in a green bay,
Rage, rage against the dying of the light.

Wild men who caught and sang the sun in flight,
And learn, too late, they grieved it on its way,
Do not go gentle into that good night.

Grave men, near death, who see with blinding sight
Blind eyes could blaze like meteors and be gay,
Rage, rage against the dying of the light.

And you, my father, there on the sad height,
Curse, bless, me now with your fierce tears, I pray.
Do not go gentle into that good night.
Rage, rage against the dying of the light.`,
        category: "loss",
        image: "https://static.photos/night/400x400/16"
    },
    {
        id: 8,
        title: "The Raven",
        author: "Edgar Allan Poe",
        nationality: "American",
        year: 1845,
        excerpt: [
            "Once upon a midnight dreary, while I pondered, weak and weary,",
            "Over many a quaint and curious volume of forgotten lore—",
            "While I nodded, nearly napping, suddenly there came a tapping..."
        ],
        fullPoem: `Once upon a midnight dreary, while I pondered, weak and weary,
Over many a quaint and curious volume of forgotten lore—
    While I nodded, nearly napping, suddenly there came a tapping,
As of some one gently rapping, rapping at my chamber door.
"'Tis some visitor," I muttered, "tapping at my chamber door—
            Only this and nothing more."

Ah, distinctly I remember it was in the bleak December;
And each separate dying ember wrought its ghost upon the floor.
    Eagerly I wished the morrow;—vainly I had sought to borrow
    From my books surcease of sorrow—sorrow for the lost Lenore—
For the rare and radiant maiden whom the angels name Lenore—
            Nameless here for evermore.`,
        category: "loss",
        image: "https://static.photos/dark/400x400/17"
    },
    {
        id: 9,
        title: "Hope is the Thing with Feathers",
        author: "Emily Dickinson",
        nationality: "American",
        year: 1861,
        excerpt: [
            "'Hope' is the thing with feathers -",
            "That perches in the soul -",
            "And sings the tune without the words -",
            "And never stops - at all -"
        ],
        fullPoem: `"Hope" is the thing with feathers -
That perches in the soul -
And sings the tune without the words -
And never stops - at all -

And sweetest - in the Gale - is heard -
And sore must be the storm -
That could abash the little Bird
That kept so many warm -

I've heard it in the chillest land -
And on the strangest Sea -
Yet - never - in Extremity,
It asked a crumb - of me.`,
        category: "hope",
        image: "https://static.photos/bird/400x400/18"
    },
    {
        id: 10,
        title: "Daffodils",
        author: "William Wordsworth",
        nationality: "English",
        year: 1807,
        excerpt: [
            "I wandered lonely as a cloud",
            "That floats on high o'er vales and hills,",
            "When all at once I saw a crowd,",
            "A host, of golden daffodils..."
        ],
        fullPoem: `I wandered lonely as a cloud
That floats on high o'er vales and hills,
When all at once I saw a crowd,
A host, of golden daffodils;
Beside the lake, beneath the trees,
Fluttering and dancing in the breeze.

Continuous as the stars that shine
And twinkle on the milky way,
They stretched in never-ending line
Along the margin of a bay:
Ten thousand saw I at a glance,
Tossing their heads in sprightly dance.

The waves beside them danced; but they
Out-did the sparkling waves in glee:
A poet could not but be gay,
In such a jocund company:
I gazed—and gazed—but little thought
What wealth the show to me had brought:

For oft, when on my couch I lie
In vacant or in pensive mood,
They flash upon that inward eye
Which is the bliss of solitude;
And then my heart with pleasure fills,
And dances with the daffodils.`,
        category: "nature",
        image: "https://static.photos/flowers/400x400/19"
    },
    {
        id: 11,
        title: "The Second Coming",
        author: "W.B. Yeats",
        nationality: "Irish",
        year: 1919,
        excerpt: [
            "Turning and turning in the widening gyre",
            "The falcon cannot hear the falconer;",
            "Things fall apart; the centre cannot hold..."
        ],
        fullPoem: `Turning and turning in the widening gyre
The falcon cannot hear the falconer;
Things fall apart; the centre cannot hold;
Mere anarchy is loosed upon the world,
The blood-dimmed tide is loosed, and everywhere
The ceremony of innocence is drowned;
The best lack all conviction, while the worst
Are full of passionate intensity.

Surely some revelation is at hand;
Surely the Second Coming is at hand.
The Second Coming! Hardly are those words out
When a vast image out of Spiritus Mundi
Troubles my sight: somewhere in sands of the desert
A shape with lion body and the head of a man,
A gaze blank and pitiless as the sun,
Is moving its slow thighs, while all about it
Reel shadows of the indignant desert birds.
The darkness drops again; but now I know
That twenty centuries of stony sleep
Were vexed to nightmare by a rocking cradle,
And what rough beast, its hour come round at last,
Slouches towards Bethlehem to be born?`,
        category: "dreams",
        image: "https://static.photos/abstract/400x400/20"
    },
    {
        id: 12,
        title: "When You Are Old",
        author: "W.B. Yeats",
        nationality: "Irish",
        year: 1893,
        excerpt: [
            "When you are old and grey and full of sleep,",
            "And nodding by the fire, take down this book,",
            "And slowly read, and dream of the soft look",
            "Your eyes had once, and of their shadows deep..."
        ],
        fullPoem: `When you are old and grey and full of sleep,
And nodding by the fire, take down this book,
And slowly read, and dream of the soft look
Your eyes had once, and of their shadows deep;

How many loved your moments of glad grace,
And loved your beauty with love false or true,
But one man loved the pilgrim soul in you,
And loved the sorrows of your changing face;

And bending down beside the glowing bars,
Murmur, a little sadly, how Love fled
And paced upon the mountains overhead
And hid his face amid a crowd of stars.`,
        category: "love",
        image: "https://static.photos/elderly/400x400/21"
    }
];

const quotesDatabase = [
    {
        id: 1,
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        context: "Stanford Commencement Address, 2005",
        category: "inspiration",
        nationality: "American"
    },
    {
        id: 2,
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein",
        context: "Letter to Robert S. Marcus, 1950",
        category: "hope",
        nationality: "German-American"
    },
    {
        id: 3,
        text: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
        context: "Attributed, though exact source debated",
        category: "life",
        nationality: "Indian"
    },
    {
        id: 4,
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle",
        context: "Nicomachean Ethics",
        category: "hope",
        nationality: "Greek"
    },
    {
        id: 5,
        text: "The unexamined life is not worth living.",
        author: "Socrates",
        context: "Apology, 399 BC",
        category: "life",
        nationality: "Greek"
    },
    {
        id: 6,
        text: "What we think, we become.",
        author: "Buddha",
        context: "Dhammapada",
        category: "mindfulness",
        nationality: "Nepalese/Indian"
    },
    {
        id: 7,
        text: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama",
        context: "The Art of Happiness, 1998",
        category: "happiness",
        nationality: "Tibetan"
    },
    {
        id: 8,
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu",
        context: "Tao Te Ching",
        category: "inspiration",
        nationality: "Chinese"
    },
    {
        id: 9,
        text: "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzsche",
        context: "Twilight of the Idols, 1888",
        category: "resilience",
        nationality: "German"
    },
    {
        id: 10,
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        context: "Beautiful Boy, 1980",
        category: "life",
        nationality: "British"
    },
    {
        id: 11,
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
        context: "Awaken the Giant Within, 1991",
        category: "inspiration",
        nationality: "American"
    },
    {
        id: 12,
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs",
        context: "Stanford Commencement Address, 2005",
        category: "life",
        nationality: "American"
    },
    {
        id: 13,
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb",
        context: "Traditional",
        category: "wisdom",
        nationality: "Chinese"
    },
    {
        id: 14,
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
        context: "Analects",
        category: "perseverance",
        nationality: "Chinese"
    },
    {
        id: 15,
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair",
        context: "Motivational Speaker",
        category: "courage",
        nationality: "American"
    },
    {
        id: 16,
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        context: "Speech, 1941",
        category: "resilience",
        nationality: "British"
    },
    {
        id: 17,
        text: "Hardships often prepare ordinary people for an extraordinary destiny.",
        author: "C.S. Lewis",
        context: "The Problem of Pain, 1940",
        category: "hope",
        nationality: "British"
    },
    {
        id: 18,
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        context: "Speech, 1903",
        category: "confidence",
        nationality: "American"
    },
    {
        id: 19,
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        context: "You Learn by Living, 1960",
        category: "dreams",
        nationality: "American"
    },
    {
        id: 20,
        text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson",
        context: "Essays: First Series, 1841",
        category: "leadership",
        nationality: "American"
    },
    {
        id: 21,
        text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson",
        context: "Attributed",
        category: "strength",
        nationality: "American"
    },
    {
        id: 22,
        text: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein",
        context: "Life magazine, 1955",
        category: "purpose",
        nationality: "German-American"
    },
    {
        id: 23,
        text: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        author: "Robert Frost",
        context: "The Road Not Taken, 1916",
        category: "choices",
        nationality: "American"
    },
    {
        id: 24,
        text: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison",
        context: "Interview, 1921",
        category: "perseverance",
        nationality: "American"
    },
    {
        id: 25,
        text: "The mind is everything. What you think you become.",
        author: "Buddha",
        context: "Dhammapada",
        category: "mindfulness",
        nationality: "Nepalese/Indian"
    }
];

const featuredPoets = [
    {
        name: "Rumi",
        nationality: "Persian",
        era: "1207-1273",
        poems: 245,
        followers: "45.2K",
        image: "https://static.photos/minimal/400x400/30",
        bio: "The 13th-century Persian poet and Sufi mystic whose words transcend time and culture."
    },
    {
        name: "Pablo Neruda",
        nationality: "Chilean",
        era: "1904-1973",
        poems: 189,
        followers: "38.7K",
        image: "https://static.photos/vintage/400x400/31",
        bio: "Nobel Prize-winning poet known for his passionate love poems and political activism."
    },
    {
        name: "Langston Hughes",
        nationality: "American",
        era: "1901-1967",
        poems: 312,
        followers: "52.1K",
        image: "https://static.photos/people/400x400/32",
        bio: "Leading voice of the Harlem Renaissance, celebrating Black life and culture."
    },
    {
        name: "Sylvia Plath",
        nationality: "American",
        era: "1932-1963",
        poems: 156,
        followers: "41.8K",
        image: "https://static.photos/monochrome/400x400/33",
        bio: "Confessional poet whose raw, emotional work continues to resonate deeply."
    },
    {
        name: "Federico García Lorca",
        nationality: "Spanish",
        era: "1898-1936",
        poems: 178,
        followers: "35.4K",
        image: "https://static.photos/art/400x400/34",
        bio: "Andalusian poet and playwright who fused folk themes with surrealist imagery."
    },
    {
        name: "Wislawa Szymborska",
        nationality: "Polish",
        era: "1923-2012",
        poems: 134,
        followers: "28.9K",
        image: "https://static.photos/workspace/400x400/35",
        bio: "Nobel laureate known for her ironic, philosophical observations of daily life."
    },
    {
        name: "Ocean Vuong",
        nationality: "Vietnamese-American",
        era: "1988-present",
        poems: 67,
        followers: "89.3K",
        image: "https://static.photos/people/400x400/36",
        bio: "Contemporary voice exploring identity, trauma, and the immigrant experience."
    },
    {
        name: "Ada Limón",
        nationality: "American",
        era: "1976-present",
        poems: 89,
        followers: "42.6K",
        image: "https://static.photos/nature/400x400/37",
        bio: "U.S. Poet Laureate celebrating the natural world and human connection."
    }
];

// Utility Functions
function getDailySeed() {
    const today = new Date();
    return today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
}

function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function getDailyPoem() {
    const seed = getDailySeed();
    const index = Math.floor(seededRandom(seed) * poemsDatabase.length);
    return poemsDatabase[index];
}

function getDailyQuote() {
    const seed = getDailySeed() + 1000; // Different seed for quote
    const index = Math.floor(seededRandom(seed) * quotesDatabase.length);
    return quotesDatabase[index];
}

function formatDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
}

// Render Functions
function renderDailyPoem() {
    const poem = getDailyPoem();
    const dateEl = document.getElementById('poemDate');
    const container = document.getElementById('dailyPoem');
    const authorEl = document.getElementById('poemAuthor');
    
    if (dateEl) dateEl.textContent = formatDate();
    if (authorEl) authorEl.textContent = poem.author;
    
    if (container) {
        container.innerHTML = `
            <h4 class="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-4">${poem.title}</h4>
            <div class="poem-text text-gray-700 dark:text-gray-300 space-y-1">
                ${poem.excerpt.map(line => `<span class="poem-line">${line}</span>`).join('')}
            </div>
            <div class="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="px-2 py-1 rounded bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 capitalize">${poem.category}</span>
                <span>•</span>
                <span>${poem.nationality}</span>
                <span>•</span>
                <span>${poem.year}</span>
            </div>
        `;
    }
    
    // Store for later use
    window.dailyPoemData = poem;
}

function renderDailyQuote() {
    const quote = getDailyQuote();
    const dateEl = document.getElementById('quoteDate');
    const container = document.getElementById('dailyQuote');
    const authorEl = document.getElementById('quoteAuthor');
    const contextEl = document.getElementById('quoteContext');
    
    if (dateEl) dateEl.textContent = formatDate();
    if (authorEl) authorEl.textContent = `— ${quote.author}`;
    if (contextEl) contextEl.textContent = quote.context;
    
    if (container) {
        container.innerHTML = `
            <div class="relative">
                <span class="quote-mark text-primary-500">"</span>
                <p class="font-serif text-2xl sm:text-3xl text-gray-800 dark:text-gray-200 leading-relaxed relative z-10">
                    ${quote.text}
                </p>
            </div>
            <div class="mt-4 flex items-center gap-2">
                <span class="px-3 py-1 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 text-sm capitalize">
                    ${quote.category}
                </span>
                <span class="text-gray-400">•</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">${quote.nationality}</span>
            </div>
        `;
    }
    
    // Store for later use
    window.dailyQuoteData = quote;
}

function renderTrendingPoems() {
    const container = document.getElementById('trendingPoems');
    if (!container) return;
    
    // Get random selection of poems
    const shuffled = [...poemsDatabase].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 6);
    
    container.innerHTML = selected.map((poem, index) => `
        <custom-poem-card 
            title="${poem.title}"
            author="${poem.author}"
            excerpt="${poem.excerpt.slice(0, 3).join(' ')}"
            category="${poem.category}"
            likes="${Math.floor(Math.random() * 5000) + 500}"
            comments="${Math.floor(Math.random() * 500) + 50}"
            image="${poem.image}"
            index="${index}"
        ></custom-poem-card>
    `).join('');
}

function renderFeaturedPoets() {
    const container = document.getElementById('featuredPoets');
    if (!container) return;
    
    const shuffled = [...featuredPoets].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);
    
    container.innerHTML = selected.map(poet => `
        <div class="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div class="relative mb-4">
                <img src="${poet.image}" alt="${poet.name}" class="w-full aspect-square object-cover rounded-xl">
                <div class="absolute top-3 right-3 px-2 py-1 rounded-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-medium text-gray-700 dark:text-gray-300">
                    ${poet.nationality}
                </div>
            </div>
            <h3 class="font-serif text-xl font-bold text-gray-900 dark:text-white mb-1">${poet.name}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">${poet.era}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">${poet.bio}</p>
            <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                <div class="text-center">
                    <p class="font-bold text-gray-900 dark:text-white">${poet.poems}</p>
                    <p class="text-xs text-gray-500">Poems</p>
                </div>
                <div class="text-center">
                    <p class="font-bold text-primary-500">${poet.followers}</p>
                    <p class="text-xs text-gray-500">Followers</p>
                </div>
                <button class="px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium transition-colors">
                    Follow
                </button>
            </div>
        </div>
    `).join('');
}

function renderRecentQuotes() {
    const container = document.getElementById('recentQuotes');
    if (!container) return;
    
    const shuffled = [...quotesDatabase].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 6);
    
    container.innerHTML = selected.map((quote, index) => `
        <custom-quote-card
            text="${quote.text}"
            author="${quote.author}"
            category="${quote.category}"
            likes="${Math.floor(Math.random() * 2000) + 100}"
            index="${index}"
        ></custom-quote-card>
    `).join('');
}

// Interaction Functions
function saveDailyPoem() {
    const btn = document.getElementById('poemBookmark');
    if (btn) {
        const isSaved = btn.classList.contains('fill-primary-500');
        if (isSaved) {
            btn.classList.remove('fill-primary-500', 'text-primary-500');
            btn.classList.add('text-gray-400');
            showToast('Poem removed from saved');
        } else {
            btn.classList.add('fill-primary-500', 'text-primary-500');
            btn.classList.remove('text-gray-400');
            showToast('Poem saved to your collection');
        }
    }
}

function shareQuote() {
    if (navigator.share && window.dailyQuoteData) {
        navigator.share({
            title: 'Quote of the Day',
            text: `"${window.dailyQuoteData.text}" — ${window.dailyQuoteData.author}`,
            url: window.location.href
        }).catch(() => {
            copyQuote();
        });
    } else {
        copyQuote();
    }
}

function copyQuote() {
    if (window.dailyQuoteData) {
        const text = `"${window.dailyQuoteData.text}" — ${window.dailyQuoteData.author}`;
        navigator.clipboard.writeText(text).then(() => {
            showToast('Quote copied to clipboard
