import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Client from '@/models/Client';
import { verifyAdminAuth } from '@/lib/auth-middleware';

export async function GET() {
    await dbConnect();
    const clients = await Client.find({}).sort({ order: 1 });
    return NextResponse.json(clients);
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
        const newClient = await Client.create(body);
        return NextResponse.json(newClient, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
