import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";
import { verifyAdminAuth } from "@/lib/auth-middleware";

export async function GET() {
    try {
        await dbConnect();
        const blogs = await Blog.find({}).sort({ createdAt: -1 }); // Newest first
        return NextResponse.json(blogs);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    // Verify admin authentication
    const auth = await verifyAdminAuth(req);
    if (!auth.valid) {
        return NextResponse.json({ error: auth.error }, { status: auth.status });
    }

    try {
        const body = await req.json();
        await dbConnect();

        // Basic dup check for slug if needed, but unique constraint handles it mostly
        const exists = await Blog.findOne({ slug: body.slug });
        if (exists) {
            return NextResponse.json({ error: "Slug already exists" }, { status: 400 });
        }

        const blog = await Blog.create(body);
        return NextResponse.json(blog, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
