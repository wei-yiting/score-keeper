const toScore = document.querySelector('#toScore');
let maxScore = 5;
toScore.addEventListener('change', function(e){
    maxScore = parseInt(this.value);
})

const addP1 = document.querySelector('#addP1');
const addP2 = document.querySelector('#addP2');
const reset = document.querySelector('#reset');
const p1score = document.querySelector('#p1score');
const p2score = document.querySelector('#p2score');

let score1 = 0;
let score2 = 0;

addP1.addEventListener('click', function(){
    score1++;
    p1score.innerText = score1;
    if(score1 === maxScore){
        addP1.disabled = true;
        addP2.disabled = true;
        p1score.classList.add('winner');
        p2score.classList.add('loser');
    }
})

addP2.addEventListener('click', function(){
    score2++;
    p2score.innerText = score2;
    if(score2 === maxScore){
        addP1.disabled = true;
        addP2.disabled = true;
        p1score.classList.add('loser');
        p2score.classList.add('winner');
    }
})

reset.addEventListener('click', function(){
    addP1.removeAttribute("disabled");
    addP2.removeAttribute("disabled");
    score1 = 0;
    score2 = 0;
    p1score.innerText = score1;
    p2score.innerText = score2;
    p1score.classList.remove('winner', 'loser');
    p2score.classList.remove('winner', 'loser');
})


