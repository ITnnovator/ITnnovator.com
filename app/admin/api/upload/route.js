import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file');

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
                { status: 400 }
            );
        }

        // 1. Check for Vercel Blob Token
        // Fallback to 'itnnovator_READ_WRITE_TOKEN' if 'BLOB_READ_WRITE_TOKEN' is missing
        const blobToken = process.env.BLOB_READ_WRITE_TOKEN || process.env.itnnovator_READ_WRITE_TOKEN;

        if (blobToken) {
            const blob = await put(file.name, file, {
                access: 'public',
                token: blobToken, // Explicitly pass the token if using the fallback
            });

            return NextResponse.json({ url: blob.url });
        }

        // 2. Fallback: Local Filesystem
        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '')}`;

        // Ensure uploads directory exists
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        await mkdir(uploadDir, { recursive: true });

        const filepath = path.join(uploadDir, filename);
        await writeFile(filepath, buffer);

        // Return the relative public path
        const url = `/uploads/${filename}`;

        return NextResponse.json({
            url,
            isLocal: true
        });

    } catch (error) {
        console.error('Upload Error:', error);
        return NextResponse.json(
            { error: 'Upload failed' },
            { status: 500 }
        );
    }
}
