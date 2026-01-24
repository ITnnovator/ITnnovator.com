import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a service title'],
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    slug: {
        type: String,
        required: [true, 'Please provide a slug'],
        unique: true,
        trim: true,
    },
    icon: {
        type: String,
        required: [false, 'Icon class or URL'],
    },
    alt: {
        type: String,
        required: [false, 'Alt text for icon/image'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a short description'],
    },
    points: [{
        type: String,
        trim: true,
    }],
    cta: {
        type: String,
        default: 'Explore Services',
    },
    heroImg: {
        type: String,
    },
    herotitle: {
        type: String,
        required: [false, 'Hero Title'],
    },
    color: {
        type: String,
        default: '#000000',
    },
    intro: {
        heading: String,
        text: String,
        bullets: [String],
    },
    process: [{
        title: String,
        color: String,
        img: String,
        text: String,
    }],
    blockImg: {
        type: String,
    },
    blocktext: [{
        title: String,
        text: String,
        bullets: [String],
    }],
    heropromisetitle: {
        type: String,
    },
    promisedescription: {
        type: String,
    },
    exploretitile: {
        type: String,
    },
    explorepoints: {
        points: [String],
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
