import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardForm from "./DashboardForm";

export default function DashboardEdit({ user }) {
    return (
        <AuthenticatedLayout header={"Pengguna"}>
            <DashboardForm user={user} />
        </AuthenticatedLayout>
    );
}
