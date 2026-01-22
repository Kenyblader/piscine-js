    // 1) Throttle basique
function throttle(func, limit) {
  let inThrottle = false;

  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 2) Throttle avancé avec leading / trailing
function throttleAdvanced(func, limit, options = { leading: true, trailing: true }) {
  let lastCall = 0;
  let timeout = null;

  return function (...args) {
    const now = Date.now();

    if (!lastCall && options.leading === false) {
      lastCall = now;
    }

    const remaining = limit - (now - lastCall);

    if (remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      lastCall = now;
      func.apply(this, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(() => {
        lastCall = options.leading === false ? 0 : Date.now();
        timeout = null;
        func.apply(this, args);
      }, remaining);
    }
  };
}

// 2) Throttle avancé avec leading / trailing
function throttleAdvanced(func, limit, options = { leading: true, trailing: true }) {
  let lastCall = 0;
  let timeout = null;

  return function (...args) {
    const now = Date.now();

    if (!lastCall && options.leading === false) {
      lastCall = now;
    }

    const remaining = limit - (now - lastCall);

    if (remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      lastCall = now;
      func.apply(this, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(() => {
        lastCall = options.leading === false ? 0 : Date.now();
        timeout = null;
        func.apply(this, args);
      }, remaining);
    }
  };
}

// 3) Throttle avec cancel
function createThrottledFunction(func, limit) {
  let lastCall = 0;
  let timeout = null;

  function throttled(...args) {
    const now = Date.now();
    const remaining = limit - (now - lastCall);

    if (remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      lastCall = now;
      func.apply(this, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        lastCall = Date.now();
        timeout = null;
        func.apply(this, args);
      }, remaining);
    }
  }

  throttled.cancel = function () {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return throttled;
}

const onScroll = throttle(() => {
  console.log("Scroll !");
}, 500);

window.addEventListener("scroll", onScroll);

const throttledResize = createThrottledFunction(() => {
  console.log("Resize !");
}, 1000);

window.addEventListener("resize", throttledResize);

// Plus tard
throttledResize.cancel();
