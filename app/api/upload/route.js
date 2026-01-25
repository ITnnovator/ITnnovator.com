import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

export async function POST(req) {
    try {
        const contentType = req.headers.get('content-type') || '';

        // MODE A: Client-Side Upload Handshake (Disabled)
        if (contentType.includes('application/json')) {
            return NextResponse.json({ error: 'Client-side upload disabled' }, { status: 400 });
        }

        // MODE B: Server-Side / Local Upload (FormData)
        else {
            const data = await req.formData();
            const file = data.get('file');

            if (!file) {
                return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
            }

            // Generate unique filename
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const filename = uniqueSuffix + '-' + file.name.replace(/\s+/g, '-');

            if (process.env.VERCEL) {
                // IMPORTANT: We kept this path for backward compatibility or direct API usage,
                // but for large files on Vercel, the Client-Side Upload (Mode A) is preferred.

                const { put } = await import('@vercel/blob');
                const blob = await put(filename, file, {
                    access: 'public',
                    token: process.env.itnnovator_READ_WRITE_TOKEN
                });

                console.log(`Uploaded to Blob (Server-Side): ${blob.url}`);

                return NextResponse.json({
                    success: true,
                    url: blob.url
                });
            } else {
                // Local Environment: Use Filesystem
                const bytes = await file.arrayBuffer();
                const buffer = Buffer.from(bytes);

                // Ensure uploads directory exists
                const uploadDir = join(process.cwd(), 'public/uploads');
                if (!existsSync(uploadDir)) {
                    mkdirSync(uploadDir, { recursive: true });
                }

                const path = join(uploadDir, filename);
                await writeFile(path, buffer);
                console.log(`Uploaded locally to ${path}`);

                return NextResponse.json({
                    success: true,
                    url: `/uploads/${filename}`
                });
            }
        }

    } catch (error) {
        console.error('General Upload Error:', error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}
