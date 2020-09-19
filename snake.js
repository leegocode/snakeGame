/*
Create by Learn Web Developement
Youtube channel : https://www.youtube.com/channel/UC8n8ftV94ZU_DJLOLtrpORA
*/

const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

const box = 32;

const ground = new Image();
ground.src = "img/ground.png";
const foodImg = new Image();
foodImg.src = "img/food.png";

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
}

let food ={
x : Math.floor(Math.random()*17+1) * box,
y : Math.floor(Math.random()*15+3) * box,
}

let score = 0;



function draw(){
    ctx.drawImage(ground,0,0);
    for(let i= 0; i<snake.length; i++){
        ctx.fillStyle = (i ==0)? "green" : "white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        ctx.strokeStyle = "white";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    ctx.drawImage(foodImg, food.x, food.y)
}

let game = setInterval(draw,100);