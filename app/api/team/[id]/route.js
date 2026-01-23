import dbConnect from "@/lib/db";
import Team from "@/models/Team";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        await dbConnect();
        const { id } = await params;
        const teamMember = await Team.findById(id);
        if (!teamMember) {
            return NextResponse.json({ error: "Team member not found" }, { status: 404 });
        }
        return NextResponse.json(teamMember);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    try {
        const { id } = await params;
        const body = await req.json();
        await dbConnect();
        const teamMember = await Team.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        if (!teamMember) {
            return NextResponse.json({ error: "Team member not found" }, { status: 404 });
        }
        return NextResponse.json(teamMember);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    try {
        const { id } = await params;
        await dbConnect();
        const teamMember = await Team.findByIdAndDelete(id);
        if (!teamMember) {
            return NextResponse.json({ error: "Team member not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "Team member deleted" });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
