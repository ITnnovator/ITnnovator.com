import mongoose from 'mongoose';

const CaseSchema = new mongoose.Schema({
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
  topImg: {
    type: String,
    required: [true, 'Please provide a main image'],
  },
  images: [{
    type: String,
  }],
  tags: [{
    type: String,
  }],
  categories: [{
    type: String,
  }],
  client: {
    type: String,
  },
  year: {
    type: String,
  },
  link: {
    type: String,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

CaseSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.Case || mongoose.model('Case', CaseSchema);
