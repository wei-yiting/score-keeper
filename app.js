const toScore = document.querySelector('#toScore');
let maxScore = 5;
toScore.addEventListener('change', function(e){
    maxScore = parseInt(this.value);
    reset();
})

const player1 = {
    score: 0,
    addBtn: document.querySelector('#addP1'),
    display: document.querySelector('#p1score')
};

const player2 = {
    score: 0,
    addBtn: document.querySelector('#addP2'),
    display: document.querySelector('#p2score')
};

const resetBtn = document.querySelector('#reset');

function addScore(player, opponent){
    player.score += 1;
    player.display.innerText = player.score;
    if(player.score === maxScore){
        player.addBtn.disabled = true;
        opponent.addBtn.disabled = true;
        player.display.classList.add('winner');
        opponent.display.classList.add('loser');
    }
}

player1.addBtn.addEventListener('click', function(){
    addScore(player1, player2);
});

player2.addBtn.addEventListener('click', function(){
    addScore(player2, player1);
});

resetBtn.addEventListener('click', reset);

function reset(){
    for(let player of [player1,player2]){
        player.addBtn.disabled = false;
        player.score = 0;
        player.display.innerText = player.score;
        player.display.classList.remove('winner', 'loser');
    }
};

