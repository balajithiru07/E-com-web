const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust the path as needed

mongoose
  .connect('your-mongodb-uri-here', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch((err) => console.error(err));

const testUser = async () => {
  try {
    const user = new User({
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
    });

    await user.save();
    console.log('User created successfully');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

testUser();
