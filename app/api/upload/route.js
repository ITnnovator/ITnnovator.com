import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

export async function POST(req) {
    try {
        const data = await req.formData();
        const file = data.get('file');

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Ensure uploads directory exists
        const uploadDir = join(process.cwd(), 'public/uploads');
        if (!existsSync(uploadDir)) {
            mkdirSync(uploadDir, { recursive: true });
        }

        // Generate unique filename to prevent browser caching issues on update
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const filename = uniqueSuffix + '-' + file.name.replace(/\s+/g, '-');
        const path = join(uploadDir, filename);

        await writeFile(path, buffer);
        console.log(`Uploaded file to ${path}`);

        return NextResponse.json({
            success: true,
            url: `/uploads/${filename}`
        });

    } catch (error) {
        console.error('Upload Error:', error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}
