import dbConnect from '../../../lib/mongodb';
import Service from '../../../lib/models/Service';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    await dbConnect();
    const { id } = params;

    try {
        const service = await Service.findById(id);
        if (!service) {
            return NextResponse.json({ success: false, error: 'Service not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: service });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function PUT(request, { params }) {
    await dbConnect();
    const { id } = params;

    try {
        const body = await request.json();
        const service = await Service.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        if (!service) {
            return NextResponse.json({ success: false, error: 'Service not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: service });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function DELETE(request, { params }) {
    await dbConnect();
    const { id } = params;

    try {
        const deletedService = await Service.deleteOne({ _id: id });
        if (!deletedService) {
            return NextResponse.json({ success: false, error: 'Service not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
