let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons button');
let msgContainer = document.querySelector('#msg');
let msg = document.querySelector('#msg p');
let secondPlayer;

let player1 = 0;
let player2 = 0;

for (let i = 0; i < boxes.length; i++){

    boxes[i].addEventListener('click', function(){

        let element = checkElement(player1, player2);

    if (this.childNodes.length == 0){

        let cloneElement = element.cloneNode(true);
        this.appendChild(cloneElement);

        //contando as jogadas
        if (player1 == player2){
        player1++
        } else {
        player2++
        }
    }
    })
}

//identificar jogador 
function checkElement(player1, player2){
    if (player1 == player2){ //inicio 
        element = x;
    } else {
        element = o; 
    }

    return element
}