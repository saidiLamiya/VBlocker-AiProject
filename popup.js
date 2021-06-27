/* popup.js
 *
 * POPUP SCRIPT
 *
 * This is the JS loaded by the browser action popup; any time the user
 * changes stuff, it tells the content scripts of the tabs to update.
 */

console.log("POPUP SCRIPT ACTIVATED, READY TO HANDLE CLICKS!");

//How we keep chrome storage in synch!
var allVals = [];
function updateKeywords(){
  allVals = []
  $('input:checkbox').each(function(){
    var currentCheckbox = this;
     if(currentCheckbox.checked === true){
        allVals.push(keywords[currentCheckbox.id]);
        return allVals
     }
  });
}

/// KEYWORD LIBRARY
var keywords = {
    madMen: ["Mad Men", "Don Draper", "Peggy Olsen", "#madmen", "mad men", "#MadMen", "@MadMen_AMC"],
    breakingBad: ["Breaking Bad", "Walter White", "Jesse Pinkman", "breaking bad", "#breakingbad","#heisenberg", "#BreakingBad"],
    gameOfThrones: ["Game of Thrones", "game of thrones", "#gameofthrones", "#GoT", "Joffrey", "Baratheon", "Lanister", "Stark"],
    goodWife: ["The Good Wife", "the good wife", "Alicia Florrick", "Will Gardner", "Kalinda Sharma", "Diane Lockhart", "Peter Florrick", "Lockhart-Gardner", "#TheGoodWife", "#thegoodwife"],
    scandal: ["Scandal", "Oliva Pope", "olivia pope", "#scandal", "#Scandal", "@ScandalABC", "#SummerGladiators"],
    trueBlood: ["Sookie", "True Blood", "true blood", "Stackhouse", "Merlotte", "#TrueBlood", "#trueblood", "#truebloodhbo"],
    drWho: ["Dr. Who", "dr who", "doctor who", "dr. who", "Dr Who", "TARDIS", "Doctor", "Twelth Doctor", "#DrWho", "#doctorwho"],
    yankees: ["Yankees", "The Yankees", "New York", "NY", "yankees", "Yanks", "yanks", "the yanks", "#yankees"],
    redSox: ["Red Sox", "The Redsox", "redsox", "red sox", "sox", "Sox","Boston", "#redsox"],
    dancingWithTheStars: ["Dancing With the Stars", "dancing with the stars", "Erin Andrews", "Maksim Chermkovskiy", "DWTS", "Cheryl Burke", "@DancingABC", "#DWTS", " @CherylBurke"]
};

/// INPUT CONTROL
var selections = {};

$('input:checkbox').change(function(){
  var clicked = this;

  if(clicked.checked === true){
      selections[clicked.id] = keywords[clicked.id];
  } else {
      delete selections[clicked.id];
  }

  updateKeywords();

  allKeywords = []
  $.each(allVals, function(key, value) {
      allKeywords = allKeywords.concat(value);
      console.log(allKeywords)
  });

 /// COMMUNICATING WITH spoilerfilter.js, sending keywords to run in filter
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      method: 'runFilter',
      allKeywords: allKeywords
    });
  });
});
