import dbConnect from "@/lib/db";
import Lead from "@/models/Lead";

export async function GET(req, { params }) {
    try {
        const { id } = await params;
        await dbConnect();
        const lead = await Lead.findById(id);

        if (!lead) {
            return new Response(JSON.stringify({ error: "Lead not found" }), { status: 404 });
        }

        return new Response(JSON.stringify(lead), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export async function PATCH(req, { params }) {
    try {
        const { id } = await params;
        const data = await req.json(); // { status: "...", internalNotes: "..." }

        await dbConnect();
        const lead = await Lead.findByIdAndUpdate(
            id,
            { $set: data },
            { new: true }
        );

        if (!lead) {
            return new Response(JSON.stringify({ error: "Lead not found" }), { status: 404 });
        }

        return new Response(JSON.stringify(lead), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
