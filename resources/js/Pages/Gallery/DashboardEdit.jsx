import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardForm from "./DashboardForm";

export default function DashboardEdit({ gallery }) {
    return (
        <AuthenticatedLayout header={"Galeri"}>
            <DashboardForm gallery={gallery} />
        </AuthenticatedLayout>
    );
}
