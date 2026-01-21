import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Client from '@/models/Client';

export async function GET() {
    await dbConnect();
    const clients = await Client.find({}).sort({ order: 1 });
    return NextResponse.json(clients);
}

export async function POST(req) {
    try {
        await dbConnect();
        const body = await req.json();
        const newClient = await Client.create(body);
        return NextResponse.json(newClient, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
