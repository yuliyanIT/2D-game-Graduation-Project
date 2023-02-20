const game = new Phaser.Game(1920, 1080, Phaser.AUTO, "", { preload, create, update });
game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setMinMax(400, 300, 800, 600);
//controls
var A, D, jump;
//sprites
var knight, wizard, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10, enemy11, enemy12, coin, coin2, coin3, coin4, coin5, coin6, coin7, coin8, king, king2, boss, speachSt, speachEnd;
//layers
var layer, enemyLayer;
//anims
var facing = "left";
var facing = "left2";
//score
var score = 0, timeText;
//health
var health = 3;
//text
var healthText,scoreText, speach1, speach2, speach3, tutorial1, tutorial2, tutorial3, speach4, speach5, speach6, speach7, speach8;
//stopwatch
var min, sec;
//sound
var knightdie, slimedie, coincollect, bossdie;
//mainscreen
var bg, button;



function preload () {
   
  
    //load assets
    game.load.spritesheet("knight", "knight.png", 96 / 6, 48 / 3);
    game.load.spritesheet("wizard", "Idle.png",96 / 6, 48 / 3);
    game.load.spritesheet("wizard", "Jump.png",96 / 6, 48 / 3);
    game.load.spritesheet("wizard", "Run.png",96 / 6, 48 / 3);
    
    game.load.spritesheet("enemy", "enemy.png", 96 / 6, 48 / 3);

    game.load.spritesheet("boss", "boss.png", 96 / 3, 64 / 2);

   game.load.tilemap("tilemap", "map.json", null, Phaser.Tilemap.TILED_JSON);
    game.load.tilemap("tilemap", "secondMap.json", null, Phaser.Tilemap.TILED_JSON);
    game.load.image("dungeon", "cave-platformer-tileset-16x16.png");
    game.load.image("coin", "coin.png");
    game.load.image("king", "king.png");
    game.load.image("king2", "king2.png");
    game.load.image("speachSt", "king's-speach(start).png");
    game.load.image("speachEnd", "king's-speach(end).png");
    game.load.image("bg", "background.jpg");
    game.load.image("button", "button.png");
    game.load.audio("knightdie", "dying.wav");
    game.load.audio("slimedie", "slimedie.wav");
    game.load.audio("coincollect", "coincollect.wav");
    game.load.audio("bossdie", "bossdie.wav");
}

