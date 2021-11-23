/*game {object}*/
let game = {
    currentGame: [],
    score: 0,
    choices:["button1","button2","button3","button4"],
    playerMoves:[],
};

/*new game*/

function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;
    showScore();
    addTurn()
}
/*add turn*/

function addTurn(){
game.playerMoves = [];
game.currentGame.push(game.choices[Math.floor((Math.random() * 4))]);
//showTurn();
}

/**lights on */

function lightsOn(circ) {
    document.getElementById(circ).classList.add(circ + "light");
    setTimeout(function () {
        document.getElementById(circ).classList.remove(circ + "light");
    }, 400);

}

/**show score */

function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = { game, newGame, showScore, addTurn,lightsOn };

/*add turn*/


/**show turn */

/**lights on */

/**player turn */

