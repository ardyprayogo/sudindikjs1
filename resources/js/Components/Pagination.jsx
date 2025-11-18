import { Link } from "@inertiajs/react";

export default function Pagination({ links, className }) {
    return (
        <div className={"flex items-center justify-center " + className}>
            <div className="flex max-w-96 flex-wrap items-center justify-center space-x-1">
                {links.map((link, i) => {
                    return (
                        <Link
                            key={i}
                            preserveScroll
                            href={link.url ?? "#"}
                            className={`btn-sm w-10 h-10 flex items-center justify-center rounded-full
                                ${
                                    link.active &&
                                    "  bg-gray-800 text-white shadow hover:bg-gray-700 transition"
                                }
                                ${link.url === null && "bg-white"}
                            `}
                        >
                            {link.label.includes("Previous") && "<"}
                            {link.label.includes("Next") && ">"}
                            {!link.label.includes("Next") &&
                                !link.label.includes("Previous") &&
                                link.label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