function create () {
    game.world.setBounds(0, 0, 2000, 2000);

    //back
    game.stage.backgroundColor = "#221d1a";

    //add physics
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //mainscreen
    button=game.add.button(380, 270, "button", actionOnClick);
    button.scale.setTo(0.13);
    button.anchor.setTo(0.5);

    bg = game.add.image(0, 0, "bg");
    bg.scale.setTo(0.4);
    
    //add map
     const map = game.add.tilemap("tilemap");
     map.addTilesetImage("cave-platformer-tileset-16x16", "dungeon");
     layer = map.createLayer("floor");
     map.createLayer("secondary");
     enemyLayer = map.createLayer("enemy");
     layer.resizeWorld();
     map.setCollisionBetween(0, 1500, true, "floor");
     map.setCollisionBetween(0, 1500, true, "enemy");


   

    // //add player
     knight = game.add.sprite(0, 128, "knight");
     knight.scale.setTo(1.75, 1.75);
     knight.animations.add("left1", [0, 1, 2, 3, 4, 5], 10, true);
     knight.animations.add("right1", [6, 7, 8, 9, 10, 11], 10, true);
     healthText = game.add.text(200, 0, "Health: 3", { fontSize: "20px", fill: "#FFF" });
     healthText.fixedToCamera = true;

    // //add second player
    // wizard = game.add.sprite(0, 128, "wizard");
    // wizard.scale.setTo(1.80, 1.80);
    // wizard.animations.add("idle", [0,1,2,3,4,5], 10, true);
    // wizard.animations.add("left1", "Run.png", [0,1,2,3,4,5,6,7], 10, true);
    // wizard.animations.add("right1", "Run.png", [0,1,2,3,4,5,6,7], 10, true);




    //add enemy2
    enemy2 = game.add.sprite(688, 80, "enemy");
    enemy2.scale.setTo(1, 1);

    //add enemy3
    enemy3 = game.add.sprite(832, 272, "enemy");
    enemy3.scale.setTo(1, 1);
    enemy3.animations.add("left1", [0, 1, 2, 3, 4, 5], 10, true);
    enemy3.animations.add("right1", [6, 7, 8, 9, 10, 11], 10, true);

    //add enemy4
    enemy4 = game.add.sprite(1216, 240, "enemy");
    enemy4.scale.setTo(1, 1);
    enemy4.animations.add("left1", [0, 1, 2, 3, 4, 5], 10, true);
    enemy4.animations.add("right1", [6, 7, 8, 9, 10, 11], 10, true);

    //add enemy5
    enemy5 = game.add.sprite(2288, 48, "enemy");
    enemy5.scale.setTo(1, 1);
    enemy5.animations.add("left1", [0, 1, 2, 3, 4, 5], 10, true);
    enemy5.animations.add("right1", [6, 7, 8, 9, 10, 11], 10, true);

    //add enemy6
    enemy6 = game.add.sprite(2560, 208, "enemy");
    enemy6.scale.setTo(1, 1);
    enemy6.animations.add("left1", [0, 1, 2, 3, 4, 5], 10, true);
    enemy6.animations.add("right1", [6, 7, 8, 9, 10, 11], 10, true);

    //add enemy7
    enemy7 = game.add.sprite(2768, 208, "enemy");
    enemy7.scale.setTo(1, 1);
    enemy7.animations.add("left1", [0, 1, 2, 3, 4, 5], 10, true);
    enemy7.animations.add("right1", [6, 7, 8, 9, 10, 11], 10, true);

    //add enemy8
    enemy8 = game.add.sprite(2976, 208, "enemy");
    enemy8.scale.setTo(1, 1);
    enemy8.animations.add("left1", [0, 1, 2, 3, 4, 5], 10, true);
    enemy8.animations.add("right1", [6, 7, 8, 9, 10, 11], 10, true);

    //add enemy9
    enemy9 = game.add.sprite(3184, 208, "enemy");
    enemy9.scale.setTo(1, 1);
    enemy9.animations.add("left1", [0, 1, 2, 3, 4, 5], 10, true);
    enemy9.animations.add("right1", [6, 7, 8, 9, 10, 11], 10, true);

    //add enemy10
    enemy10 = game.add.sprite(3392, 208, "enemy");
    enemy10.scale.setTo(1, 1);
    enemy10.animations.add("left1", [0, 1, 2, 3, 4, 5], 10, true);
    enemy10.animations.add("right1", [6, 7, 8, 9, 10, 11], 10, true);

    //add enemy11
    enemy11 = game.add.sprite(3840, 160, "enemy");
    enemy11.scale.setTo(1, 1);
    enemy11.animations.add("left1", [0, 1, 2, 3, 4, 5], 10, true);
    enemy11.animations.add("right1", [6, 7, 8, 9, 10, 11], 10, true);

    //add enemy12
    enemy12 = game.add.sprite(4512, 160, "enemy");
    enemy12.scale.setTo(1, 1);
    enemy12.animations.add("left1", [0, 1, 2, 3, 4, 5], 10, true);
    enemy12.animations.add("right1", [6, 7, 8, 9, 10, 11], 10, true);

    //add boss
    boss = game.add.sprite(5080, 200, "boss");
    boss.animations.add("left1", [3, 4, 5], 5, true);
    boss.animations.add("right1", [0, 1, 2], 5, true);
    boss.health = 50;

    //add coin
    coin = game.add.sprite(-50, 10, "coin");
    coin.scale.setTo(1, 1);

    //add coin2
    coin2 = game.add.sprite(-50, 10, "coin");
    coin2.scale.setTo(1, 1);

    //add coin3
    coin3 = game.add.sprite(-50, 10, "coin");
    coin3.scale.setTo(1, 1);

    //add coin4
    coin4 = game.add.sprite(-50, 10, "coin");
    coin4.scale.setTo(1, 1);

    //add coin5
    coin5 = game.add.sprite(-50, 10, "coin");
    coin5.scale.setTo(1, 1);

    //add coin6
    coin6 = game.add.sprite(-50, 10, "coin");
    coin6.scale.setTo(1, 1);

    //add coin7
    coin7 = game.add.sprite(-50, 10, "coin");
    coin7.scale.setTo(1, 1);

    //add coin8
    coin8 = game.add.sprite(-50, 10, "coin");
    coin8.scale.setTo(1, 1);

    //add king
    king = game.add.sprite(0, 270, "king");
    king.scale.setTo(0.15, 0.15);

    //add king2
    king2 = game.add.sprite(-200, 0, "king2");
    king2.scale.setTo(0.15, 0.15);

    //add speach(Start)(textbox)
    speachSt = game.add.sprite(50, 220, "speachSt");
    speachSt.scale.setTo(0.2, 0.2)

    //add speach(End)(textbox)
    speachEnd = game.add.sprite(-200, 0, "speachEnd");
    speachEnd.scale.setTo(0.25, 0.2);

    //add audio
    knightdie = game.add.audio("knightdie");
    slimedie = game.add.audio("slimedie");
    coincollect = game.add.audio("coincollect");
    bossdie = game.add.audio("bossdie");

    //player's physics
    game.physics.enable(knight);
    game.physics.arcade.gravity.y = 500;
    knight.body.setSize(16, 14, true);
    knight.body.bounce.y = 0.1;
    knight.body.linearDamping = 1;
    knight.body.collideWorldBounds = true;

    //enemy2's physics
    game.physics.enable(enemy2);
    game.physics.arcade.gravity.y = 500;
    enemy2.body.setSize(16, 14, true);
    enemy2.body.bounce.y = 0.1;
    enemy2.body.linearDamping = 1;
    enemy2.body.collideWorldBounds = true;

    //enemy3's physics
    game.physics.enable(enemy3);
    game.physics.arcade.gravity.y = 500;
    enemy3.body.velocity.x = 30;
    enemy3.body.setSize(16, 14, true);
    enemy3.body.bounce.y = 0.1;
    enemy3.body.linearDamping = 1;
    enemy3.body.collideWorldBounds = true;

    //enemy4's physics
    game.physics.enable(enemy4);
    game.physics.arcade.gravity.y = 500;
    enemy4.body.velocity.x = 30;
    enemy4.body.setSize(16, 14, true);
    enemy4.body.bounce.y = 0.1;
    enemy4.body.linearDamping = 1;
    enemy4.body.collideWorldBounds = true;

    //enemy5's physics
    game.physics.enable(enemy5);
    game.physics.arcade.gravity.y = 500;
    enemy5.body.velocity.x = 30;
    enemy5.body.setSize(16, 14, true);
    enemy5.body.bounce.y = 0.1;
    enemy5.body.linearDamping = 1;
    enemy5.body.collideWorldBounds = true;

    //enemy6's physics
    game.physics.enable(enemy6);
    game.physics.arcade.gravity.y = 500;
    enemy6.body.velocity.x = 30;
    enemy6.body.setSize(16, 14, true);
    enemy6.body.bounce.y = 0.1;
    enemy6.body.linearDamping = 1;
    enemy6.body.collideWorldBounds = true;

    //enemy7's physics
    game.physics.enable(enemy7);
    game.physics.arcade.gravity.y = 500;
    enemy7.body.velocity.x = 30;
    enemy7.body.setSize(16, 14, true);
    enemy7.body.bounce.y = 0.1;
    enemy7.body.linearDamping = 1;
    enemy7.body.collideWorldBounds = true;

    //enemy8's physics
    game.physics.enable(enemy8);
    game.physics.arcade.gravity.y = 500;
    enemy8.body.velocity.x = 30;
    enemy8.body.setSize(16, 14, true);
    enemy8.body.bounce.y = 0.1;
    enemy8.body.linearDamping = 1;
    enemy8.body.collideWorldBounds = true;

    //enemy9's physics
    game.physics.enable(enemy9);
    game.physics.arcade.gravity.y = 500;
    enemy9.body.velocity.x = 30;
    enemy9.body.setSize(16, 14, true);
    enemy9.body.bounce.y = 0.1;
    enemy9.body.linearDamping = 1;
    enemy9.body.collideWorldBounds = true;

    //enemy10's physics
    game.physics.enable(enemy10);
    game.physics.arcade.gravity.y = 500;
    enemy10.body.velocity.x = 30;
    enemy10.body.setSize(16, 14, true);
    enemy10.body.bounce.y = 0.1;
    enemy10.body.linearDamping = 1;
    enemy10.body.collideWorldBounds = true;

    //enemy11's physics
    game.physics.enable(enemy11);
    game.physics.arcade.gravity.y = 500;
    enemy11.body.velocity.x = 30;
    enemy11.body.setSize(16, 14, true);
    enemy11.body.bounce.y = 0.1;
    enemy11.body.linearDamping = 1;
    enemy11.body.collideWorldBounds = true;

    //enemy12's physics
    game.physics.enable(enemy12);
    game.physics.arcade.gravity.y = 500;
    enemy12.body.velocity.x = 30;
    enemy12.body.setSize(16, 14, true);
    enemy12.body.bounce.y = 0.1;
    enemy12.body.linearDamping = 1;
    enemy12.body.collideWorldBounds = true;

    //boss's physics
    game.physics.enable(boss);
    boss.body.velocity.x = 50;
    boss.body.setSize(18, 32, true);
    boss.body.linearDamping = 1;
    boss.body.collideWorldBounds = true;

    //coin's physics
    game.physics.enable(coin);
    game.physics.arcade.gravity.y = 500;
    coin.body.linearDamping = 1;
    coin.body.immovable = true;

    //coin2's physics
    game.physics.enable(coin2);
    game.physics.arcade.gravity.y = 500;
    coin2.body.linearDamping = 1;
    coin2.body.immovable = true;

    //coin3's physics
    game.physics.enable(coin3);
    game.physics.arcade.gravity.y = 500;
    coin3.body.linearDamping = 1;
    coin3.body.immovable = true;

    //coin4's physics
    game.physics.enable(coin4);
    game.physics.arcade.gravity.y = 500;
    coin4.body.linearDamping = 1;
    coin4.body.immovable = true;

    //coin5's physics
    game.physics.enable(coin5);
    game.physics.arcade.gravity.y = 500;
    coin5.body.linearDamping = 1;
    coin5.body.immovable = true;

    //coin6's physics
    game.physics.enable(coin6);
    game.physics.arcade.gravity.y = 500;
    coin6.body.linearDamping = 1;
    coin6.body.immovable = true;

    //coin7's physics
    game.physics.enable(coin7);
    game.physics.arcade.gravity.y = 500;
    coin7.body.linearDamping = 1;
    coin7.body.immovable = true;

    //coin8's physics
    game.physics.enable(coin8);
    game.physics.arcade.gravity.y = 500;
    coin8.body.linearDamping = 1;
    coin8.body.immovable = true;

    //camera
    game.camera.follow(knight);

    //controls
    A = game.input.keyboard.addKey(Phaser.Keyboard.A)
    D = game.input.keyboard.addKey(Phaser.Keyboard.D)
    jump = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)

    //text
    scoreText = game.add.text(5, 0, "Score: 0", { fontSize: "20px", fill: "#FFF" });
    scoreText.fixedToCamera = true;

    timeText = game.add.text(-600, 20, "", { fontSize: '20px', fill: '#FFF' });

    speach1 = game.add.text(59, 225, "Hello adventurer,", {fontSize:"10px", fill:"#000"});
    speach2 = game.add.text(59, 235, "would you help us", {fontSize:"10px", fill:"#000"});
    speach3 = game.add.text(59, 245, "get back our treasure?", {fontSize:"10px", fill:"#000"});
    speach3.scale.setTo(0.9, 1);
    speach4 = game.add.text(-200, 0, "Great job, ", {fontSize:"10px", fill:"#000"});
    speach5 = game.add.text(-200, 0, "you have served me well.", {fontSize:"10px", fill:"#000"});
    speach6 = game.add.text(4735, 230, "Oh no,", {fontSize:"10px", fill:"#000"});
    speach7 = game.add.text(4735, 240, "that's there leader!", {fontSize:"10px", fill:"#000"});
    speach8 = game.add.text(4735, 250, "Kill him!", {fontSize:"10px", fill:"#000"});

    tutorial1 = game.add.text(10, 30, "Move with A (left) and D (right), to jump use SPACE.", {fontSize:"10px", fill:"#FFF"});
    tutorial2 = game.add.text(900, 220, "Green mushrooms set you a checkpoint.", {fontSize:"10px", fill:"#FFF"});
    tutorial3 = game.add.text(590, 25, "The goal is to get 15 coins by killing the enemies.", {fontSize:"10px", fill:"#FFF"});
}

