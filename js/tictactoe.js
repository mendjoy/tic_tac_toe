let x = document.querySelector('.x')
let o = document.querySelector('.0');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons button');
let msgContainer = document.querySelector('#msg')
let msgText = document.querySelector('#msg p');
let secondPlay;
let player1 = 0;
let player2 = 0;


for (let i = 0; i < boxes.length; i++){
    
    boxes[i].addEventListener('click', function(){ 

        let element = checkElement(player1, player2);

        if (this.childNodes.length == 0){

            let cloneElement = element.cloneNode(true);
            this.appendChild(cloneElement);

        if (player1 == player2){
            player1+=1;
        } else {
            player2+=1 
        }

    }
        
    });
}

//definir a vez do jogador 
function checkElement(player1, player2){
    if (player1 == player2){
        element = x;
    } else {
        element = 0; 
    }

    return element; 
}
