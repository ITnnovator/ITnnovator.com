import dbConnect from "@/lib/db";
import Team from "@/models/Team";
import { NextResponse } from "next/server";
import { verifyAdminAuth } from "@/lib/auth-middleware";

export async function POST(req) {
    // Verify admin authentication
    const auth = await verifyAdminAuth(req);
    if (!auth.valid) {
        return NextResponse.json({ error: auth.error }, { status: auth.status });
    }

    try {
        const body = await req.json();
        await dbConnect();
        const teamMember = await Team.create(body);
        return NextResponse.json(teamMember, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET() {
    try {
        await dbConnect();
        const teamMembers = await Team.find({}).sort({ createdAt: 1 });
        return NextResponse.json(teamMembers);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
