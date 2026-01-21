import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Service from '@/models/Service';

export async function GET() {
    await dbConnect();
    const services = await Service.find({}).sort({ createdAt: -1 });
    return NextResponse.json(services);
}

export async function POST(req) {
    try {
        await dbConnect();
        const body = await req.json();
        const newService = await Service.create(body);
        return NextResponse.json(newService, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
