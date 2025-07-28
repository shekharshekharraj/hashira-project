const fs = require('fs');
const { parseCustomBase } = require('../utils/baseConvert');
const { lagrange } = require('../utils/lagrange');
const Secret = require('../Models/Secret');

async function computeBoth(req, res) {
  try {
    const tc1 = JSON.parse(fs.readFileSync('./data/testcase1.json'));
    const tc2 = JSON.parse(fs.readFileSync('./data/testcase2.json'));

    function computeSecret(tc) {
      const { keys, ...rest } = tc;
      const entries = Object.entries(rest).slice(0, keys.n);
      const points = entries.map(([xStr, obj]) => {
        const x = BigInt(xStr);
        const y = parseCustomBase(obj.value, parseInt(obj.base));
        return [x, y];
      }).slice(0, keys.k);
      const c = lagrange(points);
      return c.toString();
    }

    const result1 = computeSecret(tc1);
    const result2 = computeSecret(tc2);

    const saved = await Secret.create({ input: [tc1, tc2], result: [result1, result2] });
    res.json({ result1, result2, saved });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { computeBoth };
