

$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

     // TODO 1 - Enable the Grid
     
       toggleGrid()


      // TODO 2 - Create Platforms
       createPlatform(300, 650, 80, 300, "orange");
       createPlatform(500, 550, 80, 300, "orange");
       createPlatform(700, 450, 80, 300, "orange");
       createPlatform(900, 350, 70, 400, "orange");
       createPlatform(1100, 350, 400, 70, "orange")
       createPlatform(100, 100, 90, 300, "orange");
       createPlatform(100, 400, 200, 100, "orange");
       createPlatform(300, 420, 10, 80, "orange");
       createPlatform(850, 350, 50, 200, "red", 800, 800, 0, 100, 500, 10)
       createBadPlatform(1200, 349, 10, 4, "orange")


    // TODO 3 - Create Collectables
      createCollectable("steve", 250, 250, 0, 0, 250, 350, 7);
      createCollectable("database", 500, 500);
      createCollectable("database", 825, 310);
      createCollectable("database", 1275, 325);


    
    // TODO 4 - Create Cannons
      createCannon("top", 300, 1000);
      createCannon("right", 750, 2000);
      createCannon("right", 250, 2000);
      createCannon("top", 590, 2000);
      createCannon("bottom", 1000, 750, 100, 40)
      
      
      

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
