import ErrorAlert from "@/Components/ErrorAlert";
import SuccessAlert from "@/Components/SuccessAlert";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import logo from "@/Images/logodinas.png";
import {
    Menu,
    X,
    LayoutDashboard,
    Users,
    ChevronDown,
    LogOut,
    Newspaper,
    Image,
    Sparkles,
    User,
} from "lucide-react";
import SidebarItem from "@/Components/SidebarItem";
import SidebarDropdown from "@/Components/SidebarDropdown";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const success = usePage().props.flash.success;
    const exception = usePage().props.flash.exception;
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => setOpen(!open);

    const menuItems = [
        {
            label: "Dashboard",
            icon: <LayoutDashboard size={18} />,
            href: route("dashboard"),
        },
        {
            label: "Pengguna",
            icon: <Users size={18} />,
            href: route("dashboard.user.index"),
        },
        {
            label: "Layanan Utama",
            icon: <Sparkles size={18} />,
            href: route("dashboard.service.index"),
        },
        {
            label: "Galeri",
            icon: <Image size={18} />,
            href: route("dashboard.gallery.index"),
        },
        {
            label: "Berita",
            icon: <Newspaper size={18} />,
            href: "#",
            children: [
                {
                    label: "Kategori",
                    href: route("dashboard.newsCategory.index"),
                },
                {
                    label: "Konten",
                    href: route("dashboard.news.index"),
                },
            ],
        },
    ];

    return (
        <div className="flex bg-gray-100 min-h-screen">
            {/* Mobile Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-20 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <aside
                className={`min-h-screen fixed lg:static z-30 bg-white shadow-lg w-64 h-full p-4 transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
            >
                <img src={logo} className="w-16 h-16 mx-auto" />

                <nav className="space-y-2">
                    {menuItems.map((item, i) => {
                        return !item.children ? (
                            // Regular Sidebar
                            <SidebarItem
                                key={i}
                                icon={item.icon}
                                label={item.label}
                                href={item.href}
                            />
                        ) : (
                            // Dropdown Sidebar
                            <SidebarDropdown
                                key={i}
                                icon={<Newspaper size={18} />}
                                label={"Berita"}
                            >
                                {item.children.map((child, i) => {
                                    return (
                                        <SidebarItem
                                            key={i}
                                            label={child.label}
                                            href={child.href}
                                        />
                                    );
                                })}
                            </SidebarDropdown>
                        );
                    })}
                    {/* BOTTOM USER SECTION */}
                    <div className="space-y-2 border-t pt-4">
                        <SidebarItem
                            icon={<User size={18} />}
                            label={user.name}
                            href={route("profile.edit")}
                        />
                        <SidebarItem
                            icon={<LogOut size={18} />}
                            label="Logout"
                            method="post"
                            href={route("logout")}
                        />
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-4 lg:ml-4 max-h-screen overflow-auto">
                {/* Header */}
                <header className="flex items-center justify-between bg-white p-3 shadow rounded-lg mb-4">
                    <h1 className="text-xl font-semibold">{header}</h1>
                    <Head title={header} />
                    {/* Burger Menu (Mobile Only) */}
                    <button className="lg:hidden" onClick={toggleSidebar}>
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </header>

                {/* Cards */}
                <div className="bg-white shadow rounded-lg p-4">
                    {success && (
                        <SuccessAlert message={success} className={"mb-5"} />
                    )}
                    {exception && (
                        <ErrorAlert message={exception} className={"mb-5"} />
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
}
