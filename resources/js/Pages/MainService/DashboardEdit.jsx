import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardForm from "./DashboardForm";

export default function DashboardEdit({ service }) {
    return (
        <AuthenticatedLayout header={"Layanan Utama"}>
            <DashboardForm service={service} />
        </AuthenticatedLayout>
    );
}
