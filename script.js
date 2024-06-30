let p1=0;
let p2=0;

function checkP1(p1)
{
    switch(p1)
    {
        case 1:
            document.getElementById("p1").src = "img/dice1.png";
            break;
        case 2:
            document.getElementById("p1").src = "img/dice2.png";
            break;        
        case 3:
            document.getElementById("p1").src = "img/dice3.png";
            break;
        case 4:
            document.getElementById("p1").src = "img/dice4.png";
            break;
        case 5:
            document.getElementById("p1").src = "img/dice5.png";
            break;
        case 6:
            document.getElementById("p1").src = "img/dice6.png";
            break;        

    }
}

function checkP2(p2)
{
    switch(p2)
    {
        case 1:
            document.getElementById("p2").src = "img/dice1.png";
            break;
        case 2:
            document.getElementById("p2").src = "img/dice2.png";
            break;        
        case 3:
            document.getElementById("p2").src = "img/dice3.png";
            break;
        case 4:
            document.getElementById("p2").src = "img/dice4.png";
            break;
        case 5:
            document.getElementById("p2").src = "img/dice5.png";
            break;
        case 6:
            document.getElementById("p2").src = "img/dice6.png";
            break;        

    }
}

function validateScore(p1,p2)
{
    if(p1 > p2)
        {
            document.getElementById("out").innerHTML="Player 1 Wins";
        }
    else if(p1 < p2){
        document.getElementById("out").innerHTML = "Player 2 Wins";
    }
    else
    {
        document.getElementById("out").innerHTML = "Draw"
    }
}

function rollDice()
{
    p1 = Math.random() * 6;
    p1 = Math.floor(p1) + 1;
    p2 = Math.random() * 6;
    p2 = Math.floor(p2) + 1;
    checkP1(p1);
    checkP2(p2);
    validateScore(p1,p2);
}