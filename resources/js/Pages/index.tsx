import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Index({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <Head title="Index" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-300 selection:bg-red-500 selection:text-white">
                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    welcome my chanel
                </div>
            </div>
        </>
    );
}
