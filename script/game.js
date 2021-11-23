/*game {object}*/
let game = {
    currentGame: [],
    score: 0,
    choices: ["button1", "button2", "button3", "button4"],
    playerMoves: [],
    turnNumber: 0,
};

/*new game*/

function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                let move = e.target.getAttribute("id");
                lightsOn(move);
                game.playerMoves.push(move);
                playerTurn();
            });
            circle.setAttribute("data-listener", "true");
        }
    }
    showScore();
    addTurn();
}
/*add turn*/

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[Math.floor((Math.random() * 4))]);
    showTurns();
}

/**show turn */

function showTurns() {
    game.turnNumber = 0;
    let turns = setInterval(function() {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
}

/**lights on */

function lightsOn(circ) {
    document.getElementById(circ).classList.add(circ + "light");
    setTimeout(function() {
        document.getElementById(circ).classList.remove(circ + "light");
    }, 400);

}

/**show score */

function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = {
    game,
    newGame,
    showScore,
    addTurn,
    lightsOn,
    showTurns
};