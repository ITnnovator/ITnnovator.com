import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Testimonial from '@/models/Testimonial';
import { verifyAdminAuth } from '@/lib/auth-middleware';

export async function GET() {
    await dbConnect();
    const testimonials = await Testimonial.find({}).sort({ createdAt: -1 });
    return NextResponse.json(testimonials);
}

export async function POST(req) {
    // Verify admin authentication
    const auth = await verifyAdminAuth(req);
    if (!auth.valid) {
        return NextResponse.json({ error: auth.error }, { status: auth.status });
    }

    try {
        await dbConnect();
        const body = await req.json();
        const newTestimonial = await Testimonial.create(body);
        return NextResponse.json(newTestimonial, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
