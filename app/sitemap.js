import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';
import Service from '@/models/Service';
import Case from '@/models/Case';

export const revalidate = 3600; // Revalidate at most every hour

export default async function sitemap() {
    await dbConnect();
    const baseUrl = 'https://itnnovator.com';

    // 1. Static Pages
    const staticRoutes = [
        { url: `${baseUrl}`,            changeFrequency: 'weekly',  priority: 1.0 },
        { url: `${baseUrl}/about`,      changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/services`,   changeFrequency: 'weekly',  priority: 0.9 },
        { url: `${baseUrl}/cases`,      changeFrequency: 'weekly',  priority: 0.8 },
        { url: `${baseUrl}/blog`,       changeFrequency: 'weekly',  priority: 0.7 },
        { url: `${baseUrl}/contact`,    changeFrequency: 'yearly',  priority: 0.6 },
        { url: `${baseUrl}/estimate`,   changeFrequency: 'monthly', priority: 0.5 },
        // /team temporarily removed — page is down
    ].map(route => ({
        ...route,
        lastModified: new Date(),
    }));

    // 2. Fetch Dynamic Data with SEO Filters

    // Blogs: Only indexable posts
    const blogs = await Blog.find({
        noindex: { $ne: true }
    }, 'slug updatedAt').lean();

    // Services: Only indexable services (exclude hidden/noindex)
    // Note: Service model has 'serviceType' ('hidden') and 'noindex'.
    // We filter out explicit noindex. ServiceType 'hidden' might still be indexable unless noindexed.
    const services = await Service.find({
        noindex: { $ne: true }
    }, 'slug updatedAt').lean();

    // Cases: Only published cases
    // Case model has 'status' enum ['published', 'draft']
    const cases = await Case.find({
        status: 'published'
    }, 'slug updatedAt').lean();

    // 3. Map Dynamic Routes

    const blogRoutes = blogs.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt || new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
    }));

    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: service.updatedAt || new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const caseRoutes = cases.map((item) => ({
        url: `${baseUrl}/cases/${item.slug}`,
        lastModified: item.updatedAt || new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...caseRoutes];
}
