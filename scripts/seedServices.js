
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// --- Env Loading (Robust) ---
const envPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx > -1) {
            const key = trimmed.substring(0, eqIdx).trim();
            let val = trimmed.substring(eqIdx + 1).trim();
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                val = val.slice(1, -1);
            }
            process.env[key] = val;
        }
    });
}

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) { console.error('Missing MONGODB_URI'); process.exit(1); }

// --- Service Schema Definition (Matches app schema) ---
// Note: We redefine it here to avoid module import issues with ES6/CommonJS mismatch
const ServiceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    serviceType: { type: String, default: "primary" },
    isFeatured: { type: Boolean, default: false },
    sortOrder: { type: Number, default: 0 },
    icon: String,
    alt: String,
    metaTitle: String,
    metaDescription: String,
    canonicalUrl: String,
    noindex: Boolean,
    hero: {
        headline: String,
        subheadline: String,
        image: String,
        ctas: [{ text: String, link: String, variant: String }]
    },
    overview: String,
    features: [String],
    whoIsFor: [{ text: String, icon: String }],
    whatsIncluded: [{ title: String, description: String, icon: String }],
    processSteps: [{ stepName: String, description: String, image: String }],
    tools: [{ name: String, logo: String }],
    whyChooseUs: [{ title: String, description: String, icon: String }],
    faqs: [{ question: String, answer: String }],
}, { strict: false }); // strict: false allows generic fields if schema slightly drifts

const Service = mongoose.models.Service || mongoose.model("Service", ServiceSchema);

// --- Seeder ---
async function seed() {
    try {
        // 1. Read Data
        const dataPath = path.resolve(__dirname, 'services_data.json');
        if (!fs.existsSync(dataPath)) {
            throw new Error(`Data file not found at ${dataPath}. Please create it based on example_services.json`);
        }
        const rawData = fs.readFileSync(dataPath, 'utf8');
        const services = JSON.parse(rawData);

        // 2. Connect
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        // 3. Clear & Insert
        await Service.deleteMany({}); // Uncomment to wipe before seed
        console.log('Cleared existing services');

        const result = await Service.insertMany(services);
        console.log(`Successfully inserted ${result.length} services!`);

    } catch (error) {
        if (error.code === 11000) {
            console.error('Error: Duplicate slug found. Detailed error:', error.message);
        } else {
            console.error('Error seeding data:', error);
        }
    } finally {
        await mongoose.connection.close();
        process.exit(0);
    }
}

seed();
