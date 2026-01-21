import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Hero from '@/models/Hero';

// GET: Fetch the active hero
export async function GET() {
    try {
        await dbConnect();
        const hero = await Hero.findOne({ isActive: true }).sort({ createdAt: -1 });
        return NextResponse.json(hero || { type: 'video', url: '/webImages/pixel-intro-dark.mp4' }); // Default fallback
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch hero' }, { status: 500 });
    }
}

// POST: Update/Create Hero
export async function POST(req) {
    try {
        await dbConnect();
        const body = await req.json();

        // We only want ONE active hero for now.
        // In a more complex system, we might just mark others as inactive, but here we can just update the "latest" or create new.
        // Simpler approach: Create a new record and retrieval always gets the latest active one.

        const newHero = await Hero.create({
            type: body.type,
            url: body.url,
            headline: body.headline,
            isActive: true
        });

        return NextResponse.json(newHero);
    } catch (error) {
        console.error('Hero Update Error:', error);
        return NextResponse.json({ error: 'Failed to update hero' }, { status: 500 });
    }
}
