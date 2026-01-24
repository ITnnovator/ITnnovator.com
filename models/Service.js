import mongoose from 'mongoose';

// Force model recompilation in dev to pick up schema changes
if (process.env.NODE_ENV === 'development') delete mongoose.models.Service;

const ServiceSchema = new mongoose.Schema({
  // Basic Info
  title: { type: String, required: [true, 'Please provide a title'], trim: true },
  slug: { type: String, required: [true, 'Please provide a slug'], unique: true, trim: true },
  icon: { type: String },
  alt: { type: String }, // SEO Alt Text
  description: { type: String }, // Main summary

  // Hero Section
  heroImg: { type: String },
  herotitle: { type: String },
  color: { type: String }, // Theme color

  // Intro Section
  intro: {
    heading: String,
    text: String,
    bullets: [{ type: String }]
  },

  // CTA
  cta: { type: String },

  // Process / Features
  points: [{ type: String }], // Top summary points

  process: [{
    title: String,
    color: String,
    img: String,
    text: String
  }],

  // Detailed Blocks (New)
  blockImg: { type: String },
  blocktext: [{
    title: String,
    text: String,
    bullets: [{ type: String }]
  }],

  // Promise Section
  heropromisetitle: { type: String },
  promisedescription: { type: String },

  // Explore Footer
  exploretitile: { type: String },
  explorepoints: {
    points: [{ type: String }]
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

ServiceSchema.pre('save', function () {
  this.updatedAt = Date.now();
});

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema);
