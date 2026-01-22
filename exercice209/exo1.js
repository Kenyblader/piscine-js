
function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const onResize = debounce(() => {
  console.log("Redimensionnement terminé");
}, 300);

window.addEventListener("resize", onResize);


function debounceImmediate(func, delay, immediate = false) {
  let timer;

  return function (...args) {
    const callNow = immediate && !timer;

    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      if (!immediate) func.apply(this, args);
    }, delay);

    if (callNow) func.apply(this, args);
  };
}

const search = debounceImmediate(() => {
  console.log("Recherche déclenchée");
}, 500, true);

