import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";


export const Transcribe = ({ auth }: PageProps) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <div className="py-12">
            <Head title="Transcribe" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                Transcribe
            </div>
        </div>
        </AuthenticatedLayout>
        
    )
}

export default Transcribe