'use strict';
let newGame=document.querySelector('.btn--new');
let rollDice=document.querySelector('.btn--roll');
let hold=document.querySelector('.btn--hold');
let diceEl=document.querySelector('.dice');
let player1El=document.querySelector('.player--0');
let player2El=document.querySelector('.player--1');

let score1El=document.getElementById('score--0');
let score2El=document.getElementById('score--1');

let current1El=document.getElementById('current--0')
let current2El=document.getElementById('current--1')

score1El.textContent=0
score2El.textContent=0
diceEl.classList.add('hidden');

let scores=[0,0]
let currentScore=0
let activePlayer=0
let playing=true;

rollDice.addEventListener('click',function(){
    if(playing){
        const dice=Math.ceil(Math.random()*6);
        diceEl.classList.remove('hidden');
        diceEl.src=`dice-${dice}.png`
        if(dice!=1){
            currentScore+=dice;
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        }else{
            currentScore=0;
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
            activePlayer=activePlayer?0:1;
            player1El.classList.toggle('player--active')
            player2El.classList.toggle('player--active')
        }
    }
})

hold.addEventListener('click',function(){
    if(playing){
        scores[activePlayer]+=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    
        if(scores[activePlayer]>=20){
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            diceEl.classList.add('hidden');
            playing=false;
        }
        else{
            document.getElementById(`current--${activePlayer}`).textContent=0;
            currentScore=0
            activePlayer=activePlayer?0:1;
            player1El.classList.toggle('player--active');
            player2El.classList.toggle('player--active')
        }
    }
})

newGame.addEventListener('click',function(){
    scores=[0,0]
    currentScore=0
    activePlayer=0
    playing=true;

    score1El.textContent=0
    score2El.textContent=0
    diceEl.classList.add('hidden');

    current1El.textContent=0
    current2El.textContent=0

    player1El.classList.remove('player--winner');
    player2El.classList.remove('player--winner');

    player1El.classList.remove('player--active');
    player2El.classList.remove('player--active');
    player1El.classList.add('player--active');
})