// Enemies our player must avoid

var fieldWidth = 101;
var fieldHeight = 83;
var fieldHeightOffset = 18;

var Enemy = function(x,y,speed) {


    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x * fieldWidth;
    this.y = y * fieldHeight - fieldHeightOffset;
    this.speed = speed;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this. x = this.x + (this.speed * dt);

    if (this.x - player.x < 50 && this.x - player.x > 0 && this.y === player.y) {
        player.reset();
    }

    if (this.x > 550) {
        this.x -= 800;
    }



};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var Player = function(x,y) {

    this.sprite = 'images/char-boy.png';
    this.x = x * fieldWidth;
    this.y = y * fieldHeight - fieldHeightOffset;
}

Player.prototype.update = function(x,y) {
    this.x += x * fieldWidth;
    this.y += y * fieldHeight;
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(direction){
    if (direction==='up' && this.y > -1*fieldHeight){
        this.y -= fieldHeight;}
    if (direction==='down'&& this.y < 4 * fieldHeight) {
        this.y += fieldHeight} 
    if (direction==='left' && this.x > 0){
        this.x -= fieldWidth}
    if (direction==='right' && this.x < 4 * fieldWidth){
        this.x += fieldWidth}
    if (direction==='up' && this.y < fieldHeight - fieldHeightOffset) {
        player.reset();
        alert('You won!');
    }
}

Player.prototype.reset = function() {
        this.x = 2 * fieldWidth;
        this.y = 5 * fieldHeight - fieldHeightOffset;
    }


// Now instantiate your objects.xccc  
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
allEnemies.push(new Enemy(0,2,150));
allEnemies.push(new Enemy(-2,1,250));
allEnemies.push(new Enemy(-6,1,100));
allEnemies.push(new Enemy(-5,3,150));
allEnemies.push(new Enemy(0,2,75));
allEnemies.push(new Enemy(-3,3,150));
allEnemies.push(new Enemy(-6,1,75));
allEnemies.push(new Enemy(-10,2,75));
allEnemies.push(new Enemy(-3,4,200));
allEnemies.push(new Enemy(0,4,60));


var player = new Player(2,5);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


