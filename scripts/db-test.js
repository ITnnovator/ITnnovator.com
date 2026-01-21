// Run with: node scripts/db-test.js
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Manually parse .env to avoid 'dotenv' dependency
const envPath = path.resolve(__dirname, '../.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const envConfig = {};

envContent.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w]+)\s*=\s*(.*)?\s*$/);
    if (match) {
        const key = match[1];
        let value = match[2] || '';
        if (value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1);
        }
        envConfig[key] = value;
    }
});

const uri = envConfig.MONGODB_URI;

console.log('---------------------------------------------------');
console.log('Testing connection to:', uri ? uri.replace(/:([^:@]{1,})@/, ':****@') : 'UNDEFINED');
console.log('---------------------------------------------------');

if (!uri) {
    console.error('ERROR: MONGODB_URI is not defined in .env');
    process.exit(1);
}

mongoose.connect(uri)
    .then(() => {
        console.log('SUCCESS: Connected to MongoDB!');
        console.log('Database name:', mongoose.connection.name);
        process.exit(0);
    })
    .catch((err) => {
        console.error('CONNECTION FAILED:');
        console.error(err.message);
        console.error('Code:', err.code);
        console.error('Name:', err.name);
        process.exit(1);
    });