function actionOnClick(){
    //removes the mainscreen on click to reveal the game
    bg.kill()
    button.kill()
}

function update () {
    //mainscreen adjustments
    game.world.bringToTop(bg)
    game.world.bringToTop(button)
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.refresh();

    //add colliding
    game.physics.arcade.collide([knight, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10, enemy11, enemy12, coin, coin2, coin3, coin4, coin5, coin6, coin7, coin8, boss], layer);
    game.physics.arcade.collide([enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10, enemy11, enemy12, boss], enemyLayer);
    game.physics.arcade.collide(enemy2, knight, E2P, null, this);
    game.physics.arcade.collide(enemy3, knight, E3P, null, this);
    game.physics.arcade.collide(enemy4, knight, E4P, null, this);
    game.physics.arcade.collide(enemy5, knight, E5P, null, this);
    game.physics.arcade.collide(enemy6, knight, E6P, null, this);
    game.physics.arcade.collide(enemy7, knight, E7P, null, this);
    game.physics.arcade.collide(enemy8, knight, E8P, null, this);
    game.physics.arcade.collide(enemy9, knight, E9P, null, this);
    game.physics.arcade.collide(enemy10, knight, E10P, null, this);
    game.physics.arcade.collide(enemy11, knight, E11P, null, this);
    game.physics.arcade.collide(enemy12, knight, E12P, null, this);
    game.physics.arcade.collide(knight, coin, collectCoin, null, this);
    game.physics.arcade.collide(knight, coin2, collectCoin2, null, this);
    game.physics.arcade.collide(knight, coin3, collectCoin3, null, this);
    game.physics.arcade.collide(knight, coin4, collectCoin4, null, this);
    game.physics.arcade.collide(knight, coin5, collectCoin5, null, this);
    game.physics.arcade.collide(knight, coin6, collectCoin6, null, this);
    game.physics.arcade.collide(knight, coin7, collectCoin7, null, this);
    game.physics.arcade.collide(knight, coin8, collectCoin8, null, this);
    game.physics.arcade.collide(knight, boss, killBoss, null, this);

    //stopwatch
    displayTimeElapsed();

    //normal speed
    knight.body.velocity.x = 2;

    //left and right movement
    if (A.isDown) {
        knight.body.velocity.x = -150;
        if (facing != "left1") {
            knight.animations.play("left1");
            facing = "left1";
        } 
    }
    else if (D.isDown) {
        knight.body.velocity.x = 150;
        if (facing != "right1") {
            knight.animations.play("right1");
            facing = "right1";
        }
    }

    //idle
    else {
        knight.frame = 12;
    }

    //jumping
    if (jump.isDown && knight.body.onFloor()){
        knight.body.velocity.y = -200;
    }

    //respawn after falling of world
    if (knight.y >= 293 && knight.x <= 976){
        
        healthText.setText("Health: " + (health-1));
        knight.reset(32, 128);
        knightdie.play();
    }
    else if (knight.y >= 293 && knight.x >= 977 && knight.x <= 2368){
       
        knight.reset(976, 256);
        knightdie.play();
    }
    else if (knight.y >= 293 && knight.x >= 2369 && knight.x <= 3584){
        knight.reset(2368, 208);
        knightdie.play();
        
    }
    else if (knight.y >= 293 && knight.x >= 3585 && knight.x <= 4816){
        
        knight.reset(3584, 176);
        knightdie.play();
    }
    else if (knight.y >= 293 && knight.x >= 4817 && knight.x <= 5184){
        
        knight.reset(4816, 48);
        knightdie.play();
       
    }
    

    //enemy3 movement
    if(enemy3.body.blocked.right && enemy3.body.blocked.down){
        enemy3.body.velocity.x = -100;
        enemy3.animations.play("right1");
    }
    if(enemy3.body.blocked.left && enemy3.body.blocked.down){
        enemy3.body.velocity.x = 30;
        enemy3.animations.play("left1");
    }

    //enemy4 movement
    if (enemy4.body.blocked.right && enemy4.body.blocked.down){
        enemy4.body.velocity.x = -100;
        enemy4.animations.play("right1");
    }
    if (enemy4.body.blocked.left && enemy4.body.blocked.down){
        enemy4.body.velocity.x = 30;
        enemy4.animations.play("left1");
    }

    //enemy5 movement
    if (enemy5.body.blocked.right && enemy5.body.blocked.down){
        enemy5.body.velocity.x = -100;
        enemy5.animations.play("right1");
    }
    if (enemy5.body.blocked.left && enemy5.body.blocked.down){
        enemy5.body.velocity.x = 30;
        enemy5.animations.play("left1");
    }

    //enemy6 movement
    if (enemy6.body.blocked.right && enemy6.body.blocked.down){
        enemy6.body.velocity.x = -100;
        enemy6.animations.play("right1");
    }
    if (enemy6.body.blocked.left && enemy6.body.blocked.down){
        enemy6.body.velocity.x = 30;
        enemy6.animations.play("left1");
    }

    //enemy7 movement
    if (enemy7.body.blocked.right && enemy7.body.blocked.down){
        enemy7.body.velocity.x = -100;
        enemy7.animations.play("right1");
    }
    if (enemy7.body.blocked.left && enemy7.body.blocked.down){
        enemy7.body.velocity.x = 30;
        enemy7.animations.play("left1");
    }

    //enemy8 movement
    if (enemy8.body.blocked.right && enemy8.body.blocked.down){
        enemy8.body.velocity.x = -100;
        enemy8.animations.play("right1");
    }
    if (enemy8.body.blocked.left && enemy8.body.blocked.down){
        enemy8.body.velocity.x = 30;
        enemy8.animations.play("left1");
    }

    //enemy9 movement
    if (enemy9.body.blocked.right && enemy9.body.blocked.down){
        enemy9.body.velocity.x = -100;
        enemy9.animations.play("right1");
    }
    if (enemy9.body.blocked.left && enemy9.body.blocked.down){
        enemy9.body.velocity.x = 30;
        enemy9.animations.play("left1");
    }

    //enemy10 movement
    if (enemy10.body.blocked.right && enemy10.body.blocked.down){
        enemy10.body.velocity.x = -100;
        enemy10.animations.play("right1");
    }
    if (enemy10.body.blocked.left && enemy10.body.blocked.down){
        enemy10.body.velocity.x = 30;
        enemy10.animations.play("left1");
    }

    //enemy11 movement
    if (enemy11.body.blocked.right && enemy11.body.blocked.down){
        enemy11.body.velocity.x = -100;
        enemy11.animations.play("right1");
    }
    if (enemy11.body.blocked.left && enemy11.body.blocked.down){
        enemy11.body.velocity.x = 100;
        enemy11.animations.play("left1");
    }

    //enemy12 movement
    if (enemy12.body.blocked.right && enemy12.body.blocked.down){
        enemy12.body.velocity.x = -100;
        enemy12.animations.play("right1");
    }
    if (enemy12.body.blocked.left && enemy12.body.blocked.down){
        enemy12.body.velocity.x = 30;
        enemy12.animations.play("left1");
    }

    //boss movement
    if (boss.body.blocked.right && boss.body.blocked.down){
        boss.body.velocity.x = -50;
        boss.animations.play("right1");
    }
    if (boss.body.blocked.left && boss.body.blocked.down){
        boss.body.velocity.x = 50;
        boss.animations.play("left1");
    }
    
    //king things
    if (knight.x >= 528){
        king.kill();
        speachSt.kill();
        speach1.kill();
        speach2.kill();
        speach3.kill();
        
    }
    
    if (knight.x >= 640){
        tutorial1.kill();
    }

    if (knight.x >= 800){
        tutorial3.kill();
    }

    if (knight.x >= 1456){
        tutorial2.kill();
    }

    if (knight.x >= 4816){
        king.reset(4680, 270);
        speachSt.reset(4727, 225);
    }
    

    if (boss.alive == false){
        king.kill();
        speachSt.kill();
        speach6.kill();
        speach7.kill();
        speach8.kill();
        king2.reset(5060, 90);
        speachEnd.reset(4980, 50);
        speach4.reset(4990, 55);
        speach5.reset(4990, 65);
    }

    if (score == 15){
        alert("Congratulations! You've beaten the game! Here's your time: " + timeText.text);
        window.location.reload();
    }
    else if(health == 0){
 alert("За жалост ти загуби всичките си животи" + timeText.text);
        window.location.reload();
    }
}

