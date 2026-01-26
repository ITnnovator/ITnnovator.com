import dbConnect from '@/app/admin/lib/mongodb';
import Service from '@/models/Service';
import Case from '@/models/Case';
import Testimonial from '@/models/Testimonial';
import Client from '@/models/Client';

export async function getServices() {
  await dbConnect();
  const services = await Service.find({ serviceType: 'primary' }).sort({ sortOrder: 1, createdAt: -1 }).lean();
  return services.map(doc => ({ ...doc, _id: doc._id.toString(), createdAt: undefined, updatedAt: undefined }));
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
  return cases.map(doc => ({ ...doc, _id: doc._id.toString(), createdAt: undefined, updatedAt: undefined }));
}

export async function getTestimonials() {
  await dbConnect();
  const testimonials = await Testimonial.find({ isFeatured: true }).sort({ createdAt: -1 }).lean();
  return testimonials.map(doc => ({ ...doc, _id: doc._id.toString(), createdAt: undefined }));
}

export async function getClients() {
  await dbConnect();
  const clients = await Client.find({ isActive: true }).sort({ order: 1 }).lean();
  return clients.map(doc => ({ ...doc, _id: doc._id.toString(), createdAt: undefined }));
}
