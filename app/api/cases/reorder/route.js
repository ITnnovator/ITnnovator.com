import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Case from '@/models/Case';

export async function PUT(req) {
    try {
        await dbConnect();
        const { items } = await req.json();

        // Use Promise.all for parallel updates
        await Promise.all(
            items.map((item) =>
                Case.findByIdAndUpdate(item._id, { order: item.order })
            )
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
