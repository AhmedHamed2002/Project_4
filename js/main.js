let title = document.querySelector(".title") ; 
let  turn  =  'x' ; 
let  squares = [] ; 
function end(num1 , num2 , num3 ) 
{
    title.innerHTML = `${squares[num1]} winner`;
    if(squares[num1] == 'X') title.style.color = 'rgb(145, 80, 16)' ; 
    else   title.style.color = 'rgb(4, 71, 98)' ; 
    document.getElementById('box'+num1).style.background = 'rgba(243, 18, 243, 0.96)' ; 
    document.getElementById('box'+num2).style.background = 'rgba(243, 18, 243, 0.96)' ; 
    document.getElementById('box'+num3).style.background = 'rgba(243, 18, 243, 0.96)' ; 
    setInterval(function(){title.innerHTML += '.'} , 300); 
    setTimeout(function(){location.reload()} ,1500) ; 
}
function  winner() 
{
    for(let i =1  ; i< 10 ; i++)  squares[i]  = document.getElementById('box' + i ).innerHTML ;    
    if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1]!='') end(1,2,3);  
    else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[4]!='') end(4,5,6); 
    else if(squares[7]==squares[8] && squares[8]==squares[9] && squares[7]!='') end(7,8,9);  
    else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[1]!='') end(1,4,7); 
    else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[2]!='') end(2,5,8);
    else if(squares[3]==squares[6] && squares[6]==squares[9] && squares[3]!='') end(3,6,9);
    else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[1]!='') end(1,5,9); 
    else if(squares[3]==squares[5] && squares[5]==squares[7] && squares[3]!='') end(3,5,7);
}
function game(id)
{
    let element = document.getElementById(id) 
    if(turn === 'x' && element.innerHTML == '')
    {
        element.innerHTML = 'X' ;
        turn ='o' ; 
        title.innerHTML = 'O' ;
        winner();  
    } 
    else if (turn === 'o' &&  element.innerHTML == '')
    {
        element.innerHTML = 'O' ;   
        turn = 'x' ;  
        title.innerHTML = 'X'  ; 
        winner();  
} 
}   