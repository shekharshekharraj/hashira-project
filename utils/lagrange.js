// server/utils/lagrange.js

function lagrange(points) {
  let result = 0n;

  for (let i = 0; i < points.length; i++) {
    let [xi, yi] = points[i];
    let term = yi;

    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        let [xj] = points[j];
        term *= 0n - xj;
        term /= xi - xj;
      }
    }

    result += term;
  }

  return result;
}

// ✅ Correct export
module.exports = { lagrange };
