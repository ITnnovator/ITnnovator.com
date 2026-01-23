import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const { slug } = await params;
        await dbConnect();
        const blog = await Blog.findOne({ slug });
        if (!blog) return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        return NextResponse.json(blog);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
