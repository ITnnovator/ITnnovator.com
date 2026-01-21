import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Case from '@/models/Case';

export async function GET() {
    await dbConnect();
    const cases = await Case.find({}).sort({ createdAt: -1 });
    return NextResponse.json(cases);
}

export async function POST(req) {
    try {
        await dbConnect();
        const body = await req.json();
        const newCase = await Case.create(body);
        return NextResponse.json(newCase, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
