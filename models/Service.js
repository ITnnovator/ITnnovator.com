import mongoose from "mongoose";

// Force model recompilation in dev to pick up schema changes
if (process.env.NODE_ENV === "development") delete mongoose.models.Service;

const ServiceSchema = new mongoose.Schema({
  // --- Core Identity ---
  title: {
    type: String,
    required: [true, "Please provide a title"],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, "Please provide a slug"],
    unique: true,
    trim: true,
  },
  serviceType: {
    type: String,
    enum: ["primary", "supporting", "hidden"],
    default: "primary",
  },
  isFeatured: { type: Boolean, default: false }, // Show on Homepage
  sortOrder: { type: Number, default: 0 },
  icon: { type: String }, // SVG or URL
  alt: { type: String }, // Icon/Image Alt Text

  // --- SEO & Search ---
  metaTitle: { type: String },
  metaDescription: { type: String },
  primaryKeyword: { type: String }, // Internal use only
  canonicalUrl: { type: String },
  noindex: { type: Boolean, default: false },
  redirectFrom: [{ type: String }], // URLs to 301 redirect to this service
  ogTags: {
    title: String,
    description: String,
    image: String,
  },

  // --- Hero Section ---
  hero: {
    headline: { type: String },
    subheadline: { type: String },
    image: { type: String },
    ctas: [
      {
        text: String,
        link: String,
        variant: {
          type: String,
          enum: ["primary", "secondary"],
          default: "primary",
        },
      },
    ],
  },

  // --- Content Blocks ---
  overview: { type: String }, // Rich Text HTML

  whoIsFor: [
    {
      text: String,
      icon: String,
    },
  ],

  whatsIncluded: [
    {
      title: String,
      description: String,
      icon: String,
    },
  ],

  processSteps: [
    {
      stepName: String, // e.g., "01 Discovery"
      description: String,
      image: String,
    },
  ],

  tools: [
    {
      name: String,
      logo: String, // URL
    },
  ],

  whyChooseUs: [
    {
      title: String,
      description: String,
      icon: String, // Optional
    },
  ],

  faqs: [
    {
      question: String,
      answer: String,
    },
  ],

  // --- Relations ---
  relatedCaseStudies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Case",
    },
  ],
  relatedServices: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
    },
  ],

  // --- Legacy Fields (Kept for safe migration/fallback) ---
  description: { type: String },
  heroImg: { type: String },
  herotitle: { type: String },
  color: { type: String },
  cta: { type: String },
  intro: {
    heading: String,
    text: String,
    bullets: [{ type: String }],
  },
  points: [{ type: String }],
  process: [
    {
      title: String,
      color: String,
      img: String,
      text: String,
    },
  ],
  blockImg: { type: String },
  blocktext: [
    {
      title: String,
      text: String,
      bullets: [{ type: String }],
    },
  ],
  heropromisetitle: { type: String },
  promisedescription: { type: String },
  exploretitile: { type: String },
  explorepoints: {
    points: [{ type: String }],
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

ServiceSchema.pre('save', function (next) {
  this.updatedAt = Date.now();

  // Content Readiness Check (SEO Safeguard)
  // Calculate approximate word count from key content fields
  const textFields = [
    this.overview || '',
    this.description || '',
    this.intro?.text || '',
    ...(this.processSteps?.map(s => s.description) || []),
    ...(this.whatsIncluded?.map(s => s.description) || []),
    ...(this.whyChooseUs?.map(s => s.description) || [])
  ];

  const fullText = textFields.join(' ');
  const wordCount = fullText.trim().split(/\s+/).length;

  // If content is thin (< 800 words) and it's a Primary service, force noindex to prevent indexing low-quality pages.
  // Exception: If it's already hidden or supporting, we likely don't care as much, but good practice to hide thin pages.
  if (wordCount < 800 && this.serviceType === 'primary') {
    this.noindex = true;
  }
  
  next();
});

export default mongoose.models.Service ||
  mongoose.model("Service", ServiceSchema);
