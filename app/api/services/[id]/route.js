import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Service from '@/models/Service';

export async function DELETE(req, { params }) {
    try {
        const { id } = await params;
        await dbConnect();
        await Service.findByIdAndDelete(id);
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
        const updatedService = await Service.findByIdAndUpdate(id, body, { new: true });
        return NextResponse.json(updatedService);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
