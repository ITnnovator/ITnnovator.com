import mongoose from 'mongoose';

// Force model recompilation in dev to pick up schema changes
if (process.env.NODE_ENV === 'development') delete mongoose.models.Service;

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Please provide a title'], trim: true },
  slug: { type: String, required: [true, 'Please provide a slug'], unique: true, trim: true },
  icon: { type: String },
  heroImage: { type: String }, // Main Cover/Hero Image
  description: { type: String, required: [true, 'Please provide a description'] }, // Main rich text or long description
  features: [{ type: String }], // Bullet points
  process: [{
    title: String,
    text: String,
    image: String
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

ServiceSchema.pre('save', function () {
  this.updatedAt = Date.now();
});

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema);