//stopwatch
function displayTimeElapsed() {
    if (knight.x > 96){
        var time = Math.floor(game.time.totalElapsedSeconds() );
        min = Math.floor(time / 60);
        sec = time % 60;

        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        timeText.text = min + ":" + sec;
    }
}

//coin graber
function collectCoin (knight, coin){
    coin.kill();
    score += 1;
    scoreText.setText("Score: " + score);
    if (coin.x == 3600 && coin.y == 176){
        score += 1;
        scoreText.setText("Score: " + score);
        coincollect.play();
    }
    if (coin.x == 3616 && coin.y == 176){
        score += 2;
        scoreText.setText("Score: " + score);
        coincollect.play();
    }
    if (coin.x == 3584 && coin.y == 176){
        score += 3;
        scoreText.setText("Score: " + score);
        coincollect.play();
    }
}

function collectCoin2 (knight, coin2){
    coin2.kill();
    score += 1;
    scoreText.setText("Score: " + score);
    coincollect.play();
}

function collectCoin3 (knight, coin3){
    coin3.kill();
    score += 1;
    scoreText.setText("Score: " + score);
    coincollect.play();
}

function collectCoin4 (knight, coin4){
    coin4.kill();
    score += 1;
    scoreText.setText("Score: " + score);
    coincollect.play();
}

