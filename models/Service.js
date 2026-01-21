import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, 'Please provide a slug'],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  icon: {
    type: String, // SVG or PNG icon
    required: [true, 'Please provide an icon path'],
  },
  image: {
    type: String, // Main Cover Image
    required: [true, 'Please provide an image path'],
  },
  points: [{
    type: String,
  }],
  images: [{
    type: String,
  }],
  process: [{
    title: String,
    description: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

ServiceSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema);
