let col1;
let col2;
let col3;
let col4;
let col5;
let col6;
let col7;
let col8;
let col9;
let playerSign;
let aiSign;
let win;
window.onload = function(){
    col1 = document.querySelector("#col1");
    col2 = document.querySelector("#col2");
    col3 = document.querySelector("#col3");
    col4 = document.querySelector("#col4");
    col5 = document.querySelector("#col5");
    col6 = document.querySelector("#col6");
    col7 = document.querySelector("#col7");
    col8 = document.querySelector("#col8");
    col9 = document.querySelector("#col9");
    let x = Math.floor(Math.random()*2);
    if(x < 1){
        playerSign = "O";
        aiSign = "X";
        aiMove();
    }
    else{
        playerSign = "X";
        aiSign = "O";
    }
}
function checkWin(){
    if((col1.innerHTML == playerSign&&col2.innerHTML == playerSign&&col3.innerHTML == playerSign )||
        (col4.innerHTML == playerSign&&col5.innerHTM == playerSign&&col6.innerHTML == playerSign )||
        (col7.innerHTML == playerSign&&col8.innerHTML == playerSign&&col9.innerHTML == playerSign )||
        (col1.innerHTML == playerSign&&col4.innerHTML == playerSign&&col7.innerHTML == playerSign )||
        (col2.innerHTML == playerSign&&col5.innerHTML == playerSign&&col8.innerHTML == playerSign )||
        (col3.innerHTML == playerSign&&col6.innerHTML == playerSign&&col9.innerHTML == playerSign )||
        (col1.innerHTML == playerSign&&col5.innerHTML == playerSign&&col9.innerHTML == playerSign )||
        (col3.innerHTML == playerSign&&col5.innerHTML == playerSign&&col7.innerHTML == playerSign ))
        {
            return playerSign;
        }
    else if((col1.innerHTML == aiSign&&col2.innerHTML == aiSign&&col3.innerHTML == aiSign )||
    (col4.innerHTML == aiSign&&col5.innerHTML == aiSign&&col6.innerHTML == aiSign )||
    (col7.innerHTML == aiSign&&col8.innerHTML == aiSign&&col9.innerHTML == aiSign )||
    (col1.innerHTML == aiSign&&col4.innerHTML == aiSign&&col7.innerHTML == aiSign )||
    (col2.innerHTML == aiSign&&col5.innerHTML == aiSign&&col8.innerHTML == aiSign )||
    (col3.innerHTML == aiSign&&col6.innerHTML == aiSign&&col9.innerHTML == aiSign )||
    (col1.innerHTML == aiSign&&col5.innerHTML == aiSign&&col9.innerHTML == aiSign )||
    (col5.innerHTML == aiSign&&col5.innerHTML == aiSign&&col7.innerHTML == aiSign ))
    {
        return aiSign;
    }
    else{
        return "";
    }
}
function checkArrWin(x){
    if((x[0] == playerSign&&x[1] == playerSign&&x[2] == playerSign )||
        (x[3] == playerSign&&x[4] == playerSign&&x[5] == playerSign )||
        (x[6] == playerSign&&x[7] == playerSign&&x[8] == playerSign )||
        (x[0] == playerSign&&x[3] == playerSign&&x[6] == playerSign )||
        (x[1] == playerSign&&x[4] == playerSign&&x[7] == playerSign )||
        (x[2] == playerSign&&x[5] == playerSign&&x[8] == playerSign )||
        (x[0] == playerSign&&x[4] == playerSign&&x[8] == playerSign )||
        (x[2] == playerSign&&x[4] == playerSign&&x[6] == playerSign ))
        {
            return playerSign;
        }
    else if((x[0] == aiSign&&x[1] == aiSign&&x[2] == aiSign )||
    (x[3] == aiSign&&x[4] == aiSign&&x[5] == aiSign )||
    (x[6] == aiSign&&x[7] == aiSign&&x[8] == aiSign )||
    (x[0] == aiSign&&x[3] == aiSign&&x[6] == aiSign )||
    (x[1] == aiSign&&x[4] == aiSign&&x[7] == aiSign )||
    (x[2] == aiSign&&x[5] == aiSign&&x[8] == aiSign )||
    (x[0] == aiSign&&x[4] == aiSign&&x[8] == aiSign )||
    (x[2] == aiSign&&x[4] == aiSign&&x[6] == aiSign ))
    {
        return aiSign;
    }
    else{
        return "";
    }
}
function updateBoard(x){
    col1.innerHTML = x[0];
    col2.innerHTML = x[1];
    col3.innerHTML = x[2];
    col4.innerHTML = x[3];
    col5.innerHTML = x[4];
    col6.innerHTML = x[5];
    col7.innerHTML = x[6];
    col8.innerHTML = x[7];
    col9.innerHTML = x[8];
}
function aiMove(){
    let found = false;
    let arr = [];
    arr [0] = col1.innerHTML;
    arr [1] = col2.innerHTML;
    arr [2] = col3.innerHTML;
    arr [3] = col4.innerHTML;
    arr [4] = col5.innerHTML;
    arr [5] = col6.innerHTML;
    arr [6] = col7.innerHTML;
    arr [7] = col8.innerHTML;
    arr [8] = col9.innerHTML;
    while(!found){
        for(var i = 0; i < arr.length; i++){
            if(arr[i] == ""){
                arr[i] = aiSign;
                let x = checkArrWin(arr);
                if(x == aiSign){
                    updateBoard(arr);
                    showWin(aiSign);
                    found = true;
                    break;
                }
                else{
                    arr[i] = "";
                }
            }
        }
        for(var i = 0; i < arr.length; i++){
            if(arr[i] == ""){
                arr[i] = playerSign;
                let x = checkArrWin(arr);
                if(x == playerSign){
                    arr[i] = aiSign;
                    updateBoard(arr);
                    found = true;
                    break;
                }
                else{
                    arr[i] = "";
                }
            }
        }
        for(var i = 0; i < arr.length; i++){
            if(arr[i] == ""){
                arr[i] = aiSign;
                updateBoard(arr);
                found = true;
                break;
            }
        }
    found = true;
    }
}
function showWin(x){
    alert(x);
}
function run1(){
    col1.innerHTML = playerSign;
    win = checkWin();
    if(win == playerSign){
        showWin(playerSign);
        win = "";
    }
    else{
        aiMove();
    }
}
function run2(){
    col2.innerHTML = playerSign;
    win = checkWin();
    if(win){
        showWin(playerSign);
        win = "";
    }
    else{
        aiMove();
    }
}
function run3(){
    col3.innerHTML = playerSign;
    win = checkWin();
    if(win){
        showWin(playerSign);
        win = "";
    }
    else{
        aiMove();
    }
}
function run4(){
    col4.innerHTML = playerSign;
    win = checkWin();
    if(win){
        showWin(playerSign);
        win = "";
    }
    else{
        aiMove();
    }
}
function run5(){
    col5.innerHTML = playerSign;
    win = checkWin();
    if(win){
        showWin(playerSign);
        win = "";
    }
    else{
        aiMove();
    }
}
function run6(){
    col6.innerHTML = playerSign;
    win = checkWin();
    if(win){
        showWin(playerSign);
        win = "";
    }
    else{
        aiMove();
    }
}
function run7(){
    col7.innerHTML = playerSign;
    win = checkWin();
    if(win){
        showWin(playerSign);
        win = "";
    }
    else{
        aiMove();
    }
}
function run8(){
    col8.innerHTML = playerSign;
    win = checkWin();
    if(win){
        showWin(playerSign);
        win = "";
    }
    else{
        aiMove();
    }
}
function run9(){
    col9.innerHTML = playerSign;
    win = checkWin();
    if(win){
        showWin(playerSign);
        win = "";
    }
    else{
        aiMove();
    }
}