import { Link } from "@inertiajs/react";

export default function SidebarItem({ href, icon, label, ...props }) {
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
