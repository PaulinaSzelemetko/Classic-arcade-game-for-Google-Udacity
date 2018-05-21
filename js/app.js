
//global variables

var fieldWidth = 101;
var fieldHeight = 83;
var fieldHeightOffset = 18;


// enemies our player must avoid

var Enemy = function(x,y,speed) {

    this.sprite = 'images/enemy-bug.png';
    this.x = x * fieldWidth;
    this.y = y * fieldHeight - fieldHeightOffset;
    this.speed = speed;
};

// update the enemy's position

Enemy.prototype.update = function(dt) {
   
    this. x = this.x + (this.speed * dt);

    if (this.x - player.x < 50 && this.x - player.x > 0 && this.y === player.y) {
        player.reset();
    }

    if (this.x > 550) {
        this.x -= 800;
    }
};

// draw the enemy on the screen

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// player class 


var Player = function(x,y) {

    this.sprite = 'images/char-boy.png';
    this.x = x * fieldWidth;
    this.y = y * fieldHeight - fieldHeightOffset;
}

// player update method 

Player.prototype.update = function(x,y) {
    this.x += x * fieldWidth;
    this.y += y * fieldHeight;
};

// draw the player on the screen

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// player going

Player.prototype.handleInput = function(direction){
    if (direction==='up' && this.y > -1*fieldHeight){
        this.y -= fieldHeight};
    if (direction==='down'&& this.y < 4 * fieldHeight) {
        this.y += fieldHeight} ;
    if (direction==='left' && this.x > 0){
        this.x -= fieldWidth};
    if (direction==='right' && this.x < 4 * fieldWidth){
        this.x += fieldWidth};
    if (direction==='up' && this.y < fieldHeight - fieldHeightOffset) {
        player.reset();
        alert('You won!');
    }
};

// reset the game 

Player.prototype.reset = function() {
        this.x = 2 * fieldWidth;
        this.y = 5 * fieldHeight - fieldHeightOffset;
    };


//  all enemy objects in an array 

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

// new plaer 

var player = new Player(2,5);


// This listens for key presses and sends the keys to your

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


