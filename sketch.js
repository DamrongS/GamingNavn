let player;
let bullets = [];
function setup()
{
    createCanvas(800, 800);
    //imageMode(CORNER);
    player = new Player(width/2, height/2, 1, 1, 1, 1, 1/100000, 1/100);
}

function draw()
{
    background(0);

    player.playerDraw();
    player.playerMovement();

    BulletsHandler();

}

function BulletsHandler()
{
    if(bullets.length > 0)
    {
        for (let i = bullets.length - 1; i < 0; i--)
        {
            bullets[i].drawSprite();
            bullets[i].move();
        }
    }
}

function keyPressed()
{
    if(key == " ")
    {
        Shoot();
    }
}

function Shoot()
{
    if (keyIsDown(32))
    {
        bullets.push(new Projectile("assets/smallbullet.png",player.getPos()[0], player.getPos()[1], 5, 5, 1, 1 ))
    }
}