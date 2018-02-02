/* Starting Variables */

let jigsawImage = document.getElementById('jigsaw-image');
let response = document.getElementById('response');
let clickForMore = document.getElementById('clickForMore');
let title = document.getElementById('title');
let director = document.getElementById('director');
let year = document.getElementById('year');
let trivia = document.getElementById('trivia');
let poster = document.getElementById('poster');
let randomIndex;


/* Starting jQuery */

$(document).ready(function() {
  $(response).hide();
  $(clickForMore).hide();
});


/* Generating the Random Quote */

$(jigsawImage).click(function() {
  let $this = $(this);
  $(response).fadeOut(function() {
    $this.next().fadeIn();
    $(clickForMore).fadeIn();
  let randomPick = randomQuote();
  response.textContent = randomPick;
  $(response).fadeIn('slow');
  });
});


/* Pulling movie descriptions */

$(clickForMore).click(function() {
  title.textContent = movies.titles[randomIndex];
  director.textContent = movies.directors[randomIndex];
  year.textContent = movies.year[randomIndex];
  poster.src = movies.posters[randomIndex];
});



/* Random Quote Generator  */
function randomQuote() {
  var quote = movies.quotes[Math.floor(Math.random() * movies.quotes.length)];
  randomIndex = movies.quotes.indexOf(quote);
  return quote;

}

/* Lists for all random content */

var movies = {
  quotes: [    "We live on a placid island of ignorance in the midst of black seas of infinity, and it was not meant that we should voyage far.",
               "I'm sorry, Dave. I'm afraid I can't do that.",
               "We're going to need a bigger boat.",
               "I have come here to kick ass and chew bubblegum...and I'm all out of bubblegum.",
               "Heeeeeeere's Johnny!",
               "They float. Down here they all float.",
               "Your suffering will be legendary, even in Hell.",
               "We all go a little mad sometimes.",
               "Sometimes dead is better.",
               "They're coming to get you, Barbara...",
               "We accept her, we accept her. One of us, one of us.",
               "Why are you wearing that stupid man suit?",
               "What's the most you ever lost on a coin toss?",
               "They're eating her! And then they're going to eat me! OH MY GOOOOOOOOD!",
               "It rubs the lotion on its skin, or else it gets the hose again!",
               "She begged for her life, and the life of the baby inside her...oh! He didn't know.",
               "Live or die, make your choice.",
               "They're going to laugh at you!",
               "Where we're going, we don't need eyes to see.",
               "I did it all for you, Damien!"],

  titles: [    "Call of Cthulhu",
               "2001: A Space Odyssey",
               "Jaws",
               "They Live",
               "The Shining",
               "IT",
               "Hellraiser",
               "Psycho",
               "Pet Sematary",
               "Night of the Living Dead",
               "Freaks",
               "Donnie Darko",
               "No Country For Old Men",
               "Troll 2",
               "The Silence of the Lambs",
               "SE7EN",
               "Saw",
               "Carrie",
               "Event Horizon",
               "The Omen"],

  directors: [ "H.P. Lovecraft",
               "Stanley Kubrick",
               "Steven Spielburg",
               "John Carpenter",
               "Stanley Kubrick",
               "Stephen King",
               "Clive Barker",
               "Alfred Hitchcock",
               "Stephen King",
               "George Romero",
               "Tod Browning",
               "Richard Kelly",
               "Ethan and Joel Coen",
               "Claudio Fragasso",
               "Jonathan Demme",
               "David Fincher",
               "James Wan",
               "Stephen King",
               "Paul Anderson",
               "Richard Donner"],

  year:      [ "1926",
               "1968",
               "1975",
               "1988",
               "1980",
               "1986",
               "1987",
               "1960",
               "1983",
               "1968",
               "1931",
               "2001",
               "2007",
               "1990",
               "1991",
               "1995",
               "2004",
               "1976",
               "1997",
               "1976"],

  posters:  [ "images/cthulhu.jpg",
              "images/2001.jpg",
              "images/jaws.jpg",
              "images/they-live.jpg",
              "images/shining.jpg",
              "images/it.jpg",
              "images/hellraiser.jpg",
              "images/psycho.jpg",
              "images/pet.jpg",
              "images/living-dead.jpg",
              "images/freaks.jpg",
              "images/donnie.jpg",
              "images/no-country.jpg",
              "images/troll.jpg",
              "images/silence.jpg",
              "images/se7en.jpg",
              "images/saw.jpg",
              "images/carrie.jpg",
              "images/horizon.jpg",
              "images/omen.jpg"],
}
