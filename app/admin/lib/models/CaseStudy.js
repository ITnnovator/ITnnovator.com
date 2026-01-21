import mongoose from 'mongoose';

const CaseStudySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title'],
        trim: true,
    },
    client: {
        type: String,
        required: [true, 'Please provide a client name'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
    },
    image: {
        type: String,
        required: [true, 'Please provide a main image'],
    },
    category: {
        type: String,
        required: [true, 'Please provide a category'],
    },
    link: {
        type: String,
        required: false,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.CaseStudy || mongoose.model('CaseStudy', CaseStudySchema);
