import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardForm from "./DashboardForm";

export default function DashboardEdit({ category }) {
    return (
        <AuthenticatedLayout header={"Kategori Berita"}>
            <DashboardForm category={category} />
        </AuthenticatedLayout>
    );
}
