import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import Case from '@/models/Case';
import { CASES } from '@/data/casesData';
import bcrypt from 'bcryptjs';

export async function GET() {
    try {
        await dbConnect();

        // 1. Seed Admin
        const email = 'admin@itnnovator.com';
        const password = 'admin';
        let userMessage = 'Admin already exists';

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            const hashedPassword = await bcrypt.hash(password, 10);
            await User.create({ email, password: hashedPassword, role: 'admin' });
            userMessage = 'Admin created';
        }

        // 2. Seed Cases
        let casesMessage = 'Cases already exist';
        const caseCount = await Case.countDocuments();

        if (caseCount === 0) {
            const casesToInsert = CASES.map(c => ({
                title: c.title,
                slug: c.slug,
                description: c.sectionone?.text?.substring(0, 150) + '...' || '', // Fallback description

                // Map images
                imageDesktop: c.topImg,
                imageMobile: c.topImg, // Fallback
                topImg: c.topImg,
                innerImg: c.innerImg,
                hero: c.hero,

                // Map other fields
                client: c.Sidebar?.[0]?.text || '',
                year: c.Sidebar?.[1]?.year || '',
                // Fix services map: logic in legacy component was specific, here we try to grab from sidebarr.vad
                services: c.sidebarr?.vad || [],
                link: c.Sidebar?.[3]?.link || '',

                categories: c.categories || [],
                tags: c.tags || [],

                sectionone: {
                    heading: c.sectionone?.heading,
                    text: c.sectionone?.text
                },
                sectiontwo: {
                    heading: c.sectiontwo?.heading,
                    text: c.sectiontwo?.text,
                    img: c.sectiontwo?.img
                },
                sectionthree: {
                    heading: c.sectionthree?.heading,
                    text: c.sectionthree?.text,
                    img: c.sectionthree?.img
                }
            }));

            await Case.insertMany(casesToInsert);
            casesMessage = `Seeded ${casesToInsert.length} cases`;
        }

        return NextResponse.json({
            user: userMessage,
            cases: casesMessage
        }, { status: 200 });

    } catch (error) {
        console.error('Seed error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
