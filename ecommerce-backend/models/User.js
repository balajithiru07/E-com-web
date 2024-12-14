const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Correct module name

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }, // Fix typo
    password: { type: String, required: true },
    isAdmin:{type:Boolean, default:false} // Correct type
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) return next(); // Skip if password is not modified

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next();
  } catch (error) {
    next(error); // Pass error to middleware
  }
});

module.exports = mongoose.model('User', userSchema);
