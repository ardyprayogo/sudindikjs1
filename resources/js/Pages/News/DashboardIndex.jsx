import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import WarningButton from "@/Components/WarningButton";
import DangerButton from "@/Components/DangerButton";
import TextInput from "@/Components/TextInput";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Edit, Trash2Icon } from "lucide-react";

export default function DashboardIndex({ news, query }) {
    const { delete: destroy } = useForm();
    const deleteNews = (id) => {
        destroy(route("dashboard.news.delete", id));
    };
    const { data, setData, get } = useForm({
        search: query.search || "",
    });
    return (
        <AuthenticatedLayout header={"Berita"}>
            <div className="overflow-x-auto flex flex-col gap-2">
                <div className="flex flex-row justify-end">
                    <Link
                        className="text-end"
                        href={route("dashboard.news.create")}
                    >
                        <PrimaryButton className="flex gap-2">
                            Tambah
                        </PrimaryButton>
                    </Link>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-1 w-full lg:w-96">
                        <TextInput
                            autoComplete="off"
                            id="search"
                            name="search"
                            className="w-full"
                            placeholder="Cari Berita"
                            value={data.search}
                            onChange={(e) => {
                                setData("search", e.target.value);
                            }}
                        />
                        <PrimaryButton
                            onClick={(e) => {
                                e.preventDefault();
                                get(route("dashboard.news.index", data));
                            }}
                        >
                            Cari
                        </PrimaryButton>
                    </div>
                </div>
                {/* Table Wrapper */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="p-3 font-semibold">Judul</th>
                                <th className="p-3 font-semibold">
                                    Link Gambar
                                </th>
                                <th className="p-3 font-semibold">Penulis</th>
                                <th className="p-3 font-semibold">
                                    Berita Pilihan
                                </th>
                                <th className="p-3 font-semibold">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {news.data.map((newsItem, i) => {
                                return (
                                    <tr
                                        key={i}
                                        className="hover:bg-gray-100 border-b"
                                    >
                                        <td className="p-3">
                                            {newsItem.judul}
                                        </td>
                                        <td className="p-3">
                                            {newsItem.gambar}
                                        </td>
                                        <td className="p-3">
                                            {newsItem.penulis}
                                        </td>
                                        <td className="p-3">
                                            {newsItem.headline ? (
                                                <div className="p-1 w-fit bg-green-500 text-xs font-bold rounded-md mx-auto text-white">
                                                    YA
                                                </div>
                                            ) : (
                                                <div className="p-1 w-fit bg-red-500 text-xs font-bold rounded-md mx-auto text-white">
                                                    TIDAK
                                                </div>
                                            )}
                                        </td>
                                        <td className="p-3">
                                            <div className="flex gap-2">
                                                {/* <Link
                                                href={route(
                                                    "dashboard.news.headline",
                                                    newsItem.id
                                                )}
                                            > */}
                                                {/* <WarningButton className="btn-xs">
                                                Berita Pilihan
                                            </WarningButton> */}
                                                {/* </Link> */}
                                                <Link
                                                    href={route(
                                                        "dashboard.news.update",
                                                        newsItem.id
                                                    )}
                                                >
                                                    <WarningButton className="btn-xs flex gap-2">
                                                        <Edit size={18} />
                                                        <span>Edit</span>
                                                    </WarningButton>
                                                </Link>
                                                <DangerButton
                                                    className="btn-xs flex gap-2"
                                                    onClick={(e) => {
                                                        {
                                                            e.preventDefault();
                                                            deleteNews(
                                                                newsItem.id
                                                            );
                                                        }
                                                    }}
                                                >
                                                    <Trash2Icon size={18} />
                                                    <span>Hapus</span>
                                                </DangerButton>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <Pagination links={news.links} />
            </div>
        </AuthenticatedLayout>
    );
}
