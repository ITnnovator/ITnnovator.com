import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Testimonial from '@/models/Testimonial';

export async function DELETE(req, { params }) {
    try {
        const { id } = await params;
        await dbConnect();
        await Testimonial.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function PUT(req, { params }) {
    try {
        const { id } = await params;
        const body = await req.json();
        await dbConnect();
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, body, { new: true });
        return NextResponse.json(updatedTestimonial);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
