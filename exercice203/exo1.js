let x = 10;

function demo() {
  let x = 20;

  if (true) {
    let x = 30;
    console.log("Dans le bloc :", x);
  }

  console.log("Dans la fonction :", x);
}

console.log("Global :", x);
demo();
