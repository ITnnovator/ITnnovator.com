import mongoose from 'mongoose';

const HeroSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['video', 'image'],
        required: true,
        default: 'video'
    },
    url: {
        type: String, // Path to file (e.g., /uploads/banner.mp4)
        required: true
    },
    headline: {
        type: String, // Optional override for headline
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Ensure only one active hero at a time logic can be handled in API
export default mongoose.models.Hero || mongoose.model('Hero', HeroSchema);
