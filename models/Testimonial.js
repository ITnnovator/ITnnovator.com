import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
  },
  title: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  quote: {
    type: String,
    required: [true, 'Please provide a quote'],
  },
  avatar: {
    type: String, // Path to image
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5,
  },
  isFeatured: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);
