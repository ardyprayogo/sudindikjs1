import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard() {
    return (
        <AuthenticatedLayout header={"Dashboard"}>
            <div className="py-6">Selamat Datang!</div>
        </AuthenticatedLayout>
    );
}
