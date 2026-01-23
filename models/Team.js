import mongoose from 'mongoose';

// Force model recompilation in dev to pick up schema changes
if (process.env.NODE_ENV === 'development') delete mongoose.models.Team;

const TeamSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Please provide a name'], trim: true },
    role: { type: String, required: [true, 'Please provide a role'], trim: true },
    email: { type: String, trim: true },
    image: { type: String }, // URL to the image
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

TeamSchema.pre('save', function () {
    this.updatedAt = Date.now();
});

export default mongoose.models.Team || mongoose.model('Team', TeamSchema);
