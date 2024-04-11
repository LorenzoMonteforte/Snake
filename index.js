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