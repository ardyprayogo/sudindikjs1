import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function SidebarDropdown({ icon, label, children }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div>
            <button
                className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-100"
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                <span className="flex items-center gap-3">
                    {icon} {label}
                </span>
                <ChevronDown
                    className={`transition-transform ${
                        dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    size={18}
                />
            </button>
            {dropdownOpen && (
                <div className="ml-8 mt-1 space-y-1">{children}</div>
            )}
        </div>
    );
}
