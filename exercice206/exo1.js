function createInterval(start, end) {
  // Validation basique
  if (typeof start !== 'number' || typeof end !== 'number') {
    throw new Error("Les deux valeurs doivent être des nombres.");
  }

  if (start > end) {
    throw new Error("Le point de départ doit être inférieur ou égal au point d'arrivée.");
  }

  // Propriétés raccourcies ES6
  return { start, end };
}

const test = () => {
  console.log(createInterval(5, 10));
  console.log(createInterval(0, 0));
  console.log(createInterval(-5, 5));
};

test();