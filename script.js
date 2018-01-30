/* Starting Variables */
let saw = document.getElementById('saw');
let response = document.getElementById('response')
let clickForMore = document.getElementById('clickForMore')

/* List of quotes */
let quotes = ["We live on a placid island of ignorance in the midst of black seas of infinity, and it was not meant that we should voyage far.",
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
             "You exist because we allow it, and you will end because we demand it.",
             "Where we're going, we don't need eyes to see."];

$(document).ready(function() {
  console.log("document loaded!");
  $(response).hide();
  $(clickForMore).hide();
});

$(saw).click(function() {
  let $this = $(this);
  $(response).fadeOut(function() {
    $this.next().fadeIn();
    $(clickForMore).fadeIn();
  let randomPick = randomQuote();
  response.textContent = randomPick;
  $(response).fadeIn('slow');
  });
});

/* Random Quote Generator  */
function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

/*
pickme.addEventListener('click', function getRandom() {
  quote = randomQuote();
  demo.textContent = quote;
});
*/
