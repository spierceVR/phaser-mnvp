// Create our only scene called mainScene, in the game.js file
class mainScene {
    // The three methods currently empty

    preload() {
        // This method is called once at the beginning
        // It will load all the assets, like sprites and sounds  
        this.load.image('player', 'assets/steve.jpg');
    }
    create() {
        // This method is called once, just after preload()
        // It will initialize our scene, like the positions of the sprites
        this.player = this.physics.add.sprite(100, 100, 'player');
        this.arrow = this.input.keyboard.createCursorKeys();
    }
    update() {
        // This method is called 60 times per second after create() 
        // It will handle all the game's logic, like movements
        // Handle horizontal movements
        if (this.arrow.right.isDown) {
            // If the right arrow is pressed, move to the right
            this.player.x += 3;
        } else if (this.arrow.left.isDown) {
            // If the left arrow is pressed, move to the left
            this.player.x -= 3;
        }
        // Do the same for vertical movements
        if (this.arrow.down.isDown) {
            this.player.y += 3;
        } else if (this.arrow.up.isDown) {
            this.player.y -= 3;
        }
    }
}

new Phaser.Game({
    width: 700, // Width of the game in pixels
    height: 400, // Height of the game in pixels
    backgroundColor: '#3498db', // The background color (blue)
    scene: mainScene, // The name of the scene we created
    physics: { default: 'arcade' }, // The physics engine to use
    parent: 'game', // Create the game inside the <div id="game"> 
});