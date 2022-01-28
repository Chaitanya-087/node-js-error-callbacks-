var rectparam = require("./rectangle");

function solveRect(l, b) {
  console.log(`rectangle with length ${l} and breadth ${b}`);
    rectparam.rect(l,b,(err,rectangle) => {
      if(err){
        console.log("ERROR: " + err.message);
      }
      else{
        console.log("perimeter: " + rectangle.perimeter());
        console.log("area: " + rectangle.area());
      }
    })
}

solveRect(3,9);
solveRect(2,9);
solveRect(-1,0);
solveRect(-1,9);



