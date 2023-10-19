// // models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model('User', userSchema);


// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: Buffer, // Store binary data for hashed password
//     required: true,
//   },
// });

// // // Indexes for performance (if required)
// // userSchema.index({ username: 1 });
// // userSchema.index({ email: 1 });

// module.exports = mongoose.model('User', userSchema);
