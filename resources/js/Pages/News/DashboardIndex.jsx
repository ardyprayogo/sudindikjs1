import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import WarningButton from "@/Components/WarningButton";
import DangerButton from "@/Components/DangerButton";
import TextInput from "@/Components/TextInput";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

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
                <table className="border border-gray-200 divide-y divide-gray-200">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Judul</th>
                            <th>Link Gambar</th>
                            <th>Penulis</th>
                            <th>Berita Pilihan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {news.data.map((newsItem, i) => {
                            return (
                                <tr key={i}>
                                    <td>{newsItem.judul}</td>
                                    <td>{newsItem.gambar}</td>
                                    <td>{newsItem.penulis}</td>
                                    <td>
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
                                    <td>
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
                                                <WarningButton className="btn-xs">
                                                    Edit
                                                </WarningButton>
                                            </Link>
                                            <DangerButton
                                                className="btn-xs"
                                                onClick={(e) => {
                                                    {
                                                        e.preventDefault();
                                                        deleteNews(newsItem.id);
                                                    }
                                                }}
                                            >
                                                Hapus
                                            </DangerButton>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <Pagination links={news.links} />
            </div>
        </AuthenticatedLayout>
    );
}
