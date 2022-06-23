const fillers = {
    // adventurer: ["My dude", "Bro", "Adventurer", "Traveller", "Fellow", "Citizen", "Ashen One", "Dragonborn", "Cool person", "Tarnished", "$adventurer and $adventurer", "$adventurer, $adventurer, and $adventurer", "Geoff"],
    // pre: ["Fra", "Tro", "Gre", "Pan", "Ast", "Ara"],
    // post: ["gria", "ston", "gott","-on-the-lee", "ora", "Ara", "uwu"],
    // people: ["kindly", "meek", "brave", "wise", "sacred", "cherished", "honored", "forgotten", "apathetic", "mystic", "orca"],
    // item: ["axe", "staff", "book", "cloak", "shield", "club", "sword", "magic gloves", "galvel", "fists", "mace", "potato"],
    // num: ["two", "three", "eleven", "so many", "too many", "an unsatisfying number of", "barely any", "an unspecified amount of", "surely a satisfactory number of"],
    // looty: ["gleaming", "valuable", "esteemed", "rare", "exalted", "scintillating", "kinda gross but still usefull", "complete garbage"],
    // loots: ["coins", "chalices", "ingots", "hides", "victory points", "gems","scrolls", "bananas", "noodles", "goblins", "CS Majors", "college credits"],
    // baddies: ["orcs", "glubs", "fishmen", "cordungles", "mountain trolls", "college professors", "dragon", "evil $adventurer", "agents of chaos"],
    // message: ["call", "txt", "post", "decree", "shoutz", "tweets", "choiche", "hearkens", "harkening", "harkenening", "harkenenening", "...wait, no! Come back", "Watermelon"],
    name: ["Tom", "Jerry", "Julianna", "John", "Mary", "May", "Crystal", "Amber", "Eva", "Isbella", "Mia", "Ella", "Sofia", "Scarlett", "Emily", "William", "Owen", "Ethan"],
    country: ["United States", "Mexico", "Canada", "Brazil", "China", "Vietnam", "Chile", "India", "Iran", "Thailand", "Turkey", "United Kingdom", "South Korea", "Russia"],
    fruit: ["apples", "oranges", "grapes", "peaches", "pears", "strawberries", "bananas", "blueberries", "grapefruits", "plums", "lemons", "longans", "watermelons"],
    amount: ["two", "three", "a lot", "so many", "eleven", "twelve", "immeasurable", "inestimable", "too many"],
    scale: ["thousand", "billion", "million", "hundred", "trillion", "quadrillion", "quintillion"],
    unit: ["grams", "kilograms", "pounds", "ounces", "tons"],
    percent: ["10", "20", "30", "40", "50", "60", "70", "80", "90"],





    
  };
  
  const template = `$name, I come from $country!
  
  $country is one of the countries that produces the most $fruit. Do you like $fruit? If you do, come with me!

  Every year, there are approximately $amount $scale $unit of $fruit exported to other countries. $percent % of the production will be delivered to $country. The rest of them will export to $country and $country.

  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();