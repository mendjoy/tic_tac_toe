let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons button');
let msgContainer = document.querySelector('#msg');
let msgText = document.querySelector('#msg p');
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
        
        if(secondPlayer == 'bot'){

            //executar jogada com o bot 

            botPlay()
            player2++;

        }
        } else {
        player2++
        }

        checkVictory();
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

// 2 players o bot 

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        secondPlayer = this.getAttribute('id');

        for (let  x = 0; x < buttons.length; x++){
            buttons[x].style.display = 'none'
        }

        setTimeout(function(){
            let container = document.querySelector('#container');
            container.classList.remove('hide');

        }, 500)
    })
}

//checa quem venceu e perdeu 
 function checkVictory(){
    let bloco1 = document.getElementById('block-1');
    let bloco2 = document.getElementById('block-2')
    let bloco3 = document.getElementById('block-3')
    let bloco4 = document.getElementById('block-4')
    let bloco5 = document.getElementById('block-5')
    let bloco6 = document.getElementById('block-6')
    let bloco7 = document.getElementById('block-7')
    let bloco8 = document.getElementById('block-8')
    let bloco9 = document.getElementById('block-9')

//checagem horizontal 

if(bloco1.childNodes.length > 0 && bloco2.childNodes.length > 0 && bloco3.childNodes.length > 0 ){ //checa se a caixa selecionada ja esta preenchida

    let bloco1Child = bloco1.childNodes[0].className;
    let bloco2Child = bloco2.childNodes[0].className;
    let bloco3Child = bloco3.childNodes[0].className;


//Checa se a primeira linha horizontal esta preenchido para determinar vitoria
    if(bloco1Child == 'x' && bloco2Child == 'x' && bloco3Child == 'x'){
        winner('x')
    } else if (bloco1Child == 'o' && bloco2Child == 'o' && bloco3Child == 'o'){
        winner('o')
    }

    }
 

 if(bloco4.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco6.childNodes.length > 0 ){ //checa se a caixa selecionada ja esta preenchida

    let bloco4Child = bloco4.childNodes[0].className;
    let bloco5Child = bloco5.childNodes[0].className;
    let bloco6Child = bloco6.childNodes[0].className;


//Checa se o segundo linha horizontal esta preenchido para determinar vitoria
    if(bloco4Child == 'x' && bloco5Child == 'x' && bloco6Child == 'x'){
        winner('x')

    } else if (bloco4Child == 'o' && bloco5Child == 'o' && bloco6Child == 'o'){
        winner('o')
    }

}
 
if(bloco7.childNodes.length > 0 && bloco8.childNodes.length > 0 && bloco9.childNodes.length > 0 ){ //checa se a caixa selecionada ja esta preenchida

    let bloco7Child = bloco7.childNodes[0].className;
    let bloco8Child = bloco8.childNodes[0].className;
    let bloco9Child = bloco9.childNodes[0].className;


//Checa se a terceira linha horizontal esta preenchido para determinar vitoria
    if(bloco7Child == 'x' && bloco8Child == 'x' && bloco9Child == 'x'){
        winner('x')
    } else if (bloco7Child == 'o' && bloco8Child == 'o' && bloco9Child == 'o'){
        winner('o')
    }

}

//checagem vertical 

if(bloco1.childNodes.length > 0 && bloco4.childNodes.length > 0 && bloco7.childNodes.length > 0 ){ //checa se a caixa selecionada ja esta preenchida

    let bloco1Child = bloco1.childNodes[0].className;
    let bloco4Child = bloco4.childNodes[0].className;
    let bloco7Child = bloco7.childNodes[0].className;


//Checa se a primeira linha vertical esta preenchida para determinar vitoria
    if(bloco1Child == 'x' && bloco4Child == 'x' && bloco7Child == 'x'){
        winner('x')
    } else if (bloco1Child == 'o' && bloco4Child == 'o' && bloco7Child == 'o'){
        winner('o')

    }

}

if(bloco2.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco8.childNodes.length > 0 ){ //checa se a caixa selecionada ja esta preenchida

    let bloco2Child = bloco2.childNodes[0].className;
    let bloco5Child = bloco5.childNodes[0].className;
    let bloco8Child = bloco8.childNodes[0].className;


//Checa se a segunda linha vertical esta preenchida para determinar vitoria
    if(bloco2Child == 'x' && bloco5Child == 'x' && bloco8Child == 'x'){
        winner('x')

    } else if (bloco2Child == 'o' && bloco5Child == 'o' && bloco8Child == 'o'){
        winner('o')
    }

}


if(bloco3.childNodes.length > 0 && bloco6.childNodes.length > 0 && bloco9.childNodes.length > 0 ){ //checa se a caixa selecionada ja esta preenchida

    let bloco3Child = bloco3.childNodes[0].className;
    let bloco6Child = bloco6.childNodes[0].className;
    let bloco9Child = bloco9.childNodes[0].className;


//Checa se a terceira linha vertical esta preenchida para determinar vitoria
    if(bloco3Child == 'x' && bloco6Child == 'x' && bloco9Child == 'x'){
        winner('x')

    } else if (bloco3Child == 'o' && bloco6Child == 'o' && bloco9Child == 'o'){
        winner('o')
    }

}
 
//diagonais 


// checagem da diagonal da equerda para direita
if(bloco1.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco9.childNodes.length > 0 ){ //checa se a caixa selecionada ja esta preenchida

    let bloco1Child = bloco1.childNodes[0].className;
    let bloco5Child = bloco5.childNodes[0].className;
    let bloco9Child = bloco9.childNodes[0].className;


    if(bloco1Child == 'x' && bloco5Child == 'x' && bloco9Child == 'x'){
        winner('x')

    } else if (bloco1Child == 'o' && bloco5Child == 'o' && bloco9Child == 'o'){
        winner('o')

    }

}


//checagem da diagonal da direita para esquerda

if(bloco3.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco6.childNodes.length > 0 ){ //checa se a caixa selecionada ja esta preenchida

    let bloco3Child = bloco3.childNodes[0].className;
    let bloco5Child = bloco5.childNodes[0].className;
    let bloco6Child = bloco6.childNodes[0].className;


//Checa se o segundo linha horizontal esta preenchido para determinar vitoria
    if(bloco3Child == 'x' && bloco5Child == 'x' && bloco6Child == 'x'){
        winner('x')

    } else if (bloco3Child == 'o' && bloco5Child == 'o' && bloco6Child == 'o'){
        winner('o')
    }

}
 
// velha 

let cont = 0;

for(let i = 0; i <boxes.length; i++){
    if (boxes[i].childNodes[0] != undefined){
        cont++;
    }
}

if (cont == 9){
    winner('GAME OVER')

}
};

//limpar/ atualizar placar/ vencedor 

function winner(winner){
    let scoreX = document.querySelector('#score1');
    let scoreO = document.querySelector('#score2');
    //let msg = '';

    if(winner == 'x'){
        scoreX.textContent = parseInt(scoreX.textContent) + 1; 
        msgText.innerHTML = 'Player 1 wins!'; 
    } else if (winner = 'o'){
        scoreO.textContent = parseInt(scoreO.textContent) + 1;
        msgText.innerHTML = 'Player 2 wins!';
    } else {
        msgText.innerHTML =  'GAME OVER';
    }

//colocando a mensagem na tela 


msgContainer.classList.remove('hide'); 

//esconder msg 

setTimeout(function(){
    msgContainer.classList.add('hide')
}, 2000)

//zerar jogadas

player1 = 0;
player2 = 0;

//remover marcaçoes
let boxesRemove = document.querySelectorAll('.box div');

for (let i = 0; i < boxesRemove.length; i++){
    boxesRemove[i].parentNode.removeChild(boxesRemove[i])
}


}