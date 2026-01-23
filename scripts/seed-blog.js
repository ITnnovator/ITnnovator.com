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
                        // Reconstruct value in case it contained =
                        let value = parts.slice(1).join('=').trim();
                        // Remove quotes
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
        console.warn('Could not read .env.local file:', e.message);
    }
}

if (!MONGODB_URI) {
    console.error("Please define the MONGODB_URI environment variable in .env.local");
    process.exit(1);
}

const BlogSchema = new mongoose.Schema({
    title: String,
    slug: String,
    excerpt: String,
    content: String,
    coverImage: String,
    author: String,
    tags: [String],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

async function seed() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to DB');

        const blogPost = {
            title: "The Future of Web Development with AI",
            slug: "future-of-web-development-with-ai",
            excerpt: "Artificial Intelligence is revolutionizing how we build websites. From automated coding assistants to dynamic content generation, explore how AI is reshaping the digital landscape.",
            coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
            author: "Itnnovator Team",
            tags: ["Web Development", "AI", "Technology"],
            content: `
        <p>The intersection of <strong>Web Development</strong> and <strong>Artificial Intelligence (AI)</strong> is creating a paradigm shift in how digital experiences are crafted. Gone are the days when AI was just a futuristic concept; today, it is an integral part of the developer's toolkit.</p>

        <h3>1. AI-Powered Coding Assistants</h3>
        <p>Tools like GitHub Copilot and ChatGPT are transforming how code is written. Developers can now generate boilerplate code, debug complex functions, and even refactor entire codebases with simple natural language prompts. This boosts productivity and allows developers to focus on higher-level logic rather than syntax.</p>

        <h3>2. Personalized User Experiences</h3>
        <p>AI algorithms analyze user behavior in real-time to serve personalized content. Whether it's product recommendations on an e-commerce site or curated articles on a news portal, AI ensures that every user gets a unique, tailored experience that improves engagement and conversion rates.</p>

        <h3>3. Automated Testing and Optimization</h3>
        <p>AI-driven testing tools can automatically detect bugs, visual regressions, and performance bottlenecks across thousands of device combinations. This ensures that web applications are robust, fast, and reliable before they even reach production.</p>

        <h3>The Road Ahead</h3>
        <p>As we look to the future, the synergy between AI and web development will only deepen. We can expect to see self-healing websites, voice-activated interfaces, and hyper-personalized designs generated on the fly. At <a href='/'>Itnnovator</a>, we are at the forefront of this revolution, leveraging cutting-edge AI technologies to build the next generation of digital solutions.</p>
      `
        };

        const exists = await Blog.findOne({ slug: blogPost.slug });
        if (exists) {
            console.log('Blog post already exists. Updating...');
            await Blog.updateOne({ slug: blogPost.slug }, blogPost);
        } else {
            await Blog.create(blogPost);
            console.log('Blog post created!');
        }

        console.log('Seeding completed');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seed();
