const mongoose = require('mongoose');
const SecretSchema = new mongoose.Schema({
  input: { type: Array, required: true },
  result: { type: Array, required: true }
}, { timestamps: true });
module.exports = mongoose.model('Secret', SecretSchema);
