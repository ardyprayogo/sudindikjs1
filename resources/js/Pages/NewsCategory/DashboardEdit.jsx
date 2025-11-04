import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardForm from "./DashboardForm";
import { Head } from "@inertiajs/react";
import SuccessAlert from "@/Components/SuccessAlert";

export default function DashboardEdit({ category }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <DashboardForm category={category} />
        </AuthenticatedLayout>
    );
}
