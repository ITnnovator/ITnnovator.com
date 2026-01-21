import mongoose from 'mongoose';

const ContactSubmissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
    },
    subject: {
        type: String,
        required: false,
    },
    message: {
        type: String,
        required: [true, 'Please provide a message'],
    },
    status: {
        type: String,
        enum: ['unread', 'read', 'replied', 'archived'],
        default: 'unread',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.ContactSubmission || mongoose.model('ContactSubmission', ContactSubmissionSchema);