function collectCoin5 (knight, coin5){
    coin5.kill();
    score += 1;
    scoreText.setText("Score: " + score);
    coincollect.play();
}

function collectCoin6 (knight, coin6){
    coin6.kill();
    score += 1;
    scoreText.setText("Score: " + score);
    coincollect.play();
}

function collectCoin7 (knight, coin7){
    coin7.kill();
    score += 1;
    scoreText.setText("Score: " + score);
    coincollect.play();
}

function collectCoin8 (knight, coin8){
    coin8.kill();
    score += 5;
    scoreText.setText("Score: " + score);
    coincollect.play();
}

//enemy killer
function E2P (enemy2, knight){
    //enemy2 kill
    if(enemy2.body.touching.up && knight.body.touching.down){
        knight.body.velocity.y = 0;
        enemy2.kill();
        slimedie.play();
        coin2.kill();
        coin2.reset(752, 160);
    }
    else if (enemy2.body.touching.left || enemy2.body.touching.right && knight.body.touching.left || knight.body.touching.right){
        knight.reset(32, 128);
        knightdie.play();
    }
}

function E3P (enemy3, knight){
    //enemy3 kill
    if(enemy3.body.touching.up && knight.body.touching.down){
        knight.body.velocity.y = 0;
        enemy3.kill();
        slimedie.play();
        coin3.kill();
        coin3.reset(992, 256);
    }
    else if (enemy3.body.touching.left || enemy3.body.touching.right && knight.body.touching.left || knight.body.touching.right){
        knight.reset(32, 128);
        knightdie.play();
    }
} 

