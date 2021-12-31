const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/activefacture',
  { useNewUrlParser: true, useUnifiedTopology: true },
  async () => {
    try {
      const db = await mongoose.connection;
      console.log('Connected to', db.name);
    } catch (error) {
      console.error('Error connecting to database', error);
    }
  }
);

module.exports = mongoose;
