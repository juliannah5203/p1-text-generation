const fillers = {
    name: ["Tom", "Jerry", "Julianna", "John", "Mary", "May", "Crystal", "Amber", "Eva", "Isbella", "Mia", "Ella", "Sofia", "Scarlett", "Emily", "William", "Owen", "Ethan"],
    country: ["United States", "Mexico", "Canada", "Brazil", "China", "Vietnam", "Chile", "India", "Iran", "Thailand", "Turkey", "United Kingdom", "South Korea", "Russia"],
    fruit: ["apples", "oranges", "grapes", "peaches", "pears", "strawberries", "bananas", "blueberries", "grapefruits", "plums", "lemons", "longans", "watermelons", "$fruit and $fruit"],
    scale: ["thousand", "billion", "million", "hundred", "trillion", "quadrillion", "quintillion"],
    amount: ["two", "three", "a lot", "so many", "eleven", "twelve", "immeasurable", "inestimable", "too many", "$amount $scale"],
    unit: ["grams", "kilograms", "pounds", "ounces", "tons"],
    percent: ["10", "20", "30", "40", "50", "60", "70", "80", "90"],
    greeting: ["Hi", "Hello", "Nice to meet you"],
  };
  
  const template = `$greeting! $name, I come from $country! $country is one of the countries that produces the most $fruit. Do you like $fruit? If you do, come with me! We can talk about how to plant $fruit in your hometown, $country, or if you are interesting in trading.

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