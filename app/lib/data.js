import dbConnect from '@/app/admin/lib/mongodb';
import Service from '@/models/Service';
import Case from '@/models/Case';
import Testimonial from '@/models/Testimonial';
import Client from '@/models/Client';

export async function getServices() {
  await dbConnect();
  const services = await Service.find({ serviceType: 'primary' }).sort({ sortOrder: 1, createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(services));
}

export async function getCases(limit = null) {
  await dbConnect();
  // Include 'published' AND documents where status is undefined/null (legacy support)
  let query = Case.find({
    $or: [{ status: 'published' }, { status: { $exists: false } }, { status: null }]
  }).sort({ order: 1, createdAt: -1 });

  if (limit) {
    query = query.limit(limit);
  }

  const cases = await query.lean();
  return JSON.parse(JSON.stringify(cases));
}

export async function getTestimonials() {
  await dbConnect();
  const testimonials = await Testimonial.find({ isFeatured: true }).sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(testimonials));
}

export async function getClients() {
  await dbConnect();
  const clients = await Client.find({ isActive: true }).sort({ order: 1 }).lean();
  return JSON.parse(JSON.stringify(clients));
}
