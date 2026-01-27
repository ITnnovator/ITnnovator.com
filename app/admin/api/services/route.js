import dbConnect from '../../lib/mongodb';
import Service from '@/models/Service';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET() {
    await dbConnect();

    try {
        const services = await Service.find({}).sort({ sortOrder: 1, createdAt: -1 });
        return NextResponse.json({ success: true, data: services });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function POST(request) {
    await dbConnect();

    try {
        const body = await request.json();
        const service = await Service.create(body);

        revalidatePath('/'); // Revalidate homepage
        revalidatePath('/services');

        return NextResponse.json({ success: true, data: service }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
