function createPolitician(name, partyColor) {
    
    var politician =
        {
            name: name;
            electionResults: null;
            totalVotes: 0;
            partyColor: partyColor;
            
            countTotalVotes: function()
            {
            for (var i = 0; i < this.electionResults; i++) {
                this.totalVotes += this.electionResults[i];
                }
            }
        };
    return politician;
};

var luke = createPolitician("Luke Spencer"), [132, 17, 11]);
var oscar = createPolitician("Oscar Jiminez"), [245, 141, 136]);

luke.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

oscar.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

luke.electionResults[9] = 1;
oscar.electionResults[9] = 28;

luke.electionResults[4] = 17;
oscar.electionResults[4] = 38;

luke.electionResults[43] = 11;
oscar.electionResults[43] = 27;

function setStateResults(state) {
    theStates[state].winner = null;
    
    if (oscar.electionResults[state] > luke.electionResults[state])
}