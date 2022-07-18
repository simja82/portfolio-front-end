var quote = document.getElementById('quote');
var randomQuotes = ['It does not mater how slowly you go as long as you do not stop.', 
                    'Life is really simple, but we insist on making it complicated.', 
                    'Only the wisest and stupidest of men never change.', 
                    'Wherever you go, go with all your heart.', 
                    'Choose a job you love, and you will never have to work a day in your life.', 
                    'The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.', 
                    'Our greatest glory is not in never falling, but in rising every time we fall.', 
                    'Everything has beauty, but not everyone sees it.', 
                    'Silence is a true friend who never betrays.', 
                    'By three methods we may learn wisdom: first, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.'];

function changeQuotes() {
  var i = Math.floor((Math.random() * randomQuotes.length));
           quote.innerText = randomQuotes[i];
}

changeQuotes();