// Aliases
let Application = PIXI.Application,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  TextureCache = PIXI.utils.TextureCache,
  Sprite = PIXI.Sprite;

// Check if PIXI works
let type = "WEBGL";
if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas";
}
PIXI.utils.sayHello(type);

//Create PIXI application
let app = new Application({
  width: 256, // default: 800
  height: 256, // default: 600
  antialias: true, // default: false
  transparent: false, // default: false
  resolution: 1, // default: 1
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

loader.add("smallShip.png").load(setup);

// Declare ship variable
let ship;

// Setup function
function setup() {
  // Create the ship sprite
  ship = new Sprite(resources["smallShip.png"].texture);

  // Change the ship sprite's position
  ship.x = 126;
  ship.y = 126;
  // Or
  //ship.position.set(80, 80);

  // Change ship's size
  ship.width = 70;
  ship.height = 70;

  // Scale the ship
  //ship.scale.set(2, 2);

  // Change the ship's anchor point
  ship.anchor.x = 0.5;
  ship.anchor.y = 0.5;

  // Rotate the ship in radians
  ship.rotation = 0.5;

  // Add the ship to the stage so that you can see it
  app.stage.addChild(ship);

  //Start the game loop by adding the 'gameloop' function to Pixi's ticker and providing it with a 'delta' argument
  app.ticker.add((delta) => gameLoop(delta));
}

function gameLoop(delta) {
  //move the ship by one pixel each frame
  ship.x += 1;
}