function E4P (enemy4, knight){
    //enemy4 kill
    if(enemy4.body.touching.up && knight.body.touching.down){
        knight.body.velocity.y = 0;
        enemy4.kill();
        slimedie.play();
        coin4.kill();
        coin4.reset(1456, 240);
    }
    else if (enemy4.body.touching.left || enemy4.body.touching.right && knight.body.touching.left || knight.body.touching.right){
        knight.reset(976, 256);
        knightdie.play();
    }
}

function E5P (enemy5, knight){
    //enemy5 kill
    if(enemy5.body.touching.up && knight.body.touching.down){
        knight.body.velocity.y = 0;
        enemy5.kill();
        slimedie.play();
        coin5.kill();
        coin5.reset(2384, 208);
    }
    else if (enemy5.body.touching.left || enemy5.body.touching.right && knight.body.touching.left || knight.body.touching.right){
        knight.reset(976, 256);
        knightdie.play();
    }
}

function E6P (enemy6, knight){
    //enemy6 kill
    if(enemy6.body.touching.up && knight.body.touching.down){
        knight.body.velocity.y = 0;
        enemy6.kill();
        slimedie.play();
        coin.kill();
        coin.reset(3552, 176);
    }
    else if (enemy6.body.touching.left || enemy6.body.touching.right && knight.body.touching.left || knight.body.touching.right){
        knight.reset(2368, 208);
        knightdie.play();
    }
}

