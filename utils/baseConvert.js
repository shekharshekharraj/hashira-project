// server/utils/baseConvert.js

function parseCustomBase(strValue, base) {
  const digits = [...strValue].map(ch => {
    const d = parseInt(ch, 36); // handles 0-9, a-z
    if (isNaN(d)) throw new Error(`Invalid character '${ch}'`);
    return BigInt(d);
  });

  let val = 0n;
  const b = BigInt(base);
  for (let d of digits) {
    val = val * b + d;
  }
  return val;
}

module.exports = { parseCustomBase };  // ✅ correctly exported
