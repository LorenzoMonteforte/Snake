const snake = [
    {
        left : 100,
        top : 100,
        div : null,
        oldLeft : null,
        oldTop : null
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
let leftFood;
let topFood;
let numberFood = 0;
function createFood(){
    if(numberFood > 0){
        const oldFood = document.getElementById("food");
        oldFood.parentNode.removeChild(oldFood);
    }
    let foodPermitted = false;
    while(foodPermitted == false){
        leftFood = Math.trunc(Math.random() * 500);
        while(leftFood % 10 != 0){
            leftFood = Math.trunc(Math.random() * 500);
        }
        topFood =Math.trunc(Math.random() * 250);
        while(topFood % 10 != 0){
            topFood = Math.trunc(Math.random() * 250);
        }
        for(let i=0; i<snake.length; i++){
            if((leftFood == snake[i].left) && (topFood == snake[i].top)){
                foodPermitted = false;
                break;
            }else{
                foodPermitted = true;
            }
        }
    }
    const food = document.createElement("div");
    food.id = "food";
    food.style.left = leftFood + "px";
    food.style.top = topFood + "px";
    playArea.appendChild(food);
    numberFood++;
}
createFood();
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
        let isEating;
        for(let i=0; i<snake.length; i++){
            snake[i].oldLeft = snake[i].left;
            snake[i].oldTop = snake[i].top;
            if(i == 0){
                const newTop = snake[i].top - 10;
                if(newTop >= 0){
                    snake[i].top = newTop;
                    snake[i].div.style.top = snake[i].top + "px";
                    if((snake[i].left == leftFood) && (snake[i].top == topFood)){
                        const newSquare = document.createElement("div");
                        newSquare.classList.add("square");
                        playArea.appendChild(newSquare);
                        snake.push(
                            {
                                left : snake[(snake.length - 1)].left,
                                top : snake[(snake.length - 1)].top,
                                div : newSquare,
                                oldLeft : null,
                                oldTop : null
                            }
                        );
                        isEating = true;
                        createFood();
                    }else{
                        isEating = false;
                    }
                }else{
                    canPlay = false;
                    if(numberFood == 2){
                        console.log("Hai perso dopo " + (numberFood - 1) + " mangiata.");
                    }else{
                        console.log("Hai perso dopo " + (numberFood - 1) + " mangiate.");
                    }
                    clearInterval(arrowUpInterval);
                    break;
                }
            }else{
                snake[i].left = snake[(i-1)].oldLeft;
                snake[i].top = snake[(i-1)].oldTop;
                snake[i].div.style.left = snake[i].left + "px";
                snake[i].div.style.top = snake[i].top + "px";
            }
            if(i == (snake.length - 1)){
                let rompi;
                for(let index=0; index<snake.length; index++){
                    if(index != 0){
                        if((index == 1) && (isEating == false)){
                            if((snake[0].left == snake[index].oldLeft) && (snake[0].top == snake[index].oldTop)){
                                canPlay = false;
                                if(numberFood == 2){
                                    console.log("Hai perso dopo " + (numberFood - 1) + " mangiata.");
                                }else{
                                    console.log("Hai perso dopo " + (numberFood - 1) + " mangiate.");
                                }
                                clearInterval(arrowUpInterval);
                                rompi = true;
                                break;    
                            }else{
                                rompi = false;
                            }
                        }else{
                            if((snake[0].left == snake[index].left) && (snake[0].top == snake[index].top)){
                                canPlay = false;
                                if(numberFood == 2){
                                    console.log("Hai perso dopo " + (numberFood - 1) + " mangiata.");
                                }else{
                                    console.log("Hai perso dopo " + (numberFood - 1) + " mangiate.");
                                }
                                clearInterval(arrowUpInterval);
                                rompi = true;
                                break;    
                            }else{
                                rompi = false;
                            }
                        }
                    }
                }
                if(rompi == true){
                    break;
                }
            }
        }
    }, 500);
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
        let isEating;
        for(let i=0; i<snake.length; i++){
            snake[i].oldLeft = snake[i].left;
            snake[i].oldTop = snake[i].top;
            if(i == 0){
                const newLeft = snake[i].left + 10;
                if(newLeft <= 490){
                    snake[i].left = newLeft;
                    snake[i].div.style.left = snake[i].left + "px";
                    if((snake[i].left == leftFood) && (snake[i].top == topFood)){
                        const newSquare = document.createElement("div");
                        newSquare.classList.add("square");
                        playArea.appendChild(newSquare);
                        snake.push(
                            {
                                left : snake[(snake.length - 1)].left,
                                top : snake[(snake.length - 1)].top,
                                div : newSquare,
                                oldLeft : null,
                                oldTop : null
                            }
                        );
                        isEating = true;
                        createFood();
                    }else{
                        isEating = false;
                    }
                }else{
                    canPlay = false;
                    if(numberFood == 2){
                        console.log("Hai perso dopo " + (numberFood - 1) + " mangiata.");
                    }else{
                        console.log("Hai perso dopo " + (numberFood - 1) + " mangiate.");
                    }
                    clearInterval(arrowRightInterval);
                    break;
                }
            }else{
                snake[i].left = snake[(i-1)].oldLeft;
                snake[i].top = snake[(i-1)].oldTop;
                snake[i].div.style.left = snake[i].left + "px";
                snake[i].div.style.top = snake[i].top + "px";
            }
            if(i == (snake.length - 1)){
                let rompi;
                for(let index=0; index<snake.length; index++){
                    if(index != 0){
                        if((index == 1) && (isEating == false)){
                            if((snake[0].left == snake[index].oldLeft) && (snake[0].top == snake[index].oldTop)){
                                canPlay = false;
                                if(numberFood == 2){
                                    console.log("Hai perso dopo " + (numberFood - 1) + " mangiata.");
                                }else{
                                    console.log("Hai perso dopo " + (numberFood - 1) + " mangiate.");
                                }
                                clearInterval(arrowRightInterval);
                                rompi = true;
                                break;    
                            }else{
                                rompi = false;
                            }
                        }else{
                            if((snake[0].left == snake[index].left) && (snake[0].top == snake[index].top)){
                                canPlay = false;
                                if(numberFood == 2){
                                    console.log("Hai perso dopo " + (numberFood - 1) + " mangiata.");
                                }else{
                                    console.log("Hai perso dopo " + (numberFood - 1) + " mangiate.");
                                }
                                clearInterval(arrowRightInterval);
                                rompi = true;
                                break;    
                            }else{
                                rompi = false;
                            }
                        }
                    }
                }
                if(rompi == true){
                    break;
                }
            }
        }
    }, 500);
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
        let isEating;
        for(let i=0; i<snake.length; i++){
            snake[i].oldLeft = snake[i].left;
            snake[i].oldTop = snake[i].top;
            if(i == 0){
                const newTop = snake[i].top + 10;
                if(newTop <= 240){
                    snake[i].top = newTop;
                    snake[i].div.style.top = snake[i].top + "px";
                    if((snake[i].left == leftFood) && (snake[i].top == topFood)){
                        const newSquare = document.createElement("div");
                        newSquare.classList.add("square");
                        playArea.appendChild(newSquare);
                        snake.push(
                            {
                                left : snake[(snake.length - 1)].left,
                                top : snake[(snake.length - 1)].top,
                                div : newSquare,
                                oldLeft : null,
                                oldTop : null
                            }
                        );
                        isEating = true;
                        createFood();
                    }else{
                        isEating = false;
                    }
                }else{
                    canPlay = false;
                    if(numberFood == 2){
                        console.log("Hai perso dopo " + (numberFood - 1) + " mangiata.");
                    }else{
                        console.log("Hai perso dopo " + (numberFood - 1) + " mangiate.");
                    }
                    clearInterval(arrowDownInterval);
                    break;
                }
            }else{
                snake[i].left = snake[(i-1)].oldLeft;
                snake[i].top = snake[(i-1)].oldTop;
                snake[i].div.style.left = snake[i].left + "px";
                snake[i].div.style.top = snake[i].top + "px";
            }
            if(i == (snake.length - 1)){
                let rompi;
                for(let index=0; index<snake.length; index++){
                    if(index != 0){
                        if((index == 1) && (isEating == false)){
                            if((snake[0].left == snake[index].oldLeft) && (snake[0].top == snake[index].oldTop)){
                                canPlay = false;
                                if(numberFood == 2){
                                    console.log("Hai perso dopo " + (numberFood - 1) + " mangiata.");
                                }else{
                                    console.log("Hai perso dopo " + (numberFood - 1) + " mangiate.");
                                }
                                clearInterval(arrowDownInterval);
                                rompi = true;
                                break;    
                            }else{
                                rompi = false;
                            }
                        }else{
                            if((snake[0].left == snake[index].left) && (snake[0].top == snake[index].top)){
                                canPlay = false;
                                if(numberFood == 2){
                                    console.log("Hai perso dopo " + (numberFood - 1) + " mangiata.");
                                }else{
                                    console.log("Hai perso dopo " + (numberFood - 1) + " mangiate.");
                                }
                                clearInterval(arrowDownInterval);
                                rompi = true;
                                break;    
                            }else{
                                rompi = false;
                            }
                        }
                    }
                }
                if(rompi == true){
                    break;
                }
            }
        }
    }, 500);
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
        let isEating;
        for(let i=0; i<snake.length; i++){
            snake[i].oldLeft = snake[i].left;
            snake[i].oldTop = snake[i].top;
            if(i == 0){
                const newLeft = snake[i].left - 10;
                if(newLeft >= 0){
                    snake[i].left = newLeft;
                    snake[i].div.style.left = snake[i].left + "px";
                    if((snake[i].left == leftFood) && (snake[i].top == topFood)){
                        const newSquare = document.createElement("div");
                        newSquare.classList.add("square");
                        playArea.appendChild(newSquare);
                        snake.push(
                            {
                                left : snake[(snake.length - 1)].left,
                                top : snake[(snake.length - 1)].top,
                                div : newSquare,
                                oldLeft : null,
                                oldTop : null
                            }
                        );
                        isEating = true;
                        createFood();
                    }else{
                        isEating = false;
                    }
                }else{
                    canPlay = false;
                    if(numberFood == 2){
                        console.log("Hai perso dopo " + (numberFood - 1) + " mangiata.");
                    }else{
                        console.log("Hai perso dopo " + (numberFood - 1) + " mangiate.");
                    }
                    clearInterval(arrowLeftInterval);
                    break;
                }
            }else{
                snake[i].left = snake[(i-1)].oldLeft;
                snake[i].top = snake[(i-1)].oldTop;
                snake[i].div.style.left = snake[i].left + "px";
                snake[i].div.style.top = snake[i].top + "px";
            }
            if(i == (snake.length - 1)){
                let rompi;
                for(let index=0; index<snake.length; index++){
                    if(index != 0){
                        if((index == 1) && (isEating == false)){
                            if((snake[0].left == snake[index].oldLeft) && (snake[0].top == snake[index].oldTop)){
                                canPlay = false;
                                if(numberFood == 2){
                                    console.log("Hai perso dopo " + (numberFood - 1) + " mangiata.");
                                }else{
                                    console.log("Hai perso dopo " + (numberFood - 1) + " mangiate.");
                                }
                                clearInterval(arrowLeftInterval);
                                rompi = true;
                                break;    
                            }else{
                                rompi = false;
                            }
                        }else{
                            if((snake[0].left == snake[index].left) && (snake[0].top == snake[index].top)){
                                canPlay = false;
                                if(numberFood == 2){
                                    console.log("Hai perso dopo " + (numberFood - 1) + " mangiata.");
                                }else{
                                    console.log("Hai perso dopo " + (numberFood - 1) + " mangiate.");
                                }
                                clearInterval(arrowLeftInterval);
                                rompi = true;
                                break;    
                            }else{
                                rompi = false;
                            }
                        }
                    }
                }
                if(rompi == true){
                    break;
                }
            }
        }
    }, 500);
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