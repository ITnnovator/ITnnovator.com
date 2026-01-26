
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Try to find .env in CWD
const envPath = path.resolve(process.cwd(), '.env');
console.log('Looking for .env at:', envPath);

if (fs.existsSync(envPath)) {
    console.log('Found .env file');
    const envContent = fs.readFileSync(envPath, 'utf8');
    const lines = envContent.split('\n');

    for (const line of lines) {
        const trimmedLine = line.trim();
        if (!trimmedLine || trimmedLine.startsWith('#')) continue;

        // Find the first equals sign
        const equalsIndex = trimmedLine.indexOf('=');
        if (equalsIndex === -1) continue;

        const key = trimmedLine.substring(0, equalsIndex).trim();
        let value = trimmedLine.substring(equalsIndex + 1).trim();

        // Remove quotes if they wrap the value
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }

        if (key === 'MONGODB_URI') {
            console.log('Found MONGODB_URI in .env');
            process.env.MONGODB_URI = value;
        }
    }
} else {
    console.log('No .env file found at CWD');
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('Please define the MONGODB_URI environment variable');
    process.exit(1);
}

const ServiceSchema = new mongoose.Schema({
    title: String,
}, { strict: false });

const Service = mongoose.models.Service || mongoose.model("Service", ServiceSchema);

async function deleteAllServices() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        const result = await Service.deleteMany({});
        console.log(`Deleted ${result.deletedCount} services.`);

    } catch (error) {
        console.error('Error deleting services:', error);
    } finally {
        await mongoose.connection.close();
        console.log('Disconnected from MongoDB');
        process.exit(0);
    }
}

deleteAllServices();
