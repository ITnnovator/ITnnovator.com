import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide the person\'s name'],
        trim: true,
    },
    role: {
        type: String,
        required: [true, 'Please provide their role/company'],
    },
    content: {
        type: String,
        required: [true, 'Please provide the testimonial content'],
    },
    image: {
        type: String,
        required: false,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5,
    },
    active: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);
