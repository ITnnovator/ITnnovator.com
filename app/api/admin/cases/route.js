import { NextResponse } from 'next/server';
import dbConnect from '@/app/admin/lib/mongodb';
import Case from '@/models/Case';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(request) {
  try {
    await dbConnect();
    const cases = await Case.find({}).sort({ createdAt: -1 });
    return NextResponse.json(cases);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const body = await request.json();
    
    if (!body.title || !body.slug) {
        return NextResponse.json({ error: 'Title and Slug are required' }, { status: 400 });
    }

    const newCase = await Case.create(body);
    return NextResponse.json(newCase, { status: 201 });
  } catch (error) {
    if (error.code === 11000) {
        return NextResponse.json({ error: 'Slug must be unique' }, { status: 400 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
