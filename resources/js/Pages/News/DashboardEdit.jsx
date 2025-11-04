import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardForm from "./DashboardForm";

export default function DashboardEdit({ news, categories }) {
    return (
        <AuthenticatedLayout header={"Berita"}>
            <DashboardForm news={news} categories={categories} />
        </AuthenticatedLayout>
    );
}
