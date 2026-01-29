import mongoose from 'mongoose';

// Force model recompilation in dev to pick up schema changes
if (process.env.NODE_ENV === 'development') delete mongoose.models.Blog;

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'Please provide a title'], trim: true },
    slug: { type: String, required: [true, 'Please provide a slug'], unique: true, trim: true },
    excerpt: { type: String, required: [true, 'Please provide a short excerpt'] },
    content: { type: String, required: [true, 'Please provide content'] }, // Rich text / HTML
    coverImage: { type: String },
    author: { type: String, default: 'Itnnovator Team' },
    tags: [{ type: String }],

    // SEO Fields
    metaTitle: { type: String },
    metaDescription: { type: String },
    canonicalUrl: { type: String },
    noindex: { type: Boolean, default: false },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

BlogSchema.pre('save', function () {
    this.updatedAt = Date.now();
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
