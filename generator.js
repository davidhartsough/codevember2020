const words = [
  "abilities",
  "acid",
  "action",
  "activities",
  "actors",
  "ads",
  "addition",
  "addresses",
  "administrations",
  "adults",
  "advantages",
  "advertising",
  "advice",
  "affairs",
  "afternoon",
  "age",
  "agencies",
  "agents",
  "agreements",
  "agriculture",
  "aid",
  "aims",
  "air",
  "aircraft",
  "airlines",
  "airports",
  "alarms",
  "alcohol",
  "alternatives",
  "ambition",
  "analysis",
  "analysts",
  "anger",
  "angles",
  "animals",
  "answers",
  "anxiety",
  "apartments",
  "appearances",
  "apples",
  "applications",
  "appointments",
  "approaches",
  "approval",
  "areas",
  "arguments",
  "arms",
  "armies",
  "arrival",
  "art",
  "articles",
  "artists",
  "asking",
  "assemblies",
  "assessments",
  "assignments",
  "assistance",
  "assistants",
  "associates",
  "associations",
  "assumptions",
  "atmosphere",
  "attempts",
  "attention",
  "attitude",
  "audience",
  "authors",
  "authorities",
  "autumn",
  "averages",
  "awards",
  "awareness",
  "babies",
  "background",
  "bad",
  "bags",
  "bake",
  "balance",
  "ball",
  "bands",
  "banks",
  "bars",
  "baseball",
  "bases",
  "baskets",
  "bats",
  "baths",
  "bathrooms",
  "battles",
  "beaches",
  "bears",
  "beats",
  "beauties",
  "beds",
  "bedrooms",
  "beers",
  "beginnings",
  "behaviours",
  "being",
  "beliefs",
  "bells",
  "belts",
  "benches",
  "benefits",
  "bets",
  "bicycles",
  "bids",
  "bikes",
  "bills",
  "birds",
  "births",
  "birthdays",
  "bishops",
  "bites",
  "bitterness",
  "black",
  "blame",
  "blank",
  "blindness",
  "blocks",
  "blood",
  "blue",
  "boards",
  "boats",
  "bodies",
  "bones",
  "bonuses",
  "books",
  "boots",
  "borders",
  "bosses",
  "bottles",
  "bowls",
  "boxes",
  "boys",
  "boyfriends",
  "brains",
  "branches",
  "bravery",
  "bread",
  "breaks",
  "breakfast",
  "breath",
  "bricks",
  "bridges",
  "brilliance",
  "brothers",
  "brown",
  "brushes",
  "buddies",
  "budgets",
  "bugs",
  "buildings",
  "burning",
  "buses",
  "bushes",
  "business",
  "buttons",
  "buying",
  "cabinets",
  "cables",
  "cakes",
  "calendars",
  "calmness",
  "cameras",
  "camps",
  "campaigns",
  "cans",
  "cancer",
  "candidates",
  "candles",
  "candy",
  "caps",
  "capacities",
  "capital",
  "captains",
  "cars",
  "cards",
  "care",
  "careers",
  "carpets",
  "cases",
  "cash",
  "castles",
  "cats",
  "categories",
  "causes",
  "celebrations",
  "cells",
  "centuries",
  "chains",
  "chairs",
  "challenges",
  "champions",
  "championships",
  "chances",
  "chancellors",
  "changes",
  "channels",
  "chapters",
  "characters",
  "charges",
  "charities",
  "charts",
  "checks",
  "cheeks",
  "chemicals",
  "chemistry",
  "chickens",
  "chiefs",
  "children",
  "childhood",
  "chips",
  "chocolate",
  "choices",
  "churches",
  "cigarettes",
  "cities",
  "classes",
  "classrooms",
  "clauses",
  "clerks",
  "clients",
  "climates",
  "clocks",
  "closets",
  "clothes",
  "clouds",
  "clubs",
  "clues",
  "coaches",
  "coal",
  "coasts",
  "coats",
  "code",
  "coffee",
  "cold",
  "collars",
  "collections",
  "colleges",
  "colors",
  "combinations",
  "comfort",
  "command",
  "comments",
  "commercial",
  "commission",
  "commitment",
  "committees",
  "communication",
  "communities",
  "companies",
  "comparison",
  "competition",
  "complaints",
  "complexity",
  "computers",
  "concentration",
  "concepts",
  "concerns",
  "concerts",
  "conclusions",
  "conditions",
  "conferences",
  "confidence",
  "conflicts",
  "confusion",
  "connection",
  "consequences",
  "consideration",
  "constants",
  "constitutions",
  "construction",
  "consumers",
  "contact",
  "content",
  "contests",
  "context",
  "contracts",
  "contrast",
  "contribution",
  "control",
  "convention",
  "conversation",
  "conversion",
  "cooks",
  "cookies",
  "cooperation",
  "copies",
  "corners",
  "corporations",
  "costs",
  "councils",
  "counties",
  "countries",
  "countrysides",
  "couples",
  "courage",
  "courses",
  "courts",
  "cousins",
  "covers",
  "cows",
  "cracks",
  "crafts",
  "crashes",
  "cream",
  "creation",
  "creativity",
  "credit",
  "crews",
  "crime",
  "crises",
  "criticism",
  "crosses",
  "crowds",
  "crowns",
  "crying",
  "culture",
  "cups",
  "currency",
  "currents",
  "curricula",
  "curves",
  "customers",
  "cuts",
  "cycles",
  "dads",
  "damage",
  "dance",
  "danger",
  "dares",
  "dark",
  "data",
  "databases",
  "dates",
  "day",
  "deals",
  "dealers",
  "death",
  "debate",
  "debt",
  "decades",
  "decisions",
  "declines",
  "defences",
  "definition",
  "degrees",
  "deliveries",
  "demands",
  "democracies",
  "departments",
  "departure",
  "dependents",
  "deposits",
  "depression",
  "depths",
  "deputies",
  "description",
  "design",
  "designers",
  "desires",
  "desks",
  "details",
  "development",
  "devices",
  "diamonds",
  "diets",
  "differences",
  "difficulties",
  "digging",
  "dimensions",
  "dinner",
  "direction",
  "directors",
  "dirt",
  "disasters",
  "discipline",
  "discounts",
  "discussion",
  "disease",
  "dishes",
  "disks",
  "displays",
  "distance",
  "distinction",
  "distribution",
  "districts",
  "divide",
  "division",
  "doctors",
  "documents",
  "dogs",
  "doors",
  "dots",
  "doubt",
  "drafts",
  "drag",
  "drama",
  "drawers",
  "drawing",
  "dreams",
  "dresses",
  "drinks",
  "driving",
  "drivers",
  "drops",
  "drugs",
  "dumps",
  "dust",
  "duty",
  "ears",
  "earth",
  "ease",
  "east",
  "eating",
  "economics",
  "editors",
  "education",
  "effects",
  "effectiveness",
  "efficiency",
  "effort",
  "eggs",
  "elections",
  "electricity",
  "elements",
  "elevators",
  "emergencies",
  "emotion",
  "emphasis",
  "empires",
  "employees",
  "employers",
  "employment",
  "energy",
  "engines",
  "engineers",
  "engineering",
  "english",
  "entertainment",
  "enthusiasm",
  "entrances",
  "entries",
  "environments",
  "equality",
  "equipment",
  "escape",
  "essays",
  "establishments",
  "estates",
  "estimates",
  "evenings",
  "events",
  "evidence",
  "exams",
  "examination",
  "examples",
  "exchange",
  "excitement",
  "excuses",
  "executives",
  "exercise",
  "exhibition",
  "existence",
  "exits",
  "expansion",
  "expenditures",
  "experience",
  "expertise",
  "explanation",
  "expression",
  "extension",
  "external",
  "extremes",
  "eyes",
  "faces",
  "facts",
  "factors",
  "factories",
  "failure",
  "faith",
  "fall",
  "familiarities",
  "family",
  "fans",
  "farms",
  "farmers",
  "fashion",
  "fat",
  "fathers",
  "favours",
  "fear",
  "features",
  "fees",
  "feedback",
  "feelings",
  "feet",
  "females",
  "fields",
  "fights",
  "figures",
  "files",
  "films",
  "finance",
  "findings",
  "fingers",
  "fire",
  "fish",
  "fishing",
  "fixes",
  "flats",
  "flight",
  "floors",
  "flow",
  "flowers",
  "flying",
  "foci",
  "folds",
  "following",
  "food",
  "football",
  "force",
  "forests",
  "forever",
  "form",
  "formality",
  "formation",
  "fortune",
  "foundations",
  "frames",
  "frameworks",
  "freedom",
  "friends",
  "friendship",
  "front",
  "fruit",
  "fuel",
  "fun",
  "functions",
  "funds",
  "funerals",
  "furniture",
  "futures",
  "gains",
  "galleries",
  "games",
  "gaps",
  "garages",
  "garbage",
  "gardens",
  "gases",
  "gates",
  "gatherings",
  "gear",
  "genes",
  "generations",
  "gentlemen",
  "gifts",
  "girls",
  "girlfriends",
  "giving",
  "glass",
  "gloves",
  "goals",
  "gods",
  "gold",
  "golf",
  "good",
  "government",
  "grades",
  "grandfathers",
  "grandmothers",
  "grants",
  "grass",
  "greatness",
  "green",
  "groceries",
  "groups",
  "growth",
  "guarantees",
  "guards",
  "guesses",
  "guests",
  "guidance",
  "guides",
  "guitars",
  "guns",
  "guys",
  "habits",
  "hair",
  "halls",
  "hands",
  "handles",
  "harm",
  "hats",
  "hate",
  "health",
  "hearing",
  "hearts",
  "heat",
  "height",
  "hell",
  "help",
  "hiding",
  "highlights",
  "highways",
  "hills",
  "hiring",
  "historians",
  "history",
  "hiting",
  "holding",
  "holes",
  "holidays",
  "home",
  "homework",
  "honey",
  "hooks",
  "hope",
  "horror",
  "horses",
  "hospitals",
  "hosting",
  "hotels",
  "hours",
  "houses",
  "housing",
  "humanity",
  "hunting",
  "hurt",
  "husbands",
  "ice",
  "ideals",
  "ideas",
  "identities",
  "image",
  "imagination",
  "impact",
  "implementation",
  "importance",
  "impressions",
  "improvement",
  "incidents",
  "income",
  "independence",
  "indexes",
  "indication",
  "individuals",
  "industries",
  "inevitability",
  "inflation",
  "influence",
  "information",
  "initiative",
  "injuries",
  "inquiries",
  "insects",
  "inspection",
  "inspectors",
  "institutes",
  "institutions",
  "instruction",
  "insurance",
  "intelligence",
  "intention",
  "interaction",
  "interests",
  "internal",
  "international",
  "internet",
  "interpretation",
  "interviews",
  "introductions",
  "investigation",
  "investment",
  "invites",
  "involvements",
  "iron",
  "islands",
  "issues",
  "items",
  "jackets",
  "japan",
  "jobs",
  "jokes",
  "journeys",
  "judgment",
  "juice",
  "jumping",
  "jury",
  "justice",
  "keys",
  "kicking",
  "kids",
  "kindness",
  "kings",
  "kingdom",
  "kisses",
  "kitchens",
  "knees",
  "knives",
  "knowledge",
  "labs",
  "labour",
  "lacking",
  "ladders",
  "ladies",
  "lakes",
  "land",
  "landscapes",
  "lanes",
  "language",
  "laughing",
  "laws",
  "lawyers",
  "layers",
  "leaders",
  "leadership",
  "leading",
  "leagues",
  "leather",
  "leaving",
  "lectures",
  "legs",
  "legislation",
  "lessons",
  "letters",
  "levels",
  "liabilities",
  "libraries",
  "licences",
  "lies",
  "life",
  "lifespan",
  "light",
  "limits",
  "lines",
  "links",
  "lips",
  "lists",
  "listening",
  "literature",
  "lives",
  "living",
  "loans",
  "locals",
  "location",
  "locks",
  "logs",
  "loss",
  "love",
  "luck",
  "lunch",
  "machines",
  "magazines",
  "mail",
  "maintenance",
  "majorities",
  "males",
  "malls",
  "management",
  "managers",
  "manners",
  "manufacturers",
  "maps",
  "marching",
  "marches",
  "markets",
  "marketing",
  "marriage",
  "masses",
  "mastery",
  "matches",
  "mates",
  "materials",
  "math",
  "matter",
  "meals",
  "meaning",
  "measurement",
  "meat",
  "media",
  "medicine",
  "mediums",
  "meetings",
  "membership",
  "memories",
  "memory",
  "men",
  "menus",
  "messes",
  "messages",
  "metals",
  "methods",
  "midnight",
  "milk",
  "mills",
  "minds",
  "ministers",
  "ministries",
  "minorities",
  "minutes",
  "mirrors",
  "missions",
  "mistakes",
  "mixes",
  "mixtures",
  "mobility",
  "modes",
  "models",
  "moms",
  "moments",
  "money",
  "monitors",
  "months",
  "moods",
  "mornings",
  "mortgages",
  "mothers",
  "motion",
  "motors",
  "mountains",
  "mouths",
  "movement",
  "movies",
  "mud",
  "muscles",
  "museums",
  "music",
  "nails",
  "names",
  "nations",
  "nature",
  "necks",
  "needs",
  "negatives",
  "negativity",
  "negotiation",
  "nerves",
  "nets",
  "networks",
  "news",
  "newspapers",
  "night",
  "nobody",
  "noise",
  "normality",
  "north",
  "noses",
  "notes",
  "nothing",
  "notices",
  "notions",
  "novels",
  "numbers",
  "nurses",
  "objects",
  "objectives",
  "obligation",
  "occasions",
  "offences",
  "offers",
  "offices",
  "officers",
  "officials",
  "oil",
  "openings",
  "operations",
  "opinions",
  "opportunities",
  "opportunity",
  "opposites",
  "opposition",
  "options",
  "orange",
  "order",
  "organisations",
  "organization",
  "originals",
  "others",
  "outcomes",
  "outputs",
  "ovens",
  "owners",
  "packages",
  "pages",
  "pain",
  "paints",
  "painting",
  "pairs",
  "palaces",
  "panels",
  "panic",
  "paper",
  "parents",
  "parishes",
  "parks",
  "parking",
  "parliament",
  "parts",
  "particulars",
  "parties",
  "partners",
  "partnership",
  "passages",
  "passengers",
  "passion",
  "paths",
  "patience",
  "patterns",
  "payments",
  "peace",
  "peaks",
  "pens",
  "penalties",
  "pensions",
  "people",
  "percentages",
  "perception",
  "performance",
  "permission",
  "permits",
  "personality",
  "perspective",
  "phases",
  "philosophy",
  "phones",
  "photography",
  "phrases",
  "physicals",
  "physics",
  "pianos",
  "pictures",
  "pies",
  "pieces",
  "pins",
  "pipes",
  "pizza",
  "places",
  "plans",
  "planes",
  "plants",
  "plastic",
  "plates",
  "platforms",
  "playing",
  "players",
  "pleasure",
  "poems",
  "poets",
  "poetry",
  "points",
  "police",
  "policies",
  "policy",
  "politics",
  "pollution",
  "pools",
  "populations",
  "ports",
  "positions",
  "positivity",
  "possessions",
  "possibilities",
  "posts",
  "pots",
  "potatoes",
  "potential",
  "pounds",
  "power",
  "practice",
  "practices",
  "preferences",
  "preparation",
  "presence",
  "presents",
  "presentation",
  "presidents",
  "press",
  "pressure",
  "prices",
  "pride",
  "priests",
  "princes",
  "principles",
  "prints",
  "priorities",
  "priority",
  "prison",
  "prizes",
  "problems",
  "procedures",
  "processes",
  "produce",
  "products",
  "production",
  "professions",
  "professionals",
  "professors",
  "profiles",
  "profits",
  "programming",
  "programs",
  "progress",
  "projects",
  "promises",
  "promotions",
  "prompts",
  "proofs",
  "properties",
  "proportion",
  "proposals",
  "protection",
  "provision",
  "psychology",
  "pubs",
  "publication",
  "purchases",
  "purple",
  "purpose",
  "qualities",
  "quality",
  "quantity",
  "quarters",
  "queen",
  "questions",
  "quitting",
  "quotes",
  "race",
  "radios",
  "rails",
  "railways",
  "rain",
  "raises",
  "rates",
  "ratios",
  "reactions",
  "reading",
  "readers",
  "reality",
  "reason",
  "reception",
  "recession",
  "recipes",
  "recognition",
  "recommendation",
  "records",
  "recording",
  "recovery",
  "red",
  "reduction",
  "references",
  "reflection",
  "reform",
  "refrigerators",
  "regions",
  "regret",
  "relation",
  "relationships",
  "relatives",
  "relief",
  "religion",
  "rent",
  "replacement",
  "replying",
  "reports",
  "representation",
  "representatives",
  "reputation",
  "requests",
  "requirements",
  "research",
  "reserves",
  "residents",
  "resistance",
  "resolution",
  "resolve",
  "resorts",
  "resources",
  "respect",
  "responding",
  "responses",
  "responsibility",
  "rest",
  "restaurants",
  "results",
  "retirement",
  "returns",
  "revenue",
  "reviews",
  "revolution",
  "rewards",
  "rice",
  "rides",
  "rights",
  "rings",
  "risks",
  "rivers",
  "roads",
  "rocks",
  "roles",
  "roofs",
  "rooms",
  "ropes",
  "routes",
  "routines",
  "royalty",
  "rugby",
  "rules",
  "running",
  "sadness",
  "safety",
  "sails",
  "salads",
  "salaries",
  "sales",
  "salt",
  "samples",
  "sand",
  "sandwiches",
  "satisfaction",
  "saving",
  "scales",
  "scenes",
  "schedules",
  "schemes",
  "school",
  "science",
  "scope",
  "scores",
  "scratches",
  "screens",
  "scripts",
  "seas",
  "searching",
  "searches",
  "seasons",
  "seats",
  "seconds",
  "secrets",
  "secretaries",
  "sections",
  "sectors",
  "security",
  "selection",
  "selling",
  "seniority",
  "senses",
  "sensitivity",
  "sentences",
  "sequences",
  "series",
  "service",
  "sessions",
  "settings",
  "settlement",
  "sex",
  "sexes",
  "shame",
  "shapes",
  "sharing",
  "sheets",
  "shelter",
  "shifting",
  "ships",
  "shirts",
  "shock",
  "shoes",
  "shops",
  "shopping",
  "shoulders",
  "showers",
  "shows",
  "sickness",
  "sides",
  "signs",
  "signals",
  "signatures",
  "significance",
  "silence",
  "silver",
  "simplicity",
  "singing",
  "singers",
  "singles",
  "sinks",
  "sisters",
  "sites",
  "situations",
  "sizes",
  "skies",
  "skills",
  "skin",
  "skirts",
  "sleep",
  "slices",
  "slides",
  "smells",
  "smiles",
  "smoke",
  "snow",
  "society",
  "socks",
  "software",
  "soil",
  "solutions",
  "sons",
  "songs",
  "sound",
  "soup",
  "sources",
  "south",
  "space",
  "speakers",
  "specialists",
  "species",
  "specifics",
  "speech",
  "speeches",
  "speed",
  "spending",
  "spirituality",
  "spite",
  "spokesmen",
  "sports",
  "spring",
  "squares",
  "stability",
  "staff",
  "stages",
  "stands",
  "standards",
  "stars",
  "states",
  "statements",
  "stations",
  "status",
  "steaks",
  "steel",
  "steps",
  "sticks",
  "stocks",
  "stones",
  "storage",
  "stores",
  "storms",
  "stories",
  "strangers",
  "strategies",
  "strategy",
  "streets",
  "strengths",
  "stress",
  "stresses",
  "stretching",
  "strikes",
  "string",
  "structures",
  "struggles",
  "students",
  "studies",
  "studios",
  "stuff",
  "stupidity",
  "style",
  "subjects",
  "substance",
  "success",
  "successes",
  "sugar",
  "suggestions",
  "suits",
  "summer",
  "supermarkets",
  "supplies",
  "support",
  "surfaces",
  "surgery",
  "surprises",
  "surroundings",
  "surveys",
  "suspects",
  "sweets",
  "swimming",
  "swings",
  "sympathy",
  "systems",
  "tables",
  "tales",
  "talking",
  "tanks",
  "tap",
  "tape",
  "targets",
  "tasks",
  "taste",
  "taxes",
  "tea",
  "teachers",
  "teaching",
  "teams",
  "tears",
  "technique",
  "technology",
  "telephones",
  "television",
  "temperature",
  "tennis",
  "tension",
  "terms",
  "tests",
  "texting",
  "theaters",
  "themes",
  "theories",
  "theory",
  "things",
  "thoughts",
  "threats",
  "throats",
  "tickets",
  "ties",
  "time",
  "tips",
  "titles",
  "today",
  "toes",
  "tomorrow",
  "tones",
  "tongues",
  "tonight",
  "tools",
  "topics",
  "totals",
  "touch",
  "tours",
  "tourists",
  "towels",
  "towers",
  "towns",
  "tracks",
  "trades",
  "tradition",
  "traffic",
  "trains",
  "trainers",
  "training",
  "transitions",
  "transportation",
  "trash",
  "traveling",
  "treats",
  "treaties",
  "treatment",
  "trees",
  "trials",
  "tricks",
  "trips",
  "trouble",
  "trucks",
  "trust",
  "truth",
  "truths",
  "tunes",
  "turns",
  "tvs",
  "twists",
  "types",
  "uncles",
  "understanding",
  "unemployment",
  "unions",
  "units",
  "universities",
  "us",
  "vacation",
  "valleys",
  "valuables",
  "value",
  "vans",
  "variation",
  "varieties",
  "variety",
  "vegetables",
  "vehicles",
  "versions",
  "victims",
  "victories",
  "video",
  "videos",
  "views",
  "villages",
  "violence",
  "viruses",
  "vision",
  "visuals",
  "voices",
  "volume",
  "voting",
  "waiting",
  "waking",
  "walking",
  "walls",
  "wars",
  "warnings",
  "washing",
  "waste",
  "watches",
  "water",
  "waves",
  "weakness",
  "wealth",
  "weather",
  "webs",
  "weddings",
  "weeks",
  "weekends",
  "weight",
  "welfare",
  "west",
  "wheels",
  "white",
  "wills",
  "wind",
  "windows",
  "wine",
  "wings",
  "winter",
  "wishes",
  "witnesses",
  "wives",
  "women",
  "wonder",
  "wood",
  "words",
  "work",
  "workers",
  "working",
  "worlds",
  "worry",
  "worth",
  "wraps",
  "writers",
  "writing",
  "yards",
  "years",
  "yellow",
  "yesterday",
  "you",
  "youths",
  "zones",
];
const length = words.length;
const randInt = () => Math.floor(Math.random() * length);
const output = document.getElementById("random-theme");
const alternative = document.getElementById("alternative");
const separator = document.getElementById("or");
function generateTheme() {
  const firstIndexInt = randInt();
  let secondIndexInt = randInt();
  while (secondIndexInt === firstIndexInt) {
    secondIndexInt = randInt();
  }
  output.innerText = `${words[firstIndexInt]} ${words[secondIndexInt]}`;
  alternative.innerText = `${words[secondIndexInt]} ${words[firstIndexInt]}`;
  separator.style.display = "block";
}
document.getElementById("generate").addEventListener("click", generateTheme);
