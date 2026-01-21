import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get('file');

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.name);
    const filename = file.name.replace(ext, '') + '-' + uniqueSuffix + ext;
    
    // Ensure uploads directory exists
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    try {
        await mkdir(uploadDir, { recursive: true });
    } catch (e) {
        // Ignore if exists
    }

    const filepath = path.join(uploadDir, filename);
    await writeFile(filepath, buffer);
    
    // Return relative path for frontend use
    const url = `/uploads/${filename}`;

    return NextResponse.json({ url, success: true });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
