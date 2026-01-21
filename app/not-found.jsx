import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
            <p className="mb-8">Could not find requested resource</p>
            <Link href="/" className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors">
                Return Home
            </Link>
        </div>
    );
}
