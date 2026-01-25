import mongoose from 'mongoose';

// Force model rebuild in dev to pick up schema changes
if (mongoose.models.Case) {
  delete mongoose.models.Case;
}

const CaseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String }, // Used for list view
  status: { type: String, enum: ['published', 'draft'], default: 'published' },
  order: { type: Number, default: 0 },

  // Images
  imageDesktop: { type: String }, // Used for list view desktop
  imageMobile: { type: String },  // Used for list view mobile
  topImg: { type: String }, // Legacy/Fallback

  // Detail Page Images
  innerImg: { type: String }, // Top image inside detail page
  hero: { type: String },     // Hero banner inside detail page

  // Taxonomy
  tags: [{ type: String }],
  categories: [{ type: String }],

  // Sidebar Data (formerly 'Sidebar' array in JSON)
  client: { type: String },
  year: { type: String },
  link: { type: String },

  // "sidebarr" - What we did
  services: [{ type: String }], // 'vad' in JSON

  // Content Sections
  sectionone: {
    type: { type: String, default: 'intro' },
    heading: String,
    text: String,
  },
  sectiontwo: {
    img: String,
    heading: String,
    text: String,
  },
  sectionthree: {
    img: String,
    heading: String,
    text: String,
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

CaseSchema.pre('save', async function () {
  this.updatedAt = Date.now();
  if (this.imageDesktop && !this.topImg) {
    this.topImg = this.imageDesktop;
  }
});

export default mongoose.models.Case || mongoose.model('Case', CaseSchema);
