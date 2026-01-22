function memoize(func) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

function memoizeWithLimit(func, maxSize) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);

    if (cache.size >= maxSize) {
      const firstKey = cache.keys().next().value; // FIFO
      cache.delete(firstKey);
    }

    cache.set(key, result);
    return result;
  };
}

function memoizeWithExpiry(func, ttl) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    const now = Date.now();

    if (cache.has(key)) {
      const { value, time } = cache.get(key);
      if (now - time < ttl) {
        return value;
      } else {
        cache.delete(key); // expiré
      }
    }

    const result = func.apply(this, args);
    cache.set(key, { value: result, time: now });
    return result;
  };
}

class MemoCache {
  constructor() {
    this.cache = new Map();
    this.hits = 0;
    this.misses = 0;
  }

  get(key) {
    if (this.cache.has(key)) {
      this.hits++;
      return this.cache.get(key);
    }
    this.misses++;
    return undefined;
  }

  set(key, val) {
    this.cache.set(key, val);
  }

  getStats() {
    return {
      hits: this.hits,
      misses: this.misses,
      size: this.cache.size
    };
  }
}
