import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import ErrorAlert from "@/Components/ErrorAlert";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import SuccessAlert from "@/Components/SuccessAlert";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";
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
} from "lucide-react";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const success = usePage().props.flash.success;
    const exception = usePage().props.flash.exception;
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleSidebar = () => setOpen(!open);

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
                <h2 className="text-xl font-semibold mb-6">My App</h2>

                <nav className="space-y-2">
                    <SidebarItem
                        icon={<LayoutDashboard size={18} />}
                        label="Dashboard"
                        href={route("dashboard")}
                    />
                    <SidebarItem
                        icon={<Users size={18} />}
                        label="Pengguna"
                        href={route("dashboard.user.index")}
                    />
                    <SidebarItem
                        icon={<Sparkles size={18} />}
                        label="Layanan Utama"
                        href={route("dashboard.service.index")}
                    />
                    <SidebarItem
                        icon={<Image size={18} />}
                        label="Galeri"
                        href={route("dashboard.gallery.index")}
                    />
                    {/* Dropdown Menu */}
                    <div>
                        <button
                            className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-100"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            <span className="flex items-center gap-3">
                                <Newspaper size={18} /> Berita
                            </span>
                            <ChevronDown
                                className={`transition-transform ${
                                    dropdownOpen ? "rotate-180" : "rotate-0"
                                }`}
                                size={18}
                            />
                        </button>
                        {dropdownOpen && (
                            <div className="ml-8 mt-1 space-y-1">
                                <SidebarItem
                                    label="Kategori"
                                    href={route("dashboard.newsCategory.index")}
                                />
                                <SidebarItem
                                    label="Konten"
                                    href={route("dashboard.news.index")}
                                />
                            </div>
                        )}
                    </div>
                    {/* BOTTOM USER SECTION */}
                    <div className="space-y-2 border-t pt-4">
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
            <div className="flex-1 p-4 lg:ml-4">
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

function SidebarItem({ icon, label, href, ...props }) {
    return (
        <Link
            className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gray-100"
            href={href}
            {...props}
        >
            {icon}
            <span>{label}</span>
        </Link>
    );
}
