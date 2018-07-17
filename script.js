function createPolitician(name, partyColor)
{

    var politician =
    {
        name: name,
        electionResults: null,
        totalVotes: 0,
        partyColor : partyColor,

        countTotalVotes: function()
        {

            for(var i = 0; i < this.electionResults.length; i++)

            {
                this.totalVotes += this.electionResults[i];
            }

        }
    };
    return politician;
};

var oscar = createPolitician("Oscar Jiminez", [132, 17, 11]);
var luke = createPolitician("Luke Spencer", [245, 141, 136]);

oscar.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

luke.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

oscar.electionResults[9] = 1;
luke.electionResults[9] = 28;

oscar.electionResults[4] = 17;
luke.electionResults[4] = 38;

oscar.electionResults[43] = 11;
luke.electionResults[43] = 27;

function setStateResults(state) {

  theStates[state].winner = null;

  if (oscar.electionResults[state] > luke.electionResults[state]) {

  theStates[state].winner = oscar;

  } else if (oscar.electionResults[state] < luke.electionResults[state]) {

        theStates[state].winner = luke;
  }
  var stateWinner = theStates[state].winner

  if (stateWinner != null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  }else{
    theStates[state].rgbColor = [11, 32, 57];
  }

  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

  candidate1Name.innerText = oscar.name;
  candidate2Name.innerText = luke.name;

  candidate1Results.innerText = oscar.electionResults[state];
  candidate2Results.innerText = luke.electionResults[state];

  if (theStates[state].winner === null){
      winnersName.innerText = "DRAW";
  }else{
      winnersName.innerText = theStates[state].winner.name;
}

}

console.log(oscar.electionResults);
console.log(luke.electionResults);

oscar.countTotalVotes();
luke.countTotalVotes();

console.log(oscar.name + ' has ' + oscar.totalVotes + ' votes');
console.log(luke.name + ' has ' + luke.totalVotes + ' votes');

var winner = "???";

if (oscar.totalVotes > luke.totalVotes){
  winner = oscar.name;
}else if(luke.totalVotes > oscar.totalVotes){
  winner = luke.name;
}else{
  winner = "DRAW";
}

console.log("AND THE WINNER IS..." + winner + "!!!");

console.log("Oscar's color is: " + oscar.partyColor);
console.log("Luke's color is: " + luke.partyColor);

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

  row.children[0].innerText = oscar.name;
  row.children[1].innerText = oscar.totalVotes;
  row.children[2].innerText = luke.name;
  row.children[3].innerText = luke.totalVotes;
  row.children[5].innerText = winner;
