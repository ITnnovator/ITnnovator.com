import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';

export async function POST(req) {
    try {
        const data = await req.formData();
        const file = data.get('file');

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        // Generate unique filename
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const filename = uniqueSuffix + '-' + file.name.replace(/\s+/g, '-');

        // Upload to Vercel Blob
        const blob = await put(filename, file, {
            access: 'public',
            token: process.env.itnnovator_READ_WRITE_TOKEN // Using the specific env var from your .env
        });

        console.log(`Uploaded file to ${blob.url}`);

        return NextResponse.json({
            success: true,
            url: blob.url
        });

    } catch (error) {
        console.error('Upload Error:', error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}
