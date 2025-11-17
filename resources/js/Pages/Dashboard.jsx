import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard() {
    return (
        <AuthenticatedLayout header={"Dashboard"}>
            <div className="py-6">Selamat Datang!</div>
            {/* Table Wrapper */}
            {/* <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-3 font-semibold">Name</th>
                            <th className="p-3 font-semibold">Email</th>
                            <th className="p-3 font-semibold">Role</th>
                            <th className="p-3 font-semibold">Joined Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-100 border-b">
                            <td className="p-3">-</td>
                            <td className="p-3">-</td>
                            <td className="p-3">-</td>
                            <td className="p-3">-</td>
                        </tr>

                        {paginated.length === 0 && (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="text-center p-3 text-gray-500"
                                >
                                    No data found
                                </td>
                            </tr>
                        )} 
                    </tbody>
                </table>
            </div> */}
        </AuthenticatedLayout>
    );
}
