var adjective = prompt('Please type an adjective');
var verb = prompt('Please type a verb');
var noun = prompt('Please type a noun');
var sentence;
var paragraph;
alert('All done. Ready for the message?');
sentence = "<h2>There once was a " + adjective;
sentence += " warrior who wanted to use his sword to " + verb;
sentence += " the " + noun + ".</h2>";
paragraph = "<p> The " + adjective + " warrior tried his very best to ";
paragraph += verb + " the " + noun + " but he just didn't have the power. <br />";
paragraph += "So the " + adjective +" warrior decided to go to " + noun;
paragraph += " school to get better at " + verb + "ing.<br />After many years of ";
paragraph += noun + " school the " + adjective + " warrior was able to ";
paragraph += verb + " the " + noun + " and lived happily ever after."
paragraph += "</p>";
document.write(sentence);
document.write(paragraph);