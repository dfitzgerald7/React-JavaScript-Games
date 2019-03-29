
// export const initializeSnake = () => {
//     snake = [
//       {x: (gameCanvas.width)/2, y: gameCanvas.height/2},
//       {x: (gameCanvas.width - 20)/2, y: gameCanvas.height/2},
//       {x: (gameCanvas.width - 40)/2, y: gameCanvas.height/2},
//       {x: (gameCanvas.width - 60)/2, y: gameCanvas.height/2},
//       {x: (gameCanvas.width - 80)/2, y: gameCanvas.height/2}
//     ]
//     dx = 10, dy = 0; foodX = 0; foodY = 0; score=0
//     scoreVal.innerHTML = 0
//   }
// export const drawSnakePart = (snakePart, ctx) => {
//     ctx.fillStyle = SNAKE_COLOR;
//     ctx.strokestyle = SNAKE_BORDER_COLOR;
//     ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
//     ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
//   }
// export  const drawSnake = () => {
//     snake.forEach(drawSnakePart)
//   }
// export const moveSnake = () => {
//     const {x, y} = snake[0]
//     snake.unshift({x: x + dx, y: y - dy}) //add new move to head
//     if (addTail === false)  { snake.pop() }
//     addTail = false;
//   }
// export   const clearCanvas = () => {
//     ctx.fillStyle = "white";
//     ctx.strokeStyle = "black";
//     ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
//     ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
//   }
//  export  const handleKeyPress = event => {
//     //Check which direction currently moving to prevent direction reversal
//     const dir = event.key
//     const goingDown = dy === -10
//     const goingUp = dy === 10
//     const goingRight = dx === 10
//     const goingLeft = dx === -10
//     if (dir === "ArrowUp" && !goingDown){
//       dx = 0; dy = 10
//     }
//     else if (dir === "ArrowDown" && !goingUp){
//       dx = 0; dy= -10
//     }
//     else if (dir === "ArrowLeft" && !goingRight){
//       dx = -10; dy= 0
//     }
//     else if (dir === "ArrowRight" && !goingLeft){
//       dx = 10; dy= 0
//     }
//   }
// export const createFood = () => {
//   foodX = Math.floor(Math.random() * gameCanvas.width/10) * 10
//   foodY = Math.floor(Math.random() * gameCanvas.height/10) * 10
// }
// export const drawFood = () => {
//   ctx.fillStyle = "red"
//   ctx.fillRect(foodX, foodY, 10 , 10)
//   ctx.strokeRect(foodX, foodY, 10 , 10)
// }
// export const ateFood = () => {
//   return snake[0].x === foodX && snake[0].y === foodY
// }
// export const gameOver = () => {
//   const {x, y} = snake[0] //x and y cord. of head.
//   for (let i=1; i < snake.length; i++){
//     if (snake[i].x === x && snake[i].y === y){
//       return true
//     }
//   }
//   if (x === -10 || x === gameCanvas.width || y === -10 || y === gameCanvas.height) {
//     return true
//   } else {
//     return false
//   }
// }
// export const hideButton = () => {
//   gameOverDiv.style.display = "none"
// }
// export const addScore = () => {
//   score += 10
//   scoreVal.innerHTML = score
// }

