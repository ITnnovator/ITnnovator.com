const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Manually parse .env.local to avoid dotenv dependency
let MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    try {
        const envPath = path.resolve(__dirname, '../.env');
        if (fs.existsSync(envPath)) {
            const envConfig = fs.readFileSync(envPath, 'utf8');
            const lines = envConfig.split('\n');
            for (const line of lines) {
                const parts = line.split('=');
                if (parts.length >= 2) {
                    const key = parts[0].trim();
                    if (key === 'MONGODB_URI') {
                        let value = parts.slice(1).join('=').trim();
                        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                            value = value.slice(1, -1);
                        }
                        MONGODB_URI = value;
                        break;
                    }
                }
            }
        }
    } catch (e) {
        console.warn('Could not read .env file:', e.message);
    }
}

if (!MONGODB_URI) {
    console.error("Please define the MONGODB_URI environment variable in .env");
    process.exit(1);
}

const BlogSchema = new mongoose.Schema({
    title: String,
    slug: { type: String, unique: true },
    excerpt: String,
    content: String,
    coverImage: String,
    author: String,
    tags: [String],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

async function importBlogs() {
    try {
        // Read blogs.json from the root directory
        const dataPath = path.resolve(__dirname, '../blogs.json');
        if (!fs.existsSync(dataPath)) {
            console.error('Error: blogs.json not found in the root directory.');
            console.log('Please create blogs.json with an array of blog objects.');
            process.exit(1);
        }

        const rawData = fs.readFileSync(dataPath, 'utf8');
        const blogs = JSON.parse(rawData);

        if (!Array.isArray(blogs)) {
            console.error('Error: blogs.json must contain an array of objects.');
            process.exit(1);
        }

        console.log(`Found ${blogs.length} blogs to import...`);

        await mongoose.connect(MONGODB_URI);
        console.log('Connected to DB');

        for (const blog of blogs) {
            if (!blog.slug || !blog.title) {
                console.warn(`Skipping blog without title or slug: ${JSON.stringify(blog.title || 'Untitled')}`);
                continue;
            }

            const exists = await Blog.findOne({ slug: blog.slug });
            if (exists) {
                console.log(`Updating: ${blog.title}`);
                await Blog.updateOne({ slug: blog.slug }, { ...blog, updatedAt: new Date() });
            } else {
                console.log(`Creating: ${blog.title}`);
                await Blog.create(blog);
            }
        }

        console.log('Bulk import completed!');
        process.exit(0);
    } catch (error) {
        console.error('Error importing blogs:', error);
        process.exit(1);
    }
}

importBlogs();
