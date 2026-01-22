import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
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
    const filename = file.name.replace(ext, '').replace(/\s+/g, '-') + '-' + uniqueSuffix + ext;

    // Detect environment: Use Vercel Blob on production, filesystem on development
    const isProduction = process.env.VERCEL || process.env.BLOB_READ_WRITE_TOKEN;

    if (isProduction && process.env.BLOB_READ_WRITE_TOKEN) {
      // PRODUCTION: Use Vercel Blob Storage
      try {
        const blob = await put(filename, buffer, {
          access: 'public',
          token: process.env.BLOB_READ_WRITE_TOKEN,
        });

        console.log('✅ Uploaded to Vercel Blob:', blob.url);
        return NextResponse.json({ url: blob.url, success: true });
      } catch (blobError) {
        console.error('❌ Vercel Blob upload failed:', blobError);
        return NextResponse.json({
          error: 'Blob upload failed',
          details: blobError.message
        }, { status: 500 });
      }
    } else {
      // DEVELOPMENT: Use local filesystem
      const uploadDir = path.join(process.cwd(), 'public/uploads');

      try {
        await mkdir(uploadDir, { recursive: true });
      } catch (e) {
        // Ignore if directory already exists
      }

      const filepath = path.join(uploadDir, filename);
      await writeFile(filepath, buffer);

      const url = `/uploads/${filename}`;
      console.log('✅ Uploaded to local filesystem:', url);

      return NextResponse.json({ url, success: true });
    }

  } catch (error) {
    console.error('❌ Upload error:', error);
    return NextResponse.json({
      error: 'Upload failed',
      details: error.message
    }, { status: 500 });
  }
}
