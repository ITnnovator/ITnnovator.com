import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
    {
        contact: {
            name: { type: String, required: true },
            email: { type: String, required: true },
            phone: { type: String, required: true },
            company: String,
            note: String, // from contact step
            method: String,
        },
        projectDetails: {
            type: { type: String },
            features: [String],
            otherFeatures: String, // New from Step 2

            step3: { type: Map, of: mongoose.Schema.Types.Mixed }, // Flexible Step 3 answers
            additionalNotes: String, // New from Step 3

            // Legacy fields kept for compatibility or reference if needed, but step3 map supersedes
            design: {
                designNeeded: Boolean,
                contentNeeded: Boolean,
                brandingNeeded: Boolean,
            },

            timeline: String,
            budget: String,
        },
        estimate: {
            costRange: String, // Localized
            baseCostRange: String, // PKR Base
            timelineRange: String,
            complexity: String,
            score: Number,
        },
        currency: { type: String, default: "PKR" },
        country: String,
        submissionId: { type: String, unique: true, sparse: true }, // Index for Deduplication
        step3Version: { type: String, default: "v1" },
        step3Responses: { type: Map, of: mongoose.Schema.Types.Mixed }, // Store raw step 3 for version safety

        status: {
            type: String,
            enum: ["New", "Contacted", "Qualified", "Won", "Lost"],
            default: "New",
        },
        internalNotes: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);
