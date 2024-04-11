const snake = [
    {
        left : 100,
        top : 100,
        div : null
    }
];
const playArea = document.getElementById("playArea");
function createSnake(){
    for(let i=0; i<snake.length; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.left = snake[i].left + "px";
        square.style.top = snake[i].top + "px";
        snake[i].div = square;
        playArea.appendChild(square);
    }
}
createSnake();
const body = document.getElementById("body");
let arrowUpInterval;
function arrowUp(){
    canArrowUp = false;
    canArrowRight = true;
    canArrowDown = true;
    canArrowLeft = true;
    clearInterval(arrowRightInterval);
    clearInterval(arrowDownInterval);
    clearInterval(arrowLeftInterval);
    arrowUpInterval = setInterval(function(){
        for(let i=0; i<snake.length; i++){
            snake[i].top = snake[i].top - 10;
            if(snake[i].top < 0){
                canPlay = false;
                clearInterval(arrowUpInterval);
                console.log("Hai perso");
            }else{
                snake[i].div.style.top = snake[i].top + "px";
            }
        }
    }, 1000);
}
let arrowRightInterval;
function arrowRight(){
    canArrowRight = false;
    canArrowUp = true;
    canArrowDown = true;
    canArrowLeft = true;
    clearInterval(arrowUpInterval);
    clearInterval(arrowDownInterval);
    clearInterval(arrowLeftInterval);
    arrowRightInterval = setInterval(function(){
        for(let i=0; i<snake.length; i++){
            snake[i].left = snake[i].left + 10;
            if(snake[i].left > 490){
                canPlay = false;
                clearInterval(arrowRightInterval);
                console.log("Hai perso");
            }else{
                snake[i].div.style.left = snake[i].left + "px";
            }
        }
    }, 1000);
}
let arrowDownInterval;
function arrowDown(){
    canArrowDown = false;
    canArrowUp = true;
    canArrowRight = true;
    canArrowLeft = true;
    clearInterval(arrowUpInterval);
    clearInterval(arrowRightInterval);
    clearInterval(arrowLeftInterval);
    arrowDownInterval = setInterval(function(){
        for(let i=0; i<snake.length; i++){
            snake[i].top = snake[i].top + 10;
            if(snake[i].top > 240){
                canPlay = false;
                clearInterval(arrowDownInterval);
                console.log("Hai perso");
            }else{
                snake[i].div.style.top = snake[i].top + "px";
            }
        }
    }, 1000);
}
let arrowLeftInterval;
function arrowLeft(){
    canArrowLeft = false;
    canArrowUp = true;
    canArrowRight = true;
    canArrowDown = true;
    clearInterval(arrowUpInterval);
    clearInterval(arrowRightInterval);
    clearInterval(arrowDownInterval);
    arrowLeftInterval = setInterval(function(){
        for(let i=0; i<snake.length; i++){
            snake[i].left = snake[i].left - 10;
            if(snake[i].left < 0){
                canPlay = false;
                clearInterval(arrowLeftInterval);
                console.log("Hai perso");
            }else{
                snake[i].div.style.left = snake[i].left + "px";
            }
        }
    }, 1000);
}
let canPlay = true;
let canArrowUp = true;
let canArrowRight = true;
let canArrowDown = true;
let canArrowLeft = true;
body.addEventListener("keydown", function(event){
    if(canPlay == true){
        if(event.key == "ArrowUp"){
            if(canArrowUp == true){
                arrowUp();
            }
        }else if(event.key == "ArrowRight"){
            if(canArrowRight == true){
                arrowRight();
            }
        }else if(event.key == "ArrowDown"){
            if(canArrowDown == true){
                arrowDown();
            }
        }else if(event.key == "ArrowLeft"){
            if(canArrowLeft == true){
                arrowLeft();
            }
        }
    }
});