function E7P (enemy7, knight){
    //enemy7 kill
    if(enemy7.body.touching.up && knight.body.touching.down){
        knight.body.velocity.y = 0;
        enemy7.kill();
        slimedie.play();
        coin.kill();
        coin.reset(3568, 176);
    }
    else if (enemy7.body.touching.left || enemy7.body.touching.right && knight.body.touching.left || knight.body.touching.right){
        knight.reset(2368, 208);
        knightdie.play();
    }
}

function E8P (enemy8, knight){
    //enemy8 kill
    if(enemy8.body.touching.up && knight.body.touching.down){
        knight.body.velocity.y = 0;
        enemy8.kill();
        slimedie.play();
        coin.kill();
        coin.reset(3600, 176);
    }
    else if (enemy8.body.touching.left || enemy8.body.touching.right && knight.body.touching.left || knight.body.touching.right){
        knight.reset(2368, 208);
        knightdie.play();
    }
}

function E9P (enemy9, knight){
    //enemy9 kill
    if(enemy9.body.touching.up && knight.body.touching.down){
        knight.body.velocity.y = 0;
        enemy9.kill();
        slimedie.play();
        coin.kill();
        coin.reset(3616, 176);
    }
    else if (enemy9.body.touching.left || enemy9.body.touching.right && knight.body.touching.left || knight.body.touching.right){
        knight.reset(2368, 208);
        knightdie.play();
    }
}

