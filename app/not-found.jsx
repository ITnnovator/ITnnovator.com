import Link from 'next/link';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getServices } from '@/app/lib/data';

export default async function NotFound() {
    let services = [];
    try {
        services = await getServices();
    } catch (e) {
        console.error("Failed to fetch services for 404 page", e);
    }

    return (
        <html lang="en">
            <body id="js-page-body" className="bg-black text-white font-sans antialiased selection:bg-blue-500/30 pt-[8.3rem]">
                <div id="page-wrapper" className="w-full flex flex-col min-h-screen overflow-hidden !filter-none">
                    <Header services={services} />

                    <main className="grow flex flex-col items-center justify-center p-10 lg:p-14">
                        <h2 className="text-5xl font-bold mb-6 text-white tracking-tight">404 - Page Not Found</h2>
                        <p className="mb-10 text-xl text-gray-400">The requested resource could not be found.</p>
                        <Link href="/" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/40">
                            Return Home
                        </Link>
                    </main>

                    <Footer />
                </div>

                <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" />
                <Script src="/lib/main.js" />
            </body>
        </html>
    );
}
