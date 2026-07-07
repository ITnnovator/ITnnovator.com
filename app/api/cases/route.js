import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Case from '@/models/Case';
import { verifyAdminAuth } from '@/lib/auth-middleware';

export async function GET() {
    await dbConnect();
    const cases = await Case.find({}).sort({ order: 1, createdAt: -1 });
    return NextResponse.json(cases);
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
        const newCase = await Case.create(body);
        return NextResponse.json(newCase, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