function E10P (enemy10, knight){
    //enemy10 kill
    if(enemy10.body.touching.up && knight.body.touching.down){
        knight.body.velocity.y = 0;
        enemy10.kill();
        slimedie.play();
        coin.kill();
        coin.reset(3584, 176);
    }
    else if (enemy10.body.touching.left || enemy10.body.touching.right && knight.body.touching.left || knight.body.touching.right){
        knight.reset(2368, 208);
        knightdie.play();
    }
}

function E11P (enemy11, knight){
    //enemy11 kill
    if(enemy11.body.touching.up && knight.body.touching.down){
        knight.body.velocity.y = 0;
        enemy11.kill();
        slimedie.play();
        coin6.kill();
        coin6.reset(4048, 144);
    }
    else if (enemy11.body.touching.left || enemy11.body.touching.right && knight.body.touching.left || knight.body.touching.right){
        knight.reset(3584, 176);
        knightdie.play();
    }
}

function E12P (enemy12, knight){
    //enemy12 kill
    if(enemy12.body.touching.up && knight.body.touching.down){
        knight.body.velocity.y = 0;
        enemy12.kill();
        slimedie.play();
        coin7.kill();
        coin7.reset(4704, 128);
    }
    else if (enemy12.body.touching.left || enemy12.body.touching.right && knight.body.touching.left || knight.body.touching.right){
        knight.reset(3584, 176);
        knightdie.play();
    }
}

function killBoss (knight, boss){
    //boss kill
    if (boss.body.touching.up && knight.body.touching.down){
        if (boss.alive){
            boss.damage(10);
        }
        else if (boss.health <= 0){
            boss.kill();
        }
        if (boss.alive == false){
            bossdie.play();
            coin8.kill();
            coin8.reset(4848, 128);
        }
        knight.body.velocity.y = -150;
    }
    else if (boss.body.touching.left || boss.body.touching.right && boss.body.touching.left || boss.body.touching.right){
        knight.reset(4816, 48);
        knightdie.play();
    }
}