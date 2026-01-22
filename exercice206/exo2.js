function mergeIntervals(interval1, interval2) {
  // Validation minimale
  if (
    typeof interval1.start !== "number" || typeof interval1.end !== "number" ||
    typeof interval2.start !== "number" || typeof interval2.end !== "number"
  ) {
    throw new Error("Les intervalles doivent contenir des nombres.");
  }

  const start = Math.min(interval1.start, interval2.start);
  const end = Math.max(interval1.end, interval2.end);

  return { start, end };
}

const test = () => {
  const intervalA = { start: 5, end: 15 };
  const intervalB = { start: 10, end: 20 };
  console.log(mergeIntervals(intervalA, intervalB)); // { start: 5, end: 20 }
};

test();
