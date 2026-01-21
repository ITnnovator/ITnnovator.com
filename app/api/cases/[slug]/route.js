import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Case from '@/models/Case';

// GET: Fetch by Slug (Public) OR by ID (if needed, but usually slug for cases)
export async function GET(req, { params }) {
    try {
        await dbConnect();
        const { slug } = await params;

        // Try to find by slug first
        let project = await Case.findOne({ slug });

        // If not found, and it looks like an ID, try ID (fallback)
        if (!project && slug.match(/^[0-9a-fA-F]{24}$/)) {
            project = await Case.findById(slug);
        }

        if (!project) {
            return NextResponse.json({ error: 'Case not found' }, { status: 404 });
        }

        return NextResponse.json(project);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

// DELETE: Delete by ID (Admin) - "slug" param here will actually be the ID
export async function DELETE(req, { params }) {
    try {
        const { slug } = await params; // This "slug" is actually the ID passed in the URL
        await dbConnect();
        await Case.findByIdAndDelete(slug);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

// PUT: Update by ID (Admin) - "slug" param here is the ID
export async function PUT(req, { params }) {
    try {
        const { slug } = await params;
        const body = await req.json();
        await dbConnect();
        const updatedCase = await Case.findByIdAndUpdate(slug, body, { new: true });
        return NextResponse.json(updatedCase);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
