// Run with: node scripts/create-admin.js
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Manually parse .env
const envPath = path.resolve(__dirname, '../.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const envConfig = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    const key = match[1];
    let value = match[2] || '';
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    envConfig[key] = value;
  }
});

const MONGODB_URI = envConfig.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('No MONGODB_URI found in .env');
  process.exit(1);
}

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'admin' },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

async function createAdmin() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to DB...');

    const email = 'admin@itnnovator.com';
    const password = 'admin';
    const hashedPassword = await bcrypt.hash(password, 10);

    // Remove existing if any
    await User.deleteOne({ email });

    // Create new
    await User.create({
      email,
      password: hashedPassword,
      role: 'admin'
    });

    console.log('-------------------------------------------');
    console.log('SUCCESS! Admin user created/reset.');
    console.log('Email: ' + email);
    console.log('Password: ' + password);
    console.log('-------------------------------------------');
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

createAdmin();
