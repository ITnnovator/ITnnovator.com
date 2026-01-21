import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a service title'],
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
    },
    icon: {
        type: String,
        required: [false, 'Icon class or URL'],
    },
    image: {
        type: String,
        required: [false, 'Service image URL'],
    },
    active: {
        type: Boolean,
        default: true,
    },
    order: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema);
