import { NextResponse } from 'next/server';
import dbConnect from '@/app/admin/lib/mongodb';
import Case from '@/models/Case';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const { id } = await params;
    const caseItem = await Case.findById(id);
    
    if (!caseItem) {
      return NextResponse.json({ error: 'Case not found' }, { status: 404 });
    }
    
    return NextResponse.json(caseItem);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const { id } = await params;
    const body = await request.json();

    const updatedCase = await Case.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedCase) {
      return NextResponse.json({ error: 'Case not found' }, { status: 404 });
    }

    return NextResponse.json(updatedCase);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const { id } = await params;
    const deletedCase = await Case.findByIdAndDelete(id);

    if (!deletedCase) {
      return NextResponse.json({ error: 'Case not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
