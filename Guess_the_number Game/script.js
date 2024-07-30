'use strict';
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent='🎉Correct Number'

// document.querySelector('.number').textContent=2
// document.querySelector('.score').textContent=10

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value=20
// console.log(document.querySelector('.guess').value);
// console.log(document.querySelector('.label-highscore').textContent)

// document.querySelector('.highscore').textContent=100
let randomNumber=Math.ceil(Math.random()*20)
let score=20
let highScore=0;
document.querySelector('.check').addEventListener('click',function(){
    const z=Number(document.querySelector('.guess').value)
    if(!z){
        document.querySelector('.message').textContent='Enter a value..'
    }
    else if(score<1){
        document.querySelector('.message').textContent='Game Over..'
    }
    else if(z>randomNumber){
        document.querySelector('.message').textContent='Its Greater..'
        score-=1
        document.querySelector('.score').textContent=score
    }
    else if(z<randomNumber){
        document.querySelector('.message').textContent='Its Lesser..'
        score-=1
        document.querySelector('.score').textContent=score
    }
    else{
        if(score>highScore){
            highScore=score;
        }
        document.querySelector('.message').textContent='🎉👏 Correct Answer..'
        document.querySelector('.number').textContent=randomNumber
        document.querySelector('.number').style.width='30rem';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.highscore').textContent=highScore
    }
})
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor='#222'
    randomNumber=Math.ceil(Math.random()*20)
    document.querySelector('.number').textContent='?'
    score=20
    document.querySelector('.score').textContent=score
    document.querySelector('.guess').value=''
    document.querySelector('.number').style.width='15rem';
})